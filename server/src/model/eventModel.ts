import {DataTypes, Model} from 'sequelize';
import {db} from '../config/index';
import { EventAttributes } from '../interface/eventAttributes';


export class EventInstance extends Model<EventAttributes> {}

EventInstance.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    eventName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    eventDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    eventLocation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    eventDescription: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    eventImages: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
    creatorId: {
        type: DataTypes.UUID,
        allowNull: false,
    },

},{
    sequelize: db,
    tableName: 'Events',
})