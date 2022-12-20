const router = require('express').Router();
const fileRoutes = require('./fileRoutes');



router.use('/files', fileRoutes);





module.exports = router;