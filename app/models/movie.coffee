Movie = DS.Model.extend
  name: DS.attr('string'),
  year: DS.attr('string'),
  poster_url: DS.attr('string'),
  tags: DS.hasMany('tag'),
  warnings: DS.hasMany('warning')

`export default Movie`