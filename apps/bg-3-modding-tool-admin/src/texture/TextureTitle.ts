import { Texture as TTexture } from "../api/texture/Texture";

export const TEXTURE_TITLE_FIELD = "name";

export const TextureTitle = (record: TTexture): string => {
  return record.name?.toString() || String(record.id);
};
