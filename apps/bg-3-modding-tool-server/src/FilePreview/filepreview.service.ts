import { Injectable } from "@nestjs/common";

@Injectable()
export class FilePreviewService {
  constructor() {}
  async PreviewFile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
