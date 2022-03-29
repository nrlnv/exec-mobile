import { Instance } from "mobx-state-tree"
import { UserPaymentMethodModelBase } from "./UserPaymentMethodModel.base"

/* The TypeScript type of an instance of UserPaymentMethodModel */
export interface UserPaymentMethodModelType extends Instance<typeof UserPaymentMethodModel.Type> {}

/* A graphql query fragment builders for UserPaymentMethodModel */
export { selectFromUserPaymentMethod, userPaymentMethodModelPrimitives, UserPaymentMethodModelSelector } from "./UserPaymentMethodModel.base"

/**
 * UserPaymentMethodModel
 */
export const UserPaymentMethodModel = UserPaymentMethodModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
