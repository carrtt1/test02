const HttpStatus = require('http-status');
const MusicalService = require('../services/musical-service');
const axios = require('axios');
const fs = require('fs');

exports.findAllMusicals = async (req, res, next) => {

    const results = await MusicalService.findAllMusicals();

    console.log(results);

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully found all musicalInfos',
        results: results
    });
};

exports.findActor = async (req, res, next) => {

    const musicalNum = req.params.musicalNum;

    const results = await MusicalService.findActor(musicalNum);

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully found find Actor',
        results: results
    });
};

exports.findMusicalByMusicalNum = async (req, res, next) => {

    const musicalNum = req.params.musicalNum;

    const results = await MusicalService.findMusicalByMusicalNum(musicalNum);

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully found MusicalInfo by musicalNum',
        results: results
    });
};

exports.findMusicalByGenreNum = async (req, res, next) => {

    const genreNum = req.params.genreNum;

    const results = await MusicalService.findMusicalByGenreNum(genreNum);

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully found Musical by genre',
        results: results
    });
}

exports.findMusicalInfoAI = async (req, res, next) => {

    // console.log('dd');

    const result = await axios.get(`https://gist.githubusercontent.com/LI-JiYoon/047e1e14a98a9419f7a320b9c038077b/raw/fafa110aecbec1e8ed2646270547f98e5cb7c563/gistfile1.txt`)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    });

    const json = result.replace(/'/g, '"');
    // console.log('json', json);

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully found Musical by ai info',
        results: JSON.parse(json)
    });
    
}

exports.findMusicalInfoWicked = async (req, res, next) => {

    const result = await axios.get(`https://gist.githubusercontent.com/LI-JiYoon/047e1e14a98a9419f7a320b9c038077b/raw/fafa110aecbec1e8ed2646270547f98e5cb7c563/gistfile1.txt`)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    });

    let json = result.replace(/'/g, '"');
    //  = json.replace(/:/g, '');
    // console.log('json', json);

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully found Musical by wicked',
        results: JSON.parse(json)
    });
}