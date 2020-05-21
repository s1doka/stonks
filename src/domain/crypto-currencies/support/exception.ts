class CryptoCurrenciesException extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'CryptoCurrenciesException'
  }
}

export default CryptoCurrenciesException
