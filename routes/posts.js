const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({
       posts: { title: 'my first post', description: 'You should not access if not logged in' } 
    })
})

module.exports = router;