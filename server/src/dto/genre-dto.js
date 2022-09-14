class GenreDTO {

    musicalGenreNum;
    musicalGenre;

    constructor(data) {
        this.musicalGenreNum = data.MUSICAL_GENRE_NUM;
        this.musicalGenre = data.MUSICAL_GENRE;
    }
}

module.exports = GenreDTO;