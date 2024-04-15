import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/country";
import { CreateCountryInput } from "../types/CreateCountryInputType";
import * as CountryService from "../services/country.service";

@Resolver(Country)
export class CountryResolver {
  @Mutation(() => Country)
  createCountry(@Arg("country") country: CreateCountryInput): Promise<Country> {
    return CountryService.create({ ...country });
  }

  @Query(() => [Country])
  getCountries(): Promise<Country[]> {
    return CountryService.findAll();
  }

  @Query(() => Country)
  getCountry(@Arg("code") code: string): Promise<Country | null> {
    return CountryService.findOneByCode(code);
  }

  @Query(() => [Country])
  getCountriesByContinentId(
    @Arg("continentId") continentId: number
  ): Promise<Country[]> {
    return CountryService.findAllByContinentId(continentId);
  }
}
