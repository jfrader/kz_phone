//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import { useRecoilState, atom } from "recoil";

const dialerHistoryState = atom({
  key: "dialerHistory",
  default: [
    {
      id: 0,
      caller: "Kidz",
      phoneNumber: "000-1111",
      type: "incoming",
    },
    {
      id: 1,
      caller: "ROCKY",
      phoneNumber: "000-1112",
      type: "outgoing",
    },
  ],
});

export const useDialerHistory = () => {
  const [history, setHistory] = useRecoilState(dialerHistoryState);
  return { history, setHistory };
};
