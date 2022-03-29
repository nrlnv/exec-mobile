/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UserImageBase
 * auto generated base class for the model UserImageModel.
 */
export const UserImageModelBase = ModelBase
  .named('UserImage')
  .props({
    __typename: types.optional(types.literal("UserImage"), "UserImage"),
    original: types.union(types.undefined, types.null, types.string),
    thumbnail: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UserImageModelSelector extends QueryBuilder {
  get original() { return this.__attr(`original`) }
  get thumbnail() { return this.__attr(`thumbnail`) }
}
export function selectFromUserImage() {
  return new UserImageModelSelector()
}

export const userImageModelPrimitives = selectFromUserImage().original.thumbnail
