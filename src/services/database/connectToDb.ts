import mongoose from 'mongoose';

export default async (): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      mongoose.connection.on('error', () => reject(false));

      const uri = process.env.MONGO_URI;

      if (!uri) throw new Error('URI is wrong');

      await mongoose.connect(uri);
      resolve(true);
    } catch (err) {
      console.log(err);
      reject(false);
    }
  });
};
