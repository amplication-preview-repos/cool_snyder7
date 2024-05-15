/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FontConfigWhereInput } from "./FontConfigWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FontConfigListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FontConfigWhereInput,
  })
  @ValidateNested()
  @Type(() => FontConfigWhereInput)
  @IsOptional()
  @Field(() => FontConfigWhereInput, {
    nullable: true,
  })
  every?: FontConfigWhereInput;

  @ApiProperty({
    required: false,
    type: () => FontConfigWhereInput,
  })
  @ValidateNested()
  @Type(() => FontConfigWhereInput)
  @IsOptional()
  @Field(() => FontConfigWhereInput, {
    nullable: true,
  })
  some?: FontConfigWhereInput;

  @ApiProperty({
    required: false,
    type: () => FontConfigWhereInput,
  })
  @ValidateNested()
  @Type(() => FontConfigWhereInput)
  @IsOptional()
  @Field(() => FontConfigWhereInput, {
    nullable: true,
  })
  none?: FontConfigWhereInput;
}
export { FontConfigListRelationFilter as FontConfigListRelationFilter };
