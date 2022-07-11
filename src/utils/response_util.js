export const succesfullResponse = (data, statusCode = 200) => {
  return {
    statusCode,
    body: JSON.stringify(data, null, 2)
  }
}

export const errorResponse = (errorMessage, statusCode = 400) => {
  return {
    statusCode,
    body: JSON.stringify(
      {
        error: errorMessage
      },
      null,
      2
    )
  }
}
