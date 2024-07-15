import { Module } from "@nestjs/common";
import { FileTypeModuleBase } from "./base/fileType.module.base";
import { FileTypeService } from "./fileType.service";
import { FileTypeController } from "./fileType.controller";
import { FileTypeResolver } from "./fileType.resolver";

@Module({
  imports: [FileTypeModuleBase],
  controllers: [FileTypeController],
  providers: [FileTypeService, FileTypeResolver],
  exports: [FileTypeService],
})
export class FileTypeModule {}
