import { Instance } from "mobx-state-tree"
import { UserImageModelBase } from "./UserImageModel.base"

/* The TypeScript type of an instance of UserImageModel */
export interface UserImageModelType extends Instance<typeof UserImageModel.Type> {}

/* A graphql query fragment builders for UserImageModel */
export { selectFromUserImage, userImageModelPrimitives, UserImageModelSelector } from "./UserImageModel.base"

/**
 * UserImageModel
 */
export const UserImageModel = UserImageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
