/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CategoryImageBase
 * auto generated base class for the model CategoryImageModel.
 */
export const CategoryImageModelBase = ModelBase
  .named('CategoryImage')
  .props({
    __typename: types.optional(types.literal("CategoryImage"), "CategoryImage"),
    carousel: types.union(types.undefined, types.null, types.string),
    original: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CategoryImageModelSelector extends QueryBuilder {
  get carousel() { return this.__attr(`carousel`) }
  get original() { return this.__attr(`original`) }
}
export function selectFromCategoryImage() {
  return new CategoryImageModelSelector()
}

export const categoryImageModelPrimitives = selectFromCategoryImage().carousel.original
