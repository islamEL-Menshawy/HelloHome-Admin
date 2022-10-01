import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'types',
    title: 'Types',
    type: 'item',
    icon: 'bar-chart-2',
    url: 'types'
  },
  {
    id: 'locations',
    title: 'Locations',
    type: 'item',
    icon: 'map-pin',
    url: 'locations'
  },
  {
    id: 'amenities',
    title: 'Amenities',
    type: 'item',
    icon: 'plus-square',
    url: 'amenities'
  },
  {
    id: 'compounds',
    title: 'Compounds',
    type: 'item',
    icon: 'grid',
    url: 'compounds'
  },
  {
    id: 'units',
    title: 'Units',
    type: 'item',
    icon: 'tag',
    url: 'units'
  },
  {
    id: 'content',
    title: 'Content Editor',
    type: 'section',
    icon: 'image',
    children: [
      {
        id: 'home',
        title: 'Home Page',
        type: 'item',
        icon: 'home',
        url: 'content/home'
      },
      {
        id: 'slider',
        title: 'Slider',
        type: 'item',
        icon: 'columns',
        url: 'slider'
      },
      {
        id: 'about',
        title: 'About Page',
        type: 'item',
        icon: 'command',
        url: 'content/about'
      },
      {
        id: 'service',
        title: 'Service Page',
        type: 'item',
        icon: 'check-circle',
        url: 'content/service'
      },
      {
        id: 'contact',
        title: 'Contact Page',
        type: 'item',
        icon: 'codepen',
        url: 'content/contact'
      },
      {
        id: 'config',
        title: 'Social Media',
        type: 'item',
        icon: 'cpu',
        url: 'content/config'
      }
      ]
  },
  {
    id: 'site-data',
    title: 'Site Data',
    type: 'section',
    icon: 'image',
    children: [
      {
        id: 'newsletter',
        title: 'Newsletter',
        type: 'item',
        icon: 'voicemail',
        url: 'site-data/newsletter'
      },
      {
        id: 'contact-us',
        title: 'Contact Us',
        type: 'item',
        icon: 'cast',
        url: 'site-data/contact'
      },
      {
        id: 'register-interest',
        title: 'Register Interest',
        type: 'item',
        icon: 'award',
        url: 'site-data/register-interest'
      }
      ]
  }
]
