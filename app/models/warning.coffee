Warning = DS.Model.extend
  tag:       DS.belongsTo('tag'),
  movie:     DS.belongsTo('movie'),
  comments:  DS.hasMany('comment'),
  voteCount: DS.attr('number')

`export default Warning`
