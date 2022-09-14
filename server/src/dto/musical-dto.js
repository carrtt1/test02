class MusicalDTO {

    musicalNum;
    musicalTitle;
    musicalStartDate;
    musicalFinishDate;
    musicalAge;
    musicalPhoto;
    orderableStatus;
    musicalGenreNum;

    constructor(data) {
        this.musicalNum = data.MUSICAL_NUM;
        this.musicalTitle = data.MUSICAL_TITLE;
        this.musicalStartDate = data.MUSICAL_STARTDATE;
        this.musicalFinishDate = data.MUSICAL_FINISHDATE;
        this.musicalAge = data.MUSICAL_AGE;
        this.musicalPhoto = data.MUSICAL_PHOTO;
        this.orderableStatus = data.ORDERABLE_STATUS;
        this.musicalGenreNum = data.MUSICAL_GENRE_NUM;
    }
}

module.exports = MusicalDTO;