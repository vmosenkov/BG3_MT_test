import * as graphql from "@nestjs/graphql";
import { FilePreviewService } from "./filepreview.service";

export class FilePreviewResolver {
  constructor(protected readonly service: FilePreviewService) {}

  @graphql.Query(() => String)
  async PreviewFile(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.PreviewFile(args);
  }
}
