const routes = require('express').Router();
var Week = require('../models/week');

routes.get('/saveWeek', (req, res) => {
  var week = new Week ({
    name: 'Week1',
    id: 'week_1'
  });
  week.save(function(err) {
    if (err) throw err;
    console.log('Week saved successfully');
    res.status(200).json({ message: 'Week created!' });
  });
});
routes.get('/getAllWeeks', (req ,res)=>{
   Week.find(function(err, weeks) {
            if (err)
                res.send(err);
            res.json(weeks);
        });
});
module.exports = routes;
