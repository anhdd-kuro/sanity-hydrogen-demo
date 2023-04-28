import { defineType } from 'sanity'

export default defineType({
  name: 'templateCampaign',
  title: 'Template Campaign',
  type: 'object',
  fields: [
    {
      name: 'productsIntro',
      type: 'array',
      title: 'Products Introduction',
      description: 'Products Introduction',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            },
            {
              name: 'image',
              type: 'image',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            }
          ],
          preview: {
            select: {
              title: 'name',
            }
          }
        },
      ],
    },
    {
      name: 'banners',
      type: 'array',
      description: 'Banners',
      of: [
        {
          type: 'reference',
          to: [{type: 'banner'}]
        }
      ],
    },
  ]
})
