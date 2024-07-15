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
import { FileTypeWhereInput } from "./FileTypeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FileTypeOrderByInput } from "./FileTypeOrderByInput";

@ArgsType()
class FileTypeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FileTypeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FileTypeWhereInput, { nullable: true })
  @Type(() => FileTypeWhereInput)
  where?: FileTypeWhereInput;

  @ApiProperty({
    required: false,
    type: [FileTypeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FileTypeOrderByInput], { nullable: true })
  @Type(() => FileTypeOrderByInput)
  orderBy?: Array<FileTypeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FileTypeFindManyArgs as FileTypeFindManyArgs };
