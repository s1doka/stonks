interface HttpResponse<T> extends Response {
  parsedBody?: T
}

export async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  try {
    const response = await fetch(request)
    return response.json()
  } catch (error) {
    throw new Error(error)
  }
}
