const router = require("express").Router();
const axios = require("axios");
const { Sequelize } = require("sequelize");

const { Country, Activity } = require("../db.js"); //deberia funcionar

router.post("/", async function (req, res) {
  const { ID, name, dificulty, duration, season, countries } = req.body; //por body me va a llegar estas porpiedades. que vienen del form

    try {
    
        const [nuevaActividad, created] = await Activity.findOrCreate({
            where: {
              // ID: ID,
                name: name,
                dificulty: dificulty,
                duration: duration,
                season: season,
            },
        });
        
        for (const i of countries) {
            const country = await Country.findOne({
                where: {
                    name: i,
                },
            });
            
            country.addActivity(nuevaActividad);
        }
        
        res.json(nuevaActividad);
        
    } catch (error) {
        console.error(error)
    }
});

router.get("/add", async function (req, res) {
  const justactivities = await Activity.findAll({
    attributes: ["name"],
  });

  res.json(justactivities);

});

module.exports = router;
