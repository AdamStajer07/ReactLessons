import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'

function Finance() {
  const {globalData} = useGlobalContext()
  const {id} = globalData
  const [financeSum, setFinanceSum] = useState(0)

  useEffect(() => {
    const fetchData = async ()=>{
      try {
        console.log(id)
        const finance = await axios.get(`http://localhost:8800/finance/select/${id}`)
        setFinanceSum(finance.data.reduce((sum, el) => sum + el.sum,0))
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  
  
  return (
    <div>
      {financeSum}        
    </div>
  )
}

export default Finance