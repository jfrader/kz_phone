//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import React from "react";
import { AppWrapper } from "../../../ui/components";
import { Box } from "@material-ui/core";
import { GridMenu } from "../../../ui/components/GridMenu";
import { useApps } from "../../../os/apps/hooks/useApps";

export const HomeApp = () => {
  const { apps } = useApps();
  return (
    <AppWrapper>
      <Box width="100%" mt={6} px={1}>
        {apps && <GridMenu items={apps.preinstalled} />}
      </Box>
    </AppWrapper>
  );
};
