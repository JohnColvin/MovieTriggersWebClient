Movie = DS.Model.extend
  name: DS.attr('string'),
  year: DS.attr('string'),
  poster_url: DS.attr('string'),
  triggers: DS.hasMany('trigger')

`export default Movie`