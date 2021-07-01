const aoi = require("aoi.js")

const bot = new aoi.Bot({
  sharding: false,   
  shardAmount: 2, 
  mobile: true, //ممكن تخلي الحاله هاتف
  
  token: "", //توكن البوت
  prefix: ["$getVar[prefix]"]
})

bot.variables({
prefix: "البريفيكس",
})



bot.onMessage()

bot.loadCommands(`./commands/`)

console.log(' This Bot Made By Veexo 么#0001 ')
console.log('اللهم أجعلنا بالجنه أنشاء الله')

bot.status({
  text: "$getVar[prefix]help",
  type: "COMPETING",
  time: 12
})

bot.status({
  text: "اللهم أجعلنا بالجنه أنشاء الله",
  type: "COMPETING",
  time: 12
})

bot.variables({
prefix: "*",
})

