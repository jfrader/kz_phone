//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import { useSetRecoilState } from "recoil";
import { phoneState } from "./state";
import { useNuiEvent } from "../../nui-events/hooks/useNuiEvent";
import { usePhone } from "./usePhone";
import { useNuiCallback } from "../../nui-events/hooks/useNuiCallback";
import { useKeyboard } from "../../keyboard/hooks/useKeyboard";
import { useEffect } from "react";

export const usePhoneService = () => {
  const setVisibility = useSetRecoilState(phoneState.visibility);
  const setPowerOff = useSetRecoilState(phoneState.powerOff);
  useNuiEvent("PHONE", "setPowerOff", setPowerOff);
  useNuiEvent("PHONE", "setVisibility", setVisibility);

  const closePhone = useNuiCallback("PHONE", "closePhone");
  const setKey = useKeyboard();

  useEffect(function registerClose() {
    setKey("F1", closePhone);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return usePhone();
};
