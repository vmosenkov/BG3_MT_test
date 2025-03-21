/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TextureWhereUniqueInput } from "./TextureWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TextureUpdateInput } from "./TextureUpdateInput";

@ArgsType()
class UpdateTextureArgs {
  @ApiProperty({
    required: true,
    type: () => TextureWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TextureWhereUniqueInput)
  @Field(() => TextureWhereUniqueInput, { nullable: false })
  where!: TextureWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TextureUpdateInput,
  })
  @ValidateNested()
  @Type(() => TextureUpdateInput)
  @Field(() => TextureUpdateInput, { nullable: false })
  data!: TextureUpdateInput;
}

export { UpdateTextureArgs as UpdateTextureArgs };
