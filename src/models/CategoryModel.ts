import { Instance } from "mobx-state-tree"
import { CategoryModelBase } from "./CategoryModel.base"

/* The TypeScript type of an instance of CategoryModel */
export interface CategoryModelType extends Instance<typeof CategoryModel.Type> {}

/* A graphql query fragment builders for CategoryModel */
export { selectFromCategory, categoryModelPrimitives, CategoryModelSelector } from "./CategoryModel.base"

/**
 * CategoryModel
 */
export const CategoryModel = CategoryModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
