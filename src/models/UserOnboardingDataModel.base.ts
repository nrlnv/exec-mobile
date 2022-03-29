/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UserOnboardingDataBase
 * auto generated base class for the model UserOnboardingDataModel.
 */
export const UserOnboardingDataModelBase = ModelBase
  .named('UserOnboardingData')
  .props({
    __typename: types.optional(types.literal("UserOnboardingData"), "UserOnboardingData"),
    stepName: types.union(types.undefined, types.null, types.string),
    stepNumber: types.union(types.undefined, types.null, types.integer),
    stepsCount: types.union(types.undefined, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UserOnboardingDataModelSelector extends QueryBuilder {
  get stepName() { return this.__attr(`stepName`) }
  get stepNumber() { return this.__attr(`stepNumber`) }
  get stepsCount() { return this.__attr(`stepsCount`) }
}
export function selectFromUserOnboardingData() {
  return new UserOnboardingDataModelSelector()
}

export const userOnboardingDataModelPrimitives = selectFromUserOnboardingData().stepName.stepNumber.stepsCount
