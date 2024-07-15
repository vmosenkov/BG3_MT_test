import { TextureWhereUniqueInput } from "./TextureWhereUniqueInput";
import { TextureUpdateInput } from "./TextureUpdateInput";

export type UpdateTextureArgs = {
  where: TextureWhereUniqueInput;
  data: TextureUpdateInput;
};
