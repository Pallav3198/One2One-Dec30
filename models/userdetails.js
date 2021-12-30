'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  userDetails.init({
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userDetails',
  });
  userDetails.associate((models)=>{
    userDetails.hasOne(models.Credentials)
  })
  return userDetails;
};