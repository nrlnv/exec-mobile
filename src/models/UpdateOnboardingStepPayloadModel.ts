import { Instance } from "mobx-state-tree"
import { UpdateOnboardingStepPayloadModelBase } from "./UpdateOnboardingStepPayloadModel.base"

/* The TypeScript type of an instance of UpdateOnboardingStepPayloadModel */
export interface UpdateOnboardingStepPayloadModelType extends Instance<typeof UpdateOnboardingStepPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateOnboardingStepPayloadModel */
export { selectFromUpdateOnboardingStepPayload, updateOnboardingStepPayloadModelPrimitives, UpdateOnboardingStepPayloadModelSelector } from "./UpdateOnboardingStepPayloadModel.base"

/**
 * UpdateOnboardingStepPayloadModel
 *
 * Autogenerated return type of UpdateOnboardingStep
 */
export const UpdateOnboardingStepPayloadModel = UpdateOnboardingStepPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
