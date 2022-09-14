const getConnection = require('../database/connection');
const MusicalRepository = require('../repositories/musical-repo');

exports.findAllMusicals = () => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();

        const results = MusicalRepository.findAllMusicals(connection);

        connection.end();

        resolve(results);
    });
};

exports.findActor = (musicalNum) => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();
        const results = MusicalRepository.findActor(connection, musicalNum);

        connection.end();

        resolve(results);
    });
};

exports.findMusicalByMusicalNum = (musicalNum) => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();
        const results = MusicalRepository.findMusicalByMusicalNum(connection, musicalNum);

        connection.end();

        resolve(results);
    });
};

exports.findMusicalByGenreNum = (genreNum) => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();
        const results = MusicalRepository.findMusicalByGenreNum(connection, genreNum);

        connection.end();

        resolve(results);
    });
}