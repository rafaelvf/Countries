const router = require('express').Router();
const axios = require("axios");
const {Sequelize}=require("sequelize")


const {Country, Activity} = require("../db.js");//deberia funcionar

router.post("/", async function(req,res){
    const {ID, name, dificulty, duration, season } = req.body;
    console.log(req.body)

    const nuevaActividad= await Activity.findOrCreate({
        where:{
            // ID: ID,
            name: name,
            dificulty:dificulty,
            duration:duration,
            season:season
        }
    })

    res.json(nuevaActividad);


})


module.exports=router;