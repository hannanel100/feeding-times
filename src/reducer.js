import firebase from "./firebase";
import "firebase/firestore";
import * as dayjs from "dayjs";

// import { AuthContext } from "./AuthProvider";
export const ADD_FEEDING_TIME = "ADD_FEEDING_TIME";
export const USER_AUTH = "USER_AUTH";

export const reducer = async (state, action) => {
  //   const authContext = useContext(AuthContext);
  const { uid } = await firebase.auth().currentUser;
  console.log(firebase.firestore.Timestamp);
  if (uid) {
    switch (action.type) {
      case ADD_FEEDING_TIME:
        const { newFeedingTime } = action;
        const db = firebase.firestore();
        db.collection(uid)
          .doc(newFeedingTime.index + "")
          .set(
            {
              side: newFeedingTime.side,
              start: dayjs(newFeedingTime.start).toString(),
              end: dayjs(newFeedingTime.end).toString(),
              elapsed: newFeedingTime.elapsed,
            },
            { merge: true }
          )
          .then(() => {
            console.log("ok");
          })
          .catch((error) => {
            console.log(error.message);
            alert(error.message);
          });
        return newFeedingTime;

      default:
        return state;
    }
  }
};
