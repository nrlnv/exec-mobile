import { Instance } from "mobx-state-tree"
import { BenefitImageModelBase } from "./BenefitImageModel.base"

/* The TypeScript type of an instance of BenefitImageModel */
export interface BenefitImageModelType extends Instance<typeof BenefitImageModel.Type> {}

/* A graphql query fragment builders for BenefitImageModel */
export { selectFromBenefitImage, benefitImageModelPrimitives, BenefitImageModelSelector } from "./BenefitImageModel.base"

/**
 * BenefitImageModel
 */
export const BenefitImageModel = BenefitImageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
