export default (state = {}, action) => {
    switch (action.type) {
        case 'CLEAR_MSG':
            // debugger;
            return {
                userInfo: { ...state.userInfo,
                    messageNumber: 0
                }
            }
        default:
            return { ...state
            };
    }
}