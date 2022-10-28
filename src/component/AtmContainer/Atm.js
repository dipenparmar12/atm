import { useEffect, useRef, useState } from 'react'
import ErrorFeedback from '../ErrorFeedback'
import DisplayBankNote from './DisplayBankNote'
import UserInput from './UserInput'

export default function Atm() {
  const [output, setOutPut] = useState({
    bankNotes: [],
    error: null,
    term: null,
  })

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 px-3 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Hypothetical ATM machine
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <UserInput setOutPut={setOutPut} />

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>

                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500"> Output </span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2.5 ">
                <ErrorFeedback
                  condition={output.bankNotes.length <= 0}
                  msg={output.error}
                />

                {output.bankNotes?.map(([kind, times]) => (
                  <DisplayBankNote key={kind} kind={kind} times={times} />
                ))}

                {output.bankNotes.length > 0 && (
                  <div className="flex items-center justify-start gap-0">
                    <span className="flex-1  px-2 py-0.5 rounded ">Total</span>
                    <span>=</span>
                    <span className="flex-1 font-bold bg-green-100font-semibold px-2 py-0.5 rounded ">
                      {output.term}
                    </span>
                  </div>
                )}

                {/* <Print data={output} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
