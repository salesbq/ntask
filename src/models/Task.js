import { DataTypes, Model } from 'sequelize';

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [10, 30],
              msg: 'O nome da tarefa deve ter entre 10 e 30 caracteres!!!',
            },
          },
        },
        description: {
          type: DataTypes.STRING,
        },
        init: {
          type: DataTypes.DATE,
          validate: {
            isDate: {
              msg: 'Informe uma data válida!!!',
            },
          },
        },
        end: {
          type: DataTypes.DATE,
          validate: {
            isDate: {
              msg: 'Informe uma data válida!!!',
            },
          },
        },
        complete: {
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
    return this;
  }
}

export default Task;
