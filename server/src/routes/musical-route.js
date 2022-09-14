const { application } = require('express');
const express = require('express');
const router = express.Router();
const MusicalController = require('../controllers/musical-controllers');

router.get('/', MusicalController.findAllMusicals);
router.get('/musicalinfoai', MusicalController.findMusicalInfoAI);
router.get('/musicalinfoai2', MusicalController.findMusicalInfoWicked);
router.get('/:musicalNum', MusicalController.findActor);
router.get('/musicalinfo/:musicalNum', MusicalController.findMusicalByMusicalNum);
router.get('/musicalgenre/:genreNum', MusicalController.findMusicalByGenreNum);



module.exports = router;