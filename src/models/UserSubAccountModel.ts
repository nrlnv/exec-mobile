import { Instance } from "mobx-state-tree"
import { UserSubAccountModelBase } from "./UserSubAccountModel.base"

/* The TypeScript type of an instance of UserSubAccountModel */
export interface UserSubAccountModelType extends Instance<typeof UserSubAccountModel.Type> {}

/* A graphql query fragment builders for UserSubAccountModel */
export { selectFromUserSubAccount, userSubAccountModelPrimitives, UserSubAccountModelSelector } from "./UserSubAccountModel.base"

/**
 * UserSubAccountModel
 */
export const UserSubAccountModel = UserSubAccountModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
