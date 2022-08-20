import { Router } from 'express'

import {
  createRow,
  getRows,
  toggleToUsedRow,
} from './controllers/rowsControlles/index.js'

export const router = Router()

router.post('/create-row', createRow)
router.get('/get-rows', getRows)
router.post('/toggle-row', toggleToUsedRow)
