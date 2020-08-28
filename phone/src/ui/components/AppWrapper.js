//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import React from "react";

export const AppWrapper = ({ children, style, handleClickAway, ...props }) => {
  return (
    <div
      {...props}
      style={{
        padding: 0,
        margin: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
