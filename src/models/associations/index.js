// models
import Group from '../Group';
import User from '../User';
import Profile from '../Profile';
import Foto from '../Foto';
import Person from '../Person';
import Contact from '../Contact';
import Task from '../Task';

export default () => {
  // associate
  Group.hasMany(User, { foreignKey: 'group_id' });
  User.belongsTo(Profile, { foreignKey: 'profile_id' });
  Foto.belongsTo(Profile, { foreignKey: 'profile_id' });
  Person.hasOne(User, { foreignKey: 'user_id' });
  Person.hasMany(Contact, { foreignKey: 'person_id' });
  Person.hasMany(Task, { foreignKey: 'person_id' });
};
