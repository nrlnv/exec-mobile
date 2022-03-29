/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum RedemptionType {
  referral_link="referral_link",
general_code="general_code",
personalized_code="personalized_code",
registration="registration"
}

/**
* RedemptionType
*/
export const RedemptionTypeEnumType = types.enumeration("RedemptionType", [
        "referral_link",
  "general_code",
  "personalized_code",
  "registration",
      ])
