import { Instance } from "mobx-state-tree"
import { UserUpdatePasswordPayloadModelBase } from "./UserUpdatePasswordPayloadModel.base"

/* The TypeScript type of an instance of UserUpdatePasswordPayloadModel */
export interface UserUpdatePasswordPayloadModelType extends Instance<typeof UserUpdatePasswordPayloadModel.Type> {}

/* A graphql query fragment builders for UserUpdatePasswordPayloadModel */
export { selectFromUserUpdatePasswordPayload, userUpdatePasswordPayloadModelPrimitives, UserUpdatePasswordPayloadModelSelector } from "./UserUpdatePasswordPayloadModel.base"

/**
 * UserUpdatePasswordPayloadModel
 *
 * Autogenerated return type of UserUpdatePassword
 */
export const UserUpdatePasswordPayloadModel = UserUpdatePasswordPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
