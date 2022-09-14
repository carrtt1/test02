exports.findAllMusicals = () => {

    return `
        SELECT
               MUSICAL_NUM
             , MUSICAL_TITLE
             , MUSICAL_STARTDATE
             , MUSICAL_FINISHDATE
             , MUSICAL_AGE
             , MUSICAL_PHOTO
          FROM MUSICAL
         WHERE ORDERABLE_STATUS = 'N'
    `;
}

exports.selectActorByMusicalNum = (musicalNum) => {

    return `
        SELECT
               M.MUSICAL_TITLE
             , A2.MUSICAL_ACTOR_NAME
          FROM MUSICAL M
          JOIN MUSICAL_ACTOR_LIST A1 ON(M.MUSICAL_NUM = A1.MUSICAL_NUM)
          JOIN MUSICAL_ACTOR A2 ON(A1.MUSICAL_ACTOR_NUM = A2.MUSICAL_ACTOR_NUM)
         WHERE M.MUSICAL_NUM = ${musicalNum}
    `;
}

exports.findMusicalByMusicalNum = (musicalNum) => {

    return `
        SELECT
               M.MUSICAL_TITLE
             , M.MUSICAL_STARTDATE
             , M.MUSICAL_FINISHDATE
             , M.MUSICAL_AGE
             , M.MUSICAL_PHOTO
             , G.MUSICAL_GENRE
          FROM MUSICAL M
          JOIN MUSICAL_GENRE G ON(M.MUSICAL_GENRE_NUM = G.MUSICAL_GENRE_NUM)
         WHERE M.MUSICAL_NUM = ${musicalNum}
    `;
}

exports.findMusicalByGenreNum = (genreNum) => {

    return `
        SELECT
               M.MUSICAL_TITLE
             , M.MUSICAL_STARTDATE
             , M.MUSICAL_FINISHDATE
             , M.MUSICAL_PHOTO
             , G.MUSICAL_GENRE
          FROM MUSICAL M
          JOIN MUSICAL_GENRE G ON(M.MUSICAL_GENRE_NUM = G.MUSICAL_GENRE_NUM)
         WHERE G.MUSICAL_GENRE_NUM = ${genreNum}
    `;
}