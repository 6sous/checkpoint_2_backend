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
  countrys(): Promise<Country[]> {
    return CountryService.findAll();
  }

  @Query(() => Country)
  country(@Arg("code") code: string): Promise<Country | null> {
    return CountryService.findOneByCode(code);
  }
}
