/**
 * derive a color based on the account name
 * @param account
 */
export function accountColor (account: string): { color: string, light: string } {
  const colors = ['#9692E6', '#40C3F0', '#FF9895', '#FEC165', '#E96565', '#3370FF', '#FF4F6E', '#6957ED', '#22C4C6', '#BC51EC', '#FFA86A', '#22C68D']
  const lights = ['#E8E1FF', '#E1F7FF', '#FFE8E1', '#FFF1E1', '#FFECE1', '#E1E7FF', '#FFE1EA', '#E1E2FF', '#E1FFFF', '#F5E1FF', '#FFECE1', '#E1FFF2']

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
