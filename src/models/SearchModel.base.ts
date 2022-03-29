/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BenefitCollectionModel, BenefitCollectionModelType } from "./BenefitCollectionModel"
import { BenefitCollectionModelSelector } from "./BenefitCollectionModel.base"
import { CategoryMetadataModel, CategoryMetadataModelType } from "./CategoryMetadataModel"
import { CategoryMetadataModelSelector } from "./CategoryMetadataModel.base"
import { RootStoreType } from "./index"


/**
 * SearchBase
 * auto generated base class for the model SearchModel.
 */
export const SearchModelBase = ModelBase
  .named('Search')
  .props({
    __typename: types.optional(types.literal("Search"), "Search"),
    benefits: types.union(types.undefined, types.late((): any => BenefitCollectionModel)),
    categoryMetadata: types.union(types.undefined, types.late((): any => CategoryMetadataModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SearchModelSelector extends QueryBuilder {
  benefits(builder?: string | BenefitCollectionModelSelector | ((selector: BenefitCollectionModelSelector) => BenefitCollectionModelSelector)) { return this.__child(`benefits`, BenefitCollectionModelSelector, builder) }
  categoryMetadata(builder?: string | CategoryMetadataModelSelector | ((selector: CategoryMetadataModelSelector) => CategoryMetadataModelSelector)) { return this.__child(`categoryMetadata`, CategoryMetadataModelSelector, builder) }
}
export function selectFromSearch() {
  return new SearchModelSelector()
}

export const searchModelPrimitives = selectFromSearch()
