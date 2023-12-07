const ideas = require("../models/idea.model");

//search all data

exports.fetchAllIdeas = (req,res) =>{
    res.status(200).send(ideas)
}


//create new idea

//update idea

//Delete idea