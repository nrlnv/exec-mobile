import { Instance } from "mobx-state-tree"
import { CategoryImageModelBase } from "./CategoryImageModel.base"

/* The TypeScript type of an instance of CategoryImageModel */
export interface CategoryImageModelType extends Instance<typeof CategoryImageModel.Type> {}

/* A graphql query fragment builders for CategoryImageModel */
export { selectFromCategoryImage, categoryImageModelPrimitives, CategoryImageModelSelector } from "./CategoryImageModel.base"

/**
 * CategoryImageModel
 */
export const CategoryImageModel = CategoryImageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
