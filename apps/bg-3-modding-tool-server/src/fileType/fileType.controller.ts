import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FileTypeService } from "./fileType.service";
import { FileTypeControllerBase } from "./base/fileType.controller.base";

@swagger.ApiTags("fileTypes")
@common.Controller("fileTypes")
export class FileTypeController extends FileTypeControllerBase {
  constructor(protected readonly service: FileTypeService) {
    super(service);
  }
}
