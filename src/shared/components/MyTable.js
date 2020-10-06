import React from "react";
import * as dayjs from "dayjs";
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

export default function myTable({ timeArray }) {
  const tableBody = timeArray ? (
    <TableBody>
      {timeArray.reverse().map((timeRow, index) => (
        <StyledTableRow key={index}>
          <TableCell component="th" scope="row">
            {timeArray.length - index}
          </TableCell>
          <TableCell align="right">{timeRow.side}</TableCell>
          <TableCell align="right">
            {dayjs(timeRow.start).format("DD/MM/YYYY - HH:mm:ss")}
          </TableCell>
          <TableCell align="right">
            {dayjs(timeRow.end).format("DD/MM/YYYY - HH:mm:ss")}
          </TableCell>
          <TableCell align="right">{timeRow.elapsed}</TableCell>
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
          </TableRow>
        </TableHead>
        {tableBody}
      </Table>
    </TableContainer>
  );
}
