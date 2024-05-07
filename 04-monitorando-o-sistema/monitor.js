const os = require('node:os')
const fs = require('node:fs')
const path =  require('node:path')
const { uptime } = require('node:process')

const systemPlataformMap = {
    "win32": "Windows",
    "linux": "Linux",
    "darwin": "MacOS",
    "freebsd": "FreeBSD"
}

function getSystemInfo(){
    const system = systemPlataformMap[os.platform()]
    const architeture = os.arch()
    const cpu = os.cpus()[0].model
    
    const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24)
    const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60
    
    const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60)
    const uptimeHoursInSeconds = uptimeHours * 60 * 60

    const uptimeMins = Math.floor((os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60)
    const uptimeMinsInSeconds = uptimeMins * 60

    const uptimeSecs = Math.floor(os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinsInSeconds)
    const uptime = `${uptimeDays} dias, ${uptimeHours}:${uptimeMins}:${uptimeSecs}`

    const ramTotal = os.totalmem() / 1024 / 1024 / 1024
    const ramUsage = (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024
    const ramUsagePercent = Math.round((ramUsage / ramTotal) * 100)

    return {
        system, 
        architeture, 
        cpu,  
        uptime, 
        ramTotal, 
        ramUsage, 
        ramUsagePercent
    }

}

function printSystemLog({system, architeture, cpu, uptime, ramTotal, ramUsage, ramUsagePercent}){
    
    console.clear()
    console.log("Detalhes do sistema: ")
    console.log(`Sistema operacional: ${system}`)
    console.log(`Arquitetura: ${architeture}`)
    console.log(`Modelo do processador: ${architeture}`)
    console.log(`Informações da CPU: ${cpu}`)
    console.log(`Tempo de atividade do sistema: ${uptime}`)
    console.log(`Uso de memoria RAM: ${ramUsage.toFixed(2)}GB / ${ramTotal.toFixed(2)}GB / (${ramUsagePercent} %)`)
    console.log("----------------------------------------")

}

function saveLog({system, architeture, cpu, uptime, ramTotal, ramUsage, ramUsagePercent}){
    const logContent = `Detalhes do sistema | Sistema operacional: ${system} | Arquitetura: ${architeture} | Modelo do processador: ${architeture} | Informações da CPU: ${cpu} | Tempo de atividade do sistema: ${uptime} | Uso de memoria RAM: ${ramUsage.toFixed(2)}GB / ${ramTotal.toFixed(2)}GB / (${ramUsagePercent} %)\n`

    const logDir = path.join(".", "log")
    
    if(!fs.existsSync(logDir)){
        fs.mkdirSync(logDir)
    }

    const logPath = path.join(logDir, "log.txt")
    fs.appendFileSync((logPath), logContent)
    
}



setInterval(() => {
    const systemInfo = getSystemInfo()
    printSystemLog(systemInfo)
    saveLog(systemInfo)
}, 1000)