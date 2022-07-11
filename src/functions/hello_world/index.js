import { succesfullResponse, errorResponse } from '../../utils/response_util'

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body)
    if (body?.error) throw new Error('Test error')

    return succesfullResponse('hello world')
  } catch (error) {
    return errorResponse(error.message)
  }
}
