import express, {Express} from 'express';
import path from 'path';

const app: Express = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.resolve('../client/dist')));


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});