//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { green } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    padding: 0,
  },
  avatar: {
    backgroundColor: ({ backgroundColor }) => backgroundColor,
    color: ({ color }) => color,
    width: theme.spacing(7),
    height: theme.spacing(7),
    fontSize: theme.typography.h4.fontSize,
  },
}));

export const AppIcon = ({ name, icon, backgroundColor, color }) => {
  const classes = useStyles({
    backgroundColor: backgroundColor || green[50],
    color: color || green[400],
  });
  return (
    <Button className={classes.root}>
      <Avatar className={classes.avatar}>{icon || name[0].toUpperCase()}</Avatar>
    </Button>
  );
};
