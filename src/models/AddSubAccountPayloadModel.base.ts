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
 * AddSubAccountPayloadBase
 * auto generated base class for the model AddSubAccountPayloadModel.
 *
 * Autogenerated return type of AddSubAccount
 */
export const AddSubAccountPayloadModelBase = ModelBase
  .named('AddSubAccountPayload')
  .props({
    __typename: types.optional(types.literal("AddSubAccountPayload"), "AddSubAccountPayload"),
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: types.union(types.undefined, types.null, types.string),
    errors: types.union(types.undefined, types.null, types.array(types.string)),
    message: types.union(types.undefined, types.null, types.string),
    user: types.union(types.undefined, types.null, types.late((): any => UserModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AddSubAccountPayloadModelSelector extends QueryBuilder {
  get clientMutationId() { return this.__attr(`clientMutationId`) }
  get errors() { return this.__attr(`errors`) }
  get message() { return this.__attr(`message`) }
  user(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`user`, UserModelSelector, builder) }
}
export function selectFromAddSubAccountPayload() {
  return new AddSubAccountPayloadModelSelector()
}

export const addSubAccountPayloadModelPrimitives = selectFromAddSubAccountPayload().clientMutationId.errors.message
