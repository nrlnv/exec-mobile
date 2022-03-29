import { BenefitPreviewDTO } from "../types"
import { Benefit } from "../types/generatedGql"

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
  })

export const configBenefitsForPreview = (data: Benefit[]): BenefitPreviewDTO[] => {
    if (!data) return []
    return data.map((benefit) => getBenefitPreviewData(benefit))
  }