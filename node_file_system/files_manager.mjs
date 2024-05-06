import fs from 'node:fs'
import { resolve } from 'node:path'

export function createFile(content) {
  return new Promise((resolve, reject) => {
    fs.writeFile('meuarquivo.txt', content, (error)=> {
      if(error){
        reject("Erro ao escrever arquivo.", error.message)
      } else{
        resolve()
      }
    })

  })
}

export function updateFile(content) {
  return new Promise((resolve, reject) => {
    fs.writeFile('meuarquivo.txt', content, (error)=>{
      if(error){
        reject("Erro ao modificar arquivo.", error.message)
      }else{
        resolve("Arquivo modificado com sucesso!", content)
      }
    })
  })
}

export function showFile() {
  try {
    const content = fs.readFileSync('meuarquivo.txt', 'utf-8')
    console.log(content)
  } catch (error) {
    console.error('Erro ao ler o arquivo: ', error.message)
  }
}

export function deleteFile(path) {
  return new Promise((resolve, reject) => {
    fs.unlink(path, (error) => {
      if(error){
        reject('Erro ao excluir arquivo!', error.message)
      }else{
        console.log('Arquivo exlcuído com sucesso.')
        resolve()
      }
    })
  })
}
