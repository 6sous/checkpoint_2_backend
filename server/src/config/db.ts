import { DataSource } from "typeorm";
import { Country } from "../entities/country";
import { Continent } from "../entities/continent";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Country, Continent],
  logging: true,
  synchronize: true,
  migrations: ["migrations/*.ts"],
});
