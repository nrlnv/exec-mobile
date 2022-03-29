/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BenefitModel, BenefitModelType } from "./BenefitModel"
import { BenefitModelSelector } from "./BenefitModel.base"
import { OrganizationModel, OrganizationModelType } from "./OrganizationModel"
import { OrganizationModelSelector } from "./OrganizationModel.base"
import { RedemptionModel, RedemptionModelType } from "./RedemptionModel"
import { RedemptionModelSelector } from "./RedemptionModel.base"
import { UserAddressModel, UserAddressModelType } from "./UserAddressModel"
import { UserAddressModelSelector } from "./UserAddressModel.base"
import { UserImageModel, UserImageModelType } from "./UserImageModel"
import { UserImageModelSelector } from "./UserImageModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserOnboardingDataModel, UserOnboardingDataModelType } from "./UserOnboardingDataModel"
import { UserOnboardingDataModelSelector } from "./UserOnboardingDataModel.base"
import { UserPaymentMethodModel, UserPaymentMethodModelType } from "./UserPaymentMethodModel"
import { UserPaymentMethodModelSelector } from "./UserPaymentMethodModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  subAccounts: IObservableArray<UserModelType>;
}

/**
 * UserBase
 * auto generated base class for the model UserModel.
 */
export const UserModelBase = withTypedRefs<Refs>()(ModelBase
  .named('User')
  .props({
    __typename: types.optional(types.literal("User"), "User"),
    about: types.union(types.undefined, types.null, types.string),
    address: types.union(types.undefined, types.null, types.late((): any => UserAddressModel)),
    companyName: types.union(types.undefined, types.null, types.string),
    companyWebsite: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.null, types.frozen()),
    currentYearRedemptionsCount: types.union(types.undefined, types.integer),
    email: types.union(types.undefined, types.null, types.string),
    favoriteBenefits: types.union(types.undefined, types.null, types.array(types.late((): any => BenefitModel))),
    firstName: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.integer),
    isDemo: types.union(types.undefined, types.boolean),
    isEnterprise: types.union(types.undefined, types.null, types.boolean),
    lastName: types.union(types.undefined, types.null, types.string),
    lastSignInAt: types.union(types.undefined, types.null, types.string),
    maxSubAccountCount: types.union(types.undefined, types.null, types.integer),
    membershipId: types.union(types.undefined, types.null, types.string),
    onboardingData: types.union(types.undefined, types.null, types.late((): any => UserOnboardingDataModel)),
    organization: types.union(types.undefined, types.null, types.late((): any => OrganizationModel)),
    parentId: types.union(types.undefined, types.null, types.integer),
    paymentMethod: types.union(types.undefined, types.null, types.late((): any => UserPaymentMethodModel)),
    photo: types.union(types.undefined, types.null, types.late((): any => UserImageModel)),
    position: types.union(types.undefined, types.null, types.string),
    preApplicationStep: types.union(types.undefined, types.null, types.string),
    redemptions: types.union(types.undefined, types.null, types.array(types.late((): any => RedemptionModel))),
    redemptionsCount: types.union(types.undefined, types.integer),
    rememberCreatedAt: types.union(types.undefined, types.null, types.frozen()),
    subAccountCount: types.union(types.undefined, types.null, types.integer),
    subAccounts: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => UserModel)))),
    uid: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UserModelSelector extends QueryBuilder {
  get about() { return this.__attr(`about`) }
  get companyName() { return this.__attr(`companyName`) }
  get companyWebsite() { return this.__attr(`companyWebsite`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get currentYearRedemptionsCount() { return this.__attr(`currentYearRedemptionsCount`) }
  get email() { return this.__attr(`email`) }
  get firstName() { return this.__attr(`firstName`) }
  get id() { return this.__attr(`id`) }
  get isDemo() { return this.__attr(`isDemo`) }
  get isEnterprise() { return this.__attr(`isEnterprise`) }
  get lastName() { return this.__attr(`lastName`) }
  get lastSignInAt() { return this.__attr(`lastSignInAt`) }
  get maxSubAccountCount() { return this.__attr(`maxSubAccountCount`) }
  get membershipId() { return this.__attr(`membershipId`) }
  get parentId() { return this.__attr(`parentId`) }
  get position() { return this.__attr(`position`) }
  get preApplicationStep() { return this.__attr(`preApplicationStep`) }
  get redemptionsCount() { return this.__attr(`redemptionsCount`) }
  get rememberCreatedAt() { return this.__attr(`rememberCreatedAt`) }
  get subAccountCount() { return this.__attr(`subAccountCount`) }
  get uid() { return this.__attr(`uid`) }
  address(builder?: string | UserAddressModelSelector | ((selector: UserAddressModelSelector) => UserAddressModelSelector)) { return this.__child(`address`, UserAddressModelSelector, builder) }
  favoriteBenefits(builder?: string | BenefitModelSelector | ((selector: BenefitModelSelector) => BenefitModelSelector)) { return this.__child(`favoriteBenefits`, BenefitModelSelector, builder) }
  onboardingData(builder?: string | UserOnboardingDataModelSelector | ((selector: UserOnboardingDataModelSelector) => UserOnboardingDataModelSelector)) { return this.__child(`onboardingData`, UserOnboardingDataModelSelector, builder) }
  organization(builder?: string | OrganizationModelSelector | ((selector: OrganizationModelSelector) => OrganizationModelSelector)) { return this.__child(`organization`, OrganizationModelSelector, builder) }
  paymentMethod(builder?: string | UserPaymentMethodModelSelector | ((selector: UserPaymentMethodModelSelector) => UserPaymentMethodModelSelector)) { return this.__child(`paymentMethod`, UserPaymentMethodModelSelector, builder) }
  photo(builder?: string | UserImageModelSelector | ((selector: UserImageModelSelector) => UserImageModelSelector)) { return this.__child(`photo`, UserImageModelSelector, builder) }
  redemptions(builder?: string | RedemptionModelSelector | ((selector: RedemptionModelSelector) => RedemptionModelSelector)) { return this.__child(`redemptions`, RedemptionModelSelector, builder) }
  subAccounts(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`subAccounts`, UserModelSelector, builder) }
}
export function selectFromUser() {
  return new UserModelSelector()
}

export const userModelPrimitives = selectFromUser().about.companyName.companyWebsite.createdAt.currentYearRedemptionsCount.email.firstName.isDemo.isEnterprise.lastName.lastSignInAt.maxSubAccountCount.membershipId.parentId.position.preApplicationStep.redemptionsCount.rememberCreatedAt.subAccountCount.uid
