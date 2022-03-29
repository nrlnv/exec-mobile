import { Instance } from "mobx-state-tree"
import { BenefitModelBase } from "./BenefitModel.base"

/* The TypeScript type of an instance of BenefitModel */
export interface BenefitModelType extends Instance<typeof BenefitModel.Type> {}

/* A graphql query fragment builders for BenefitModel */
export { selectFromBenefit, benefitModelPrimitives, BenefitModelSelector } from "./BenefitModel.base"

/**
 * BenefitModel
 */
export const BenefitModel = BenefitModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
