import express, { Application, NextFunction, Request,Response } from 'express';
import path from "path";
import { HttpException } from "./handlers/http_exception-handler";

const app: Application = express();
const port:number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/audio", express.static(path.join(__dirname, "/upload/audio")));
app.use("/images", express.static(path.join(__dirname, "/upload/images")));


app.use("/api", main_route);
app.get('/', (req, res) => {
  res.send('Hai Dep Zai');
});

app.use((req: Request, res: Response, next: NextFunction) => {
	next(new HttpException(404, "Api not found"));
});
app.use(errorHandler);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});