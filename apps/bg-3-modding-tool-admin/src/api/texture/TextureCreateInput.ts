import { InputJsonValue } from "../../types";
import { FileCreateNestedManyWithoutTexturesInput } from "./FileCreateNestedManyWithoutTexturesInput";

export type TextureCreateInput = {
  name?: string | null;
  file?: InputJsonValue;
  files?: FileCreateNestedManyWithoutTexturesInput;
};
