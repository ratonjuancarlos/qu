import React, { useState, useEffect } from "react";
import {API_URL} from '../constants'
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import orderBy from "lodash/orderBy";
import Pager from './Pager'
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import useFetch from "use-http";
import useStyles from "./styles";

const API_URL_PLANETS = `${API_URL}planets/`


const QuTable = () => {
  const classes = useStyles();
  const { get,  response,  error } = useFetch(
    API_URL_PLANETS
  );
  const [data, setData] = useState([]);
  const [sortField, setSortField] = useState("name");
  const [isAsc, setIsAsc] = useState(true);

  useEffect(() => {
    loadInitialPlanets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadInitialPlanets() {
    const initialPlanets = await get("?page=1");
    if (response.ok) setData(initialPlanets);
  }

  useEffect(() => {
    const sortedData = orderBy(
      data.results,
      [sortField],
      [isAsc ? "asc" : "desc"]
    );
    setData({ ...data, results: sortedData });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAsc, sortField]);

  const sort = (field) => {
    setIsAsc(!isAsc);
    setSortField(field);
  };

  const getIcon = (field) => {
    return sortField !== field ? (
      ""
    ) : isAsc ? (
      <ArrowUpwardIcon style={{ fontSize: "0.75rem" }} />
    ) : (
      <ArrowDownwardIcon style={{ fontSize: "0.75rem" }} />
    );
  };

  async function changePage(page) {
    const nextPage = page.replace(API_URL_PLANETS, '');
    const nextPlanets = await get(nextPage);
    if (response.ok) setData(nextPlanets);
  }

  return (
    <>
      {error && "Error!"}
      {data.results && (
        <>
          <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    className={classes.headerCell}
                    onClick={() => sort("name")}
                  >
                    {getIcon("name")} Name
                  </TableCell>
                  <TableCell
                    className={classes.headerCell}
                    onClick={() => sort("climate")}
                    align="right"
                  >
                    {getIcon("climate")} Climate
                  </TableCell>
                  <TableCell
                    className={classes.headerCell}
                    onClick={() => sort("terrain")}
                    align="right"
                  >
                    {getIcon("terrain")} Terrain
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.results.map((planet) => (
                  <TableRow key={planet.url}>
                    <TableCell component="th" scope="row">
                      {planet.name}
                    </TableCell>
                    <TableCell align="right">{planet.climate}</TableCell>
                    <TableCell align="right">{planet.terrain}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pager {...{data, changePage}}/>
        </>
      )}
    </>
  );
};

export default QuTable;
