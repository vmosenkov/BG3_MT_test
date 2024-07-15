import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FilePreviewService } from "./filepreview.service";

@swagger.ApiTags("filePreviews")
@common.Controller("filePreviews")
export class FilePreviewController {
  constructor(protected readonly service: FilePreviewService) {}

  @common.Get("/preview/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PreviewFile(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.PreviewFile(body);
      }
}
