import {DataTypes, Model} from 'sequelize';
import {db} from '../config/index';
import { PhotographerAttributes } from '../interface/photographerAttributes';

export class PhotographerInstance extends Model<PhotographerAttributes> {}

PhotographerInstance.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
  
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    brandName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: "Username is required",
            },
          },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
        notNull: {
          msg: "Email is required",
        },
        isEmail: {
          msg: "Email is invalid",
        },
      },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: "Password is required",
            },
            notEmpty: {
              msg: "Password is required",
            },
          },
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    googleId: {
        type: DataTypes.STRING,
    },
    facebookId: {
        type: DataTypes.STRING,
    },
    dateOfBirth: {
        type: DataTypes.STRING,
    },
    salt: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    verified: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull:{
                msg: 'Phone Number is required'
            },
            notEmpty:{
                msg: 'Phone Number is required'
            }
        }
    },
    serviceAvailable:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    rating:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    coverImage:{
        type: DataTypes.STRING,
        allowNull: true,
    },
   

},{
    sequelize: db,
    tableName: 'Photographer',
})
