//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import React from "react";
import { Box, makeStyles, Backdrop, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  box: {
    width: "100%",
    position: "relative",
  },
  backdrop: {
    position: "absolute",
    zIndex: 1,
  },
  paper: {
    width: "100%",
    height: "100%",
  },
}));

export const AppContent = ({ children, style, backdrop, onClickBackdrop, ...props }) => {
  const classes = useStyles();
  return (
    <Box flexGrow={1} className={classes.box} {...props}>
      <Paper square px={2} pt={1} elevation={0} className={classes.paper}>
        <Backdrop
          className={classes.backdrop}
          open={backdrop || false}
          onClick={onClickBackdrop}
        ></Backdrop>
        {children}
      </Paper>
    </Box>
  );
};
