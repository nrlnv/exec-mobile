/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * RateBase
 * auto generated base class for the model RateModel.
 */
export const RateModelBase = ModelBase
  .named('Rate')
  .props({
    __typename: types.optional(types.literal("Rate"), "Rate"),
    category: types.union(types.undefined, types.null, types.string),
    execRate: types.union(types.undefined, types.null, types.string),
    standardRate: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class RateModelSelector extends QueryBuilder {
  get category() { return this.__attr(`category`) }
  get execRate() { return this.__attr(`execRate`) }
  get standardRate() { return this.__attr(`standardRate`) }
}
export function selectFromRate() {
  return new RateModelSelector()
}

export const rateModelPrimitives = selectFromRate().category.execRate.standardRate
