import { isUniqeAcrossType as isUnique } from '../lib/utility';

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLenght: 100,
        isUnique: isUnique,
        slugify: input => input
                          .toLowerCase()
                          .replace(/\s+/g, '-')
                          .slice(0, 200),
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'background',
      title: 'Scratch background',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}]
    }
  ],
}
