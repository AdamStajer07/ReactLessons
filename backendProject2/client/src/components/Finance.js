import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'

function Finance() {
  const {getSessionData} = useGlobalContext()
  const {id} = getSessionData()
  const [financeSum, setFinanceSum] = useState(0)
  const [addFinanceValue, setAddFinanceValue] = useState(0)

  useEffect(() => {
    const fetchData = async ()=>{
      try {
        const finance = await axios.get(`http://localhost:8800/finance/select/${id}`)
        setFinanceSum(finance.data.reduce((sum, el) => sum + el.sum,0))
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  
  const addFinance = async amount => {
    try {
      await axios.post(`http://localhost:8800/finance/add/${id}`, {id: id, title: 'testTitle', sum: amount})
    }
    catch(err) {
      console.log(err)
    }
  }
  
  return (
    <div>
      {financeSum}
      <form>
        <input type='number' name='add' value={addFinanceValue} onChange={e=>setAddFinanceValue(e.target.value)} />
        <button onClick={()=>addFinance(addFinanceValue)}>Add</button>
      </form>
    </div>
  )
}

export default Finance