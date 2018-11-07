const router = require('koa-router')()

const fs = require('fs')

router.prefix('/demo')

router.get('/table/user',async (ctx, next) => {
    if(!ctx.session.user){
        ctx.redirect('/')
        console.error('您还未登录')
    }

    let result = {}

    await new Promise((resolve, reject) => {
        fs.readFile(__dirname + '/demo/user.json','utf8', function(err, data) {
            if(err) ctx.throw(err)
            result = JSON.parse(data)
            resolve()
        })
    })

    ctx.body = result
})

module.exports = router
