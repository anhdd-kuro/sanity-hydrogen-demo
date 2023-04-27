import {MenuIcon} from '@sanity/icons'

export default {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  icon: MenuIcon,
  fields: [
    {
      name: 'self',
      type: 'linkInternal',
      title: 'Self',
    },
    {
      name: 'items',
      type: 'array',
      title: 'Navigation items',
      of: [{type: 'navigationItem'}],
    },
  ],
}
