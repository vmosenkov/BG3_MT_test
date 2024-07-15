import { Module } from "@nestjs/common";
import { TextureModuleBase } from "./base/texture.module.base";
import { TextureService } from "./texture.service";
import { TextureController } from "./texture.controller";
import { TextureResolver } from "./texture.resolver";

@Module({
  imports: [TextureModuleBase],
  controllers: [TextureController],
  providers: [TextureService, TextureResolver],
  exports: [TextureService],
})
export class TextureModule {}
