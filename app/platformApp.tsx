import "./i18n"
import "./utils/ignore-warnings"
import React, { useEffect } from "react"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import * as storage from "./utils/storage"
import { AppNavigator, useNavigationPersistence } from "./navigators"
import { ToggleStorybook } from "../storybook/toggle-storybook"
import { ErrorBoundary } from "./screens/error/error-boundary"
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, RootState } from "./services/redux/store"
import { onError } from '@apollo/client/link/error'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { BASE_URL } from "./services/api"
import { useAppDispatch, useAppSelector } from "./hooks/hooks"
import { setToken } from "./services/redux/slices/authSlice"
import { Alert } from "react-native"
import NetInfo from "@react-native-community/netinfo";

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

function PlatformApp() {
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY)
  const dispatch = useAppDispatch()
  const credentials = useAppSelector((state: RootState) => state.auth.credentials)

  useEffect(() => {
// Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        Alert.alert('Please check your internet connection')
      }
    });

    // Unsubscribe
    return () => unsubscribe();
  }, [])

  const logOutLink = onError(({  networkError }): void => {
    if (
      networkError &&
      networkError.name === 'ServerError' &&
      'statusCode' in networkError &&
      networkError.statusCode === 401
    ) {
      dispatch(setToken({}))
    }
  })

  const link = createHttpLink({
    uri: BASE_URL + '/graphql',
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        ...(credentials
          ? {
              'access-token': credentials?.accessToken,
              client: credentials?.client,
              uid: credentials?.uid,
              'token-type': credentials?.tokenType,
            }
          : {}),
      },
    }
  })

  const client = new ApolloClient({ link: ApolloLink.from([logOutLink, authLink, link]), cache: new InMemoryCache() })

  if (!isNavigationStateRestored) return null

  return (
    <ToggleStorybook>
      <PersistGate persistor={persistor}>
        <ApolloProvider client={client}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <ErrorBoundary catchErrors={"always"}>
              <AppNavigator
                initialState={initialNavigationState}
                onStateChange={onNavigationStateChange}
              />
            </ErrorBoundary>
          </SafeAreaProvider>
        </ApolloProvider>
      </PersistGate>
    </ToggleStorybook>
  )
}

export default PlatformApp
