import { DataTypes, Model } from 'sequelize';

class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        filename: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              errros: 'A foto não pode ser um campo vazio!!! Informe um nome válido!!!',
            },
          },
        },
        url: {
          type: DataTypes.STRING,
          defaultValue: '',

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

export default Foto;
