const toMs = require('ms')
const fs = require('fs')

const addSewaGroup = (gid, expired, _dir) => {
const obj = { id: gid, expired: Date.now() + toMs(expired), status: true }
_dir.push(obj)
fs.writeFileSync('./database/sewa.json', JSON.stringify(_dir, null, 2))
}

const getSewaPosition = (gid, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === gid) {
position = i
}
})
if (position !== null) {
return position
}
}

const getSewaExpired = (gid, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === gid) {
position = i
}
})
if (position !== null) {
return _dir[position].expired
}
}

const checkSewaGroup = (gid, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === gid) {
status = true
}
})
return status
}

const expiredCheckGroup = (sanzy, _dir) => {
setInterval(() => {
let position = null
Object.keys(_dir).forEach((i) => {
if (Date.now() >= _dir[i].expired) {
position = i
}
})
if (position !== null) {
console.log(`Sewa expired: ${_dir[position].id}`)
sanzy.sendMessage(_dir[position].id, { text: `Masa sewa di grup ini telah habis, bot otomatis keluar!` })
.then( async res => {
await sanzy.groupLeave(_dir[position].id)
_dir.splice(position, 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(_dir, null, 2))
})
}
}, 1000)
}
module.exports = {
addSewaGroup,
getSewaExpired,
getSewaPosition,
expiredCheckGroup,
checkSewaGroup
}