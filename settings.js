const fs = require('fs')
const chalk = require('chalk')

//======> Web Api <======//
global.clph = '5jqvnz54' // Register From : https://api.caliph.biz.id

//======> Setting Owner <======//
global.numberowner = '6283853558913'
global.owner = ['6283853558913'] 
global.namaowner = 'Haikal'
global.premium = ["6283853558913"] 
//======> Setting Bot <======//
global.namabot = 'Vestia' 
global.autoread = true 
global.autobio = false
global.packname = 'creator' 
global.author = '@hai_kalgnz' 
//======>Message Bot<======//
global.mess = {
    done: 'Done',
    prem: 'Feature Only For User Premium',
    admin: 'Feature Only for Group Admin',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for Owner',
    group: 'Feature Only for Group Chat',
    private: 'Feature Only for Private Chat',
    wait: 'Wait a Moment, for Process',    
    error: 'Sorry Features Error',
}
//======>Setting Image<======//
global.thumb = fs.readFileSync('./media/quoted.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
//======> Setting Link <======//
global.link = 'https://chat.whatsapp.com/FO6F8lWr1cn7KFP0pRr5j0'
//======> Reload File <======//*/
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})