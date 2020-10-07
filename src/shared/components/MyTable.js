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

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

const MyTable = ({ timeArray }) => {
  dayjs.extend(relativeTime);
  let coppiedTimeArray = [];
  if (timeArray) {
    coppiedTimeArray = JSON.parse(JSON.stringify(timeArray)).reverse();
  }
  const tableBody = timeArray ? (
    <TableBody>
      {coppiedTimeArray.map((timeRow, index) => (
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
            {formatTime(Math.floor(timeRow.elapsed / 1000))}
          </TableCell>
          <TableCell align="center">
            {index > 0
              ? // ? dayjs().from(coppiedTimeArray[index - 1].start)
                console.log(index)
              : console.log(coppiedTimeArray)}
          </TableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  ) : null;
  return (
    <TableContainer component={Paper}>
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
