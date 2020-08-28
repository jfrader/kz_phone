//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import React, { useEffect } from "react";
import { AppIcon } from "./AppIcon";
import { Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useKeyboard } from "../../os/keyboard/hooks/useKeyboard";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
  },
  item: {
    marginTop: theme.spacing(3),
    width: "20%",
  },
}));

export const GridMenu = ({ items, Component = AppIcon }) => {
  const setKey = useKeyboard();
  const classes = useStyles();

  useEffect(function registerKeyHandlers() {
    setKey("ArrowLeft", () => {
      console.log(":v");
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Grid container justify="center">
      <Grid container item>
        {items &&
          items.length &&
          items.map(item => (
            <Grid
              key={item.id}
              item
              className={classes.item}
              tabIndex="-1"
              component={Link}
              to={item.path}
            >
              <Component {...item} />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};
