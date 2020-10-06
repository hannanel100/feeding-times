import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as dayjs from "dayjs";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function myTable({ timeArray }) {
  const tableBody = timeArray ? (
    <TableBody>
      {timeArray.reverse().map((timeRow, index) => (
        <TableRow key={index}>
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
        </TableRow>
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
