const express = require('express')
const router = express.Router()

const getDocs = async (req, res) => {
  res.sendFile('docs.html', { root: '.' })
}

const getDocsSwagger = async (req, res) => {
  res.sendFile('swagger.json', { root: '.' })
}

router.get('/', getDocs)
router.get('/swagger.json', getDocsSwagger)

module.exports = router
