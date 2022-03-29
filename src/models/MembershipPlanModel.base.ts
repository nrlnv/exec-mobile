/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * MembershipPlanBase
 * auto generated base class for the model MembershipPlanModel.
 */
export const MembershipPlanModelBase = ModelBase
  .named('MembershipPlan')
  .props({
    __typename: types.optional(types.literal("MembershipPlan"), "MembershipPlan"),
    customPlan: types.union(types.undefined, types.boolean),
    id: types.union(types.undefined, types.integer),
    maxSubuserNumber: types.union(types.undefined, types.integer),
    numberOfSeats: types.union(types.undefined, types.integer),
    oneTimeInitiationFee: types.union(types.undefined, types.integer),
    price: types.union(types.undefined, types.integer),
    totalPrice: types.union(types.undefined, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MembershipPlanModelSelector extends QueryBuilder {
  get customPlan() { return this.__attr(`customPlan`) }
  get id() { return this.__attr(`id`) }
  get maxSubuserNumber() { return this.__attr(`maxSubuserNumber`) }
  get numberOfSeats() { return this.__attr(`numberOfSeats`) }
  get oneTimeInitiationFee() { return this.__attr(`oneTimeInitiationFee`) }
  get price() { return this.__attr(`price`) }
  get totalPrice() { return this.__attr(`totalPrice`) }
}
export function selectFromMembershipPlan() {
  return new MembershipPlanModelSelector()
}

export const membershipPlanModelPrimitives = selectFromMembershipPlan().customPlan.maxSubuserNumber.numberOfSeats.oneTimeInitiationFee.price.totalPrice
