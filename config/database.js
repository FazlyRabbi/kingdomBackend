
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '40.74.228.100'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'king_db'),
      user: env('DATABASE_USERNAME', 'king_user'),
      password: env('DATABASE_PASSWORD', 'King@2023'),
      // ssl: env.bool('DATABASE_SSL', true),
    },
  },
});



// The postgresql connection: 40.74.228.100 port: 5432 , username: king_user  , pass: King@2023  , db_name:king_db