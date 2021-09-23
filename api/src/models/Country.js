const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {//estoy exportando una funcion 
  // defino el modelo
  sequelize.define('country', {
    ID:{//como hago para que el id tenga tres letras
      primaryKey:true,
      type:DataTypes.STRING,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag:{
      allowNull:false,
      type:DataTypes.STRING,//me queda la duda
    },
    continent:{
      allowNull:false,
      type:DataTypes.STRING,
    },
    capital:{
      allowNull:false,
      type:DataTypes.STRING
    },
    subregion:{
      type:DataTypes.STRING
    },
    area:{
      type:DataTypes.DECIMAL(12,2)
    },
    population:{
      type:DataTypes.INTEGER
    }
  });
};
