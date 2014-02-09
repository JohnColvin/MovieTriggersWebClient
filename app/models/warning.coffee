Warning = DS.Model.extend
  tag: DS.belongsTo('tag'),
  movie: DS.belongsTo('movie')

`export default Warning`