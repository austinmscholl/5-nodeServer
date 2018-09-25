let express = require('express');
let router = express.Router();

router.get('/', (req, res) => res.send('I love pie!'))
router.get('/tasty', (req, res) => res.send('I love tasty pie!'))


module.exports = router;