import { BenefitPreviewDTO } from "../types"
import { Benefit, Maybe, Rate } from "../types/generatedGql"

export const getBenefitPreviewData = (benefit: Benefit): BenefitPreviewDTO => ({
    id: benefit?.id,
    slug: benefit?.slug,
    name: benefit?.name,
    city: benefit?.city,
    shortDescription: benefit?.description?.slice(0, 15),
    longDescription: benefit?.description,
    category: benefit?.category?.name,
    images: [benefit?.images[0]?.medium],
    benefitSummary: benefit?.benefitSummary,
    otherRateOffer: benefit?.otherRateOffer,
    rates: benefit?.rates,
    favorited: benefit?.favorited,
    redeemed: benefit?.redeemed,
  })

export const configBenefitsForPreview = (data: Benefit[]): BenefitPreviewDTO[] => {
    if (!data) return []
    return data.map((benefit) => getBenefitPreviewData(benefit))
  }

  export const getBenefitRatesText = (rates: Maybe<Rate>[]): string => {
    if (!rates) return ''
    return rates?.[0] ? `Rates from $${rates[0]?.execRate}` : ''
  }
  
  export const getBenefitInfo = (benefit: Maybe<Benefit | BenefitPreviewDTO>): string => {
    if (!benefit) return ''
    const { rates, otherRateOffer, benefitSummary } = benefit
    return rates?.length ? getBenefitRatesText(rates) : otherRateOffer || benefitSummary || ''
  }