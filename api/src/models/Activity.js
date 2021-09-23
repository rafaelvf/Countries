const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('activity', {
    ID:{
    primaryKey:true,
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    },
    name: {
    type: DataTypes.STRING,
    },
    dificulty:{
    type:DataTypes.ENUM("1","2","3","4","5")
    },
    duration:{
    type:DataTypes.INTEGER,
    },
    season:{    
    type:DataTypes.ENUM("winter","summer","spring","fall")
    },
});
};
