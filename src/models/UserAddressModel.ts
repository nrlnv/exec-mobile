import { Instance } from "mobx-state-tree"
import { UserAddressModelBase } from "./UserAddressModel.base"

/* The TypeScript type of an instance of UserAddressModel */
export interface UserAddressModelType extends Instance<typeof UserAddressModel.Type> {}

/* A graphql query fragment builders for UserAddressModel */
export { selectFromUserAddress, userAddressModelPrimitives, UserAddressModelSelector } from "./UserAddressModel.base"

/**
 * UserAddressModel
 */
export const UserAddressModel = UserAddressModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
