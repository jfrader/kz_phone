//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import React from "react";
import { AppWrapper } from "../../../ui/components";
import { AppTitle } from "../../../ui/components/AppTitle";
import { AppContent } from "../../../ui/components/AppContent";
import { useContextMenu, MapStringOptions } from "../../../ui/hooks/useContextMenu";
import { useConfig } from "../../../os/config/hooks/useConfig";
import { useSettings } from "../hooks/useSettings";
import { List } from "../../../ui/components/List";
import { useSimcard } from "../../../os/simcard/hooks/useSimcard";
import { useApp } from "../../../os/apps/hooks/useApps";
import { SettingItem } from "./SettingItem";

export const SettingsApp = () => {
  const settingsApp = useApp("SETTINGS");
  const [config] = useConfig();
  const { setSettings, settings } = useSettings();
  const simcard = useSimcard();

  const wallpapers = config.wallpapers.map(
    MapStringOptions(settings.wallpaper, val => setSettings("wallpaper", val))
  );
  const frames = config.frames.map(
    MapStringOptions(settings.frame, val => setSettings("frame", val))
  );
  const themes = Object.keys(config.themes).map(
    MapStringOptions(settings.theme, val => setSettings("theme", val))
  );

  const [openMenu, closeMenu, ContextMenu, isMenuOpen] = useContextMenu();
  return (
    <AppWrapper>
      <AppTitle app={settingsApp} />
      <AppContent backdrop={isMenuOpen} onClickBackdrop={closeMenu}>
        <List>
          <SettingItem
            label="Theme"
            value={settings.theme}
            options={themes}
            onClick={openMenu}
          />
          <SettingItem
            label="Wallpaper"
            value={settings.wallpaper}
            options={wallpapers}
            onClick={openMenu}
          />
          <SettingItem
            label="Frame"
            value={settings.frame}
            options={frames}
            onClick={openMenu}
          />
          <SettingItem label="Phone Number" value={simcard.number} />
        </List>
      </AppContent>
      <ContextMenu />
    </AppWrapper>
  );
};
