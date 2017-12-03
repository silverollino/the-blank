import DS from 'ember-data';

export default DS.Model.extend({
    roomCode: DS.attr("string"),

    jugadores: DS.hasMany("jugador"),
    questions: DS.hasMany("question")

});
