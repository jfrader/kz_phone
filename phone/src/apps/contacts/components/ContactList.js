//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";

import PhoneIcon from "@material-ui/icons/Phone";
import ChatIcon from "@material-ui/icons/Chat";
import { List } from "../../../ui/components/List";
import { ListItem } from "../../../ui/components/ListItem";

export const ContactList = ({ contacts, onCall, onMessage }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id} divider>
          <ListItemText primary={contact.display} secondary={contact.phoneNumber} />
          <Button onClick={() => onCall(contact.display)}>
            <PhoneIcon />
          </Button>
          <Button onClick={onMessage}>
            <ChatIcon />
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
