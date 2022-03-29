import { Instance } from "mobx-state-tree"
import { CategoryMetadataModelBase } from "./CategoryMetadataModel.base"

/* The TypeScript type of an instance of CategoryMetadataModel */
export interface CategoryMetadataModelType extends Instance<typeof CategoryMetadataModel.Type> {}

/* A graphql query fragment builders for CategoryMetadataModel */
export { selectFromCategoryMetadata, categoryMetadataModelPrimitives, CategoryMetadataModelSelector } from "./CategoryMetadataModel.base"

/**
 * CategoryMetadataModel
 */
export const CategoryMetadataModel = CategoryMetadataModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
