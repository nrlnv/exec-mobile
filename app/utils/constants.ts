import { ADVENTURES, BUSINESS, EXPERIENCES, HOTELS, INVITE, LIFESTYLE, LOG_OUT, PASSWORD, PROFILE, RELAX, RESTAURANTS, SUB_ACCOUNT, SUPPORT, TRAVEL } from "../../assets/images"
import { color } from "../theme"

export const timeConst = [
    {
      id: 0,
      text: 'This Year'
    },
    {
      id: 1,
      text: 'Last Year'
    },
    {
      id: 2,
      text: 'All Time'
    },
  ]
  
  export const sort1const = [
    {
        id: 0,
        text: 'NEW',
        style: {borderTopLeftRadius: 100, borderBottomLeftRadius: 100}
    },
    {
        id: 1,
        text: 'FAVORITED',
        style: {borderColor: color.palette.neutral300}
    },
    {
        id: 2,
        text: 'REDEEMED',
        style: {borderTopRightRadius: 100, borderBottomRightRadius: 100}
    },
  ]
  
  export const sort2const = [
    {
        id: 0,
        text: 'LEAST EXPENSIVE',
        style: {borderTopLeftRadius: 100, borderBottomLeftRadius: 100}
    },
    {
        id: 1,
        text: 'MOST EXPENSIVE',
        style: {borderTopRightRadius: 100, borderBottomRightRadius: 100}
    },
  ]

  export const filterCategoryConst = [
    {
        id: 0,
        text: 'Hotels',
        icon: HOTELS
    },
    {
        id: 1,
        text: 'Lifestyle',
        icon: LIFESTYLE
    },
    {
        id: 2,
        text: 'Travel',
        icon: TRAVEL
    },
    {
        id: 3,
        text: 'Experiences',
        icon: EXPERIENCES
    },
    {
        id: 4,
        text: 'Business',
        icon: BUSINESS
    },
    {
        id: 5,
        text: 'Restaurants',
        icon: RESTAURANTS
    },
    {
        id: 6,
        text: 'Adventures',
        icon: ADVENTURES
    },
    {
        id: 7,
        text: 'Relax',
        icon: RELAX
    },
  ]

  export const accountItems = [
    {
        id: 0,
        text: 'Your Profile',
        icon: PROFILE
    },
    {
        id: 1,
        text: 'Sub-Accounts',
        icon: SUB_ACCOUNT
    },
    {
        id: 2,
        text: 'Member Support',
        icon: SUPPORT
    },
    {
        id: 3,
        text: 'Invite to Exec',
        icon: INVITE
    },
    {
        id: 4,
        text: 'Password',
        icon: PASSWORD
    },
    {
        id: 5,
        text: 'Log Out',
        icon: LOG_OUT
    },
  ]

  export const exploreCategoryConst = [
    {
        id: 0,
        text: 'Hotels',
        icon: HOTELS
    },
    {
        id: 1,
        text: 'Lifestyle',
        icon: LIFESTYLE
    },
    {
        id: 2,
        text: 'Travel',
        icon: TRAVEL
    },
    {
        id: 3,
        text: 'Experiences',
        icon: EXPERIENCES
    },
    {
        id: 4,
        text: 'Restaurants',
        icon: RESTAURANTS
    },
  ]

  export const destinationsConst = [
      {
          id: 0,
          text: 'All',
      },
      {
        id: 1,
        text: 'America',
    },
    {
        id: 2,
        text: 'Europe',
    },
    {
        id: 3,
        text: 'Asia',
    },
  ]

  export const filtersConst = [
      {
          id: 0,
          text: 'All'
      },
      {
        id: 1,
        text: 'Popular'
    },
    {
        id: 2,
        text: 'Featured'
    },
  ]