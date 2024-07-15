import { FileType as TFileType } from "../api/fileType/FileType";

export const FILETYPE_TITLE_FIELD = "name";

export const FileTypeTitle = (record: TFileType): string => {
  return record.name?.toString() || String(record.id);
};
