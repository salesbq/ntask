import { DataTypes, Model } from 'sequelize';

class Group extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        status: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        add_for_user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      { sequelize },
    );
    // hooks

    return this;
  }

  // métodos da classe
}

export default Group;
