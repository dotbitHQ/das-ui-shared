export function isSupportedAccount (account: string): boolean {
  return /.+\.bit/.test(account) && account.split('.').every(v => Boolean(v.length))
}

/**
 * Transform hash-style account to dot-style account
 * @param inputAccount
 */
export function toDottedStyle(inputAccount: string) {
  if (!isSupportedAccount(inputAccount)) {
    return inputAccount
  }

  if (!inputAccount.includes('#')) {
    return inputAccount
  }

  const [account, suffix] = inputAccount.split('.')
  const [main, sub] = account.split('#')

  return `${sub}.${main}.${suffix}`
}

/**
 * Transform dot-style account to hash-style account
 * @param inputAccount
 */
export function toHashedStyle(inputAccount: string) {
  if (!isSupportedAccount(inputAccount)) {
    return inputAccount
  }

  if (inputAccount.includes('#')) {
    return inputAccount
  }

  const parts = inputAccount.split('.')

  if (parts.length === 3) {
    const [sub, main, suffix] = parts

    return `${main}#${sub}.${suffix}`
  }

  return inputAccount
}
