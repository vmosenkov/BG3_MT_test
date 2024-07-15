import * as graphql from "@nestjs/graphql";
import { TextureResolverBase } from "./base/texture.resolver.base";
import { Texture } from "./base/Texture";
import { TextureService } from "./texture.service";

@graphql.Resolver(() => Texture)
export class TextureResolver extends TextureResolverBase {
  constructor(protected readonly service: TextureService) {
    super(service);
  }
}
