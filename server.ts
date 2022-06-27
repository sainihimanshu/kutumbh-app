import http from 'http';
import dotenv from 'dotenv';
dotenv.config();
import app from './src/app';
import connectToDb from './src/services/database/connectToDb';

const server = http.createServer(app);

const runServer = async () => {
  try {
    const dbConnected = await connectToDb();

    console.log({ dbConnected });
    if (!dbConnected) {
      console.log('db not connected');
      return;
    }
    server.listen(5000, () => {
      console.log('Server is running');
    });
  } catch (err) {
    console.log('Bad error', err);
  }
};

runServer();
