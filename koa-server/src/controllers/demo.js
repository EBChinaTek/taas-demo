import Router from "@koa/router";
import runTest from './middlewares/runTest.js'

export default router=>{

  router.get("/hello",ctx =>{
      ctx.body="hello"
  })

  router.get("/test", async ctx =>{
      ctx.body = await runTest()
  })
}
