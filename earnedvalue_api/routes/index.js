const routes = require('express').Router();
var Sprint = require('../models/sprint');
var WorkPackage = require('../models/workpackage');
var Project = require('../models/project');


//Week API
routes.get('/saveWeek', (req, res) => {
  var sprint = new Sprint ({
    name: 'Sprint 1',
    id: 'sprint_1'
  });
  sprint.save(function(err) {
    if (err) throw err;
    console.log('Week saved successfully');
    res.status(200).json({ message: 'Week created!' });
  });
});
routes.get('/getAllWeeks', (req ,res)=>{
   Sprint.find(function(err, weeks) {
            if (err)
                res.send(err);
            res.json(weeks);
        });
});


//WorkPackage API
routes.get('/saveWorkPackage', (req, res) => {
   
    res.status(200).json({ message: 'WorkPackage created!' });
  });
routes.get('/getAllWorkPackages', (req ,res)=>{
   Week.find(function(err, workPackages) {
            if (err)
                res.send(err);
            res.json(workPackages);
        });
});

//Project API

routes.post('/saveProject', (req, res) => {
  console.log(req.body);
  var project = new Project ({
    name: 'Project EV',
    id: 'sprint_1',
    description: 'EarnedValueProject'
  });
  project.save(function(err) {
    if (err) throw err;
    console.log('Project saved successfully');
    res.status(200).json({ message: 'Project created!' });
  });
});

module.exports = routes;
