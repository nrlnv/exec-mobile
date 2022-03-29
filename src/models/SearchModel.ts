import { Instance } from "mobx-state-tree"
import { SearchModelBase } from "./SearchModel.base"

/* The TypeScript type of an instance of SearchModel */
export interface SearchModelType extends Instance<typeof SearchModel.Type> {}

/* A graphql query fragment builders for SearchModel */
export { selectFromSearch, searchModelPrimitives, SearchModelSelector } from "./SearchModel.base"

/**
 * SearchModel
 */
export const SearchModel = SearchModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
