import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SiderBar from '../../components/SiderBar'
import { GetallOffre, selectOffre } from '../../features/offre/offreSlice'
import OffreIteme from './OffreItem'
function OffreList() {
   const dispatch = useDispatch()
   const Offres = useSelector(selectOffre)

   useEffect(() => {

      dispatch(GetallOffre())

   }, [])
   return (
      <div>
         <SiderBar />
         <div id="content" style={{ paddingTop: '51px' }}>
            <div className="midde_cont">
               <div className="container-fluid">
                  <div className="row column_title">
                     <div className="col-md-12">
                        <div className="page_title">
                           <h2>Offres</h2>
                        </div>
                     </div>
                  </div>
                  <div className="row column1">
                     <div className="col-md-2"></div>
                     <div className="col-md-12">
                        <div className="white_shd full margin_bottom_30">
                           <div className="full graph_head">
                              <div className="heading1 margin_0">
                                 <h2>Offres</h2>
                              </div>
                           </div>
                           {

                              Offres.map((offre, i) => {
                                 return (
                                    <OffreIteme offre={offre} />


                                 )
                              })
                           }
                        </div>
                        <div className="col-md-2"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default OffreList