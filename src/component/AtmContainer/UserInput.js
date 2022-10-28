import { useEffect, useRef, useState } from 'react'
import { isString } from '../../utils/Assertion'
import cashWithdraw from '../../utils/core/cashWithdraw'
import ErrorFeedback from '../ErrorFeedback'

export default function UserInput({ setOutPut = () => {} }) {
  const [searchTerm, setSearchTerm] = useState(2480)

  useEffect(() => {
    const bankNotes = cashWithdraw(searchTerm)
    if (bankNotes.length > 0) {
      setOutPut({ bankNotes, error: null, term: parseInt(searchTerm) })
    } else {
      searchTerm && setOutPut({ bankNotes: [], error: 'Invalid Amount' })
    }
  }, [searchTerm])

  return (
    <div>
      <label
        htmlFor="amount"
        className="block text-sm font-medium text-gray-700"
      >
        Enter Amount:
      </label>
      <div className="mt-1">
        <input
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          type="number"
          name="amount"
          placeholder="150, 1500, 5000"
          required
        />
      </div>
    </div>
  )
}
