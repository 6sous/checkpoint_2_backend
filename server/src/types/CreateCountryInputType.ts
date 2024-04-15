import { Field, InputType } from "type-graphql";

@InputType()
export class CreateCountryInput {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;
}
