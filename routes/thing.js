const {Router} = require('express')
const router = Router()
const t = require('../models/thingModel')

router.get('/', async (req, res) => 
    res.render('index', {}))

router.get('/getnotes', async (req, res) => {

    const ts = await t.find({})
    res.json(ts)

})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'create things'
    })
})

router.post('/create', async (req, res) => {
    const ts = new t ({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        phonenum: req.body.phonenum,
        name: req.body.name
    })

    await ts.save()
    res.redirect('/')
})

router.post('/delete', async (req, res) => {
    await t.deleteOne({_id: req.query.id})

    res.redirect('/')
})

router.post('/update', async (req, res) => {
    res.redirect(`/update?id=${req.query.id}`)
})

router.get('/update', async (req, res) => {
    res.render('update', {
        id: req.query.id
    })
})

// router.post('/updating', async (req, res) => {
//     t.findOneAndUpdate({_id: req.query.id}, {name: req.query.name})

//     res.redirect('/')
// })

module.exports = router