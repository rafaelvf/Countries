const { Router } = require('express');
const countryrutes = require("../controllers/countries.js");
const activityroutes = require("../controllers/activities.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries",countryrutes);//aqui al poner /countries estoy diciendo que por cada get /countries q tenga, del 
router.use("/activity",activityroutes);

module.exports = router;
