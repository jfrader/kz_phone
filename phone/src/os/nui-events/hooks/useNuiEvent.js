//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import { useEffect, useRef } from "react";
import { eventNameFactory } from "../utils/nuiUtils";

export const useNuiEvent = (app, method, handler, options = {}) => {
  const savedHandler = useRef();
  const { capture, passive, once } = options;

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = event => {
      if (savedHandler.current && savedHandler.current.call) {
        const { data } = event;
        savedHandler.current(data);
      }
    };
    const opts = { capture, passive, once };
    const eventName = eventNameFactory(app, method);
    window.addEventListener(eventName, eventListener, opts);
    return () => window.removeEventListener(eventName, eventListener, opts);
  }, [app, method, capture, passive, once]);
};
