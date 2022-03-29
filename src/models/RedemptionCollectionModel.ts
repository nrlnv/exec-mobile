import { Instance } from "mobx-state-tree"
import { RedemptionCollectionModelBase } from "./RedemptionCollectionModel.base"

/* The TypeScript type of an instance of RedemptionCollectionModel */
export interface RedemptionCollectionModelType extends Instance<typeof RedemptionCollectionModel.Type> {}

/* A graphql query fragment builders for RedemptionCollectionModel */
export { selectFromRedemptionCollection, redemptionCollectionModelPrimitives, RedemptionCollectionModelSelector } from "./RedemptionCollectionModel.base"

/**
 * RedemptionCollectionModel
 */
export const RedemptionCollectionModel = RedemptionCollectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
