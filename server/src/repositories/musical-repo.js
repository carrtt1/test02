const musicalQuery = require('../database/musical-query');
const MusicalDTO = require('../dto/musical-dto');
const ActorListDTO = require('../dto/actorlist-dto');
const ActorDTO = require('../dto/actor-dto');
const GenreDTO = require('../dto/genre-dto');

exports.findAllMusicals = (connection) => {

    return new Promise((resolve, reject) => {

        connection.query(musicalQuery.findAllMusicals(), (err, results, fields) => {

            if(err) {
                console.log('err', err);
                reject(err);
            }

            const infos = [];

            for(let i = 0; i < results.length; i++) {
                infos.push(new MusicalDTO(results[i]));
            }

            resolve(infos);
        });
    });
};

exports.findActor = (connection, musicalNum) => {

    return new Promise((resolve, reject) => {

        const actorByMusical = {list:[], actor:[]};
        connection.query(musicalQuery.selectActorByMusicalNum(musicalNum), (err, results, fields) => {

            if(err) {
                console.log('err', err);
                reject(err);
            }

            console.log('results : ', results);

            for(let i = 0; i < results.length; i++) {
                actorByMusical.list = new ActorListDTO(results[i]);
            }

            for(let i = 0; i < results.length; i++) {
                actorByMusical.actor = new ActorDTO(results[i]);
            }

            resolve(results);
        })
    });
};

exports.findMusicalByMusicalNum = (connection, musicalNum) => {

    return new Promise((resolve, reject) => {

        const infos = {info:[], genre:[]};
        connection.query(musicalQuery.findMusicalByMusicalNum(musicalNum), (err, results, fields) => {

            if(err) {
                console.log('err', err);
                reject(err);
            }

            for(let i = 0; i < results.length; i++) {
                infos.genre = new GenreDTO(results[i]);
            }

            for(let i = 0; i < results.length; i++) {
                infos.info = new MusicalDTO(results[i]);
            }

            resolve(results);
        });
    });
};

exports.findMusicalByGenreNum = (connection, genreNum) => {

    return new Promise((resolve, reject) => {

        const infos = {genre:[], info:[]};
        connection.query(musicalQuery.findMusicalByGenreNum(genreNum), (err, results, fields) => {

            if(err) {
                console.log('err', err);
                reject(err);
            }

            for(let i = 0; i < results.length; i++) {
                infos.genre = new GenreDTO(results[i]);
            }

            for(let i = 0; i < results.length; i++) {
                infos.info = new MusicalDTO(results[i]);
            }

            resolve(results);
        });
    });
};