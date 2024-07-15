import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FileTypeServiceBase } from "./base/fileType.service.base";

@Injectable()
export class FileTypeService extends FileTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
