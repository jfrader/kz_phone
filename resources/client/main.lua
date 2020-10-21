-- KzPhone - A FiveM phone resource for GTA V
-- Copyright (C) 2020  J Francisco Rader (francisco.rader@gmail.com)
-- 
-- You should have received a copy of the GNU Affero General Public License
-- along with this program.  If not, see <http:-- www.gnu.org/licenses/>.
-- 
-- See LICENSE in the project root for license information.
local isPlayerDead = false

local PhoneData = {
  PHONE = {setPowerOff = true, setVisibility = false, setFocused = false},
  CONTACTS = {setContacts = {}},
  DIALER = {setCalls = {}},
  MESSAGES = {setMessages = {}},
  SIMCARD = {setNumber = nil}
}

function sendNUIEvent(app, method, data)
  if (not app or not method) then return nil end
  SendNUIMessage({app = app, method = method, data = data})
  return true
end

function togglePhone()
  if (PhoneData.PHONE.setPowerOff) then
    setPhoneData({ PHONE = { setPowerOff = false } })
  end
  setPhoneData({ PHONE = { setVisibility = not PhoneData.PHONE.setVisibility } })
  if PhoneData.PHONE.setVisibility == true then
    PhonePlayIn()
    return
  end
  PhonePlayOut()
end

function setPhoneData(app, method, data)
  if (app ~= nil and method ~= nil) then
    PhoneData[key][method] = data
    sendNUIEvent(app, method, data)
  end
end

RegisterNUICallback('kz_phone:PHONE:closePhone', function(data, cb)
  togglePhone()
  cb()
end)

RegisterNetEvent('kz_phone:setPhoneData')
AddEventHandler('kz_phone:setPhoneData', function(phoneData)
  for app, methods in pairs(phoneData) do
    if (app ~= nil and methods ~= nil) then
      for method, data in pairs(methods) do setPhoneData(app, method, data) end
    end
  end
end)

Citizen.CreateThread(function()
  Citizen.Wait(0)
  TriggerServerEvent('kz_phone:fetchData', {
    CONTACTS = true,
    SIMCARD = true,
    MESSAGES = true,
    DIALER = true
  })
end)

Citizen.CreateThread(function()
  while true do
    Citizen.Wait(0)
    if not PhoneData.PHONE.setVisibility and isPlayerDead then
      DisableControlAction(0, Config.Keymap.ToggleOpenPhone, true)
    end
    if IsControlJustPressed(1, Config.Keymap.ToggleOpenPhone) then
      togglePhone()
    end

    if (PhoneData.PHONE.setVisibility == true) then
      if (not PhoneData.PHONE.setFocused) then
        SetNuiFocus(true, true)
        setPhoneData({ PHONE = { setFocused = true } })
      end
      for key, code in pairs(Config.Keys) do
        if IsControlJustPressed(1, code) then
          sendNUIEvent('KEYBOARD', 'keyUp', key)
        end
      end
    else
      if (PhoneData.PHONE.setFocused) then
        SetNuiFocus(false, false)
        setPhoneData({ PHONE = { setFocused = false } })
      end
    end
  end
end)
