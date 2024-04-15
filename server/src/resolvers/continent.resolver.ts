import { Arg, Mutation, Query, Resolver } from "type-graphql";
import * as ContinentService from "../services/continent.service";
import { Continent } from "../entities/continent";

@Resolver(Continent)
export class ContinentResolver {
  @Query(() => [Continent])
  async continents(): Promise<Continent[]> {
    return await ContinentService.findAll();
  }

  @Query(() => Continent, { nullable: true })
  async getcontinentByCode(
    @Arg("code") code: string
  ): Promise<Continent | null> {
    return await ContinentService.findOneByCode(code);
  }

  @Mutation(() => Continent)
  async createContinent(@Arg("code") code: string): Promise<Continent> {
    return await ContinentService.createContinent({ code });
  }
}
