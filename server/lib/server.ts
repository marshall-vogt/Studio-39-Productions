import express, {Express} from 'express';

const app: Express = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('../../client/dist'));


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});