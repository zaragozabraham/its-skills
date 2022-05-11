import { Subject } from './../../../backend/src/models/subject';
import { setLoading } from '../features/loaderSlice';
import { AppDispatch } from './../app/store';
import { setSubjects } from '../features/subjectSlice';

export const fetchSubjects = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await fetch('http://localhost:8000/subject/');

        if (response.status !== 200) return '';

        const subjects: Subject[] = await response.json();
        // console.log(subjects);
        dispatch(setSubjects(subjects));
    } catch (err) {
        throw err;
    } finally {
        dispatch(setLoading(false));
    }
}