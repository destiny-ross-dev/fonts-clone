const config = {
  secrets: {
    jwt: process.env.DEV_JWT_SECRET,
    jwtExp: "90d",
    session: process.env.DEV_SESSION_SECRET
  },
  db: process.env.DEV_CONNECTION_STRING
};

module.exports = { config };
