import { Instance } from "mobx-state-tree"
import { CityImageModelBase } from "./CityImageModel.base"

/* The TypeScript type of an instance of CityImageModel */
export interface CityImageModelType extends Instance<typeof CityImageModel.Type> {}

/* A graphql query fragment builders for CityImageModel */
export { selectFromCityImage, cityImageModelPrimitives, CityImageModelSelector } from "./CityImageModel.base"

/**
 * CityImageModel
 */
export const CityImageModel = CityImageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
