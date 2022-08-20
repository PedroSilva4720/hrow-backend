import { Router } from 'express'

import { createRow, getRows } from './controllers/rowsControlles/index.js'

export const router = Router()

router.post('/create-row', createRow)
router.get('/get-rows', getRows)
