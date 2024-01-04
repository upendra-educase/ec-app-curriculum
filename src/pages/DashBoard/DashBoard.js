import React from 'react'
import Sidebar from '../../components/common/Sidebar'
import Router from '../../router/Router'
import ActionBar from '../../components/ActionBar'

const DashBoard = () => {
  return (
    <div>
      <Sidebar />
      <div className='p-4'>
        <ActionBar />
        <Router />
      </div>
    </div>
  )
}

export default DashBoard