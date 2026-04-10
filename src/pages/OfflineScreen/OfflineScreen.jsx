import React from 'react'
import { useOnlineStatus } from '../../hooks/useOnlineStatus'

export default function OfflineScreen({ children }) {

    const isOnline = useOnlineStatus()
    if (isOnline) return children

    return (
        <>
{children }
           
            <div className='fixed bottom-3 right-3 shadow-2xl p-4 rounded-lg bg-red-100 '>
                <h1 className='text-xs font-bold text-red-800 '>CHECK YOUR INTERNET CONNECTION</h1>
            </div>

        </>

    )
}
