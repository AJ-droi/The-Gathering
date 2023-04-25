import {DataTypes, Model} from 'sequelize';
import {db} from '../config/index';
import {UserAttributes} from '../interface/userAttributes';


export class UserInstance extends Model<UserAttributes> {}

UserInstance.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userName: {
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
    otp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "OTP is required",
            },
            notEmpty: {
                msg: "OTP is required",
            },
        },
    },
    otpExpiry: {
        type: DataTypes.DATE,
        allowNull: true,
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
        allowNull: true
    },
    photo:{
        type: DataTypes.STRING,
        allowNull: true
    }

},{
    sequelize: db,
    tableName: 'User',
})
