import { useContext } from 'react'

export const useClient = <T>(context: React.Context<T | null>): T => {
  const client = useContext(context)
  if (!client) {
    throw new Error('Error Firebase Client');
  }
  return client
}