/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/**
 * SignUpPayloadBase
 * auto generated base class for the model SignUpPayloadModel.
 *
 * Autogenerated return type of SignUp
 */
export const SignUpPayloadModelBase = ModelBase
  .named('SignUpPayload')
  .props({
    __typename: types.optional(types.literal("SignUpPayload"), "SignUpPayload"),
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: types.union(types.undefined, types.null, types.string),
    message: types.union(types.undefined, types.null, types.string),
    user: types.union(types.undefined, types.null, types.late((): any => UserModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SignUpPayloadModelSelector extends QueryBuilder {
  get clientMutationId() { return this.__attr(`clientMutationId`) }
  get message() { return this.__attr(`message`) }
  user(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`user`, UserModelSelector, builder) }
}
export function selectFromSignUpPayload() {
  return new SignUpPayloadModelSelector()
}

export const signUpPayloadModelPrimitives = selectFromSignUpPayload().clientMutationId.message
