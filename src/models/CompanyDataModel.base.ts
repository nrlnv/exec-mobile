/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CompanyDataBase
 * auto generated base class for the model CompanyDataModel.
 */
export const CompanyDataModelBase = ModelBase
  .named('CompanyData')
  .props({
    __typename: types.optional(types.literal("CompanyData"), "CompanyData"),
    id: types.union(types.undefined, types.string),
    name: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CompanyDataModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromCompanyData() {
  return new CompanyDataModelSelector()
}

export const companyDataModelPrimitives = selectFromCompanyData().name
