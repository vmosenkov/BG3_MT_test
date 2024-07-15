import { InputJsonValue } from "../../types";
import { FileUpdateManyWithoutTexturesInput } from "./FileUpdateManyWithoutTexturesInput";

export type TextureUpdateInput = {
  name?: string | null;
  file?: InputJsonValue;
  files?: FileUpdateManyWithoutTexturesInput;
};
