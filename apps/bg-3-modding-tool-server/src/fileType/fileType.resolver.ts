import * as graphql from "@nestjs/graphql";
import { FileTypeResolverBase } from "./base/fileType.resolver.base";
import { FileType } from "./base/FileType";
import { FileTypeService } from "./fileType.service";

@graphql.Resolver(() => FileType)
export class FileTypeResolver extends FileTypeResolverBase {
  constructor(protected readonly service: FileTypeService) {
    super(service);
  }
}
