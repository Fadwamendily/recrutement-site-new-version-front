import React from 'react'
import SiderBar from '../components/SiderBar'
import '../assets/css/Compte.css'

function Compte() {
   return (
      <div>
         <SiderBar />
         <body className="dashboard dashboard_1">
            <div id="content">
               <div className="container">
                  <div className="center verticle_center "style={{marginTop:'45px'}} >
                     <div className="login_section">
                     <div className="login_form">
                     <div className="compte">
                       <p> Bonjour " Utilisateur "</p>
                       </div>
                       </div>
                     </div>
                  </div>
               </div>
            </div>
         </body>
      </div>
   )
}

export default Compte