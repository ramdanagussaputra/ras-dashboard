import { createSlice } from '@reduxjs/toolkit';

const turnFalseAndToggle = (state, key) => {
    const stateEntries = Object.entries(state);
    const newStateEntries = stateEntries.map((s) => {
        if (s[0] === 'menuActive') return s;
        if (s[0] === 'screen') return s;
        if (s[0] === key) return [s[0], !s[1]];
        return [s[0], false];
    });
    const newState = Object.fromEntries(newStateEntries);

    return newState;
};

const navigationSlice = createSlice({
    name: 'Navigation',
    initialState: {
        chat: false,
        userProfile: false,
        chart: false,
        cart: false,
        notification: false,
        menuActive: true,
        screen: window.innerWidth,
    },
    reducers: {
        toggleMenu(state) {
            state.menuActive = !state.menuActive;
        },
        toggleChat(state) {
            const newState = turnFalseAndToggle(state, 'chat');
            return {
                ...newState,
            };
        },
        toggleUserProfile(state) {
            const newState = turnFalseAndToggle(state, 'userProfile');
            return {
                ...newState,
            };
        },
        toggleNotification(state) {
            const newState = turnFalseAndToggle(state, 'notification');
            return {
                ...newState,
            };
        },
        toggleCart(state) {
            const newState = turnFalseAndToggle(state, 'cart');
            return {
                ...newState,
            };
        },
        setScreen(state, actions) {
            state.screen = actions.payload;
        },
        setMenu(state, actions) {
            state.menuActive = actions.payload;
        },
    },
});

const navigationSliceActions = navigationSlice.actions;
const navigationSliceReducers = navigationSlice.reducer;

export { navigationSliceActions, navigationSliceReducers };
