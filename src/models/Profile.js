import { DataTypes, Model } from 'sequelize';

class Profile extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          validate: {
            len: {
              arg: [8, 150],
              msg: 'O nome do usuário deve ter entre 8 e 150 caracteres!!!',
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
        email: {
          type: DataTypes.STRING,
          validate: {
            len: {
              arg: [8, 150],
              msg: 'O nome do usuário deve ter entre 8 e 150 caracteres!!!',
            },
          },
        },
        contact: {
          type: DataTypes.STRING,
          validate: {
            len: {
              arg: [11, 13],
              msg: 'O número de telefone deve ter o formato 99 99999-9999!!!',
            },
          },
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

    // retornando
    return this;
  }

  // métodos da classe aqio
}

export default Profile;
