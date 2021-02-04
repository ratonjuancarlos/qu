import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    color: theme.palette.common.white,
  },
  subtitle: {
    margin: 15,
  },
}));

export default useStyles;
