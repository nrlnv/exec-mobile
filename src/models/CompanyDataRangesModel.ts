import { Instance } from "mobx-state-tree"
import { CompanyDataRangesModelBase } from "./CompanyDataRangesModel.base"

/* The TypeScript type of an instance of CompanyDataRangesModel */
export interface CompanyDataRangesModelType extends Instance<typeof CompanyDataRangesModel.Type> {}

/* A graphql query fragment builders for CompanyDataRangesModel */
export { selectFromCompanyDataRanges, companyDataRangesModelPrimitives, CompanyDataRangesModelSelector } from "./CompanyDataRangesModel.base"

/**
 * CompanyDataRangesModel
 */
export const CompanyDataRangesModel = CompanyDataRangesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
