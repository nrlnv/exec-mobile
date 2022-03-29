/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CategoryMetadataBase
 * auto generated base class for the model CategoryMetadataModel.
 */
export const CategoryMetadataModelBase = ModelBase
  .named('CategoryMetadata')
  .props({
    __typename: types.optional(types.literal("CategoryMetadata"), "CategoryMetadata"),
    business: types.union(types.undefined, types.null, types.integer),
    experiences: types.union(types.undefined, types.null, types.integer),
    hotels: types.union(types.undefined, types.null, types.integer),
    lifestyle: types.union(types.undefined, types.null, types.integer),
    travel: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CategoryMetadataModelSelector extends QueryBuilder {
  get business() { return this.__attr(`business`) }
  get experiences() { return this.__attr(`experiences`) }
  get hotels() { return this.__attr(`hotels`) }
  get lifestyle() { return this.__attr(`lifestyle`) }
  get travel() { return this.__attr(`travel`) }
}
export function selectFromCategoryMetadata() {
  return new CategoryMetadataModelSelector()
}

export const categoryMetadataModelPrimitives = selectFromCategoryMetadata().business.experiences.hotels.lifestyle.travel
