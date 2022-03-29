import { Instance } from "mobx-state-tree"
import { RedemptionModelBase } from "./RedemptionModel.base"

/* The TypeScript type of an instance of RedemptionModel */
export interface RedemptionModelType extends Instance<typeof RedemptionModel.Type> {}

/* A graphql query fragment builders for RedemptionModel */
export { selectFromRedemption, redemptionModelPrimitives, RedemptionModelSelector } from "./RedemptionModel.base"

/**
 * RedemptionModel
 */
export const RedemptionModel = RedemptionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
