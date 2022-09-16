import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SiderBar from '../../components/SiderBar'
import { Getallcv, GetCVBySearch, selectCV } from '../../features/cv/cvSlice'
import CvItem from './CvItem'
//import {useNavigate} from "react"

function CatalogueFreelance() {
   const[search, setSearch] = useState("")
   const dispatch = useDispatch()
   //const navigate = useNavigate();
   const CVss = useSelector(selectCV)
   /*const handleSubmit = (e) => {
      e.preventDefault();
      if (search){
         dispatch(GetCVBySearch(search))
         this.props.history.replace(`/users/search?searchQuery=${search}`)
         setSearch("");
      }
      else{
         this.props.history.replace('/catalogueFreelance')
      }
      
   }*/

  

  /* const Search = () =>{  
      let dat = {
        keyword: search
      }
      dispatch(GetCVBySearch(dat))
   }*/
      
      useEffect(() => {
         let dat = {
            keyword: search
          }
      dispatch(Getallcv(dat))
      
    }, [search])
   
   return (
      <div>
         <SiderBar />
         <div id="content" style={{ paddingTop: '51px' }}>
            <div className="inner_page contact_page">
               <div className="container-fluid">
                  <div className="row column_title">
                     <div className="col-md-12">
                        <div className="page_title">
                           
                           <div  class="inbox-head">
                           <form action="#" className="pull-right position search_inbox" >
                                 
                                 <input type="text" className="sr-input" value={search} placeHolder="Rechercher un CV" onChange={(e) => setSearch(e.target.value) } />
                                 <button className="btn sr-btn" type="button" /*onClick={handleSubmit}*/><i class="fa fa-search"></i></button>
                             
                           </form>
                           <h2 >ALL CV</h2>                              
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row column1">
                     <div className="col-md-12">
                        <div className="white_shd full margin_bottom_30">
                           <div className="full graph_head">
                              <div className="heading1 margin_0">
                                 <h2>ALL CV</h2>
                              </div>
                           </div>
                           <div className="full price_table padding_infor_info">
                              <div className="row">
                                 {
                                    CVss.map((cv, i) => {    //style={{height:'auto'}}
                                       return (
                                          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-4 profile_details margin_bottom_30"  > <CvItem cv={cv} /> </div>
                                       )
                                    })
                                 }
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CatalogueFreelance