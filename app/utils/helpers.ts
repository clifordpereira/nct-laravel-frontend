export function nctCrudHeaders() {
  const { authHeaders } = useNctAuth()
  return {
    Accept: 'application/json',
    ...authHeaders.value,
  }
}
