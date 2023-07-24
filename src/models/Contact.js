import { DataTypes, Model } from 'sequelize';

class Contact extends Model {
  static init(sequelize) {
    super.init(
      {
        email: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'Informe um email válido!!!',
            },
          },
        },
        telefone1: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [11, 15],
              msg: 'Informe um número de telefone válido!!!',
            },
          },
        },
        telefone2: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [11, 15],
              msg: 'Informe um número de telefone válido!!!',
            },
          },
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

export default Contact;
