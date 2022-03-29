/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UserPaymentMethodBase
 * auto generated base class for the model UserPaymentMethodModel.
 */
export const UserPaymentMethodModelBase = ModelBase
  .named('UserPaymentMethod')
  .props({
    __typename: types.optional(types.literal("UserPaymentMethod"), "UserPaymentMethod"),
    cardType: types.union(types.undefined, types.string),
    expirationMonth: types.union(types.undefined, types.string),
    expirationYear: types.union(types.undefined, types.string),
    lastFourDigitsOfCard: types.union(types.undefined, types.string),
    name: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UserPaymentMethodModelSelector extends QueryBuilder {
  get cardType() { return this.__attr(`cardType`) }
  get expirationMonth() { return this.__attr(`expirationMonth`) }
  get expirationYear() { return this.__attr(`expirationYear`) }
  get lastFourDigitsOfCard() { return this.__attr(`lastFourDigitsOfCard`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromUserPaymentMethod() {
  return new UserPaymentMethodModelSelector()
}

export const userPaymentMethodModelPrimitives = selectFromUserPaymentMethod().cardType.expirationMonth.expirationYear.lastFourDigitsOfCard.name
