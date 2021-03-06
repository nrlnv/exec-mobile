/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AuthenticatableModel, AuthenticatableModelType } from "./AuthenticatableModel"
import { AuthenticatableModelSelector } from "./AuthenticatableModel.base"
import { CredentialModel, CredentialModelType } from "./CredentialModel"
import { CredentialModelSelector } from "./CredentialModel.base"
import { RootStoreType } from "./index"


/**
 * UserUpdatePasswordWithTokenPayloadBase
 * auto generated base class for the model UserUpdatePasswordWithTokenPayloadModel.
 *
 * Autogenerated return type of UserUpdatePasswordWithToken
 */
export const UserUpdatePasswordWithTokenPayloadModelBase = ModelBase
  .named('UserUpdatePasswordWithTokenPayload')
  .props({
    __typename: types.optional(types.literal("UserUpdatePasswordWithTokenPayload"), "UserUpdatePasswordWithTokenPayload"),
    authenticatable: types.union(types.undefined, types.late((): any => AuthenticatableModel)),
    /** Authentication credentials. Resource must be signed_in for credentials to be returned. */
    credentials: types.union(types.undefined, types.null, types.late((): any => CredentialModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UserUpdatePasswordWithTokenPayloadModelSelector extends QueryBuilder {
  authenticatable(builder?: string | AuthenticatableModelSelector | ((selector: AuthenticatableModelSelector) => AuthenticatableModelSelector)) { return this.__child(`authenticatable`, AuthenticatableModelSelector, builder) }
  credentials(builder?: string | CredentialModelSelector | ((selector: CredentialModelSelector) => CredentialModelSelector)) { return this.__child(`credentials`, CredentialModelSelector, builder) }
}
export function selectFromUserUpdatePasswordWithTokenPayload() {
  return new UserUpdatePasswordWithTokenPayloadModelSelector()
}

export const userUpdatePasswordWithTokenPayloadModelPrimitives = selectFromUserUpdatePasswordWithTokenPayload()
