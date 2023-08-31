import { IFile } from '../globals/types/files.type';
import { parse } from 'csv-parse';
import { Readable } from 'stream';
import FileModel from '../models/files';

export const uploadFile = async (file: IFile) => {
  const readable = new Readable();
  readable.push(file.buffer);
  readable.push(null);

  readable
    .pipe(
      parse({
        delimiter: ',',
        fromLine: 2,
      }),
    )
    .on('data', async (parsedData: string[]) => {
      const [name, city, country, favorite_sport] = parsedData;
      await FileModel.create({
        name,
        city,
        country,
        favorite_sport,
      });
    });

  const fileData = await FileModel.findAll({});

  const finalData = fileData.map((data) => data.dataValues);

  return finalData;
};
