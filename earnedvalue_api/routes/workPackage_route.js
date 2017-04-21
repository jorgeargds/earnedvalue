const routes = require('express').Router();
var workPackage = require('../models/workpackage');

routes.get('/saveWorkPackage', (req, res) => {
  var workPackage = new workPackage ({
    name: 'Week1',
    id: 'week_1'
  });
  week.save(function(err) {
    if (err) throw err;
    console.log('Week saved successfully');
    res.status(200).json({ message: 'Week created!' });
  });
});
routes.get('/getAllWorkPackages', (req ,res)=>{
   Week.find(function(err, workPackages) {
            if (err)
                res.send(err);
            res.json(workPackages);
        });
});
module.exports = routes;