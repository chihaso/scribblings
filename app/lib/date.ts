export function localizedDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleString()
}
