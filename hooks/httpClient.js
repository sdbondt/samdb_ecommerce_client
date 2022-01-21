import { useState, useCallback } from 'react'

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null) 

  const sendRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
      setIsLoading(true)
      
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
        });

        const responseData = await response.json()
        if (!responseData.data) {
          throw new Error(responseData.msg)
        }
        setIsLoading(false)
        return responseData
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
        throw err
      }
    },
    []
  )

  const clearError = () => {
    setError(null);
  }

  return { isLoading, error, sendRequest, setError, clearError };
}