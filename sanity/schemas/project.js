export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Tittel",
      description: "Prosjektets tittel",
      type: "string",
    },
    {
      name: "image",
      title: "Bilde 1",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "image1",
      title: "Bilde 2",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "image2",
      title: "Bilde 3",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "summary",
      title: "Oppsummering",
      type: "text",
    },
    {
      name: "technologies",
      title: "Teknologier brukt",
      type: "array",
      of: [{ type: "reference", to: { type: "skill"} }],
    },
    {
      name: "linkToProject",
      title: "Link til prosjekt 1",
      type: "url",
    },
    {
      name: "linkReplacement",
      description: "Bruk gjerne prosjektets navn, eller noe beskrivende for prosjektet",
      title: "Link navn prosjekt 1",
      type: "string",
    },
    {
      name: "linkToProject1",
      title: "Link til prosjekt 2",
      type: "url",
    },
    {
      name: "linkReplacement1",
      description: "Bruk gjerne prosjektets navn, eller noe beskrivende for prosjektet",
      title: "Link navn prosjekt 2",
      type: "string",
    },
    {
      name: "linkToProject2",
      title: "Link til prosjekt 3",
      type: "url",
    },
    {
      name: "linkReplacement2",
      description: "Bruk gjerne prosjektets navn, eller noe beskrivende for prosjektet",
      title: "Link navn prosjekt 3",
      type: "string",
    },
    {
      name: "subject",
      title: "Fag",
      type: "string",
    },
    {
      name: "semester",
      title: "Semester og år",
      type: "string",
    },
    {
      name: "grade",
      title: "Karakter",
      type: "string",
    },
  ],
}
