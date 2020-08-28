//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import { atom, useRecoilState } from "recoil";

export const screenMapState = atom({
  key: "screenMap",
  default: [],
});

export const keyboardNavState = {
  focusedIdx: atom({
    key: "keyboardNavFocusedIdx",
    default: [-1, -1],
  }),
  focusedRef: atom({
    key: "keyboardNavFocusedRef",
    default: null,
  }),
};

export const useKeyboardNav = () => {
  const [screenMap, setScreenMap] = useRecoilState(screenMapState);
  const [focusedIdx, setFocusedIdx] = useRecoilState(keyboardNavState.focusedIdx);

  const getRow = idx => {
    const row = screenMap[idx];
    if (!row) return null;
    const focusCell = cIdx => {
      setFocusedIdx([idx, cIdx]);
    };
    const getCell = cIdx => {
      const cell = screenMap[idx][cIdx];
      if (!cell) return null;
      return {
        value: cell,
        focusCell,
      };
    };

    return { getCell, value: row };
  };

  return { getRow };
};
