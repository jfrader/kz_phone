//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import React, { useState } from "react";
import { ContextMenu } from "../components/ContextMenu";

export const MapStringOptions = (current, onClick) => string => {
  return {
    selected: current === string,
    label: string,
    key: string,
    onClick: () => onClick(string),
  };
};

export const useContextMenu = (_options = []) => {
  const [open, setOpen] = useState();
  const [options, setOptions] = useState(_options);

  const onClose = () => setOpen(false);

  const onOpen = opts => {
    setOptions(opts);
    setOpen(true);
  };

  return [
    onOpen,
    onClose,
    () => <ContextMenu open={open} onClose={onClose} options={options} />,
    open,
  ];
};
