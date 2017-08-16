export default (state = {}, action) => {
    switch (action.type) {
        case 'CLEAR_MSG':
            // debugger;
            return {
                userInfo: { ...state.userInfo,
                    messageNumber: 0
                }
            }
            // let g={...state};
            // g.userInfo.messageNumber=0;
            // return g;
        default:
            return { ...state
            };
    }
}