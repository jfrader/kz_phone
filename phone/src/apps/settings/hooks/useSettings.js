//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import Default from "../default.json";
import { useConfig } from "../../../os/config/hooks/useConfig";
import { atom } from "recoil";
import { createMuiTheme } from "@material-ui/core";

const settingsState = atom({
  key: "settings",
  default: Default,
});

export const useSettings = () => {
  const [settings, setSettings] = useConfig(settingsState);
  const [config] = useConfig();
  const currentTheme = () => createMuiTheme(config.themes[settings.theme]);
  return { settings, setSettings, currentTheme };
};
