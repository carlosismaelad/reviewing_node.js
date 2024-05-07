const os = require('node:os')

const platform = os.platform()
console.log("PLataforma do SO: ", platform)

const arch = os.arch()
console.log("Arquitetura do SO: ", arch)

const cpus = os.cpus()
console.log("Informações sobre CPU's", cpus)
console.log(cpus.length) // qtde de núcleos
console.log(cpus[0])

const totalMemmory = os.totalmem()
console.log("Memória total do computador: ", totalMemmory, "bytes")
console.log("Memória total do computador: ", (totalMemmory / 1024 / 1024 / 1024).toFixed(2), "GB") // mem em GB com duas casas decimais

const freeMemory = os.freemem()
console.log("Quantidade de memória disponível: ", freeMemory, "bytes")
console.log("Quantidade de memória disponível: ", (freeMemory / 1024 / 1024 / 1024), "GB")