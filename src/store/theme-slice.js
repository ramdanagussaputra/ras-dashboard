import { createSlice } from '@reduxjs/toolkit';

const initialColor = localStorage.getItem('currentColor');
const initialMode = localStorage.getItem('currentMode');

const themeSlice = createSlice({
    name: 'Theme',
    initialState: {
        currentColor: initialColor || '#1A97F5',
        currentMode: initialMode || 'light',
        openThemeMenu: false,
    },
    reducers: {
        setColor(state, actions) {
            state.currentColor = actions.payload;
            localStorage.setItem('currentColor', actions.payload);
            state.openThemeMenu = false;
        },
        setMode(state, actions) {
            state.currentMode = actions.payload;
            localStorage.setItem('currentMode', actions.payload);
            state.openThemeMenu = false;
        },
        toggleThemeMenu(state) {
            state.openThemeMenu = !state.openThemeMenu;
        },
    },
});

const themeSliceActions = themeSlice.actions;
const themeSliceReducers = themeSlice.reducer;

export { themeSliceActions, themeSliceReducers };
