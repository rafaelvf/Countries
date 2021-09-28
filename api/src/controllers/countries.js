const router = require('express').Router();
const axios = require("axios");
const {Sequelize}=require("sequelize")
const Op= Sequelize.Op
const countries = require("../../countries.json")
const {Country, Activity} = require("../db.js");//deberia funcionar


async function getCountries() {//empezamos la funcion para hacer el pedido a la api. la vamos a hacer con axios.
    try {
    // const response = await axios.get('../../countries.json');//el response ya es un json...el await es pq me tira una promesa
    //     const countriesBD= response.data;//response.data pq nos tira un json en el data
    //     console.log(countriesBD)
        // var capital="no tiene capital"
        // var continent="no tiene continente"
        const countriesArray= countries.map(i=>{//me esta devolviendo array con todos esos objetos
            
            // if(i.capital){
            //     capital=i.capital;             

            // } 
            // else if(i.continent){
            //     continent=i.continent;
            // }
            return {
            ID:i.alpha3Code,//izq es base de datos derecha es el api
            name:i.name,
            flag:i.flag,
            continent:i.region,
            capital:i.capital,
            subregion:i.subregion,
            area:i.area,
            population:i.population
            }
        })
        console.log(countriesArray.length)
        for (const i of countriesArray) {//for of se usa porque no se lleva con await. aqui estamos poblando la base de datos.
            
            const countries = await Country.create(i)
            
            // console.log(countries.dataValues)
        }
            
        } catch (error) {
    console.error(error);
    }
}

router.get("/", async function(req,res){//aqui la barra esta sin el countries porque ya lo estoy poniendo en el index en el router.use
    const {name}=req.query;//estamos trayendo el name por query.
    
    getCountries();//instanciamos la funcion de arriba para que se corra cuando entre el get.

    if(!name){
        const simplifiedCountry= await Country.findAll({//esta es la funcion promesa que nos sirve para filtrar solo los atributos que necesitemos y poder usarlos para enviarlos por el res.json
            attributes: ['flag', 'name','continent','ID','population'],
            include:{model:Activity}
        }
        );
    
        res.json(simplifiedCountry);//aqui enviamos por json los atributos requeridos.
        
        //todas las condiciones que me pidan hacer en la ruta countries?name...
    } else{
        const matchingCountry= await Country.findAll({
            where:{
                name:{[Op.iLike]:`%${name}%`}
            }

        }      
        )
        res.json(matchingCountry)
    }
    
})

router.get("/:idPais", async function(req,res){//estamos haciendo el endpoint para esta ruta.
    const {idPais}=req.params;//estamos trayendo el id por parametros
    //getCountries();//instanciamos la funcion de arriba para que se corra cuando entre el get.

    const countryDetailed= await Country.findOne({
        where:{
            ID:idPais.toUpperCase(),
        },
        include: [{
            model: Activity,
            // attributes: ['name'],
            through: {
            attributes: []
            }
        }] 

    })

    res.json(countryDetailed)
    
    
})


module.exports=router;//exportar todas las rutas 