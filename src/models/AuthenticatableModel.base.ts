/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AuthenticatableBase
 * auto generated base class for the model AuthenticatableModel.
 */
export const AuthenticatableModelBase = ModelBase
  .named('Authenticatable')
  .props({
    __typename: types.optional(types.literal("Authenticatable"), "Authenticatable"),
    email: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AuthenticatableModelSelector extends QueryBuilder {
  get email() { return this.__attr(`email`) }
}
export function selectFromAuthenticatable() {
  return new AuthenticatableModelSelector()
}

export const authenticatableModelPrimitives = selectFromAuthenticatable().email
