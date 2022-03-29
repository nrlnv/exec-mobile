import { Instance } from "mobx-state-tree"
import { CredentialModelBase } from "./CredentialModel.base"

/* The TypeScript type of an instance of CredentialModel */
export interface CredentialModelType extends Instance<typeof CredentialModel.Type> {}

/* A graphql query fragment builders for CredentialModel */
export { selectFromCredential, credentialModelPrimitives, CredentialModelSelector } from "./CredentialModel.base"

/**
 * CredentialModel
 */
export const CredentialModel = CredentialModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
