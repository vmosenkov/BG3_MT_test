/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Texture } from "./Texture";
import { TextureCountArgs } from "./TextureCountArgs";
import { TextureFindManyArgs } from "./TextureFindManyArgs";
import { TextureFindUniqueArgs } from "./TextureFindUniqueArgs";
import { CreateTextureArgs } from "./CreateTextureArgs";
import { UpdateTextureArgs } from "./UpdateTextureArgs";
import { DeleteTextureArgs } from "./DeleteTextureArgs";
import { FileFindManyArgs } from "../../file/base/FileFindManyArgs";
import { File } from "../../file/base/File";
import { TextureService } from "../texture.service";
@graphql.Resolver(() => Texture)
export class TextureResolverBase {
  constructor(protected readonly service: TextureService) {}

  async _texturesMeta(
    @graphql.Args() args: TextureCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Texture])
  async textures(
    @graphql.Args() args: TextureFindManyArgs
  ): Promise<Texture[]> {
    return this.service.textures(args);
  }

  @graphql.Query(() => Texture, { nullable: true })
  async texture(
    @graphql.Args() args: TextureFindUniqueArgs
  ): Promise<Texture | null> {
    const result = await this.service.texture(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Texture)
  async createTexture(
    @graphql.Args() args: CreateTextureArgs
  ): Promise<Texture> {
    return await this.service.createTexture({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Texture)
  async updateTexture(
    @graphql.Args() args: UpdateTextureArgs
  ): Promise<Texture | null> {
    try {
      return await this.service.updateTexture({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Texture)
  async deleteTexture(
    @graphql.Args() args: DeleteTextureArgs
  ): Promise<Texture | null> {
    try {
      return await this.service.deleteTexture(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [File], { name: "files" })
  async findFiles(
    @graphql.Parent() parent: Texture,
    @graphql.Args() args: FileFindManyArgs
  ): Promise<File[]> {
    const results = await this.service.findFiles(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
