import { Router } from 'express'

const router = Router()

const livrosFake = [
  { id: 1, titulo: "O Pequeno Príncipe", autor: "Saint-Exupéry" },
  { id: 2, titulo: "O Hobbit", autor: "J.R.R. Tolkien" },
  { id: 3, titulo: "Orgulho e Preconceito", autor: "Jane Austen" }
]

router.get('/', (req, res) => {
  res.json(livrosFake)
})

export default router
