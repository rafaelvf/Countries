const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {//estoy exportando una funcion 
  // defino el modelo
  sequelize.define('country', {
    ID:{//como hago para que el id tenga tres letras
      primaryKey:true,
      type:DataTypes.STRING(3),
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag:{
      type:DataTypes.STRING,//me queda la duda
      allowNull:false,
    },
    continent:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    capital:{
      type:DataTypes.STRING,
      allowNull:false,
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
