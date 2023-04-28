import { CopyIcon } from '@sanity/icons'
import {defineField} from 'sanity'
import {validateSlug} from '../../utils/validateSlug'

export default defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: CopyIcon,
  // groups: [
  //   {
  //     name: 'theme',
  //     title: 'Theme',
  //   },
  //   {
  //     default: true,
  //     name: 'editorial',
  //     title: 'Editorial',
  //   },
  //   {
  //     name: 'seo',
  //     title: 'SEO',
  //   },
  // ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    {
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      // @ts-ignore - TODO - fix this TS error
      validation: validateSlug,
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    // Template
    defineField({
      name: 'template',
      title: 'What template you want to use ?',
      type: "string",
      options: {
        list: [
          { title: "Basic", value: "basic" },
          { title: "Campaign", value: "campaign" },
        ],
        layout: "radio",
        direction: "horizontal"
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'campaign',
      title: 'Campaign',
      type: "templateCampaign",
      hidden: ({ document, value }) => document?.template !== 'campaign',
    }),
    defineField({
      name: 'basic',
      title: 'Basic',
      type: "templateBasic",
      hidden: ({ document, value }) => document?.template !== 'basic',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    }
  }
})
