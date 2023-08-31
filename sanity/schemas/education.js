export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: "school",
      title: "Skole",
      type: "string",
    },
    {
      name: "schoolImage",
      title: "Bilde av skole",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "degree",
      title: "Linje",
      type: "string",
    },
    {
      name: "dateStarted",
      title: "Dato startet",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "Dato sluttet",
      type: "date",
    },
    {
      name: "isCurrentlyStudyingHere",
      title: "Studerer her nå",
      type: "boolean",
    },
  ],
}
