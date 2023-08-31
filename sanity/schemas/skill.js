export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Tittel",
      description: "Navn på ferdighet",
      type: "string",
    },
    {
      name: "image",
      title: "Bilde",
      type: "image",
      options: {
        hotspot: true,
      }
    }
  ],
}
