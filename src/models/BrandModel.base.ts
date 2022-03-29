/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BenefitModel, BenefitModelType } from "./BenefitModel"
import { BenefitModelSelector } from "./BenefitModel.base"
import { BrandImageModel, BrandImageModelType } from "./BrandImageModel"
import { BrandImageModelSelector } from "./BrandImageModel.base"
import { BrandModel, BrandModelType } from "./BrandModel"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  subbrands: IObservableArray<BrandModelType>;
}

/**
 * BrandBase
 * auto generated base class for the model BrandModel.
 */
export const BrandModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Brand')
  .props({
    __typename: types.optional(types.literal("Brand"), "Brand"),
    benefits: types.union(types.undefined, types.null, types.array(types.late((): any => BenefitModel))),
    childrenCount: types.union(types.undefined, types.integer),
    description: types.union(types.undefined, types.null, types.string),
    image: types.union(types.undefined, types.null, types.late((): any => BrandImageModel)),
    name: types.union(types.undefined, types.null, types.string),
    parentId: types.union(types.undefined, types.null, types.integer),
    slug: types.union(types.undefined, types.null, types.string),
    subbrands: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => BrandModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class BrandModelSelector extends QueryBuilder {
  get childrenCount() { return this.__attr(`childrenCount`) }
  get description() { return this.__attr(`description`) }
  get name() { return this.__attr(`name`) }
  get parentId() { return this.__attr(`parentId`) }
  get slug() { return this.__attr(`slug`) }
  benefits(builder?: string | BenefitModelSelector | ((selector: BenefitModelSelector) => BenefitModelSelector)) { return this.__child(`benefits`, BenefitModelSelector, builder) }
  image(builder?: string | BrandImageModelSelector | ((selector: BrandImageModelSelector) => BrandImageModelSelector)) { return this.__child(`image`, BrandImageModelSelector, builder) }
  subbrands(builder?: string | BrandModelSelector | ((selector: BrandModelSelector) => BrandModelSelector)) { return this.__child(`subbrands`, BrandModelSelector, builder) }
}
export function selectFromBrand() {
  return new BrandModelSelector()
}

export const brandModelPrimitives = selectFromBrand().childrenCount.description.name.parentId.slug
