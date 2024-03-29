import React, { useState } from 'react'
import Sidebar from '../../components/common/Sidebar'
import Router from '../../router/Router'
import ActionBar from '../../components/ActionBar'
import "./DashBoard.css"

const DashBoard = () => {
  const [isAsideOpen, setAsideOpen] = useState(false);

  return (
    <div className='d-flex dashboard-section'>

      <Sidebar isAsideOpen={isAsideOpen} setAsideOpen={setAsideOpen} />

      <div className='py-4 w-100 px-2'>
        <ActionBar isAsideOpen={isAsideOpen} setAsideOpen={setAsideOpen} />
        <Router />
      </div>
    </div>
  )
}

export default DashBoard