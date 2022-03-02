const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dishRes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dishScore: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    healthyScore: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stepByStep: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    img: {
      type: DataTypes.STRING,
      allowNull:true
    }
  });
};
