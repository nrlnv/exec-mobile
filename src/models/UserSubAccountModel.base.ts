/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/**
 * UserSubAccountBase
 * auto generated base class for the model UserSubAccountModel.
 */
export const UserSubAccountModelBase = ModelBase
  .named('UserSubAccount')
  .props({
    __typename: types.optional(types.literal("UserSubAccount"), "UserSubAccount"),
    accounts: types.union(types.undefined, types.array(types.late((): any => UserModel))),
    id: types.union(types.undefined, types.integer),
    remaining: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UserSubAccountModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get remaining() { return this.__attr(`remaining`) }
  accounts(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`accounts`, UserModelSelector, builder) }
}
export function selectFromUserSubAccount() {
  return new UserSubAccountModelSelector()
}

export const userSubAccountModelPrimitives = selectFromUserSubAccount().remaining
