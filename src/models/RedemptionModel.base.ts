/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BenefitModel, BenefitModelType } from "./BenefitModel"
import { BenefitModelSelector } from "./BenefitModel.base"
import { RedemptionTypeEnumType } from "./RedemptionTypeEnum"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/**
 * RedemptionBase
 * auto generated base class for the model RedemptionModel.
 */
export const RedemptionModelBase = ModelBase
  .named('Redemption')
  .props({
    __typename: types.optional(types.literal("Redemption"), "Redemption"),
    benefit: types.union(types.undefined, types.late((): any => BenefitModel)),
    createdAt: types.union(types.undefined, types.null, types.frozen()),
    redemptionCode: types.union(types.undefined, types.null, types.string),
    redemptionData: types.union(types.undefined, types.frozen()),
    redemptionInstruction: types.union(types.undefined, types.null, types.string),
    redemptionLink: types.union(types.undefined, types.null, types.string),
    redemptionType: types.union(types.undefined, RedemptionTypeEnumType),
    user: types.union(types.undefined, types.late((): any => UserModel)),
    withinThisYear: types.union(types.undefined, types.null, types.boolean),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class RedemptionModelSelector extends QueryBuilder {
  get createdAt() { return this.__attr(`createdAt`) }
  get redemptionCode() { return this.__attr(`redemptionCode`) }
  get redemptionData() { return this.__attr(`redemptionData`) }
  get redemptionInstruction() { return this.__attr(`redemptionInstruction`) }
  get redemptionLink() { return this.__attr(`redemptionLink`) }
  get redemptionType() { return this.__attr(`redemptionType`) }
  get withinThisYear() { return this.__attr(`withinThisYear`) }
  benefit(builder?: string | BenefitModelSelector | ((selector: BenefitModelSelector) => BenefitModelSelector)) { return this.__child(`benefit`, BenefitModelSelector, builder) }
  user(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`user`, UserModelSelector, builder) }
}
export function selectFromRedemption() {
  return new RedemptionModelSelector()
}

export const redemptionModelPrimitives = selectFromRedemption().createdAt.redemptionCode.redemptionData.redemptionInstruction.redemptionLink.redemptionType.withinThisYear
