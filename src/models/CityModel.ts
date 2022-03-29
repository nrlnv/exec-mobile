import { Instance } from "mobx-state-tree"
import { CityModelBase } from "./CityModel.base"

/* The TypeScript type of an instance of CityModel */
export interface CityModelType extends Instance<typeof CityModel.Type> {}

/* A graphql query fragment builders for CityModel */
export { selectFromCity, cityModelPrimitives, CityModelSelector } from "./CityModel.base"

/**
 * CityModel
 */
export const CityModel = CityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
