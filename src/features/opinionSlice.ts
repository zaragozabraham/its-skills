import { RootState } from './../app/store';
import { Opinion } from "../models/opinion";
import { createSlice } from '@reduxjs/toolkit';

export interface OpinionsState {
    opinions: Opinion[];
};

const initialState: OpinionsState = {
    opinions: []
};

export const OpinionSlice = createSlice({
    name: 'Opinions',
    initialState,
    reducers: {
        setOpinions: (state, action) => {
            state.opinions = action.payload;
        }
    }
});

export const { setOpinions } = OpinionSlice.actions;
export const OpinionsSelecctor = (state: RootState) => state.opinions;
export const opinionsSelector = (state: RootState) => OpinionsSelecctor(state).opinions;
export default OpinionSlice.reducer;