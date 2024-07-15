import { Module } from "@nestjs/common";
import { FilePreviewService } from "./filepreview.service";
import { FilePreviewController } from "./filepreview.controller";
import { FilePreviewResolver } from "./filepreview.resolver";

@Module({
  controllers: [FilePreviewController],
  providers: [FilePreviewService, FilePreviewResolver],
  exports: [FilePreviewService],
})
export class FilePreviewModule {}
