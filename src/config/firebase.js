import { FunctionsSharp } from "@material-ui/icons";

const functions = require("firebase-functions");

let firebaseConfig = {
  apiKey: functions.api.key,
  authDomain: functions.auth.domain,
  databaseURL: functions.api.database.url,
  projectId: functions.api.project.id,
  storageBucket: functions.api.storage.bucket,
  messagingSenderId: functions.api.messaging.sender.id,
  appId: functions.api.id,
  measurementId: functions.api.measurement.id,
};
export default firebaseConfig;
