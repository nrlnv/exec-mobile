import { Instance } from "mobx-state-tree"
import { CollectionMetadataModelBase } from "./CollectionMetadataModel.base"

/* The TypeScript type of an instance of CollectionMetadataModel */
export interface CollectionMetadataModelType extends Instance<typeof CollectionMetadataModel.Type> {}

/* A graphql query fragment builders for CollectionMetadataModel */
export { selectFromCollectionMetadata, collectionMetadataModelPrimitives, CollectionMetadataModelSelector } from "./CollectionMetadataModel.base"

/**
 * CollectionMetadataModel
 */
export const CollectionMetadataModel = CollectionMetadataModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
