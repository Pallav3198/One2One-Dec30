'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Credentials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Credentials.init({
    emailId: {
      type:DataTypes.STRING,
      allowNull:false
    },
    userId: {
      type:DataTypes.INTEGER,
      references:{
        model:{
          tableName:"userDetails"
        },
        key:"id"
      },
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Credentials',
  });
  Credentials.associate((models)=>{
    Credentials.belongsTo(models.userDetails)
  })
  return Credentials;
};