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
        icon: 'image',
        url: 'content/home'
      },
      {
        id: 'slider',
        title: 'Slider',
        type: 'item',
        icon: 'image',
        url: 'slider'
      }
      ]
  }
]
