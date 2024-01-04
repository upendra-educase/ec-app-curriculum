import React, { useState } from 'react'
import Sidebar from '../../components/common/Sidebar'
import Router from '../../router/Router'
import ActionBar from '../../components/ActionBar'

const DashBoard = () => {
  const [isAsideOpen, setAsideOpen] = useState(false);

  return (
    <div className='d-flex'>
      <div>
        <Sidebar isAsideOpen={isAsideOpen} setAsideOpen={setAsideOpen} />
      </div>
      <div className='py-4 w-100'>
        <ActionBar isAsideOpen={isAsideOpen} setAsideOpen={setAsideOpen} />
        <Router />
      </div>
    </div>
  )
}

export default DashBoard