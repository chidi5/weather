import React from 'react'

function CurrentDateTime() {
    const currentDate = new Date();
    var dateTime = currentDate.toUTCString();
    return (
        <div className='text-center xl:text-left'>
            <span className="text-md text-gray-500">{dateTime}</span>
        </div>
    )
}

export default CurrentDateTime