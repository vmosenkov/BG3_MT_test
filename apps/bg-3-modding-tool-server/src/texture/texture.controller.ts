import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TextureService } from "./texture.service";
import { TextureControllerBase } from "./base/texture.controller.base";

@swagger.ApiTags("textures")
@common.Controller("textures")
export class TextureController extends TextureControllerBase {
  constructor(protected readonly service: TextureService) {
    super(service);
  }
}
