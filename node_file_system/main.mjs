import {createFile, deleteFile, showFile, updateFile } from './files_manager.mjs'

createFile("Conteúdo inicial do arquivo.\n Criado com o módulo fs do Node.js")
showFile()
updateFile("Conteúdo modificado")
showFile()
deleteFile("./meuarquivo.txt")