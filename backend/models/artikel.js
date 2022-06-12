'use strict';
const {
  Model, DatabaseError
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artikel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Artikel.init({
    penulis: DataTypes.STRING,
    judul: DataTypes.STRING,
    isi_artikel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artikel',
  });
  return Artikel;
};