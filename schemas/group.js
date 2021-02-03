export default {
  name: 'group',
  title: 'Group',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image', options: {
        hotspot: true,
        storeOriginalFilename: false,
      }}],
    },
    {
      name: 'sound',
      title: 'Sound',
      type: 'array',
      of: [{type: 'file', options: {
        storeOriginalFilename: false,
        accept: 'audio/*',
      }}],
    }
  ],
  preview: {
    select: {
      title: 'title',
      category0: 'category.0.name',
      category1: 'category.1.name',
      category2: 'category.2.name',
      sound: 'sound',
      media: 'image.0',
      images: 'image'
    },
    prepare({title, category0, category1, category2, sound, media, images}) {
      const category = [category0, category1].filter(el => el).join(' / ');
      let subtitle = !Boolean(sound) ? '🔕 ' : '';
      subtitle += Boolean(category2) ? `${category} / + ...` : category;
      const imagesTotal = Object.keys(images).filter(images => images !== 'undefined').length;


      return {
        title: `${title} (🖼️ ${imagesTotal})`,
        subtitle,
        media
      }
    }
  }
}
