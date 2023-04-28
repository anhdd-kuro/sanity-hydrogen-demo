import { ImagesIcon } from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    {
      name: 'slug',
      type: 'string',
      title: 'Navigation Slug',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
    },
    {
      name: 'linkTo',
      type: 'reference',
      title: 'Link to',
      to: [{type: 'collection'}],
    },
  ],
})
