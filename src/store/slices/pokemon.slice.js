import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokemonSlice = createSlice({
	name: 'pokemon',
    initialState: "",
    reducers: {
        changePoke:(state, action) => action.payload
    }
})

export const {changePoke} = pokemonSlice.actions;

export default pokemonSlice.reducer;