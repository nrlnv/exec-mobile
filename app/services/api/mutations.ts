import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      credentials {
        tokenType
        accessToken
        client
        uid
      }
      errors
      subdomain
      preApplicationStep
      onboardingData {
        stepName
      }
    }
  }
`

export const LOGOUT_MUTATION = gql`
  mutation LogoutMutation {
    logout {
      errors
    }
  }
`

export const ADD_FAVORITE_MUTATION = gql`
  mutation AddFavoriteMutation($benefitSlug: String!, $clientMutationId: String) {
    addFavorite(input: { benefitSlug: $benefitSlug, clientMutationId: $clientMutationId }) {
      clientMutationId
      message
    }
  }
`
export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation(
    $firstName: String
    $lastName: String
    $email: String
    $companyName: String
    $companyWebsite: String
    $about: String
    $position: String
    $country: String
    $state: String
    $city: String
    $address: String
    $zipCode: String
    $apartment: String
  ) {
    updateUser(
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        companyName: $companyName
        companyWebsite: $companyWebsite
        about: $about
        position: $position
        country: $country
        state: $state
        city: $city
        address: $address
        zipCode: $zipCode
        apartment: $apartment
      }
    ) {
      user {
        id
        createdAt
        firstName
        lastName
        email
        uid
        membershipId
        companyName
        companyWebsite
        about
        position
        address {
          country
          state
          city
          address
          zipCode
          apartment
        }
        organization {
          name
        }
      }
      message
    }
  }
`
export const UPDATE_USER_PHOTO = gql`
  mutation UpdateUserMutation($isPhotoUploaded: Boolean) {
    updateUser(input: { isPhotoUploaded: $isPhotoUploaded }) {
      user {
        id
        photo {
          original
          thumbnail
        }
      }
      message
    }
  }
`

export const UPDATE_PAYMENT_METHOD_MUTATION = gql`
  mutation UpdatePaymentMethodMutation(
    $cardNumber: String
    $expiryDate: String!
    $cvc: String!
    $name: String!
    $keepCardNumber: Boolean
  ) {
    updatePaymentMethod(
      input: {
        cardNumber: $cardNumber
        expiryDate: $expiryDate
        cvc: $cvc
        name: $name
        keepCardNumber: $keepCardNumber
      }
    ) {
      message
    }
  }
`

export const ADD_SUBACCOUNT_MUTATION = gql`
  mutation AddSubaccountMutation($email: String!, $firstName: String!, $lastName: String!) {
    addSubAccount(input: { email: $email, firstName: $firstName, lastName: $lastName }) {
      errors
    }
  }
`

export const REMOVE_SUBACCOUNT_MUTATION = gql`
  mutation RemoveSubaccountMutation($email: String!) {
    removeSubAccount(input: { email: $email }) {
      clientMutationId
    }
  }
`

export const REDEEM_MUTATION = gql`
  mutation Redeem($benefitSlug: String!) {
    redeemBenefit(input: { benefitSlug: $benefitSlug }) {
      redemption {
        benefit {
          name
        }
        redemptionCode
        redemptionLink
        redemptionInstruction
        redemptionType
      }
      message
    }
  }
`
export const REDEEM_WITH_REGISTRATION_MUTATION = gql`
  mutation redeemWithRegistration(
    $benefitSlug: String!
    $userName: String!
    $userEmail: String!
    $userPhone: String
    $additionalInfo: String
  ) {
    redeemWithRegistrationFormBenefit(
      input: {
        benefitSlug: $benefitSlug
        userName: $userName
        userEmail: $userEmail
        userPhone: $userPhone
        additionalInfo: $additionalInfo
      }
    ) {
      message
    }
  }
`

export const CREATE_USER_ACCOUNT = gql`
  mutation createAccount(
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
    $phone: String!
  ) {
    createAccount(
      input: { email: $email, firstName: $firstName, lastName: $lastName, password: $password, phone: $phone }
    ) {
      message
    }
  }
`

export const UPDATE_USER_COMPANY_DATA = gql`
  mutation updateUserCompanyData(
    $annualRevenue: String!
    $companyName: String!
    $companyWebsite: String!
    $fundingAcquiredSinceInception: String!
    $position: String!
    $linkedinProfileUrl: String!
    $numberOfEmployees: String!
    $additionalInfo: String!
  ) {
    updateUserCompanyData(
      input: {
        annualRevenue: $annualRevenue
        companyName: $companyName
        companyWebsite: $companyWebsite
        fundingAcquiredSinceInception: $fundingAcquiredSinceInception
        position: $position
        linkedinProfileUrl: $linkedinProfileUrl
        numberOfEmployees: $numberOfEmployees
        additionalInformation: $additionalInfo
      }
    ) {
      message
    }
  }
`

export const UPDATE_BASIC_USER_ADDRESS = gql`
  mutation updateUserAddress(
    $address: String!
    $apartment: String!
    $country: String!
    $state: String!
    $city: String!
    $zipCode: String!
  ) {
    updateUserAddress(
      input: {
        address: $address
        apartment: $apartment
        country: $country
        city: $city
        state: $state
        zipCode: $zipCode
      }
    ) {
      message
    }
  }
`

export const SELECT_MEMBERSHIP_PLAN = gql`
  mutation selectMembershipPlan($id: Int!) {
    selectMembershipPlan(input: { id: $id }) {
      message
    }
  }
`

export const SET_IS_ENTERPRISE = gql`
  mutation isEnterprise($numberOfSeats: Int!) {
    isEnterprise(input: { numberOfSeats: $numberOfSeats }) {
      message
    }
  }
`

export const UPDATE_CREDIT_CARD = gql`
  mutation updateCreditCard(
    $cardNumber: String!
    $cvc: String!
    $expiryDate: String!
    $name: String!
    $promotionalCode: String!
  ) {
    updateCreditCard(
      input: {
        cardNumber: $cardNumber
        cvc: $cvc
        expiryDate: $expiryDate
        name: $name
        promotionalCode: $promotionalCode
      }
    ) {
      message
    }
  }
`

export const UPDATE_ONBOARDING_STEP = gql`
  mutation updateOnboardingStep($categories: [String!], $step: String!) {
    updateOnboardingStep(input: { categories: $categories, step: $step }) {
      message
      nextStep
      nextStepNumber
    }
  }
`
export const REQUEST_SUPPORT = gql`
  mutation RequestSupport($requestSupportInput2: RequestSupportInput!) {
    requestSupport(input: $requestSupportInput2) {
      message
    }
  }
`

export const INVITE_MUTATION = gql`
  mutation Mutation($input: InviteInput!) {
    invite(input: $input) {
      message
    }
  }
`