export default {
  name: 'item',
  title: 'Item',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
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
      name: 'sound',
      title: 'Sound',
      type: 'file',
      options: {
        storeOriginalFilename: false,
        accept: 'audio/*',
      },
    }
  ],
  preview: {
    select: {
      category0: 'category.0.name',
      category1: 'category.1.name',
      category2: 'category.2.name',
      sound: 'sound',
      media: 'image',
    },
    prepare({category0, category1, category2, sound, media}) {
      const category = [category0, category1, category2].filter(el => el).join(' / ');
      const subtitle = !Boolean(sound) ? '🔕 no_sound' : '';

      return {
        title: Boolean(category2) ? `${category} / + ...` : category,
        subtitle,
        media
      }
    }
  }
}
