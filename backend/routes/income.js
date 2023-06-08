const router = require('express').Router();
let Income = require('../models/income.modal');

router.get("/", (req, res) => {
    Income.find()
      .then(incomes => res.json(incomes))
      .catch(err => res.status(400).json('Error: ' + err));  
});



router.post("/add",(req, res) => {
  const name = req.body.name;
  const desc = req.body.desc;
  const amount = Number(req.body.amount);
  const date = req.body.date;

  const newIncome = new Income({
    name,
    desc,
    amount,
    date,
  });

  newIncome.save()
  .then(() => res.json('Income added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/income/:id', (req, res) => {
  Income.findById(req.params.id)
    .then(Income => res.json(Income))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete("/:id", (req, res) => {
  Income.findByIdAndDelete(req.params.id)
    .then(() => res.json('Income deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.post("/update/:id",(req, res) => {
  Income.findById(req.params.id)
    .then(Income => {
      Income.name = req.body.name;
      Income.desc = req.body.desc;
      Income.amount = Number(req.body.amount);
      Income.date = req.body.dates;

      Income.save()
        .then(() => res.json('Income updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;