const router = require('koa-router')()

router.prefix('/users')

router.get('/AdminUsers',async (ctx, next) => {
  if(!ctx.session.user){
    ctx.redirect('/')
  }
  await ctx.render('users/index')
})

router.get('/RoleGroups',async (ctx, next) => {
  if(!ctx.session.user){
    ctx.redirect('/')
  }
  await ctx.render('users/RoleGroups')
})

router.get('/SystemUsers',async (ctx, next) => {
  if(!ctx.session.user){
    ctx.redirect('/')
  }
  await ctx.render('users/index')
})


module.exports = router
