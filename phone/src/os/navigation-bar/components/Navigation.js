//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import React from "react";
import { makeStyles, BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import AppsIcon from "@material-ui/icons/Apps";
import PhoneIcon from "@material-ui/icons/Phone";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 2,
    backgroundColor: theme.palette.background.default,
  },
}));

export const Navigation = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <BottomNavigation className={classes.root} onChange={(_e, value) => value()}>
      <BottomNavigationAction
        label="Phone"
        value={() => history.push("/phone")}
        icon={<PhoneIcon className={classes.icon} />}
      />
      <BottomNavigationAction
        label="Home"
        value={() => history.push("/")}
        icon={<AppsIcon className={classes.icon} />}
      />
      <BottomNavigationAction
        label="Back"
        value={() => history.goBack()}
        icon={<KeyboardArrowLeftIcon />}
      />
    </BottomNavigation>
  );
};
