import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TextureServiceBase } from "./base/texture.service.base";

@Injectable()
export class TextureService extends TextureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
