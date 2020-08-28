//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import React from "react";
import { useConfig } from "../../../os/config/hooks/useConfig";
import { blue, grey, green, orange, purple } from "@material-ui/core/colors";
import ContactsIcon from "@material-ui/icons/Contacts";
import SettingsIcon from "@material-ui/icons/Settings";
import PhoneIcon from "@material-ui/icons/Phone";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { atom } from "recoil";
import { CalculatorIcon } from "../../../apps/calculator/components/CalculatorIcon";
import { Route } from "react-router-dom";
import { DialerApp } from "../../../apps/dialer/components/DialerApp";
import { ContactsApp } from "../../../apps/contacts/components/ContactsApp";
import { CalculatorApp } from "../../../apps/calculator/components/CalculatorApp";
import { SettingsApp } from "../../../apps/settings/components/SettingsApp";
import { BankApp } from "../../../apps/bank/components/BankApp";

const appsState = atom({
  key: "apps",
  default: {
    preinstalled: [
      {
        id: "DIALER",
        nameLocale: "APPS_DIALER",
        icon: <PhoneIcon />,
        backgroundColor: green[400],
        color: green[50],
        path: "/phone",
        Route: () => <Route path="/phone" component={DialerApp} />,
      },
      {
        id: "CONTACTS",
        nameLocale: "APPS_CONTACTS",
        icon: <ContactsIcon />,
        backgroundColor: blue[500],
        color: blue[50],
        path: "/contacts",
        Route: () => <Route path="/contacts" component={ContactsApp} />,
      },
      {
        id: "CALCULATOR",
        nameLocale: "APPS_CALCULATOR",
        icon: <CalculatorIcon />,
        backgroundColor: purple[500],
        color: grey[50],
        path: "/calculator",
        Route: () => <Route path="/calculator" component={CalculatorApp} />,
      },
      {
        id: "SETTINGS",
        nameLocale: "APPS_SETTINGS",
        icon: <SettingsIcon />,
        backgroundColor: grey[700],
        color: grey[50],
        path: "/settings",
        Route: () => <Route path="/settings" component={SettingsApp} />,
      },
      {
        id: "BANK",
        nameLocale: "APPS_BANK",
        icon: <AccountBalanceIcon />,
        backgroundColor: orange[600],
        color: orange[50],
        path: "/bank",
        Route: () => <Route path="/bank" component={BankApp} />,
      },
    ],
  },
});

export const useApps = () => {
  const [apps, setApps] = useConfig(appsState);
  const allApps = [...apps.preinstalled];

  const getApp = id => allApps.find(a => a.id === id) || null;

  return { apps, allApps, setApps, getApp };
};

export const useApp = id => {
  const { getApp } = useApps();
  return getApp(id);
};
