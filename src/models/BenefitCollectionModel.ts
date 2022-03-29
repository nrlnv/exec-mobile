import { Instance } from "mobx-state-tree"
import { BenefitCollectionModelBase } from "./BenefitCollectionModel.base"

/* The TypeScript type of an instance of BenefitCollectionModel */
export interface BenefitCollectionModelType extends Instance<typeof BenefitCollectionModel.Type> {}

/* A graphql query fragment builders for BenefitCollectionModel */
export { selectFromBenefitCollection, benefitCollectionModelPrimitives, BenefitCollectionModelSelector } from "./BenefitCollectionModel.base"

/**
 * BenefitCollectionModel
 */
export const BenefitCollectionModel = BenefitCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
