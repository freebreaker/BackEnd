const router = require('koa-router')()

const axios = require('axios')

router.prefix('/api')

router.get('/GetAdminUsers',async (ctx, next) => {
  if(!ctx.session.user){
    ctx.redirect('/')
  }
  await axios.get('https://www.apiopen.top/weatherApi',{
      params:{
          city:"成都"
      }
  })
  .then(function(res){
    ctx.body = res.data
  })
  .catch(function(err){
      console.log(err)
  })
})


module.exports = router
