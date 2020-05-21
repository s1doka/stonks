const defaultResponse = {}

export const getCryptoExchanges = jest.fn(() =>
  Promise.resolve(defaultResponse)
)
