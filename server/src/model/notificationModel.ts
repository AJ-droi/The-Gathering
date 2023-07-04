import {DataTypes, Model} from 'sequelize';
import {db} from '../config/index';
import { NotificationAttributes } from '../interface/notificationAttributes';

enum RecipientType {
    ADMIN = 'admin',
    USER = 'user',
    PHOTOGRAPHER = 'photographer',
    ALL = 'all',
  }

export class NotifyInstance extends Model<NotificationAttributes> {}

NotifyInstance.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    recipient: {
        type: DataTypes.ENUM(...Object.values(RecipientType)),
        allowNull: false,
      },
}, {
    sequelize:db,
    tableName:'Notifications'
})