/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BenefitModel, BenefitModelType } from "./BenefitModel"
import { BenefitModelSelector } from "./BenefitModel.base"
import { CategoryImageModel, CategoryImageModelType } from "./CategoryImageModel"
import { CategoryImageModelSelector } from "./CategoryImageModel.base"
import { RootStoreType } from "./index"


/**
 * CategoryBase
 * auto generated base class for the model CategoryModel.
 */
export const CategoryModelBase = ModelBase
  .named('Category')
  .props({
    __typename: types.optional(types.literal("Category"), "Category"),
    benefits: types.union(types.undefined, types.null, types.array(types.late((): any => BenefitModel))),
    image: types.union(types.undefined, types.null, types.late((): any => CategoryImageModel)),
    name: types.union(types.undefined, types.null, types.string),
    slug: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CategoryModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get slug() { return this.__attr(`slug`) }
  benefits(builder?: string | BenefitModelSelector | ((selector: BenefitModelSelector) => BenefitModelSelector)) { return this.__child(`benefits`, BenefitModelSelector, builder) }
  image(builder?: string | CategoryImageModelSelector | ((selector: CategoryImageModelSelector) => CategoryImageModelSelector)) { return this.__child(`image`, CategoryImageModelSelector, builder) }
}
export function selectFromCategory() {
  return new CategoryModelSelector()
}

export const categoryModelPrimitives = selectFromCategory().name.slug
