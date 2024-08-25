const myKeyA = "superSecureRandomKey1234567890"
const myKeyB = "anotherSecureKey9876543210"

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [myKeyA, myKeyB]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
