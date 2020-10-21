//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import { NUI_PHONE_URL, RESOURCE_NAME } from "../../../constants";

export const eventNameFactory = (app, method) => `${app}:${method}`;
export const eventNameMethod = name => name.split(":")[1] || null;

export const postNuiCallback = async (app, method, data, callback) => {
  try {
    const URL = `${NUI_PHONE_URL}/${RESOURCE_NAME}:${eventNameFactory(app, method)}`;
    const input = data === undefined ? {} : data;
    const inputStr = JSON.stringify(input);
    const response = await fetch(URL, { method: "POST", body: inputStr });
    if (!response.ok) {
      throw response.statusText;
    }
    if (!callback || !callback.call) return;
    return callback(response.json());
  } catch (e) {
    console.error(e);
    if (!callback || !callback.call) return;
    callback(false);
  }
};
