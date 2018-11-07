const router = require('koa-router')()

const dbquery = require('./sql/db_connect')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: '润阳贷后台管理'
  })
})

router.get('/admin', async (ctx, next) => {

  if(!ctx.session.user){
    ctx.redirect('/')
  }

  await ctx.render('admin', {
    title: '登录成功'
  })
})

router.get('/admin/AdminUsers',async (ctx, next) => {
  if(!ctx.session.user){
    ctx.redirect('/')
  }
  await ctx.render('users/index', {
    title: '登录成功'
  })
})

router.get('/admin/RoleGroups',async (ctx, next) => {
  if(!ctx.session.user){
    ctx.redirect('/')
  }
  await ctx.render('users/index', {
    title: '登录成功'
  })
})

router.get('/admin/SystemUsers',async (ctx, next) => {
  if(!ctx.session.user){
    ctx.redirect('/')
  }
  await ctx.render('users/index', {
    title: '登录成功'
  })
})



router.post('/login',async (ctx,next)=>{       // 登录
  
  const loginData = ctx.request.body

  const dbUser = await dbquery("select * from person where name ='"+loginData.username+"';")

  if(dbUser.length>0 && dbUser[0].password === Number(loginData.password)){

    ctx.status = 200

    ctx.response.set("Content-Type", 'text/html;charset=utf-8')

    ctx.session.user = loginData.username

    await ctx.redirect('/admin')

    }else{

    ctx.body = {
        success:false,
        msg:"用户名或密码输入错误"
    }

    }

})

module.exports = router
