import {createFile, deleteFile, showFile, updateFile } from './files_manager.mjs'

async function start(){
    await createFile("Conteúdo inicial do arquivo.\n Criado com o módulo fs do Node.js")
    await showFile()
    await updateFile("Conteúdo modificado")
    await showFile()
    await deleteFile("./meuarquivo.txt")
}

start()