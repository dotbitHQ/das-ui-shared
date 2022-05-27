/**
 * derive a color based on the account name
 * @param account
 */
export function accountColor (account: string): { color: string, light: string } {
  const colors = ['#9692E6', '#40DCFF', '#FF9066', '#FEC165', '#FE749E', '#5BBFFF', '#D57AF1', '#787DFF', '#44DEDE', '#BD76FF', '#FFC844', '#40DAB7']
  const lights = ['#E8E1FF', '#E1F7FF', '#FFE8E1', '#FFF1E1', '#FFECE1', '#E1E7FF', '#FDE1FF', '#E1E2FF', '#E1FFFF', '#F5E1FF', '#FFECE1', '#E1FFF2']

  let index = 0
  for (let i = 0; i < account.length; i++) {
    index += account.charCodeAt(i)
  }
  index = index % colors.length

  const color = colors[index]
  const light = lights[index]

  return {
    color,
    light
  }
}
