import { IFile } from '../globals/types/files.type';

export const fileServices = async (file: IFile) => {
  console.log(file);

  return 'uploaded';
};
