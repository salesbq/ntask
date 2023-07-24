import { DataTypes, Model } from 'sequelize';

class Person extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 50],
              msg: 'O nome deve ter entre 3 e 30 caracteres',
            },
          },
        },
        lastname: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 100],
              msg: 'O nome deve ter entre 3 e 100 caracteres',
            },
          },
        },
        birthday: {
          type: DataTypes.DATE,
          validate: {
            isDate: {
              msg: 'Informe uma data válida!!!',
            },
          },
        },
        family: {
          type: DataTypes.BOOLEAN,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        add_for_user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'persons',
      },
    );
  }
}

export default Person;
