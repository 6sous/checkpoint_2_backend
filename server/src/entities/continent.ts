import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Country } from "./country";

@ObjectType()
@Entity()
export class Continent extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  code: string;

  @Field(() => [Country], { nullable: true })
  @OneToMany(() => Country, (country) => country.continent)
  countries: Country[];

  constructor(data: { code: string } | null = null) {
    super();
    if (data) {
      this.code = data.code;
    }
  }
}
