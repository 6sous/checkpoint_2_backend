import { Continent } from "../entities/continent";

export async function createContinent(data: {
  code: string;
}): Promise<Continent> {
  const continent = new Continent(data);
  await continent.save();
  return continent;
}

export async function findAll(): Promise<Continent[]> {
  const continents = await Continent.find({
    relations: {
      countries: true,
    },
  });
  return continents;
}

export async function findOneByCode(code: string): Promise<Continent | null> {
  const continent = await Continent.findOne({
    where: { code },
    relations: {
      countries: true,
    },
  });
  return continent;
}
