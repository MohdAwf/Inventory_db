module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', "mcQMcTrZkcMqWwYoJlNo2w=="),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT',"mcQMcTrZkcMqWwYoJlNo2w=="),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', "mcQMcTrZkcMqWwYoJlNo2w=="),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
