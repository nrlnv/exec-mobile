/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CredentialBase
 * auto generated base class for the model CredentialModel.
 */
export const CredentialModelBase = ModelBase
  .named('Credential')
  .props({
    __typename: types.optional(types.literal("Credential"), "Credential"),
    accessToken: types.union(types.undefined, types.string),
    client: types.union(types.undefined, types.string),
    expiry: types.union(types.undefined, types.integer),
    tokenType: types.union(types.undefined, types.string),
    uid: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CredentialModelSelector extends QueryBuilder {
  get accessToken() { return this.__attr(`accessToken`) }
  get client() { return this.__attr(`client`) }
  get expiry() { return this.__attr(`expiry`) }
  get tokenType() { return this.__attr(`tokenType`) }
  get uid() { return this.__attr(`uid`) }
}
export function selectFromCredential() {
  return new CredentialModelSelector()
}

export const credentialModelPrimitives = selectFromCredential().accessToken.client.expiry.tokenType.uid
