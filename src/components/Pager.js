import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import useStyles from "./styles";

const Pager = ({data, changePage}) => {
  const classes = useStyles();

  return (
    <div className={classes.pager}>
      <Button
        variant="contained"
        onClick={() => changePage(data.previous)}
        disabled={data.previous === null}
        color="primary"
      >
        Previous
      </Button>
      <Button
        variant="contained"
        onClick={() => changePage(data.next)}
        disabled={data.next === null}
        color="primary"
      >
        Next
      </Button>
    </div>
  );
};

Pager.propTypes={
    data: PropTypes.object.isRequired,
    changePage: PropTypes.func.isRequired
}

export default Pager;
