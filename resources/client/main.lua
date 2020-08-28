-- KzPhone - A FiveM phone resource for GTA V
-- Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
-- 
-- You should have received a copy of the GNU Affero General Public License
-- along with this program.  If not, see <http:-- www.gnu.org/licenses/>.
-- 
-- See LICENSE in the project root for license information.
local ESX = nil
local isPhoneOpen = false
local isPlayerDead = false
local hasFocus = false
local hasPhone = true

Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
    Citizen.Wait(0)
  end
end)

function sendNUIEvent(app, method, data)
  if (not app or not method) then return nil end
  SendNUIMessage({app = app, method = method, data = data})
  return true
end

function togglePhone()
  isPhoneOpen = not isPhoneOpen
  sendNUIEvent('PHONE', 'setVisibility', isPhoneOpen)
  if isPhoneOpen == true then
    PhonePlayIn()
    return
  end
  PhonePlayOut()
end

Citizen.CreateThread(function()
  while true do
    Citizen.Wait(0)
    if not isPhoneOpen and isPlayerDead then
      DisableControlAction(0, Config.Keymap.ToggleOpenPhone, true)
    end
    if IsControlJustPressed(1, Config.Keymap.ToggleOpenPhone) then
      togglePhone()
    end

    if (isPhoneOpen == true) then
      SetNuiFocus(true, true)
      hasFocus = true
      for key, code in pairs(Config.Keys) do
        if IsControlJustPressed(1, code) then
          sendNUIEvent('KEYBOARD', 'keyUp', key)
        end
      end
    else
      SetNuiFocus(false, false)
      hasFocus = false
    end
  end
end)
