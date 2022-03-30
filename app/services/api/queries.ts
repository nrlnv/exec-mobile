import { gql } from '@apollo/client'

//  #TODO -> Work on using gql fragments instead of repeating types.

export const GET_HOMEPAGE_HERO_BENEFITS = gql`
  query GetHomepageHeroBenefits {
    getHomepageHeroBenefits {
      collection {
        name
        slug
        benefitSummary
        description
        category {
          name
        }
        images {
          medium
          large
        }
      }
    }
  }
`

export const GET_USER_FAVORITE_BENEFITS = gql`
  query GetUserFavoriteBenefits {
    getUserFavoriteBenefits {
      metadata {
        totalCount
      }
      collection {
        benefitSummary
        city
        country
        description
        name
        region
        slug
        otherRateOffer
        category {
          name
          slug
        }
        images {
          medium
          thumbnail
        }
      }
    }
  }
`

export const GET_USER_REDEMPTIONS = gql`
  query GetUserRedemptions($limit: Int, $page: Int) {
    getUserRedemptions(limit: $limit, page: $page) {
      collection {
        createdAt
        withinThisYear
        benefit {
          name
          slug
          category {
            name
          }
          images {
            thumbnail
          }
        }
      }
      metadata {
        currentPage
        totalCount
        totalPages
      }
    }
  }
`

export const GET_FEATURED_CITIES = gql`
  query ($featured: Boolean!) {
    getFeaturedCities(featured: $featured) {
      childrenCount
      depth
      featured
      name
      slug
      lft
      rgt
      image {
        medium
      }
    }
  }
`

export const GET_CITIES = gql`
  query {
    cities {
      featured
      name
      slug
      lft
      rgt
      image {
        medium
      }
      name
      slug
      region
    }
  }
`

export const GET_CATEGORY = gql`
  query ($slug: String!) {
    getCategory(slug: $slug) {
      name
      slug
      image {
        original
        carousel
      }
    }
  }
`

export const GET_HOTELS_BY_CITY = gql`
  query ($slug: String!, $page: Int, $limit: Int, $order: Order) {
    getHotelsByCity(slug: $slug, page: $page, limit: $limit, order: $order) {
      collection {
        id
        additionalInformation
        address1
        address2
        keyInsights
        benefits
        category {
          name
          slug
        }
        otherRateOffer
        city
        country
        benefitSummary
        description
        shortDescription
        featured
        images {
          medium
        }
        favorited
        latitude
        longitude
        name
        postalCode
        rates {
          category
          execRate
          standardRate
        }
        region
        slug
        isNew
      }
      metadata {
        currentPage
        limitValue
        totalCount
        totalPages
      }
    }
  }
`

export const GET_CITY = gql`
  query ($slug: String!) {
    getCity(slug: $slug) {
      name
      image {
        medium
        large
      }
    }
  }
`

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      slug
      image {
        carousel
      }
    }
  }
`

export const GET_BENEFITS = gql`
  query Benefits($page: Int, $limit: Int, $category: String, $order: Order, $city: String, $scope: String) {
    benefits(page: $page, limit: $limit, category: $category, order: $order, city: $city,  scope: $scope) {
      collection {
        id
        additionalInformation
        address1
        address2
        keyInsights
        benefits
        category {
          name
          slug
        }
        city
        cityId
        country
        description
        shortDescription
        benefitSummary
        otherRateOffer
        featured
        images {
          medium
          thumbnail
        }
        favorited
        latitude
        longitude
        name
        postalCode
        rates {
          category
          execRate
          standardRate
        }
        region
        slug
        isNew
      }
      metadata {
        currentPage
        limitValue
        totalCount
        totalPages
      }
    }
  }
`

export const GET_BENEFIT = gql`
  query ($slug: String!) {
    getBenefit(slug: $slug) {
      id
      additionalInformation
      termsAndCondition
      address1
      address2
      keyInsights
      benefits
      benefitSummary
      brand {
        name
      }
      website
      category {
        name
        slug
      }
      city
      cityId
      country
      description
      featured
      favorited
      images {
        medium
        large
      }
      latitude
      longitude
      name
      postalCode
      rates {
        category
        execRate
        standardRate
      }
      otherRateOffer
      redemptionInstruction
      redemptionType
      hasCode
      hasLink
      region
      slug
    }
  }
`

export const GET_CURRENT_USER = gql`
  query getCurrentUser {
    currentUser {
      id
      about
      companyName
      companyWebsite
      createdAt
      currentYearRedemptionsCount
      email
      firstName
      isDemo
      lastName
      lastSignInAt
      maxSubAccountCount
      membershipId
      position
      preApplicationStep
      redemptionsCount
      subAccountCount
      address {
        address
        apartment
        city
        country
        state
        zipCode
      }
      onboardingData {
        stepName
        stepNumber
        stepsCount
      }
      photo {
        original
        thumbnail
      }
      organization {
        name
      }
      subAccounts {
        firstName
        lastName
        email
        createdAt
      }
      favoriteBenefits {
        category {
          name
          slug
        }
        images {
          medium
        }
        city
        country
        description
        name
        region
        slug
      }
    }
  }
`

export const GET_POPULAR_BENEFITS = gql`
  query getPopularBenefits {
    getPopularBenefits {
      collection {
        additionalInformation
        address1
        address2
        keyInsights
        benefits
        category {
          name
          slug
        }
        city
        country
        description
        featured
        images {
          medium
          thumbnail
        }
        otherRateOffer
        benefitSummary
        latitude
        longitude
        name
        postalCode
        rates {
          category
          execRate
          standardRate
        }
        region
        slug
      }
    }
  }
`

export const GET_BENEFITS_FOR_YOU = gql`
  query getBenefitsForYou {
    getBenefitsForYou {
      collection {
        category {
          name
          slug
        }
        otherRateOffer
        benefitSummary
        description
        featured
        rates {
          category
          execRate
          standardRate
        }
        images {
          medium
          thumbnail
        }
        name
        slug
      }
    }
  }
`

export const GET_BRANDS = gql`
  query brands {
    brands {
      name
      slug
      image {
        original
        thumbnail
      }
    }
  }
`

export const GET_FEATURED_BENEFITS_BY_CATEGORY = gql`
  query ($categorySlug: String!) {
    getFeaturedBenefitsByCategory(categorySlug: $categorySlug) {
      collection {
        id
        name
        city
        slug
        images {
          medium
          thumbnail
        }
        rates {
          category
          execRate
          standardRate
        }
        otherRateOffer
        benefitSummary
      }
    }
  }
`

export const GET_SUB_ACCOUNTS = gql`
  query {
    subAccounts {
      accounts {
        firstName
        lastName
        email
        createdAt
      }
      remaining
    }
  }
`

export const GET_COUNTRIES = gql`
  query {
    getCountries {
      id
      name
    }
  }
`

export const GET_MEMBERSHIP_PLANS = gql`
  query {
    getMembershipPlans {
      id
      maxSubuserNumber
      numberOfSeats
      oneTimeInitiationFee
      price
    }
  }
`

export const GET_MEMBERSHIP_PLAN = gql`
  query {
    membershipPlan {
      id
      price
      maxSubuserNumber
      numberOfSeats
      oneTimeInitiationFee
      totalPrice
      customPlan
    }
  }
`

export const GET_COMPANY_RANGES = gql`
  query {
    companyDataRanges {
      annualRevenue {
        id
        name
      }
      fundingAcquiredSinceInception {
        id
        name
      }
      numberOfEmployees {
        id
        name
      }
    }
  }
`

export const GET_PAYMENT_METHOD = gql`
  query getPaymentMethod {
    currentUser {
      paymentMethod {
        cardType
        expirationMonth
        expirationYear
        lastFourDigitsOfCard
        name
      }
    }
  }
`
