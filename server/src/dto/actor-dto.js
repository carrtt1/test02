class ActorDTO {

    musicalActorNum;
    musicalActorName;

    constructor(data) {
        this.musicalActorNum = data.MUSICAL_ACTOR_NUM;
        this.musicalActorName = data.MUSICAL_ACTOR_NAME;
    }
}

module.exports = ActorDTO;