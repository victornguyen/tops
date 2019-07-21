import { useState, useEffect } from 'react'
import axios from 'axios'

import PRODUCTS_MOCK from '../data/products.json'
const PRODUCTS_API = 'https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({ instance: null, message: '' })

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      try {
        const result = await axios(PRODUCTS_API)
        setProducts(result.data)
        setError({ instance: null, message: '' })
      } catch (error) {
        setProducts(PRODUCTS_MOCK)
        setError({ instance: error, message: error.message })
      }
      setIsLoading(false)
    }

    fetchProducts()
  }, [])

  return [products, isLoading, error]
}

export default useProducts
