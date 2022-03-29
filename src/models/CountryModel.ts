import { Instance } from "mobx-state-tree"
import { CountryModelBase } from "./CountryModel.base"

/* The TypeScript type of an instance of CountryModel */
export interface CountryModelType extends Instance<typeof CountryModel.Type> {}

/* A graphql query fragment builders for CountryModel */
export { selectFromCountry, countryModelPrimitives, CountryModelSelector } from "./CountryModel.base"

/**
 * CountryModel
 */
export const CountryModel = CountryModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
