import { Instance } from "mobx-state-tree"
import { CompanyDataModelBase } from "./CompanyDataModel.base"

/* The TypeScript type of an instance of CompanyDataModel */
export interface CompanyDataModelType extends Instance<typeof CompanyDataModel.Type> {}

/* A graphql query fragment builders for CompanyDataModel */
export { selectFromCompanyData, companyDataModelPrimitives, CompanyDataModelSelector } from "./CompanyDataModel.base"

/**
 * CompanyDataModel
 */
export const CompanyDataModel = CompanyDataModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
