import { TextureWhereUniqueInput } from "../texture/TextureWhereUniqueInput";
import { FolderWhereUniqueInput } from "../folder/FolderWhereUniqueInput";

export type FileUpdateInput = {
  name?: string | null;
  typeField?: string | null;
  texture?: TextureWhereUniqueInput | null;
  folder?: FolderWhereUniqueInput | null;
  format?: "Option1" | null;
};
