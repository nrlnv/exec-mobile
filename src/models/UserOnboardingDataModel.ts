import { Instance } from "mobx-state-tree"
import { UserOnboardingDataModelBase } from "./UserOnboardingDataModel.base"

/* The TypeScript type of an instance of UserOnboardingDataModel */
export interface UserOnboardingDataModelType extends Instance<typeof UserOnboardingDataModel.Type> {}

/* A graphql query fragment builders for UserOnboardingDataModel */
export { selectFromUserOnboardingData, userOnboardingDataModelPrimitives, UserOnboardingDataModelSelector } from "./UserOnboardingDataModel.base"

/**
 * UserOnboardingDataModel
 */
export const UserOnboardingDataModel = UserOnboardingDataModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
