/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrganizationBase
 * auto generated base class for the model OrganizationModel.
 */
export const OrganizationModelBase = ModelBase
  .named('Organization')
  .props({
    __typename: types.optional(types.literal("Organization"), "Organization"),
    name: types.union(types.undefined, types.string),
    subdomain: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrganizationModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get subdomain() { return this.__attr(`subdomain`) }
}
export function selectFromOrganization() {
  return new OrganizationModelSelector()
}

export const organizationModelPrimitives = selectFromOrganization().name.subdomain
