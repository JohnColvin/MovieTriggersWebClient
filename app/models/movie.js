var attr = DS.attr, hasMany = DS.hasMany;

export default DS.Model.extend({
  name: attr('string'),
  year: attr('string'),
  poster_url: attr('string'),
  triggers: hasMany('trigger')
});
