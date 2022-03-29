/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BenefitImageModel, BenefitImageModelType } from "./BenefitImageModel"
import { BenefitImageModelSelector } from "./BenefitImageModel.base"
import { BenefitModel, BenefitModelType } from "./BenefitModel"
import { BrandModel, BrandModelType } from "./BrandModel"
import { BrandModelSelector } from "./BrandModel.base"
import { CategoryModel, CategoryModelType } from "./CategoryModel"
import { CategoryModelSelector } from "./CategoryModel.base"
import { RateModel, RateModelType } from "./RateModel"
import { RateModelSelector } from "./RateModel.base"
import { RedemptionTypeEnumType } from "./RedemptionTypeEnum"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  relatedBenefits: IObservableArray<BenefitModelType>;
}

/**
 * BenefitBase
 * auto generated base class for the model BenefitModel.
 */
export const BenefitModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Benefit')
  .props({
    __typename: types.optional(types.literal("Benefit"), "Benefit"),
    additionalInformation: types.union(types.undefined, types.null, types.string),
    address1: types.union(types.undefined, types.null, types.string),
    address2: types.union(types.undefined, types.null, types.string),
    benefitSummary: types.union(types.undefined, types.null, types.string),
    benefits: types.union(types.undefined, types.null, types.array(types.string)),
    brand: types.union(types.undefined, types.null, types.late((): any => BrandModel)),
    category: types.union(types.undefined, types.late((): any => CategoryModel)),
    city: types.union(types.undefined, types.null, types.string),
    cityId: types.union(types.undefined, types.null, types.string),
    country: types.union(types.undefined, types.null, types.string),
    description: types.union(types.undefined, types.null, types.string),
    favorited: types.union(types.undefined, types.null, types.boolean),
    featured: types.union(types.undefined, types.null, types.boolean),
    hasCode: types.union(types.undefined, types.null, types.boolean),
    hasLink: types.union(types.undefined, types.null, types.boolean),
    id: types.union(types.undefined, types.integer),
    images: types.union(types.undefined, types.array(types.late((): any => BenefitImageModel))),
    isNew: types.union(types.undefined, types.boolean),
    keyInsights: types.union(types.undefined, types.null, types.array(types.string)),
    latitude: types.union(types.undefined, types.null, types.number),
    longitude: types.union(types.undefined, types.null, types.number),
    name: types.union(types.undefined, types.null, types.string),
    otherRateOffer: types.union(types.undefined, types.null, types.string),
    postalCode: types.union(types.undefined, types.null, types.string),
    rates: types.union(types.undefined, types.null, types.array(types.late((): any => RateModel))),
    redeemed: types.union(types.undefined, types.null, types.boolean),
    redemptionInstruction: types.union(types.undefined, types.null, types.string),
    redemptionType: types.union(types.undefined, types.null, RedemptionTypeEnumType),
    region: types.union(types.undefined, types.null, types.string),
    relatedBenefits: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => BenefitModel)))),
    slug: types.union(types.undefined, types.null, types.string),
    termsAndCondition: types.union(types.undefined, types.null, types.string),
    website: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class BenefitModelSelector extends QueryBuilder {
  get additionalInformation() { return this.__attr(`additionalInformation`) }
  get address1() { return this.__attr(`address1`) }
  get address2() { return this.__attr(`address2`) }
  get benefitSummary() { return this.__attr(`benefitSummary`) }
  get benefits() { return this.__attr(`benefits`) }
  get city() { return this.__attr(`city`) }
  get cityId() { return this.__attr(`cityId`) }
  get country() { return this.__attr(`country`) }
  get description() { return this.__attr(`description`) }
  get favorited() { return this.__attr(`favorited`) }
  get featured() { return this.__attr(`featured`) }
  get hasCode() { return this.__attr(`hasCode`) }
  get hasLink() { return this.__attr(`hasLink`) }
  get id() { return this.__attr(`id`) }
  get isNew() { return this.__attr(`isNew`) }
  get keyInsights() { return this.__attr(`keyInsights`) }
  get latitude() { return this.__attr(`latitude`) }
  get longitude() { return this.__attr(`longitude`) }
  get name() { return this.__attr(`name`) }
  get otherRateOffer() { return this.__attr(`otherRateOffer`) }
  get postalCode() { return this.__attr(`postalCode`) }
  get redeemed() { return this.__attr(`redeemed`) }
  get redemptionInstruction() { return this.__attr(`redemptionInstruction`) }
  get redemptionType() { return this.__attr(`redemptionType`) }
  get region() { return this.__attr(`region`) }
  get slug() { return this.__attr(`slug`) }
  get termsAndCondition() { return this.__attr(`termsAndCondition`) }
  get website() { return this.__attr(`website`) }
  brand(builder?: string | BrandModelSelector | ((selector: BrandModelSelector) => BrandModelSelector)) { return this.__child(`brand`, BrandModelSelector, builder) }
  category(builder?: string | CategoryModelSelector | ((selector: CategoryModelSelector) => CategoryModelSelector)) { return this.__child(`category`, CategoryModelSelector, builder) }
  images(builder?: string | BenefitImageModelSelector | ((selector: BenefitImageModelSelector) => BenefitImageModelSelector)) { return this.__child(`images`, BenefitImageModelSelector, builder) }
  rates(builder?: string | RateModelSelector | ((selector: RateModelSelector) => RateModelSelector)) { return this.__child(`rates`, RateModelSelector, builder) }
  relatedBenefits(builder?: string | BenefitModelSelector | ((selector: BenefitModelSelector) => BenefitModelSelector)) { return this.__child(`relatedBenefits`, BenefitModelSelector, builder) }
}
export function selectFromBenefit() {
  return new BenefitModelSelector()
}

export const benefitModelPrimitives = selectFromBenefit().additionalInformation.address1.address2.benefitSummary.benefits.city.cityId.country.description.favorited.featured.hasCode.hasLink.isNew.keyInsights.latitude.longitude.name.otherRateOffer.postalCode.redeemed.redemptionInstruction.redemptionType.region.slug.termsAndCondition.website
