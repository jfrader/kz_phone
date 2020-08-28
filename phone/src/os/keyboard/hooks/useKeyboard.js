//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import { useSetRecoilState } from "recoil";
import { keyboardState } from "./state";

export const useKeyboard = () => {
  const setters = {
    ArrowRight: useSetRecoilState(keyboardState.ArrowRight),
    ArrowLeft: useSetRecoilState(keyboardState.ArrowLeft),
    ArrowUp: useSetRecoilState(keyboardState.ArrowUp),
    ArrowDown: useSetRecoilState(keyboardState.ArrowDown),
    Backspace: useSetRecoilState(keyboardState.Backspace),
    Enter: useSetRecoilState(keyboardState.Enter),
  };

  return (key, handler) => {
    setters[key]({ handler });
  };
};
