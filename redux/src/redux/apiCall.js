import axios from "axios";
import { updateSuccess, updatePending, updateError } from "./UserSlice";

export const updateUser = async (user, dispatch) => {
  dispatch(updatePending);

  try {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      user
    );
    dispatch(updateSuccess(res.data));
  } catch (error) {
    dispatch(updateError());
  }
};
