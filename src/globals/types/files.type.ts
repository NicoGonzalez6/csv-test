export interface IFilesModel {
  id: number;
  name: string;
  city: string;
  country: string;
  favorite_sport: string;
}

export interface IFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}
