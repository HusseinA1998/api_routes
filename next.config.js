const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        DB_USER: "admin",
        DB_PASSWORD: "MbBsgOa28dbG2eHj",
      },
      // basePath:'/doggy'
      // async redirects() {
      //   return [
      //     {
      //       source: "/post",
      //       destination: "/",
      //       permanent: true,
      //     },
      //   ];
      // },
      async headers() {
        return [
          {
            source: "/post",
            headers: [
              {
                key: "x-awesome",
                value: "my awesome value",
              },
              {
                key: "x-another-custom-header",
                value: "my other custom header value",
              },
            ],
          },
        ];
      },
    };
  }
  return {
    env: {
      DB_USER: "admin",
      DB_PASSWORD: "MbBsgOa28dbG2eHj",
    },
  };
};
