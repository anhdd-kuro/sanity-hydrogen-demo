import {MenuIcon} from '@sanity/icons'
// import {defineField, defineType} from 'sanity'

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: MenuIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Navigation Slug',
    },
    {
      name: 'items',
      type: 'array',
      title: 'Navigation items',
      of: [{type: 'navigationItem'}],
    },
  ],
}
