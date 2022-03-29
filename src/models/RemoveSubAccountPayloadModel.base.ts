/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * RemoveSubAccountPayloadBase
 * auto generated base class for the model RemoveSubAccountPayloadModel.
 *
 * Autogenerated return type of RemoveSubAccount
 */
export const RemoveSubAccountPayloadModelBase = ModelBase
  .named('RemoveSubAccountPayload')
  .props({
    __typename: types.optional(types.literal("RemoveSubAccountPayload"), "RemoveSubAccountPayload"),
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: types.union(types.undefined, types.null, types.string),
    message: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class RemoveSubAccountPayloadModelSelector extends QueryBuilder {
  get clientMutationId() { return this.__attr(`clientMutationId`) }
  get message() { return this.__attr(`message`) }
}
export function selectFromRemoveSubAccountPayload() {
  return new RemoveSubAccountPayloadModelSelector()
}

export const removeSubAccountPayloadModelPrimitives = selectFromRemoveSubAccountPayload().clientMutationId.message
