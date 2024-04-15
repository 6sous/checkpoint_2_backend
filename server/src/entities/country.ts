import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Continent } from "./continent";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  emoji: string;

  @Field({ nullable: true })
  @ManyToOne(() => Continent, (continent) => continent.countries)
  continent: Continent;

  constructor(
    data: { code: string; name: string; emoji: string } | null = null
  ) {
    super();
    if (data) {
      this.code = data.code;
      this.name = data.name;
      this.emoji = data.emoji;
    }
  }
}
