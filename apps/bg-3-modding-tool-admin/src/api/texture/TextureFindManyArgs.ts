import { TextureWhereInput } from "./TextureWhereInput";
import { TextureOrderByInput } from "./TextureOrderByInput";

export type TextureFindManyArgs = {
  where?: TextureWhereInput;
  orderBy?: Array<TextureOrderByInput>;
  skip?: number;
  take?: number;
};
