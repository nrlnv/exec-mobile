/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * BenefitImageBase
 * auto generated base class for the model BenefitImageModel.
 */
export const BenefitImageModelBase = ModelBase
  .named('BenefitImage')
  .props({
    __typename: types.optional(types.literal("BenefitImage"), "BenefitImage"),
    large: types.union(types.undefined, types.null, types.string),
    medium: types.union(types.undefined, types.null, types.string),
    original: types.union(types.undefined, types.null, types.string),
    thumbnail: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class BenefitImageModelSelector extends QueryBuilder {
  get large() { return this.__attr(`large`) }
  get medium() { return this.__attr(`medium`) }
  get original() { return this.__attr(`original`) }
  get thumbnail() { return this.__attr(`thumbnail`) }
}
export function selectFromBenefitImage() {
  return new BenefitImageModelSelector()
}

export const benefitImageModelPrimitives = selectFromBenefitImage().large.medium.original.thumbnail
