module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: "mongodb://owner:fdKI6iSfquUTfBlP@cluster0-shard-00-00-y7bph.azure.mongodb.net:27017,cluster0-shard-00-01-y7bph.azure.mongodb.net:27017,cluster0-shard-00-02-y7bph.azure.mongodb.net:27017/<dbname>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
        database: "strapi"
      },
      options: {
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
