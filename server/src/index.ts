import "reflect-metadata";
import * as dotenv from "dotenv";
import { dataSource } from "./config/db";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { CountryResolver } from "./resolvers/country.resolver";
import { ContinentResolver } from "./resolvers/continent.resolver";

const start = async () => {
  dotenv.config();

  const port: number = Number(process.env.APP_PORT);

  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [CountryResolver, ContinentResolver],
    validate: { forbidUnknownValues: false },
  });

  const server = new ApolloServer({
    schema,
  });

  try {
    const { url } = await startStandaloneServer(server, {
      listen: {
        port,
      },
    });
    console.log(`Server running at ${url}`);
  } catch (error) {
    console.error(error);
  }
};

void start();
