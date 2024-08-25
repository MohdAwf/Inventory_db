const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'mysql'); // Use 'mysql'

  const connections = {
    mysql: {
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'), // Localhost
        port: env.int('DATABASE_PORT', 3306), // Default MySQL port
        database: env('DATABASE_NAME', 'inventory_db'), // Your database name
        user: env('DATABASE_USERNAME', 'root'), // Default XAMPP username
        password: env('DATABASE_PASSWORD', ''), // Default XAMPP password (usually empty)
        ssl: false, // Disable SSL for local development
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    // mysql2: {
    //   connection: {
    //     host: env('DATABASE_HOST', '127.0.0.1'),
    //     port: env.int('DATABASE_PORT', 3306),
    //     database: env('DATABASE_NAME', 'inventory_db'),
    //     user: env('DATABASE_USERNAME', 'root'),
    //     password: env('DATABASE_PASSWORD', ''),
    //     ssl: false,
    //   },
    //   pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    // },
    // // Other database configurations (postgres, sqlite) can remain unchanged
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};


// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'inventory_db'), // Your database name
//       user: env('DATABASE_USERNAME', 'root'), // Default XAMPP username
//       password: env('DATABASE_PASSWORD', ''), // Default XAMPP password (usually empty)
//     },
//     debug: false,
//   },
// });

// const path = require('path');

// module.exports = ({ env }) => {
//   const client = env('DATABASE_CLIENT', 'mysql');

//   const connections = {
//     mysql: {
//       connection: {
//         connectionString: env('DATABASE_URL'),
//         host: env('DATABASE_HOST', '127.0.0.1'),
//         port: env.int('DATABASE_PORT', 3306),
//         database: env('DATABASE_NAME', 'inventory_db'), // Your database name
//         user: env('DATABASE_USERNAME', 'root'), // Default XAMPP username
//         password: env('DATABASE_PASSWORD', ''), // Default XAMPP password (usually empty)
//         ssl: env.bool('DATABASE_SSL', false) && {
//           key: env('DATABASE_SSL_KEY', undefined),
//           cert: env('DATABASE_SSL_CERT', undefined),
//           ca: env('DATABASE_SSL_CA', undefined),
//           capath: env('DATABASE_SSL_CAPATH', undefined),
//           cipher: env('DATABASE_SSL_CIPHER', undefined),
//           rejectUnauthorized: env.bool(
//             'DATABASE_SSL_REJECT_UNAUTHORIZED',
//             true
//           ),
//         },
//       },
//       pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     },
//     mysql2: {
//       connection: {
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 3306),
//         database: env('DATABASE_NAME', 'strapi'),
//         user: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//         ssl: env.bool('DATABASE_SSL', false) && {
//           key: env('DATABASE_SSL_KEY', undefined),
//           cert: env('DATABASE_SSL_CERT', undefined),
//           ca: env('DATABASE_SSL_CA', undefined),
//           capath: env('DATABASE_SSL_CAPATH', undefined),
//           cipher: env('DATABASE_SSL_CIPHER', undefined),
//           rejectUnauthorized: env.bool(
//             'DATABASE_SSL_REJECT_UNAUTHORIZED',
//             true
//           ),
//         },
//       },
//       pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     },
//     postgres: {
//       connection: {
//         connectionString: env('DATABASE_URL'),
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'strapi'),
//         user: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//         ssl: env.bool('DATABASE_SSL', false) && {
//           key: env('DATABASE_SSL_KEY', undefined),
//           cert: env('DATABASE_SSL_CERT', undefined),
//           ca: env('DATABASE_SSL_CA', undefined),
//           capath: env('DATABASE_SSL_CAPATH', undefined),
//           cipher: env('DATABASE_SSL_CIPHER', undefined),
//           rejectUnauthorized: env.bool(
//             'DATABASE_SSL_REJECT_UNAUTHORIZED',
//             true
//           ),
//         },
//         schema: env('DATABASE_SCHEMA', 'public'),
//       },
//       pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     },
//     sqlite: {
//       connection: {
//         filename: path.join(
//           __dirname,
//           '..',
//           env('DATABASE_FILENAME', '.tmp/data.db')
//         ),
//       },
//       useNullAsDefault: true,
//     },
//   };

//   return {
//     connection: {
//       client,
//       ...connections[client],
//       acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
//     },
//   };
// };
