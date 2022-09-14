class ActorListDTO {

    musicalActorListNum;
    musicalActorNum;
    musicalNum;

    constructor(data) {
        this.musicalActorListNum = data.MUSICAL_ACTOR_LIST_NUM;
        this.musicalActorNum = data.MUSICAL_ACTOR_NUM;
        this.musicalNum = data.MUSICAL_NUM;
    }
}

module.exports = ActorListDTO;