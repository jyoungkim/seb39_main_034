import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useGetCards(categoryQuery, pageNumber) {
  // console.log('훅 실행될 때 찍은 로그')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [cards, setCards] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setCards([])
  }, [categoryQuery])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: '/v1/goal/list',
      params: { page: pageNumber, size: 12 },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setCards((prevCards) => {
          return [...prevCards, ...res.data.data]
        })
        console.log('axios 받아옴')
        console.log(res.data)
        setHasMore(res.data.pageInfo.totalPages > pageNumber)
        setLoading(false)
      })
      .catch((err) => {
        if (axios.isCancel(err)) return
        setLoading(false)
        setError(true)
        console.log('Error: ', err)
      })
    return () => cancel()
  }, [categoryQuery, pageNumber])
  // console.log('훅 마지막 줄에서 찍은 로그')
  return { loading, error, cards, hasMore }
}