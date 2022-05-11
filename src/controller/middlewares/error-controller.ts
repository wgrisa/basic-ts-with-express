import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { logger } from '../../logger'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function errorController(error: Error & { status?: number }, _request: Request, res: Response) {
  logger.error(error)

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send({ error: 'An internal server error has occurred. Please contact the development team.' })
}
