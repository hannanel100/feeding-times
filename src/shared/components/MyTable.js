import React from "react";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import formatTime from "../utils/formatTime";

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary,
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.primary.main,
    },
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}))(TableRow);
const drawerWidth = "240px";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

const MyTable = ({ timeArray }) => {
  const classes = useStyles();

  const MILLISECONDS_IN_SECOND = 1000;
  dayjs.extend(relativeTime);
  let coppiedTimeArrayReversed = [];
  if (timeArray) {
    coppiedTimeArrayReversed = JSON.parse(JSON.stringify(timeArray)).reverse();
  }
  const tableBody = timeArray ? (
    <TableBody>
      {coppiedTimeArrayReversed.map((timeRow, index) => (
        <StyledTableRow key={index}>
          <TableCell component="th" scope="row">
            {timeArray.length - index}
          </TableCell>
          <TableCell align="center">{timeRow.side}</TableCell>
          <TableCell align="center">
            {dayjs(timeRow.start).format("DD/MM/YYYY - HH:mm:ss")}
          </TableCell>
          <TableCell align="center">
            {dayjs(timeRow.end).format("DD/MM/YYYY - HH:mm:ss")}
          </TableCell>
          <TableCell align="center">
            {formatTime(Math.floor(timeRow.elapsed / MILLISECONDS_IN_SECOND))}
          </TableCell>
          <TableCell align="center">
            {index === coppiedTimeArrayReversed.length - 1
              ? null
              : dayjs(coppiedTimeArrayReversed[index + 1].end).from(
                  dayjs(timeRow.start)
                )}
          </TableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  ) : null;
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="center">Side</TableCell>
            <TableCell align="center">Start Time</TableCell>
            <TableCell align="center">End Time</TableCell>
            <TableCell align="center">Elapsed Time</TableCell>
            <TableCell align="center">Time Since Previous Feeding</TableCell>
          </TableRow>
        </TableHead>
        {tableBody}
      </Table>
    </TableContainer>
  );
};

export default MyTable;
