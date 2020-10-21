//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import { atom } from "recoil";

export const keyboardState = {
  ArrowRight: atom({
    key: "ArrowRight",
    default: null,
  }),
  ArrowLeft: atom({
    key: "ArrowLeft",
    default: null,
  }),
  ArrowUp: atom({
    key: "ArrowUp",
    default: null,
  }),
  ArrowDown: atom({
    key: "ArrowDown",
    default: null,
  }),
  Backspace: atom({
    key: "Backspace",
    default: null,
  }),
  Enter: atom({
    key: "Enter",
    default: null,
  }),
  Escape: atom({
    key: "Escape",
    default: null,
  }),
  F1: atom({
    key: "F1",
    default: null,
  }),
};
