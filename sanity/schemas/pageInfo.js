export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
      options: {
        hotspot: true,
      }
    },
    {
    name: "role",
    title: "Rolle",
    type: "string",
    },
    {
      name: "introText",
      title: "Intro tekst",
      type: "string",
    },
    {
      name: "frontImage",
      title: "Forside bilde",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "backgroundInformation",
      title: "Bakgrunns informasjon",
      type: "string",
    },
    {
      name: "profilePic",
      title: "Profilbilde",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "phoneNumber",
      title: "Mobilnummer",
      type: "string",
    },
    {
      name: "email",
      title: "E-mail",
      type: "string",
    },
    {
      name: "address",
      title: "Addresse",
      type: "string",
    },
   {
     name: "socials",
     title: "Sosiale medier",
     type: "array",
     of: [{ type: "reference", to: { type: "social" } }],
   }
  ],
}
