const router = require('express').Router();
const axios = require("axios");
const {Sequelize}=require("sequelize")


const {Country, Activity} = require("../db.js");//deberia funcionar

router.post("/", async function(req,res){
    const {ID, name, dificulty, duration, season,countries } = req.body;
    console.log(req.body)

    const [nuevaActividad,created]= await Activity.findOrCreate({
        where:{
            // ID: ID,
            name: name,
            dificulty:dificulty,
            duration:duration,
            season:season
        }
    })

    console.log(nuevaActividad)
    for(const i of countries){
    const country= await Country.findOne({
        where:{
            name:i
        }
    })
    // nuevaActividad.addCountry(country)
    country.addActivity(nuevaActividad)
}
    

    res.json(nuevaActividad);


})


module.exports=router;