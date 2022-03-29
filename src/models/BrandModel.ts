import { Instance } from "mobx-state-tree"
import { BrandModelBase } from "./BrandModel.base"

/* The TypeScript type of an instance of BrandModel */
export interface BrandModelType extends Instance<typeof BrandModel.Type> {}

/* A graphql query fragment builders for BrandModel */
export { selectFromBrand, brandModelPrimitives, BrandModelSelector } from "./BrandModel.base"

/**
 * BrandModel
 */
export const BrandModel = BrandModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
