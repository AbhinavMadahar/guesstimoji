// this reducer handles updates to id, board, and roomFull
// roomFull will decide to render gamePage
// id and board will be passed to gamePage
function makeid(length) {
    var result = '';
    var characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
}

const defaultState = () => ({
    roomID: makeid(5),
    roomFull: false,
    board: [],
    randomSmiley: '😎',
    restartable: false,
    allPlayersReady: false,
});

export const roomReducer = (
    state = defaultState(),
    action
) => {
    switch (action.type) {
        case 'homePageLoaded':
            return {
                ...state,
                randomSmiley: action.payload,
            };
        case 'room/roomJoined':
            return {
                ...state,
                ...action.payload,
            };
        case 'room/roomRestartable':
            return {
                ...state,
                ...action.payload,
            };
        case 'room/roomRestarted':
            return {
                ...state,
                ...action.payload,
            };
        case 'room/roomLeft':
            return defaultState();
        case 'room/allPlayersBecameReady':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const roomJoined = (joinData) => {
    return {
        type: 'room/roomJoined',
        payload: joinData,
    };
};

export const homePageLoaded = (emoji) => {
    return {
        type: 'homePageLoaded',
        payload: emoji,
    };
};

export const roomRestartable = () => {
    return {
        type: 'room/roomRestartable',
        payload: { restartable: true },
    };
};

export const roomRestarted = () => {
    return {
        type: 'room/roomRestarted',
        payload: { restartable: false, winner: undefined, allPlayersReady: false },
    };
};

export const roomLeft = () => {
    return {
        type: 'room/roomLeft',
    };
};

export const allPlayersBecameReady = () => {
    return {
        type: 'room/allPlayersBecameReady',
        payload: { allPlayersReady: true },
    };
};
