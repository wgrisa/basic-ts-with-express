import express from 'express'
import { StatusCodes } from 'http-status-codes'

const router = express.Router()

router.use('/ping', (_req, res) => res.status(StatusCodes.OK).send('pong'))

export const routes = router
