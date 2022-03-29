import { Instance } from "mobx-state-tree"
import { CreateAccountPayloadModelBase } from "./CreateAccountPayloadModel.base"

/* The TypeScript type of an instance of CreateAccountPayloadModel */
export interface CreateAccountPayloadModelType extends Instance<typeof CreateAccountPayloadModel.Type> {}

/* A graphql query fragment builders for CreateAccountPayloadModel */
export { selectFromCreateAccountPayload, createAccountPayloadModelPrimitives, CreateAccountPayloadModelSelector } from "./CreateAccountPayloadModel.base"

/**
 * CreateAccountPayloadModel
 *
 * Autogenerated return type of CreateAccount
 */
export const CreateAccountPayloadModel = CreateAccountPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
