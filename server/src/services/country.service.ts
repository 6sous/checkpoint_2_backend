import { Continent } from "../entities/continent";
import { Country } from "../entities/country";

export async function create(data: {
  code: string;
  name: string;
  emoji: string;
  continentId: number;
}): Promise<Country> {
  const country = new Country(data);

  country.continent = {
    id: data.continentId,
  } as Continent;
  await country.save();
  return country;
}

export async function findAll(): Promise<Country[]> {
  const countries = await Country.find({
    relations: {
      continent: true,
    },
  });
  return countries;
}

export async function findOneByCode(code: string): Promise<Country | null> {
  const country = await Country.findOneBy({ code });
  return country;
}

export async function findAllByContinentId(
  continentId: number
): Promise<Country[]> {
  const countries = await Country.find({
    where: {
      continent: {
        id: continentId,
      },
    },
  });
  return countries;
}
