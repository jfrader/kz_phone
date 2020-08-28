//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import { useEffect } from "react";
import { eventNameFactory } from "../utils/nuiUtils";

export const useNuiService = (options = {}) => {
  const { capture, passive, once } = options;
  const eventListener = event => {
    const { app, method, data } = event.data;
    if (app && method && data !== undefined) {
      window.dispatchEvent(
        new MessageEvent(eventNameFactory(app, method), {
          data,
        })
      );
    }
  };
  useEffect(() => {
    const opts = { capture, passive, once };
    window.addEventListener("message", eventListener, opts);
    return () => window.removeEventListener("message", eventListener, opts);
  }, [capture, passive, once]);
};
