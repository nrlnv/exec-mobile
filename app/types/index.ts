import { Benefit, Maybe } from 'types/generatedGql'

export interface BenefitImages {
  original?: string
  medium?: string
  thumbnail?: string
}

export interface Redemption {
  createdAt: string
  withinThisYear: boolean
  benefit: {
    name: string
    slug: string
    category: {
      name: string
    }
    images: BenefitImages[]
  }
}

export interface User {
  createdAt: string
  firstName: string
  lastName: string
  email: string
  membershipId: string
  photo: {
    original: string
    thumbnail: string
  }
  organization: {
    name: string
  }
}

export enum CategorySlug {
  TRAVEL = 'travel',
  HOTELS = 'hotels',
  LIFESTYLE = 'lifestyle',
  BUSINESS = 'business',
  EXPERIENCE = 'experiences',
}

export type BenefitPreviewDTO = Pick<
  Benefit,
  'id' | 'slug' | 'name' | 'rates' | 'otherRateOffer' | 'benefitSummary' | 'city'
> & {
  images: [Maybe<string>]
  thumbnail?: string
  shortDescription?: Maybe<string>
  longDescription?: Maybe<string>
  category?: Maybe<string>
}

