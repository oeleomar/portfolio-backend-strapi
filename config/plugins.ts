export default ({ env }) => ({
  upload: {
    config: {
      sizeLimit: 250 * 1024 * 1024, // 256mb in bytes
      providerOptions: {
        localServer: {
          maxage: 300000,
        },
      },
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 10, // Default is 5
    },
  },
});
