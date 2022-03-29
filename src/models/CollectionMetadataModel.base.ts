/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CollectionMetadataBase
 * auto generated base class for the model CollectionMetadataModel.
 */
export const CollectionMetadataModelBase = ModelBase
  .named('CollectionMetadata')
  .props({
    __typename: types.optional(types.literal("CollectionMetadata"), "CollectionMetadata"),
    currentPage: types.union(types.undefined, types.integer),
    limitValue: types.union(types.undefined, types.integer),
    totalCount: types.union(types.undefined, types.integer),
    totalPages: types.union(types.undefined, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CollectionMetadataModelSelector extends QueryBuilder {
  get currentPage() { return this.__attr(`currentPage`) }
  get limitValue() { return this.__attr(`limitValue`) }
  get totalCount() { return this.__attr(`totalCount`) }
  get totalPages() { return this.__attr(`totalPages`) }
}
export function selectFromCollectionMetadata() {
  return new CollectionMetadataModelSelector()
}

export const collectionMetadataModelPrimitives = selectFromCollectionMetadata().currentPage.limitValue.totalCount.totalPages
