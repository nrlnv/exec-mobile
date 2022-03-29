/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * BrandImageBase
 * auto generated base class for the model BrandImageModel.
 */
export const BrandImageModelBase = ModelBase
  .named('BrandImage')
  .props({
    __typename: types.optional(types.literal("BrandImage"), "BrandImage"),
    original: types.union(types.undefined, types.null, types.string),
    thumbnail: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class BrandImageModelSelector extends QueryBuilder {
  get original() { return this.__attr(`original`) }
  get thumbnail() { return this.__attr(`thumbnail`) }
}
export function selectFromBrandImage() {
  return new BrandImageModelSelector()
}

export const brandImageModelPrimitives = selectFromBrandImage().original.thumbnail
