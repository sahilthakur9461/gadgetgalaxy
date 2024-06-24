import React from 'react'
import Sidebar from './Sidebar'


const AdminLayout = () => {
  return (
      <>
      <div className='flex'>
      <Sidebar/>
    
      <div>
        <Outlet/>
        
        
      </div>
      </div>
     
    </>
  )}
export default AdminLayout
