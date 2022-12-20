const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    console.log(req)
    const data = await (req.body);
    

      res.status(200).json(data);
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // try {
  //   console.log(req)
  //   const data = await (req.body);
    

  //     res.status(200).json(data);
    
  // } catch (err) {
  //   res.status(400).json(err);
  // }

  
});

module.exports = router;
