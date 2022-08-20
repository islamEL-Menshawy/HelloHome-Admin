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
  // {
  //   id: 'sample',
  //   title: 'Sample',
  //   translate: 'MENU.SAMPLE',
  //   type: 'item',
  //   icon: 'file',
  //   url: 'sample'
  // },
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
    icon: 'plus-square',
    url: 'compounds'
  }
]
