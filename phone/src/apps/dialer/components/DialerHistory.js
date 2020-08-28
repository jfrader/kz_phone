//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";
import PhoneForwardedIcon from "@material-ui/icons/PhoneForwarded";
import { List } from "../../../ui/components/List";
import { ListItem } from "../../../ui/components/ListItem";

const CallTypeIcon = {
  incoming: <PhoneCallbackIcon />,
  outgoing: <PhoneForwardedIcon />,
};

export const DialerHistory = ({ calls }) => {
  return (
    <List>
      {calls.map(call => (
        <ListItem key={call.id} divider>
          <ListItemText primary={call.caller} secondary={call.phoneNumber} />
          {CallTypeIcon[call.type]}
        </ListItem>
      ))}
    </List>
  );
};
