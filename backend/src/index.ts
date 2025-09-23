import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import * as dotenv from "dotenv";
import { buildSchema } from "type-graphql";
import { dataSource } from "./lib/dataSource";
import resolvers from "./resolvers";

dotenv.config();
const { env } = process;
if (
  !env.DB_HOST ||
  !env.DB_PASSWORD ||
  !env.DB_DATABASE ||
  !env.DB_USER ||
  !env.SERVICE_PORT
)
  throw new Error("Missing env variables!");

const start = async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: resolvers,
  });

  const server = new ApolloServer({ schema });

  await startStandaloneServer(server, {
    listen: { port: Number(env.SERVICE_PORT) },
  });
};
start();
