import firebase from "./firebase";
import "firebase/firestore";
import * as dayjs from "dayjs";

// import { AuthContext } from "./AuthProvider";
export const ADD_FEEDING_TIME = "ADD_FEEDING_TIME";
export const USER_AUTH = "USER_AUTH";
export const GET_USER_FEEDING_TIME = "GET_USER_FEEDING_TIME";

export const reducer = async (state, action) => {
  //   const authContext = useContext(AuthContext);
  const { uid } = await firebase.auth().currentUser;
  if (uid) {
    switch (action.type) {
      case ADD_FEEDING_TIME:
        try {
          const { newFeedingTime } = action;
          const db = firebase.firestore();
          const res = db
            .collection(uid)
            .doc(newFeedingTime.index + "")
            .set(
              {
                side: newFeedingTime.side,
                start: dayjs(newFeedingTime.start).toString(),
                end: dayjs(newFeedingTime.end).toString(),
                elapsed: newFeedingTime.elapsed,
              },
              { merge: true }
            );
          console.log("ok");
          return newFeedingTime;
        } catch (error) {
          console.log(error.message);
          alert(error.message);
        }
      // const { newFeedingTime } = action;
      // const db = firebase.firestore();
      // db.collection(uid)
      //   .doc(newFeedingTime.index + "")
      //   .set(
      //     {
      //       side: newFeedingTime.side,
      //       start: dayjs(newFeedingTime.start).toString(),
      //       end: dayjs(newFeedingTime.end).toString(),
      //       elapsed: newFeedingTime.elapsed,
      //     },
      //     { merge: true }
      //   )
      //   .then(() => {
      //     console.log("ok");
      //   })
      //   .catch((error) => {
      //     console.log(error.message);
      //     alert(error.message);
      //   });

      case GET_USER_FEEDING_TIME:
        const newState = [];
        const rows = firebase.firestore().collection(uid);
        const querySnapshot = await rows.get();
        // console.log(querySnapshot);
        querySnapshot.forEach((doc, index) => {
          // console.log(doc.id, " => ", doc.data());
          newState.push(doc.data());
        });
        return newState;
      default:
        return state;
    }
  }
};
