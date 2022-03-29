/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UserAddressBase
 * auto generated base class for the model UserAddressModel.
 */
export const UserAddressModelBase = ModelBase
  .named('UserAddress')
  .props({
    __typename: types.optional(types.literal("UserAddress"), "UserAddress"),
    address: types.union(types.undefined, types.null, types.string),
    apartment: types.union(types.undefined, types.null, types.string),
    city: types.union(types.undefined, types.null, types.string),
    country: types.union(types.undefined, types.null, types.string),
    state: types.union(types.undefined, types.null, types.string),
    zipCode: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UserAddressModelSelector extends QueryBuilder {
  get address() { return this.__attr(`address`) }
  get apartment() { return this.__attr(`apartment`) }
  get city() { return this.__attr(`city`) }
  get country() { return this.__attr(`country`) }
  get state() { return this.__attr(`state`) }
  get zipCode() { return this.__attr(`zipCode`) }
}
export function selectFromUserAddress() {
  return new UserAddressModelSelector()
}

export const userAddressModelPrimitives = selectFromUserAddress().address.apartment.city.country.state.zipCode
