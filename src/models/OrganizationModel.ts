import { Instance } from "mobx-state-tree"
import { OrganizationModelBase } from "./OrganizationModel.base"

/* The TypeScript type of an instance of OrganizationModel */
export interface OrganizationModelType extends Instance<typeof OrganizationModel.Type> {}

/* A graphql query fragment builders for OrganizationModel */
export { selectFromOrganization, organizationModelPrimitives, OrganizationModelSelector } from "./OrganizationModel.base"

/**
 * OrganizationModel
 */
export const OrganizationModel = OrganizationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
