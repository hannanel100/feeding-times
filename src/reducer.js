import firebase from "./firebase";
import "firebase/firestore";
import * as dayjs from "dayjs";

// import { AuthContext } from "./AuthProvider";
export const ADD_FEEDING_TIME = "ADD_FEEDING_TIME";

export const reducer = (state, action) => {
  //   const authContext = useContext(AuthContext);
  switch (action.type) {
    case ADD_FEEDING_TIME:
      const newState = [...state, action.newFeedingTime];

      const db = firebase.firestore();
      db.collection("Feeding-Times")
        .doc("test")
        .set({
          side: action.newFeedingTime.side,
          start: dayjs(action.newFeedingTime.start).toString(),
          end: dayjs(action.newFeedingTime.end).toString(),
          elapse: action.newFeedingTime.elapsed,
        })
        .then(() => {
          console.log("ok");
        })
        .catch((error) => {
          console.log(error.message);
          alert(error.message);
        });
      console.log(action.newFeedingTime);
      return newState;

    default:
      return state;
  }
};
