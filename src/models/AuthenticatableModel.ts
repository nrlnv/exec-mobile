import { Instance } from "mobx-state-tree"
import { AuthenticatableModelBase } from "./AuthenticatableModel.base"

/* The TypeScript type of an instance of AuthenticatableModel */
export interface AuthenticatableModelType extends Instance<typeof AuthenticatableModel.Type> {}

/* A graphql query fragment builders for AuthenticatableModel */
export { selectFromAuthenticatable, authenticatableModelPrimitives, AuthenticatableModelSelector } from "./AuthenticatableModel.base"

/**
 * AuthenticatableModel
 */
export const AuthenticatableModel = AuthenticatableModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
