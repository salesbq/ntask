import { DataTypes, Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

// class
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        username: {
          type: DataTypes.STRING(30),
          allowNull: false,
          validate: {
            isEmail: {
              msg: 'O username dever ter entre 3 e 30 caracteres!!!',
            },
          },
        },
        password: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [8, 30],
              msg: 'A senha deve ter entre 8 e 30 caracteres!!!',
            },
          },
        },
        isSuperUser: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        status: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        add_for_user_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
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
    this.addHook('beforeCreate', async (user) => {
      if (user.password) {
        user.password = await bcryptjs.hash(user.password, 10);
      }
    });

    // retorandoo init
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Group, { through: 'User_Groups' });
  }

  // métodos da class
}

// exportando
export default User;
