/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BenefitModel, BenefitModelType } from "./BenefitModel"
import { BenefitModelSelector } from "./BenefitModel.base"
import { CollectionMetadataModel, CollectionMetadataModelType } from "./CollectionMetadataModel"
import { CollectionMetadataModelSelector } from "./CollectionMetadataModel.base"
import { RootStoreType } from "./index"


/**
 * BenefitCollectionBase
 * auto generated base class for the model BenefitCollectionModel.
 */
export const BenefitCollectionModelBase = ModelBase
  .named('BenefitCollection')
  .props({
    __typename: types.optional(types.literal("BenefitCollection"), "BenefitCollection"),
    collection: types.union(types.undefined, types.array(types.late((): any => BenefitModel))),
    metadata: types.union(types.undefined, types.late((): any => CollectionMetadataModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class BenefitCollectionModelSelector extends QueryBuilder {
  collection(builder?: string | BenefitModelSelector | ((selector: BenefitModelSelector) => BenefitModelSelector)) { return this.__child(`collection`, BenefitModelSelector, builder) }
  metadata(builder?: string | CollectionMetadataModelSelector | ((selector: CollectionMetadataModelSelector) => CollectionMetadataModelSelector)) { return this.__child(`metadata`, CollectionMetadataModelSelector, builder) }
}
export function selectFromBenefitCollection() {
  return new BenefitCollectionModelSelector()
}

export const benefitCollectionModelPrimitives = selectFromBenefitCollection()
