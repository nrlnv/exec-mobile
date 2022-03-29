/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CollectionMetadataModel, CollectionMetadataModelType } from "./CollectionMetadataModel"
import { CollectionMetadataModelSelector } from "./CollectionMetadataModel.base"
import { RedemptionModel, RedemptionModelType } from "./RedemptionModel"
import { RedemptionModelSelector } from "./RedemptionModel.base"
import { RootStoreType } from "./index"


/**
 * RedemptionCollectionBase
 * auto generated base class for the model RedemptionCollectionModel.
 */
export const RedemptionCollectionModelBase = ModelBase
  .named('RedemptionCollection')
  .props({
    __typename: types.optional(types.literal("RedemptionCollection"), "RedemptionCollection"),
    collection: types.union(types.undefined, types.array(types.late((): any => RedemptionModel))),
    metadata: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class RedemptionCollectionModelSelector extends QueryBuilder {
  collection(builder?: string | RedemptionModelSelector | ((selector: RedemptionModelSelector) => RedemptionModelSelector)) { return this.__child(`collection`, RedemptionModelSelector, builder) }
  metadata(builder?: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector)) { return this.__child(`metadata`, CollectionMetadataModelSelector, builder) }
}
export function selectFromRedemptionCollection() {
  return new RedemptionCollectionModelSelector()
}

export const redemptionCollectionModelPrimitives = selectFromRedemptionCollection()
