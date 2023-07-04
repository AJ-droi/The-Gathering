import {DataTypes, Model} from 'sequelize';
import {db} from '../config/index';
import { bookMovieAttributes } from '../interface/bookMovieAttributes';



export class MovieInstance extends Model<bookMovieAttributes> {}

MovieInstance.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    coverImage:{
        type:DataTypes.STRING,
        allowNull:false
    }
    
}, {
    sequelize:db,
    tableName:'Movies'
})