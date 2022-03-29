/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CountryBase
 * auto generated base class for the model CountryModel.
 */
export const CountryModelBase = ModelBase
  .named('Country')
  .props({
    __typename: types.optional(types.literal("Country"), "Country"),
    id: types.union(types.undefined, types.string),
    name: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CountryModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromCountry() {
  return new CountryModelSelector()
}

export const countryModelPrimitives = selectFromCountry().name
