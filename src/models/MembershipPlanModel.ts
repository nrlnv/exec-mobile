import { Instance } from "mobx-state-tree"
import { MembershipPlanModelBase } from "./MembershipPlanModel.base"

/* The TypeScript type of an instance of MembershipPlanModel */
export interface MembershipPlanModelType extends Instance<typeof MembershipPlanModel.Type> {}

/* A graphql query fragment builders for MembershipPlanModel */
export { selectFromMembershipPlan, membershipPlanModelPrimitives, MembershipPlanModelSelector } from "./MembershipPlanModel.base"

/**
 * MembershipPlanModel
 */
export const MembershipPlanModel = MembershipPlanModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
