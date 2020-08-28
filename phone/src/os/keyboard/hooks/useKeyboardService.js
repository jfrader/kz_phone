//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { keyboardState } from "./state";
import { useNuiEvent } from "../../nui-events/hooks/useNuiEvent";

const validKeys = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown",
  "Backspace",
  "Enter",
  "Escape",
];

const isKeyValid = key => validKeys.indexOf(key) !== -1;

export const useKeyboardService = () => {
  const getters = {
    ArrowRight: useRecoilValue(keyboardState.ArrowRight),
    ArrowLeft: useRecoilValue(keyboardState.ArrowLeft),
    ArrowUp: useRecoilValue(keyboardState.ArrowUp),
    ArrowDown: useRecoilValue(keyboardState.ArrowDown),
    Backspace: useRecoilValue(keyboardState.Backspace),
    Enter: useRecoilValue(keyboardState.Enter),
    Escape: useRecoilValue(keyboardState.Escape),
  };

  // Subscribe to client keypresses when phone is not focused
  useNuiEvent("KEYBOARD", "keyUp", key => {
    const handler = getters[key];
    if (handler && handler.call) {
      handler();
    }
  });

  useEffect(
    function registerKeys() {
      function onKeyUp(event) {
        const { key } = event;
        const callback = getters[key];
        if (isKeyValid(key) && callback && callback.handler && callback.handler.call) {
          return callback.handler();
        }
      }
      window.addEventListener("keyup", onKeyUp);
      return () => window.removeEventListener("keyup", onKeyUp);
    },
    [getters]
  );
};
