import { Instance } from "mobx-state-tree"
import { RedeemWithRegistrationFormPayloadModelBase } from "./RedeemWithRegistrationFormPayloadModel.base"

/* The TypeScript type of an instance of RedeemWithRegistrationFormPayloadModel */
export interface RedeemWithRegistrationFormPayloadModelType extends Instance<typeof RedeemWithRegistrationFormPayloadModel.Type> {}

/* A graphql query fragment builders for RedeemWithRegistrationFormPayloadModel */
export { selectFromRedeemWithRegistrationFormPayload, redeemWithRegistrationFormPayloadModelPrimitives, RedeemWithRegistrationFormPayloadModelSelector } from "./RedeemWithRegistrationFormPayloadModel.base"

/**
 * RedeemWithRegistrationFormPayloadModel
 *
 * Autogenerated return type of RedeemWithRegistrationForm
 */
export const RedeemWithRegistrationFormPayloadModel = RedeemWithRegistrationFormPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
