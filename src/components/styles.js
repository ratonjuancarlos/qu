import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer:{
      maxWidth: '95%',
      margin: '0 auto'
  },
  headerCell: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightMedium,
    width: '30%'
  },
  pager:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 15,
  }
}));

export default useStyles;
