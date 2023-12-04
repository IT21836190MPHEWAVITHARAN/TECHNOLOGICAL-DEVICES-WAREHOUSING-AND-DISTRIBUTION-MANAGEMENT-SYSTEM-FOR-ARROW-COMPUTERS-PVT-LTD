import React, { useState } from 'react'

import Sidebar from '../sidebar/sidebar'
import Actionbar from '../actionbar/Actionbar'
import './adminLayout.scss'



//   return (
//    <div>
//         <Sidebar />
//         <div className='rightContainer'>
//           <Actionbar />
//           <div className='content'>
//           {
//             children
//           }
//           </div>
        
//           </div>
//     </div>
//   )
// }

const AdminLayout = ({ children }) => {
  return (
    <div className='layoutWrapper'>
      <Sidebar />
      <div className='rightContainer'>
        <Actionbar />
        <div className='content'>{children}</div>
      </div>
    </div>
  );
  };

export default AdminLayout;