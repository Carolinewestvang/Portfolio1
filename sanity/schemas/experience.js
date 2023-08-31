export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: "company",
      title: "Bedrift",
      type: "string",
    },
    {
      name: "jobtitle",
      title: "Jobb tittel",
      type: "string",
    },
    {
      name: "companyImage",
      title: "Bilde av bedrift",
      type: "image",
      options: {
        hotspot: true,
      }
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
      name: "isCurrentlyWorkingHere",
      title: "Jobber her nå",
      type: "boolean",
    },
  ],
}
