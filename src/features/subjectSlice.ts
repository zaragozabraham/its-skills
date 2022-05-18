import { RootState } from './../app/store';
import { createSlice } from "@reduxjs/toolkit";
import { Subject } from '../models/subject';

export interface SubjectsState {
  subjects: Subject[];
  subject: Subject;
}

const initialState: SubjectsState = {
  subjects: [],
  subject: undefined!
};

export const SubjectSlice = createSlice({
  name: "Subjects",
  initialState,
  reducers: {
    setSubjects: (state, action) => {
      state.subjects = action.payload;
    },
    setSelectedSubject: (state, action) => {
      state.subject = action.payload;
    }
  },
});

export const { setSubjects, setSelectedSubject } = SubjectSlice.actions;

export const SubjectSelector = (state: RootState) => state.subjects;

export const subjectsSelector = (state: RootState) => SubjectSelector(state).subjects;
export const subjectSelector = (state: RootState) => SubjectSelector(state).subject;

export default SubjectSlice.reducer;