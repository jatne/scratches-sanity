import client from 'part:@sanity/base/client'

export function isUniqeAcrossType(slug, options) {
  const {document} = options;

  const id = document._id.replace(/^drafts\./, '');
  const type = document._type;

  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
    type,
  }

  const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug && _type == $type][0]._id)`;

  return client.fetch(query, params);
}
