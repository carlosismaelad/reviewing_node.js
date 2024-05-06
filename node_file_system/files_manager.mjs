import fs from 'node:fs'

export function createFile(content) {
  fs.writeFileSync('meuarquivo.txt', content)
}

export function updateFile(content) {
  fs.writeFileSync('meuarquivo.txt', content)
}

export function showFile() {
  try {
    const content = fs.readFileSync('meuarquivo.txt', 'utf-8')
    console.log(content)
  } catch (error) {
    console.error('Erro ao ler o arquivo: ', error.message)
  }
}

export function deleteFile() {
  try {
    fs.unlinkSync('meuarquivo.txt')
    console.log('Arquivo excluído com sucesso!')
  } catch (error) {
    console.error('Erro ao excluir o arquivo: ', error.message)
  }
}
