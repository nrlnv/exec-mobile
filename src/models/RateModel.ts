import { Instance } from "mobx-state-tree"
import { RateModelBase } from "./RateModel.base"

/* The TypeScript type of an instance of RateModel */
export interface RateModelType extends Instance<typeof RateModel.Type> {}

/* A graphql query fragment builders for RateModel */
export { selectFromRate, rateModelPrimitives, RateModelSelector } from "./RateModel.base"

/**
 * RateModel
 */
export const RateModel = RateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
