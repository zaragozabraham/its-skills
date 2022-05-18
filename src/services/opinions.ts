import { AppDispatch } from "../app/store";
import { setLoading } from "../features/loaderSlice";
import { setOpinions } from "../features/opinionSlice";
import { Opinion } from "../models/opinion";

export const fetchOpinions = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await fetch('http://localhost:8000/opinion/');

        if (response.status !== 200) return '';

        const opinions: Opinion[] = await response.json();
        // console.log(opinions);
        dispatch(setOpinions(opinions));
    } catch (err) {
        throw err;
    } finally {
        dispatch(setLoading(false));
    }
}