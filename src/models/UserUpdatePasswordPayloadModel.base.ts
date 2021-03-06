/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AuthenticatableModel, AuthenticatableModelType } from "./AuthenticatableModel"
import { AuthenticatableModelSelector } from "./AuthenticatableModel.base"
import { RootStoreType } from "./index"


/**
 * UserUpdatePasswordPayloadBase
 * auto generated base class for the model UserUpdatePasswordPayloadModel.
 *
 * Autogenerated return type of UserUpdatePassword
 */
export const UserUpdatePasswordPayloadModelBase = ModelBase
  .named('UserUpdatePasswordPayload')
  .props({
    __typename: types.optional(types.literal("UserUpdatePasswordPayload"), "UserUpdatePasswordPayload"),
    authenticatable: types.union(types.undefined, types.late((): any => AuthenticatableModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UserUpdatePasswordPayloadModelSelector extends QueryBuilder {
  authenticatable(builder?: string | AuthenticatableModelSelector | ((selector: AuthenticatableModelSelector) => AuthenticatableModelSelector)) { return this.__child(`authenticatable`, AuthenticatableModelSelector, builder) }
}
export function selectFromUserUpdatePasswordPayload() {
  return new UserUpdatePasswordPayloadModelSelector()
}

export const userUpdatePasswordPayloadModelPrimitives = selectFromUserUpdatePasswordPayload()
