import {DataTypes, Model} from 'sequelize';
import {db} from '../config/index';
import { bookMovieAttributes } from '../interface/bookMovieAttributes';



export class BookInstance extends Model<bookMovieAttributes> {}

BookInstance.init({
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
    tableName:'Books'
})