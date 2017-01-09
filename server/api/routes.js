import Router from 'koa-router'

const router = Router({ prefix: '/api' })

// route-specific middleware
router.use(async (ctx, next) => {
  next()
})

router.get('/', async (ctx, next) => {
  ctx.body = { message: 'Hello World!' }
})

export default router
