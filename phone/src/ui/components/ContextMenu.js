//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import React from "react";
import { ListItemIcon, ListItemText, Slide, makeStyles, Paper } from "@material-ui/core";
import { List } from "./List";
import { ListItem } from "./ListItem";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: 2,
  },
}));

export const ContextMenu = ({ open, onClose, options }) => {
  const classes = useStyles();
  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Paper square className={classes.root}>
        <List>
          {options.map(option => (
            <ListItem
              selected={option.selected}
              key={option.key || option.label}
              button
              onClick={e => {
                option.onClick(e, option);
                onClose();
              }}
            >
              {option.icon && <ListItemIcon>{option.icon}</ListItemIcon>}
              <ListItemText primary={option.label} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Slide>
  );
};
