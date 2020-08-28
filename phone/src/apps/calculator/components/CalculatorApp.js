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
import { Calculator } from "./Calculator";
import { useApp } from "../../../os/apps/hooks/useApps";

export const CalculatorApp = () => {
  const calculator = useApp("CALCULATOR");
  return (
    <AppWrapper>
      <AppTitle app={calculator} />
      <AppContent>
        <Calculator />
      </AppContent>
    </AppWrapper>
  );
};
