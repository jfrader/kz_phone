//KzPhone - A FiveM phone resource for GTA V
//Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// See LICENSE in the project root for license information.
import { useRecoilState, atom } from "recoil";

const contactListState = atom({
  key: "contactList",
  default: [
    {
      id: 0,
      display: "Test Contact",
      phoneNumber: "000-1111",
    },
    {
      id: 1,
      display: "Test Contact 2",
      phoneNumber: "000-1112",
    },
  ],
});

export const useContacts = () => {
  const [contactList, setContactList] = useRecoilState(contactListState);
  return { contactList, setContactList };
};
