import React from 'react'
import { INVITE, LOG_OUT, PASSWORD, PROFILE, SUB_ACCOUNT, SUPPORT } from "../../assets/images"
import ArrowRightBig from '../../assets/svgs/arrow_right_big'
import Business from '../../assets/svgs/business'
import Experiences from '../../assets/svgs/experiences'
import Hotel from "../../assets/svgs/hotel"
import Lifestyle from '../../assets/svgs/lifestyle'
import Travel from '../../assets/svgs/travel'
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
        icon: <Hotel color={color.palette.black}/>
    },
    {
        id: 1,
        text: 'Lifestyle',
        icon: <Lifestyle color={color.palette.black}/>
    },
    {
        id: 2,
        text: 'Travel',
        icon: <Travel color={color.palette.black}/>
    },
    {
        id: 3,
        text: 'Experiences',
        icon: <Experiences color={color.palette.black}/>
    },
    {
        id: 4,
        text: 'Business',
        icon: <Business color={color.palette.black}/>
    },
    {
        id: 5,
        text: 'View All',
        icon: <ArrowRightBig color={color.palette.black}/>
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


  export const destinationsConst = [
      {
          id: 0,
          text: 'Popular',
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

  export const categoryDescription = (category: string) => {
      switch (category) {
            case 'Hotels':
                return 'The EXEC Hotels & Resorts Collection curates the most sought-after hotels and resorts globally.'
            case 'Lifestyle':
                return 'Be fit. Be well. Be fashionable. Be the leader. Look and feel your best with the EXEC Lifestyle benefits program.'
            case 'Business':
                return 'EXEC Business benefits provide you access the essentials to run your business and help it grow.'
            case 'Experiences':
                return 'Access is priceless. Enjoy benefits on tickets, unique experiences, one-of-a-kind events and more with the EXEC Experiences program.'
            case 'Travel':
                return 'The EXEC Travel Program partners with leading travel brands to ease the stress of business and leisure travel.'
            case 'All Benefits':
                return 'The EXEC program curates the finest travel, hotel, and lifestyle benefits to upgrade your life and give you access to some of the most exclusive privileges and experiences in the world.'
            default: 
                return ''
      }
  }