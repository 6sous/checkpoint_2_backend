import { Country } from "../entities/country";

export async function create(data: {
  code: string;
  name: string;
  emoji: string;
}): Promise<Country> {
  const country = new Country(data);
  await country.save();
  return country;
}

export async function findAll(): Promise<Country[]> {
  const countries = await Country.find();
  return countries;
}

export async function findOneByCode(code: string): Promise<Country | null> {
  const country = await Country.findOneBy({ code });
  return country;
}
