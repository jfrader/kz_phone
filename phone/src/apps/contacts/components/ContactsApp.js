//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import React from "react";
import { AppWrapper } from "../../../ui/components";
import { AppTitle } from "../../../ui/components/AppTitle";
import { AppContent } from "../../../ui/components/AppContent";
import { useContacts } from "../hooks/useContacts";
import { ContactList } from "./ContactList";
import { useApp } from "../../../os/apps/hooks/useApps";

export const ContactsApp = () => {
  const { contactList } = useContacts();
  const contacts = useApp("CONTACTS");
  return (
    <AppWrapper>
      <AppTitle app={contacts} />
      <AppContent>
        <ContactList
          contacts={contactList}
          onCall={contact => console.log(contact)}
          onMessage={() => console.log("Opening messages")}
        />
      </AppContent>
    </AppWrapper>
  );
};
