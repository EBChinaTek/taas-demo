import Koa from "koa"
import demo from "./controllers/demo";
import bodyParser from 'koa-bodyparser';

const router = new Router();
demo(router);

const app = new Koa();
app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3003)


export default app;
