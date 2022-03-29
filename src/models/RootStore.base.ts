/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { AddFavoritePayloadModel, AddFavoritePayloadModelType } from "./AddFavoritePayloadModel"
import { addFavoritePayloadModelPrimitives, AddFavoritePayloadModelSelector } from "./AddFavoritePayloadModel.base"
import { AddSubAccountPayloadModel, AddSubAccountPayloadModelType } from "./AddSubAccountPayloadModel"
import { addSubAccountPayloadModelPrimitives, AddSubAccountPayloadModelSelector } from "./AddSubAccountPayloadModel.base"
import { AuthenticatableModel, AuthenticatableModelType } from "./AuthenticatableModel"
import { authenticatableModelPrimitives, AuthenticatableModelSelector } from "./AuthenticatableModel.base"
import { BenefitModel, BenefitModelType } from "./BenefitModel"
import { benefitModelPrimitives, BenefitModelSelector } from "./BenefitModel.base"
import { BenefitCollectionModel, BenefitCollectionModelType } from "./BenefitCollectionModel"
import { benefitCollectionModelPrimitives, BenefitCollectionModelSelector } from "./BenefitCollectionModel.base"
import { BenefitImageModel, BenefitImageModelType } from "./BenefitImageModel"
import { benefitImageModelPrimitives, BenefitImageModelSelector } from "./BenefitImageModel.base"
import { BrandModel, BrandModelType } from "./BrandModel"
import { brandModelPrimitives, BrandModelSelector } from "./BrandModel.base"
import { BrandImageModel, BrandImageModelType } from "./BrandImageModel"
import { brandImageModelPrimitives, BrandImageModelSelector } from "./BrandImageModel.base"
import { CategoryModel, CategoryModelType } from "./CategoryModel"
import { categoryModelPrimitives, CategoryModelSelector } from "./CategoryModel.base"
import { CategoryImageModel, CategoryImageModelType } from "./CategoryImageModel"
import { categoryImageModelPrimitives, CategoryImageModelSelector } from "./CategoryImageModel.base"
import { CategoryMetadataModel, CategoryMetadataModelType } from "./CategoryMetadataModel"
import { categoryMetadataModelPrimitives, CategoryMetadataModelSelector } from "./CategoryMetadataModel.base"
import { CityModel, CityModelType } from "./CityModel"
import { cityModelPrimitives, CityModelSelector } from "./CityModel.base"
import { CityImageModel, CityImageModelType } from "./CityImageModel"
import { cityImageModelPrimitives, CityImageModelSelector } from "./CityImageModel.base"
import { CollectionMetadataModel, CollectionMetadataModelType } from "./CollectionMetadataModel"
import { collectionMetadataModelPrimitives, CollectionMetadataModelSelector } from "./CollectionMetadataModel.base"
import { CompanyDataModel, CompanyDataModelType } from "./CompanyDataModel"
import { companyDataModelPrimitives, CompanyDataModelSelector } from "./CompanyDataModel.base"
import { CompanyDataRangesModel, CompanyDataRangesModelType } from "./CompanyDataRangesModel"
import { companyDataRangesModelPrimitives, CompanyDataRangesModelSelector } from "./CompanyDataRangesModel.base"
import { CountryModel, CountryModelType } from "./CountryModel"
import { countryModelPrimitives, CountryModelSelector } from "./CountryModel.base"
import { CreateAccountPayloadModel, CreateAccountPayloadModelType } from "./CreateAccountPayloadModel"
import { createAccountPayloadModelPrimitives, CreateAccountPayloadModelSelector } from "./CreateAccountPayloadModel.base"
import { CredentialModel, CredentialModelType } from "./CredentialModel"
import { credentialModelPrimitives, CredentialModelSelector } from "./CredentialModel.base"
import { DeactivatePayloadModel, DeactivatePayloadModelType } from "./DeactivatePayloadModel"
import { deactivatePayloadModelPrimitives, DeactivatePayloadModelSelector } from "./DeactivatePayloadModel.base"
import { IsEnterprisePayloadModel, IsEnterprisePayloadModelType } from "./IsEnterprisePayloadModel"
import { isEnterprisePayloadModelPrimitives, IsEnterprisePayloadModelSelector } from "./IsEnterprisePayloadModel.base"
import { LoginPayloadModel, LoginPayloadModelType } from "./LoginPayloadModel"
import { loginPayloadModelPrimitives, LoginPayloadModelSelector } from "./LoginPayloadModel.base"
import { LogoutPayloadModel, LogoutPayloadModelType } from "./LogoutPayloadModel"
import { logoutPayloadModelPrimitives, LogoutPayloadModelSelector } from "./LogoutPayloadModel.base"
import { MembershipPlanModel, MembershipPlanModelType } from "./MembershipPlanModel"
import { membershipPlanModelPrimitives, MembershipPlanModelSelector } from "./MembershipPlanModel.base"
import { OrganizationModel, OrganizationModelType } from "./OrganizationModel"
import { organizationModelPrimitives, OrganizationModelSelector } from "./OrganizationModel.base"
import { RateModel, RateModelType } from "./RateModel"
import { rateModelPrimitives, RateModelSelector } from "./RateModel.base"
import { RedeemPayloadModel, RedeemPayloadModelType } from "./RedeemPayloadModel"
import { redeemPayloadModelPrimitives, RedeemPayloadModelSelector } from "./RedeemPayloadModel.base"
import { RedeemWithRegistrationFormPayloadModel, RedeemWithRegistrationFormPayloadModelType } from "./RedeemWithRegistrationFormPayloadModel"
import { redeemWithRegistrationFormPayloadModelPrimitives, RedeemWithRegistrationFormPayloadModelSelector } from "./RedeemWithRegistrationFormPayloadModel.base"
import { RedemptionModel, RedemptionModelType } from "./RedemptionModel"
import { redemptionModelPrimitives, RedemptionModelSelector } from "./RedemptionModel.base"
import { RedemptionCollectionModel, RedemptionCollectionModelType } from "./RedemptionCollectionModel"
import { redemptionCollectionModelPrimitives, RedemptionCollectionModelSelector } from "./RedemptionCollectionModel.base"
import { RemoveSubAccountPayloadModel, RemoveSubAccountPayloadModelType } from "./RemoveSubAccountPayloadModel"
import { removeSubAccountPayloadModelPrimitives, RemoveSubAccountPayloadModelSelector } from "./RemoveSubAccountPayloadModel.base"
import { ResetPasswordPayloadModel, ResetPasswordPayloadModelType } from "./ResetPasswordPayloadModel"
import { resetPasswordPayloadModelPrimitives, ResetPasswordPayloadModelSelector } from "./ResetPasswordPayloadModel.base"
import { SearchModel, SearchModelType } from "./SearchModel"
import { searchModelPrimitives, SearchModelSelector } from "./SearchModel.base"
import { SelectMembershipPlanPayloadModel, SelectMembershipPlanPayloadModelType } from "./SelectMembershipPlanPayloadModel"
import { selectMembershipPlanPayloadModelPrimitives, SelectMembershipPlanPayloadModelSelector } from "./SelectMembershipPlanPayloadModel.base"
import { SignUpPayloadModel, SignUpPayloadModelType } from "./SignUpPayloadModel"
import { signUpPayloadModelPrimitives, SignUpPayloadModelSelector } from "./SignUpPayloadModel.base"
import { UpdateCreditCardPayloadModel, UpdateCreditCardPayloadModelType } from "./UpdateCreditCardPayloadModel"
import { updateCreditCardPayloadModelPrimitives, UpdateCreditCardPayloadModelSelector } from "./UpdateCreditCardPayloadModel.base"
import { UpdateOnboardingStepPayloadModel, UpdateOnboardingStepPayloadModelType } from "./UpdateOnboardingStepPayloadModel"
import { updateOnboardingStepPayloadModelPrimitives, UpdateOnboardingStepPayloadModelSelector } from "./UpdateOnboardingStepPayloadModel.base"
import { UpdatePaymentMethodPayloadModel, UpdatePaymentMethodPayloadModelType } from "./UpdatePaymentMethodPayloadModel"
import { updatePaymentMethodPayloadModelPrimitives, UpdatePaymentMethodPayloadModelSelector } from "./UpdatePaymentMethodPayloadModel.base"
import { UpdateUserAddressPayloadModel, UpdateUserAddressPayloadModelType } from "./UpdateUserAddressPayloadModel"
import { updateUserAddressPayloadModelPrimitives, UpdateUserAddressPayloadModelSelector } from "./UpdateUserAddressPayloadModel.base"
import { UpdateUserCompanyDataPayloadModel, UpdateUserCompanyDataPayloadModelType } from "./UpdateUserCompanyDataPayloadModel"
import { updateUserCompanyDataPayloadModelPrimitives, UpdateUserCompanyDataPayloadModelSelector } from "./UpdateUserCompanyDataPayloadModel.base"
import { UpdateUserPayloadModel, UpdateUserPayloadModelType } from "./UpdateUserPayloadModel"
import { updateUserPayloadModelPrimitives, UpdateUserPayloadModelSelector } from "./UpdateUserPayloadModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { userModelPrimitives, UserModelSelector } from "./UserModel.base"
import { UserAddressModel, UserAddressModelType } from "./UserAddressModel"
import { userAddressModelPrimitives, UserAddressModelSelector } from "./UserAddressModel.base"
import { UserImageModel, UserImageModelType } from "./UserImageModel"
import { userImageModelPrimitives, UserImageModelSelector } from "./UserImageModel.base"
import { UserLogoutPayloadModel, UserLogoutPayloadModelType } from "./UserLogoutPayloadModel"
import { userLogoutPayloadModelPrimitives, UserLogoutPayloadModelSelector } from "./UserLogoutPayloadModel.base"
import { UserOnboardingDataModel, UserOnboardingDataModelType } from "./UserOnboardingDataModel"
import { userOnboardingDataModelPrimitives, UserOnboardingDataModelSelector } from "./UserOnboardingDataModel.base"
import { UserPaymentMethodModel, UserPaymentMethodModelType } from "./UserPaymentMethodModel"
import { userPaymentMethodModelPrimitives, UserPaymentMethodModelSelector } from "./UserPaymentMethodModel.base"
import { UserResendConfirmationPayloadModel, UserResendConfirmationPayloadModelType } from "./UserResendConfirmationPayloadModel"
import { userResendConfirmationPayloadModelPrimitives, UserResendConfirmationPayloadModelSelector } from "./UserResendConfirmationPayloadModel.base"
import { UserSendPasswordResetPayloadModel, UserSendPasswordResetPayloadModelType } from "./UserSendPasswordResetPayloadModel"
import { userSendPasswordResetPayloadModelPrimitives, UserSendPasswordResetPayloadModelSelector } from "./UserSendPasswordResetPayloadModel.base"
import { UserSendPasswordResetWithTokenPayloadModel, UserSendPasswordResetWithTokenPayloadModelType } from "./UserSendPasswordResetWithTokenPayloadModel"
import { userSendPasswordResetWithTokenPayloadModelPrimitives, UserSendPasswordResetWithTokenPayloadModelSelector } from "./UserSendPasswordResetWithTokenPayloadModel.base"
import { UserSubAccountModel, UserSubAccountModelType } from "./UserSubAccountModel"
import { userSubAccountModelPrimitives, UserSubAccountModelSelector } from "./UserSubAccountModel.base"
import { UserUpdatePasswordPayloadModel, UserUpdatePasswordPayloadModelType } from "./UserUpdatePasswordPayloadModel"
import { userUpdatePasswordPayloadModelPrimitives, UserUpdatePasswordPayloadModelSelector } from "./UserUpdatePasswordPayloadModel.base"
import { UserUpdatePasswordWithTokenPayloadModel, UserUpdatePasswordWithTokenPayloadModelType } from "./UserUpdatePasswordWithTokenPayloadModel"
import { userUpdatePasswordWithTokenPayloadModelPrimitives, UserUpdatePasswordWithTokenPayloadModelSelector } from "./UserUpdatePasswordWithTokenPayloadModel.base"


import { Order } from "./OrderEnum"
import { RedemptionType } from "./RedemptionTypeEnum"

export type AddFavoriteInput = {
  benefitSlug: string
  clientMutationId?: string
}
export type AddSubAccountInput = {
  email: string
  firstName: string
  lastName?: string
  clientMutationId?: string
}
export type CreateAccountInput = {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  clientMutationId?: string
}
export type DeactivateInput = {
  email: string
  clientMutationId?: string
}
export type IsEnterpriseInput = {
  numberOfSeats: number
  clientMutationId?: string
}
export type RedeemInput = {
  benefitSlug: string
  clientMutationId?: string
}
export type RedeemWithRegistrationFormInput = {
  benefitSlug: string
  userName: string
  userEmail: string
  userPhone?: string
  additionalInfo?: string
  clientMutationId?: string
}
export type RemoveSubAccountInput = {
  email: string
  clientMutationId?: string
}
export type ResetPasswordInput = {
  code: string
  password: string
  passwordConfirmation: string
  clientMutationId?: string
}
export type SelectMembershipPlanInput = {
  id: number
  clientMutationId?: string
}
export type SignUpInput = {
  email: string
  firstName: string
  lastName?: string
  companyName?: string
  companyWebsite?: string
  about?: string
  position?: string
  clientMutationId?: string
}
export type UpdateCreditCardInput = {
  name: string
  cardNumber: string
  expiryDate: string
  cvc: string
  promotionalCode?: string
  clientMutationId?: string
}
export type UpdateOnboardingStepInput = {
  step: string
  categories?: string[]
  clientMutationId?: string
}
export type UpdatePaymentMethodInput = {
  cardNumber?: string
  keepCardNumber?: boolean
  cvc: string
  expiryDate: string
  name: string
  clientMutationId?: string
}
export type UpdateUserAddressInput = {
  address: string
  apartment: string
  city: string
  country: string
  state: string
  zipCode: string
  clientMutationId?: string
}
export type UpdateUserCompanyDataInput = {
  companyName: string
  position: string
  annualRevenue: string
  fundingAcquiredSinceInception: string
  numberOfEmployees: string
  companyWebsite: string
  linkedinProfileUrl: string
  additionalInformation: string
  clientMutationId?: string
}
export type UpdateUserInput = {
  firstName?: string
  lastName?: string
  email?: string
  companyName?: string
  companyWebsite?: string
  about?: string
  position?: string
  isPhotoUploaded?: boolean
  address?: string
  apartment?: string
  city?: string
  country?: string
  state?: string
  zipCode?: string
  clientMutationId?: string
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {

}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryBenefits="queryBenefits",
queryBrands="queryBrands",
queryCategories="queryCategories",
queryCities="queryCities",
queryCompanyDataRanges="queryCompanyDataRanges",
queryCurrentUser="queryCurrentUser",
queryGetBenefit="queryGetBenefit",
queryGetBenefitsByCategory="queryGetBenefitsByCategory",
queryGetBenefitsByRegion="queryGetBenefitsByRegion",
queryGetBenefitsForYou="queryGetBenefitsForYou",
queryGetBrand="queryGetBrand",
queryGetCategory="queryGetCategory",
queryGetCity="queryGetCity",
queryGetCountries="queryGetCountries",
queryGetFeaturedBenefitsByCategory="queryGetFeaturedBenefitsByCategory",
queryGetFeaturedCities="queryGetFeaturedCities",
queryGetHomepageHeroBenefits="queryGetHomepageHeroBenefits",
queryGetHotelsByCity="queryGetHotelsByCity",
queryGetMembershipPlans="queryGetMembershipPlans",
queryGetPopularBenefits="queryGetPopularBenefits",
queryGetRelatedBenefits="queryGetRelatedBenefits",
queryGetResultsBySearch="queryGetResultsBySearch",
queryGetUserFavoriteBenefits="queryGetUserFavoriteBenefits",
queryGetUserRedemptions="queryGetUserRedemptions",
queryMembershipPlan="queryMembershipPlan",
querySubAccounts="querySubAccounts",
queryUserCheckPasswordToken="queryUserCheckPasswordToken",
queryUserConfirmAccount="queryUserConfirmAccount"
}
export enum RootStoreBaseMutations {
mutateAddFavorite="mutateAddFavorite",
mutateAddSubAccount="mutateAddSubAccount",
mutateCreateAccount="mutateCreateAccount",
mutateDeactivate="mutateDeactivate",
mutateIsEnterprise="mutateIsEnterprise",
mutateLogin="mutateLogin",
mutateLogout="mutateLogout",
mutateRedeemBenefit="mutateRedeemBenefit",
mutateRedeemOneTimeCode="mutateRedeemOneTimeCode",
mutateRedeemWithRegistrationFormBenefit="mutateRedeemWithRegistrationFormBenefit",
mutateRemoveSubAccount="mutateRemoveSubAccount",
mutateResetPassword="mutateResetPassword",
mutateSelectMembershipPlan="mutateSelectMembershipPlan",
mutateSignUp="mutateSignUp",
mutateUpdateCreditCard="mutateUpdateCreditCard",
mutateUpdateOnboardingStep="mutateUpdateOnboardingStep",
mutateUpdatePaymentMethod="mutateUpdatePaymentMethod",
mutateUpdateUser="mutateUpdateUser",
mutateUpdateUserAddress="mutateUpdateUserAddress",
mutateUpdateUserCompanyData="mutateUpdateUserCompanyData",
mutateUserLogin="mutateUserLogin",
mutateUserLogout="mutateUserLogout",
mutateUserResendConfirmation="mutateUserResendConfirmation",
mutateUserSendPasswordReset="mutateUserSendPasswordReset",
mutateUserSendPasswordResetWithToken="mutateUserSendPasswordResetWithToken",
mutateUserSignUp="mutateUserSignUp",
mutateUserUpdatePassword="mutateUserUpdatePassword",
mutateUserUpdatePasswordWithToken="mutateUserUpdatePasswordWithToken"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['AddFavoritePayload', () => AddFavoritePayloadModel], ['AddSubAccountPayload', () => AddSubAccountPayloadModel], ['Authenticatable', () => AuthenticatableModel], ['Benefit', () => BenefitModel], ['BenefitCollection', () => BenefitCollectionModel], ['BenefitImage', () => BenefitImageModel], ['Brand', () => BrandModel], ['BrandImage', () => BrandImageModel], ['Category', () => CategoryModel], ['CategoryImage', () => CategoryImageModel], ['CategoryMetadata', () => CategoryMetadataModel], ['City', () => CityModel], ['CityImage', () => CityImageModel], ['CollectionMetadata', () => CollectionMetadataModel], ['CompanyData', () => CompanyDataModel], ['CompanyDataRanges', () => CompanyDataRangesModel], ['Country', () => CountryModel], ['CreateAccountPayload', () => CreateAccountPayloadModel], ['Credential', () => CredentialModel], ['DeactivatePayload', () => DeactivatePayloadModel], ['IsEnterprisePayload', () => IsEnterprisePayloadModel], ['LoginPayload', () => LoginPayloadModel], ['LogoutPayload', () => LogoutPayloadModel], ['MembershipPlan', () => MembershipPlanModel], ['Organization', () => OrganizationModel], ['Rate', () => RateModel], ['RedeemPayload', () => RedeemPayloadModel], ['RedeemWithRegistrationFormPayload', () => RedeemWithRegistrationFormPayloadModel], ['Redemption', () => RedemptionModel], ['RedemptionCollection', () => RedemptionCollectionModel], ['RemoveSubAccountPayload', () => RemoveSubAccountPayloadModel], ['ResetPasswordPayload', () => ResetPasswordPayloadModel], ['Search', () => SearchModel], ['SelectMembershipPlanPayload', () => SelectMembershipPlanPayloadModel], ['SignUpPayload', () => SignUpPayloadModel], ['UpdateCreditCardPayload', () => UpdateCreditCardPayloadModel], ['UpdateOnboardingStepPayload', () => UpdateOnboardingStepPayloadModel], ['UpdatePaymentMethodPayload', () => UpdatePaymentMethodPayloadModel], ['UpdateUserAddressPayload', () => UpdateUserAddressPayloadModel], ['UpdateUserCompanyDataPayload', () => UpdateUserCompanyDataPayloadModel], ['UpdateUserPayload', () => UpdateUserPayloadModel], ['User', () => UserModel], ['UserAddress', () => UserAddressModel], ['UserImage', () => UserImageModel], ['UserLogoutPayload', () => UserLogoutPayloadModel], ['UserOnboardingData', () => UserOnboardingDataModel], ['UserPaymentMethod', () => UserPaymentMethodModel], ['UserResendConfirmationPayload', () => UserResendConfirmationPayloadModel], ['UserSendPasswordResetPayload', () => UserSendPasswordResetPayloadModel], ['UserSendPasswordResetWithTokenPayload', () => UserSendPasswordResetWithTokenPayloadModel], ['UserSubAccount', () => UserSubAccountModel], ['UserUpdatePasswordPayload', () => UserUpdatePasswordPayloadModel], ['UserUpdatePasswordWithTokenPayload', () => UserUpdatePasswordWithTokenPayloadModel]], [], "js"))
  .props({

  })
  .actions(self => ({
    // Get list of benefits
    queryBenefits(variables: { category?: string, order?: Order, page?: number, limit?: number }, resultSelector: string | ((qb: BenefitCollectionModelSelector) => BenefitCollectionModelSelector) = benefitCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ benefits: BenefitCollectionModelType}>(`query benefits($category: String, $order: Order, $page: Int, $limit: Int) { benefits(category: $category, order: $order, page: $page, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new BenefitCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get list of brands
    queryBrands(variables?: {  }, resultSelector: string | ((qb: BrandModelSelector) => BrandModelSelector) = brandModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ brands: BrandModelType[]}>(`query brands { brands {
        ${typeof resultSelector === "function" ? resultSelector(new BrandModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get list of categories
    queryCategories(variables?: {  }, resultSelector: string | ((qb: CategoryModelSelector) => CategoryModelSelector) = categoryModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ categories: CategoryModelType[]}>(`query categories { categories {
        ${typeof resultSelector === "function" ? resultSelector(new CategoryModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get list of cities
    queryCities(variables?: {  }, resultSelector: string | ((qb: CityModelSelector) => CityModelSelector) = cityModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ cities: CityModelType[]}>(`query cities { cities {
        ${typeof resultSelector === "function" ? resultSelector(new CityModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get company data ranges
    queryCompanyDataRanges(variables?: {  }, resultSelector: string | ((qb: CompanyDataRangesModelSelector) => CompanyDataRangesModelSelector) = companyDataRangesModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ companyDataRanges: CompanyDataRangesModelType}>(`query companyDataRanges { companyDataRanges {
        ${typeof resultSelector === "function" ? resultSelector(new CompanyDataRangesModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCurrentUser(variables?: {  }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ currentUser: UserModelType}>(`query currentUser { currentUser {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get detail of benefit
    queryGetBenefit(variables: { slug: string }, resultSelector: string | ((qb: BenefitModelSelector) => BenefitModelSelector) = benefitModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getBenefit: BenefitModelType}>(`query getBenefit($slug: String!) { getBenefit(slug: $slug) {
        ${typeof resultSelector === "function" ? resultSelector(new BenefitModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get benefits by category
    queryGetBenefitsByCategory(variables: { slug: string, page?: number, limit?: number }, resultSelector: string | ((qb: BenefitCollectionModelSelector) => BenefitCollectionModelSelector) = benefitCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getBenefitsByCategory: BenefitCollectionModelType}>(`query getBenefitsByCategory($slug: String!, $page: Int, $limit: Int) { getBenefitsByCategory(slug: $slug, page: $page, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new BenefitCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get benefits by region
    queryGetBenefitsByRegion(variables: { name: string, page?: number, limit?: number }, resultSelector: string | ((qb: BenefitCollectionModelSelector) => BenefitCollectionModelSelector) = benefitCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getBenefitsByRegion: BenefitCollectionModelType}>(`query getBenefitsByRegion($name: String!, $page: Int, $limit: Int) { getBenefitsByRegion(name: $name, page: $page, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new BenefitCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get benefits that are for you
    queryGetBenefitsForYou(variables?: {  }, resultSelector: string | ((qb: BenefitCollectionModelSelector) => BenefitCollectionModelSelector) = benefitCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getBenefitsForYou: BenefitCollectionModelType}>(`query getBenefitsForYou { getBenefitsForYou {
        ${typeof resultSelector === "function" ? resultSelector(new BenefitCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get detail of brand
    queryGetBrand(variables: { slug: string }, resultSelector: string | ((qb: BrandModelSelector) => BrandModelSelector) = brandModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getBrand: BrandModelType}>(`query getBrand($slug: String!) { getBrand(slug: $slug) {
        ${typeof resultSelector === "function" ? resultSelector(new BrandModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get detail of category
    queryGetCategory(variables: { slug: string }, resultSelector: string | ((qb: CategoryModelSelector) => CategoryModelSelector) = categoryModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getCategory: CategoryModelType}>(`query getCategory($slug: String!) { getCategory(slug: $slug) {
        ${typeof resultSelector === "function" ? resultSelector(new CategoryModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get info of city
    queryGetCity(variables: { slug: string }, resultSelector: string | ((qb: CityModelSelector) => CityModelSelector) = cityModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getCity: CityModelType}>(`query getCity($slug: String!) { getCity(slug: $slug) {
        ${typeof resultSelector === "function" ? resultSelector(new CityModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get all countries
    queryGetCountries(variables?: {  }, resultSelector: string | ((qb: CountryModelSelector) => CountryModelSelector) = countryModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getCountries: CountryModelType[]}>(`query getCountries { getCountries {
        ${typeof resultSelector === "function" ? resultSelector(new CountryModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get featured benefits by category
    queryGetFeaturedBenefitsByCategory(variables: { categorySlug: string, page?: number, limit?: number }, resultSelector: string | ((qb: BenefitCollectionModelSelector) => BenefitCollectionModelSelector) = benefitCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getFeaturedBenefitsByCategory: BenefitCollectionModelType}>(`query getFeaturedBenefitsByCategory($categorySlug: String!, $page: Int, $limit: Int) { getFeaturedBenefitsByCategory(categorySlug: $categorySlug, page: $page, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new BenefitCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get featured cities
    queryGetFeaturedCities(variables: { featured: boolean }, resultSelector: string | ((qb: CityModelSelector) => CityModelSelector) = cityModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getFeaturedCities: CityModelType[]}>(`query getFeaturedCities($featured: Boolean!) { getFeaturedCities(featured: $featured) {
        ${typeof resultSelector === "function" ? resultSelector(new CityModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get benefits that appear on the homepag hero
    queryGetHomepageHeroBenefits(variables?: {  }, resultSelector: string | ((qb: BenefitCollectionModelSelector) => BenefitCollectionModelSelector) = benefitCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getHomepageHeroBenefits: BenefitCollectionModelType}>(`query getHomepageHeroBenefits { getHomepageHeroBenefits {
        ${typeof resultSelector === "function" ? resultSelector(new BenefitCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get benefits by city
    queryGetHotelsByCity(variables: { slug: string, page?: number, limit?: number, order?: Order }, resultSelector: string | ((qb: BenefitCollectionModelSelector) => BenefitCollectionModelSelector) = benefitCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getHotelsByCity: BenefitCollectionModelType}>(`query getHotelsByCity($slug: String!, $page: Int, $limit: Int, $order: Order) { getHotelsByCity(slug: $slug, page: $page, limit: $limit, order: $order) {
        ${typeof resultSelector === "function" ? resultSelector(new BenefitCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get all membership plans
    queryGetMembershipPlans(variables?: {  }, resultSelector: string | ((qb: MembershipPlanModelSelector) => MembershipPlanModelSelector) = membershipPlanModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getMembershipPlans: MembershipPlanModelType[]}>(`query getMembershipPlans { getMembershipPlans {
        ${typeof resultSelector === "function" ? resultSelector(new MembershipPlanModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get benefits that are popular
    queryGetPopularBenefits(variables?: {  }, resultSelector: string | ((qb: BenefitCollectionModelSelector) => BenefitCollectionModelSelector) = benefitCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getPopularBenefits: BenefitCollectionModelType}>(`query getPopularBenefits { getPopularBenefits {
        ${typeof resultSelector === "function" ? resultSelector(new BenefitCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get benefits related to the benefit passed in
    queryGetRelatedBenefits(variables: { slug: string }, resultSelector: string | ((qb: BenefitModelSelector) => BenefitModelSelector) = benefitModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getRelatedBenefits: BenefitModelType[]}>(`query getRelatedBenefits($slug: String!) { getRelatedBenefits(slug: $slug) {
        ${typeof resultSelector === "function" ? resultSelector(new BenefitModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Search results
    queryGetResultsBySearch(variables: { term: string, page?: number, categorySlug?: string, order?: Order }, resultSelector: string | ((qb: SearchModelSelector) => SearchModelSelector) = searchModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getResultsBySearch: SearchModelType}>(`query getResultsBySearch($term: String!, $page: Int, $categorySlug: String, $order: Order) { getResultsBySearch(term: $term, page: $page, categorySlug: $categorySlug, order: $order) {
        ${typeof resultSelector === "function" ? resultSelector(new SearchModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get favorite benefits of user
    queryGetUserFavoriteBenefits(variables: { page?: number, limit?: number }, resultSelector: string | ((qb: BenefitCollectionModelSelector) => BenefitCollectionModelSelector) = benefitCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getUserFavoriteBenefits: BenefitCollectionModelType}>(`query getUserFavoriteBenefits($page: Int, $limit: Int) { getUserFavoriteBenefits(page: $page, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new BenefitCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get redemptions made by a user
    queryGetUserRedemptions(variables: { page?: number, limit?: number }, resultSelector: string | ((qb: RedemptionCollectionModelSelector) => RedemptionCollectionModelSelector) = redemptionCollectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getUserRedemptions: RedemptionCollectionModelType}>(`query getUserRedemptions($page: Int, $limit: Int) { getUserRedemptions(page: $page, limit: $limit) {
        ${typeof resultSelector === "function" ? resultSelector(new RedemptionCollectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get membership plan
    queryMembershipPlan(variables?: {  }, resultSelector: string | ((qb: MembershipPlanModelSelector) => MembershipPlanModelSelector) = membershipPlanModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ membershipPlan: MembershipPlanModelType}>(`query membershipPlan { membershipPlan {
        ${typeof resultSelector === "function" ? resultSelector(new MembershipPlanModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Get list of sub-accounts
    querySubAccounts(variables?: {  }, resultSelector: string | ((qb: UserSubAccountModelSelector) => UserSubAccountModelSelector) = userSubAccountModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ subAccounts: UserSubAccountModelType}>(`query subAccounts { subAccounts {
        ${typeof resultSelector === "function" ? resultSelector(new UserSubAccountModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryUserCheckPasswordToken(variables: { resetPasswordToken: string, redirectUrl?: string }, resultSelector: string | ((qb: AuthenticatableModelSelector) => AuthenticatableModelSelector) = authenticatableModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ userCheckPasswordToken: AuthenticatableModelType}>(`query userCheckPasswordToken($resetPasswordToken: String!, $redirectUrl: String) { userCheckPasswordToken(resetPasswordToken: $resetPasswordToken, redirectUrl: $redirectUrl) {
        ${typeof resultSelector === "function" ? resultSelector(new AuthenticatableModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryUserConfirmAccount(variables: { confirmationToken: string, redirectUrl: string }, resultSelector: string | ((qb: AuthenticatableModelSelector) => AuthenticatableModelSelector) = authenticatableModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ userConfirmAccount: AuthenticatableModelType}>(`query userConfirmAccount($confirmationToken: String!, $redirectUrl: String!) { userConfirmAccount(confirmationToken: $confirmationToken, redirectUrl: $redirectUrl) {
        ${typeof resultSelector === "function" ? resultSelector(new AuthenticatableModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateAddFavorite(variables: { input: AddFavoriteInput }, resultSelector: string | ((qb: AddFavoritePayloadModelSelector) => AddFavoritePayloadModelSelector) = addFavoritePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addFavorite: AddFavoritePayloadModelType}>(`mutation addFavorite($input: AddFavoriteInput!) { addFavorite(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddFavoritePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddSubAccount(variables: { input: AddSubAccountInput }, resultSelector: string | ((qb: AddSubAccountPayloadModelSelector) => AddSubAccountPayloadModelSelector) = addSubAccountPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addSubAccount: AddSubAccountPayloadModelType}>(`mutation addSubAccount($input: AddSubAccountInput!) { addSubAccount(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddSubAccountPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateAccount(variables: { input: CreateAccountInput }, resultSelector: string | ((qb: CreateAccountPayloadModelSelector) => CreateAccountPayloadModelSelector) = createAccountPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createAccount: CreateAccountPayloadModelType}>(`mutation createAccount($input: CreateAccountInput!) { createAccount(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new CreateAccountPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeactivate(variables: { input: DeactivateInput }, resultSelector: string | ((qb: DeactivatePayloadModelSelector) => DeactivatePayloadModelSelector) = deactivatePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deactivate: DeactivatePayloadModelType}>(`mutation deactivate($input: DeactivateInput!) { deactivate(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new DeactivatePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateIsEnterprise(variables: { input: IsEnterpriseInput }, resultSelector: string | ((qb: IsEnterprisePayloadModelSelector) => IsEnterprisePayloadModelSelector) = isEnterprisePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ isEnterprise: IsEnterprisePayloadModelType}>(`mutation isEnterprise($input: IsEnterpriseInput!) { isEnterprise(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new IsEnterprisePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateLogin(variables: { email: string, password: string }, resultSelector: string | ((qb: LoginPayloadModelSelector) => LoginPayloadModelSelector) = loginPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ login: LoginPayloadModelType}>(`mutation login($email: String!, $password: String!) { login(email: $email, password: $password) {
        ${typeof resultSelector === "function" ? resultSelector(new LoginPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateLogout(variables?: {  }, resultSelector: string | ((qb: LogoutPayloadModelSelector) => LogoutPayloadModelSelector) = logoutPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ logout: LogoutPayloadModelType}>(`mutation logout { logout {
        ${typeof resultSelector === "function" ? resultSelector(new LogoutPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRedeemBenefit(variables: { input: RedeemInput }, resultSelector: string | ((qb: RedeemPayloadModelSelector) => RedeemPayloadModelSelector) = redeemPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ redeemBenefit: RedeemPayloadModelType}>(`mutation redeemBenefit($input: RedeemInput!) { redeemBenefit(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new RedeemPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRedeemOneTimeCode(variables: { input: RedeemWithRegistrationFormInput }, resultSelector: string | ((qb: RedeemWithRegistrationFormPayloadModelSelector) => RedeemWithRegistrationFormPayloadModelSelector) = redeemWithRegistrationFormPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ redeemOneTimeCode: RedeemWithRegistrationFormPayloadModelType}>(`mutation redeemOneTimeCode($input: RedeemWithRegistrationFormInput!) { redeemOneTimeCode(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new RedeemWithRegistrationFormPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRedeemWithRegistrationFormBenefit(variables: { input: RedeemWithRegistrationFormInput }, resultSelector: string | ((qb: RedeemWithRegistrationFormPayloadModelSelector) => RedeemWithRegistrationFormPayloadModelSelector) = redeemWithRegistrationFormPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ redeemWithRegistrationFormBenefit: RedeemWithRegistrationFormPayloadModelType}>(`mutation redeemWithRegistrationFormBenefit($input: RedeemWithRegistrationFormInput!) { redeemWithRegistrationFormBenefit(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new RedeemWithRegistrationFormPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRemoveSubAccount(variables: { input: RemoveSubAccountInput }, resultSelector: string | ((qb: RemoveSubAccountPayloadModelSelector) => RemoveSubAccountPayloadModelSelector) = removeSubAccountPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ removeSubAccount: RemoveSubAccountPayloadModelType}>(`mutation removeSubAccount($input: RemoveSubAccountInput!) { removeSubAccount(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new RemoveSubAccountPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateResetPassword(variables: { input: ResetPasswordInput }, resultSelector: string | ((qb: ResetPasswordPayloadModelSelector) => ResetPasswordPayloadModelSelector) = resetPasswordPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ resetPassword: ResetPasswordPayloadModelType}>(`mutation resetPassword($input: ResetPasswordInput!) { resetPassword(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new ResetPasswordPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateSelectMembershipPlan(variables: { input: SelectMembershipPlanInput }, resultSelector: string | ((qb: SelectMembershipPlanPayloadModelSelector) => SelectMembershipPlanPayloadModelSelector) = selectMembershipPlanPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ selectMembershipPlan: SelectMembershipPlanPayloadModelType}>(`mutation selectMembershipPlan($input: SelectMembershipPlanInput!) { selectMembershipPlan(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new SelectMembershipPlanPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateSignUp(variables: { input: SignUpInput }, resultSelector: string | ((qb: SignUpPayloadModelSelector) => SignUpPayloadModelSelector) = signUpPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ signUp: SignUpPayloadModelType}>(`mutation signUp($input: SignUpInput!) { signUp(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new SignUpPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateCreditCard(variables: { input: UpdateCreditCardInput }, resultSelector: string | ((qb: UpdateCreditCardPayloadModelSelector) => UpdateCreditCardPayloadModelSelector) = updateCreditCardPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateCreditCard: UpdateCreditCardPayloadModelType}>(`mutation updateCreditCard($input: UpdateCreditCardInput!) { updateCreditCard(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateCreditCardPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOnboardingStep(variables: { input: UpdateOnboardingStepInput }, resultSelector: string | ((qb: UpdateOnboardingStepPayloadModelSelector) => UpdateOnboardingStepPayloadModelSelector) = updateOnboardingStepPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOnboardingStep: UpdateOnboardingStepPayloadModelType}>(`mutation updateOnboardingStep($input: UpdateOnboardingStepInput!) { updateOnboardingStep(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateOnboardingStepPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdatePaymentMethod(variables: { input: UpdatePaymentMethodInput }, resultSelector: string | ((qb: UpdatePaymentMethodPayloadModelSelector) => UpdatePaymentMethodPayloadModelSelector) = updatePaymentMethodPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updatePaymentMethod: UpdatePaymentMethodPayloadModelType}>(`mutation updatePaymentMethod($input: UpdatePaymentMethodInput!) { updatePaymentMethod(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdatePaymentMethodPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateUser(variables: { input: UpdateUserInput }, resultSelector: string | ((qb: UpdateUserPayloadModelSelector) => UpdateUserPayloadModelSelector) = updateUserPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateUser: UpdateUserPayloadModelType}>(`mutation updateUser($input: UpdateUserInput!) { updateUser(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateUserPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateUserAddress(variables: { input: UpdateUserAddressInput }, resultSelector: string | ((qb: UpdateUserAddressPayloadModelSelector) => UpdateUserAddressPayloadModelSelector) = updateUserAddressPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateUserAddress: UpdateUserAddressPayloadModelType}>(`mutation updateUserAddress($input: UpdateUserAddressInput!) { updateUserAddress(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateUserAddressPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateUserCompanyData(variables: { input: UpdateUserCompanyDataInput }, resultSelector: string | ((qb: UpdateUserCompanyDataPayloadModelSelector) => UpdateUserCompanyDataPayloadModelSelector) = updateUserCompanyDataPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateUserCompanyData: UpdateUserCompanyDataPayloadModelType}>(`mutation updateUserCompanyData($input: UpdateUserCompanyDataInput!) { updateUserCompanyData(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateUserCompanyDataPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUserLogin(variables: { email: string, password: string }, resultSelector: string | ((qb: LoginPayloadModelSelector) => LoginPayloadModelSelector) = loginPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ userLogin: LoginPayloadModelType}>(`mutation userLogin($email: String!, $password: String!) { userLogin(email: $email, password: $password) {
        ${typeof resultSelector === "function" ? resultSelector(new LoginPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUserLogout(variables?: {  }, resultSelector: string | ((qb: UserLogoutPayloadModelSelector) => UserLogoutPayloadModelSelector) = userLogoutPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ userLogout: UserLogoutPayloadModelType}>(`mutation userLogout { userLogout {
        ${typeof resultSelector === "function" ? resultSelector(new UserLogoutPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUserResendConfirmation(variables: { email: string, redirectUrl: string }, resultSelector: string | ((qb: UserResendConfirmationPayloadModelSelector) => UserResendConfirmationPayloadModelSelector) = userResendConfirmationPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ userResendConfirmation: UserResendConfirmationPayloadModelType}>(`mutation userResendConfirmation($email: String!, $redirectUrl: String!) { userResendConfirmation(email: $email, redirectUrl: $redirectUrl) {
        ${typeof resultSelector === "function" ? resultSelector(new UserResendConfirmationPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUserSendPasswordReset(variables: { email: string, redirectUrl: string }, resultSelector: string | ((qb: UserSendPasswordResetPayloadModelSelector) => UserSendPasswordResetPayloadModelSelector) = userSendPasswordResetPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ userSendPasswordReset: UserSendPasswordResetPayloadModelType}>(`mutation userSendPasswordReset($email: String!, $redirectUrl: String!) { userSendPasswordReset(email: $email, redirectUrl: $redirectUrl) {
        ${typeof resultSelector === "function" ? resultSelector(new UserSendPasswordResetPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUserSendPasswordResetWithToken(variables: { email: string, redirectUrl: string }, resultSelector: string | ((qb: UserSendPasswordResetWithTokenPayloadModelSelector) => UserSendPasswordResetWithTokenPayloadModelSelector) = userSendPasswordResetWithTokenPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ userSendPasswordResetWithToken: UserSendPasswordResetWithTokenPayloadModelType}>(`mutation userSendPasswordResetWithToken($email: String!, $redirectUrl: String!) { userSendPasswordResetWithToken(email: $email, redirectUrl: $redirectUrl) {
        ${typeof resultSelector === "function" ? resultSelector(new UserSendPasswordResetWithTokenPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUserSignUp(variables: { input: SignUpInput }, resultSelector: string | ((qb: SignUpPayloadModelSelector) => SignUpPayloadModelSelector) = signUpPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ userSignUp: SignUpPayloadModelType}>(`mutation userSignUp($input: SignUpInput!) { userSignUp(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new SignUpPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUserUpdatePassword(variables: { password: string, passwordConfirmation: string, currentPassword?: string }, resultSelector: string | ((qb: UserUpdatePasswordPayloadModelSelector) => UserUpdatePasswordPayloadModelSelector) = userUpdatePasswordPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ userUpdatePassword: UserUpdatePasswordPayloadModelType}>(`mutation userUpdatePassword($password: String!, $passwordConfirmation: String!, $currentPassword: String) { userUpdatePassword(password: $password, passwordConfirmation: $passwordConfirmation, currentPassword: $currentPassword) {
        ${typeof resultSelector === "function" ? resultSelector(new UserUpdatePasswordPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUserUpdatePasswordWithToken(variables: { password: string, passwordConfirmation: string, resetPasswordToken: string }, resultSelector: string | ((qb: UserUpdatePasswordWithTokenPayloadModelSelector) => UserUpdatePasswordWithTokenPayloadModelSelector) = userUpdatePasswordWithTokenPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ userUpdatePasswordWithToken: UserUpdatePasswordWithTokenPayloadModelType}>(`mutation userUpdatePasswordWithToken($password: String!, $passwordConfirmation: String!, $resetPasswordToken: String!) { userUpdatePasswordWithToken(password: $password, passwordConfirmation: $passwordConfirmation, resetPasswordToken: $resetPasswordToken) {
        ${typeof resultSelector === "function" ? resultSelector(new UserUpdatePasswordWithTokenPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  })))
