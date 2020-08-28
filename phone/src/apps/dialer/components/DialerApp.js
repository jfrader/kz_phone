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
import { DialerHistory } from "./DialerHistory";
import { useDialerHistory } from "../hooks/useDialerHistory";
import { useApp } from "../../../os/apps/hooks/useApps";

export const DialerApp = () => {
  const { history } = useDialerHistory();
  const dialer = useApp("DIALER");
  return (
    <AppWrapper>
      <AppTitle app={dialer} />
      <AppContent>
        <DialerHistory calls={history} />
      </AppContent>
    </AppWrapper>
  );
};
