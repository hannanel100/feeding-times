import firebase from "./firebase";
export const db = firebase.firestore();

export const creatTimeList = (userName, userId) => {
  return db.collection("TimeLists").add({
    created: firebase.firestore.FieldValue.serverTimestamp(),
    createdBy: userId,
    users: [
      {
        userId: userId,
        name: userName,
      },
    ],
  });
};
export const getTimeList = (timeListId) => {
  return db.collection("timeLists").doc(timeListId).get();
};

export const getTimeListItems = (timeListId) => {
  return db.collection("timeLists").doc(timeListId).collection("items").get();
};
export const streamtimeListItems = (timeListId, observer) => {
  return db
    .collection("timeLists")
    .doc(timeListId)
    .collection("items")
    .orderBy("created")
    .onSnapshot(observer);
};

export const addUserTotimeList = (userName, timeListId, userId) => {
  return db
    .collection("timeLists")
    .doc(timeListId)
    .update({
      users: firebase.firestore.FieldValue.arrayUnion({
        userId: userId,
        name: userName,
      }),
    });
};

export const addTimeListItem = (item, timeListId, userId) => {
  return getTimeListItems(timeListId)
    .then((querySnapshot) => querySnapshot.docs)
    .then((timeListItems) =>
      timeListItems.find(
        (timeListItem) =>
          timeListItem.data().name.toLowerCase() === item.toLowerCase()
      )
    )
    .then((matchingItem) => {
      if (!matchingItem) {
        return db
          .collection("timeLists")
          .doc(timeListId)
          .collection("items")
          .add({
            name: item,
            created: firebase.firestore.FieldValue.serverTimestamp(),
            createdBy: userId,
          });
      }
      throw new Error("duplicate-item-error");
    });
};
