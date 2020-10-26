import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  useContext,
} from "react";
import { makeStyles } from "@material-ui/core";
import * as dayjs from "dayjs";
import firebase from "../../../firebase";
import "firebase/auth";
import { AuthContext } from "../../../AuthProvider";

import { Buttons, MyTable } from "../../../shared/components/index";
import Stopwatch from "./Stopwatch";
import { ADD_FEEDING_TIME, reducer } from "../../../reducer";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "calc(100% - 240px)",
    },
  },

  primaryBg: {
    backgroundColor: theme.palette.primary.main,
  },
  secondaryBg: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
const Dashboard = () => {
  const authContext = useContext(AuthContext);

  const classes = useStyles();
  const initialState = [];
  const [timeArray, setTimeArray] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [side, setSide] = useState("");
  const [timer, setTimer] = useState(0);
  const [bgColor, setBgColor] = useState(classes.primaryBg);
  const [buttonActive, setButtonActive] = useState(true);
  const [isStartTime, setIsStartTime] = useState(true);
  const countRef = useRef(null);
  const MILLISECONDS_IN_SECOND = 1000;
  const [timeElement, dispatch] = useReducer(reducer, initialState);
  const { uid } = authContext.user;
  const clickHandler = () => {
    // console.log(today.format("DD/MM/YYYY - HH:mm:ss"));

    if (isStartTime) {
      let start = dayjs();
      setStartTime(start);
      setBgColor(classes.secondaryBg);
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, MILLISECONDS_IN_SECOND);
      setButtonActive(false);
    } else {
      let end = dayjs(new Date());
      setEndTime(end);
      setBgColor(classes.primaryBg);
      setTimer(0);
      clearInterval(countRef.current);
      setButtonActive(true);
    }
  };
  useEffect(() => {
    async function fetchFromDb() {
      if (uid) {
        const data = [];
        const rows = firebase.firestore().collection(uid);
        const querySnapshot = await rows.get();
        console.log(querySnapshot);
        querySnapshot.forEach((doc, index) => {
          console.log(doc.id, " => ", doc.data());
          data.push(doc.data());
        });
        setTimeArray((timeArray) => [...timeArray, ...data]);
      }
    }
    fetchFromDb();
  }, []);
  console.log(timeArray);
  useEffect(() => {
    if (endTime) {
      console.log(dayjs(endTime).toString());
      setTimeArray([
        ...timeArray,
        createData(
          side,
          startTime,
          endTime,
          dayjs(endTime).diff(dayjs(startTime), "ms"),
          timeArray.length
        ),
      ]);
      dispatch({
        type: ADD_FEEDING_TIME,
        newFeedingTime: createData(
          side,
          startTime,
          endTime,
          dayjs(endTime).diff(dayjs(startTime), "ms"),
          timeArray.length
        ),
      });
    }
  }, [endTime]);
  const createData = (side, start, end, elapsed, index) => {
    return { side, start, end, elapsed, index };
  };
  return (
    <>
      <h2>Timer</h2>
      <Stopwatch time={timer} bgColor={bgColor} />
      <Buttons
        side={(chosenSide) => setSide(chosenSide)}
        isStartTime={(isStartTime) => setIsStartTime(isStartTime)}
        timeClickHandler={() => clickHandler()}
      />
      <MyTable
        timeArray={buttonActive || timeArray.length > 0 ? timeArray : null}
      />
    </>
  );
};

export default Dashboard;
