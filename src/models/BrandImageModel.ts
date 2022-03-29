import { Instance } from "mobx-state-tree"
import { BrandImageModelBase } from "./BrandImageModel.base"

/* The TypeScript type of an instance of BrandImageModel */
export interface BrandImageModelType extends Instance<typeof BrandImageModel.Type> {}

/* A graphql query fragment builders for BrandImageModel */
export { selectFromBrandImage, brandImageModelPrimitives, BrandImageModelSelector } from "./BrandImageModel.base"

/**
 * BrandImageModel
 */
export const BrandImageModel = BrandImageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
