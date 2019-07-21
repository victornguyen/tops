import { useState, useEffect } from 'react'
import axios from 'axios'

const PRODUCTS_API = 'https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3'

const useProducts = () => {
  const [products, setProducts] = useState({ products: [] })
  const [isLoading, setIsLoading] = useState({ isLoading: false })
  const [isError, setIsError] = useState({ isError: false })

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      try {
        const result = await axios(PRODUCTS_API)
        setProducts(result.data)
      } catch (error) {
        // TODO: depending on what error responses look like, we could display
        // specific error states based on error types.
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetchProducts()
  }, [])

  return [products, isLoading, isError]
}

export default useProducts
