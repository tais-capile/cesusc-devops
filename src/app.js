import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

// configuração de path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3000

app.use(express.json())

// === ROTAS DA APLICAÇÃO PRINCIPAL ===

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    updated: new Date().toISOString(),
    version: "API da Tais integrada ao projeto CESUSC-DEVOPS"
  })
})


// === ROTAS DA SUA BIBLIOTECA (IMPORTADAS) ===
import livrosRoutes from '../biblioteca/src/routes/livros.routes.js'
app.use('/api/livros', livrosRoutes)


// subir servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
