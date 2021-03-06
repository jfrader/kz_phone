//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import { useRecoilValue } from "recoil";
import { phoneState } from "./state";

export const usePhone = () => {
  const visibility = useRecoilValue(phoneState.visibility);
  const powerOff = useRecoilValue(phoneState.powerOff);

  return { visibility, powerOff };
};
