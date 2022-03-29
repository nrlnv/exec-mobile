/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CompanyDataModel, CompanyDataModelType } from "./CompanyDataModel"
import { CompanyDataModelSelector } from "./CompanyDataModel.base"
import { RootStoreType } from "./index"


/**
 * CompanyDataRangesBase
 * auto generated base class for the model CompanyDataRangesModel.
 */
export const CompanyDataRangesModelBase = ModelBase
  .named('CompanyDataRanges')
  .props({
    __typename: types.optional(types.literal("CompanyDataRanges"), "CompanyDataRanges"),
    annualRevenue: types.union(types.undefined, types.array(types.late((): any => CompanyDataModel))),
    fundingAcquiredSinceInception: types.union(types.undefined, types.array(types.late((): any => CompanyDataModel))),
    numberOfEmployees: types.union(types.undefined, types.array(types.late((): any => CompanyDataModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CompanyDataRangesModelSelector extends QueryBuilder {
  annualRevenue(builder?: string | CompanyDataModelSelector | ((selector: CompanyDataModelSelector) => CompanyDataModelSelector)) { return this.__child(`annualRevenue`, CompanyDataModelSelector, builder) }
  fundingAcquiredSinceInception(builder?: string | CompanyDataModelSelector | ((selector: CompanyDataModelSelector) => CompanyDataModelSelector)) { return this.__child(`fundingAcquiredSinceInception`, CompanyDataModelSelector, builder) }
  numberOfEmployees(builder?: string | CompanyDataModelSelector | ((selector: CompanyDataModelSelector) => CompanyDataModelSelector)) { return this.__child(`numberOfEmployees`, CompanyDataModelSelector, builder) }
}
export function selectFromCompanyDataRanges() {
  return new CompanyDataRangesModelSelector()
}

export const companyDataRangesModelPrimitives = selectFromCompanyDataRanges()
