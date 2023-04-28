import { defineType} from 'sanity'

export default defineType({
  name: 'templateBasic',
  title: 'Template Basic',
  type: 'object',
  fields: [
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
