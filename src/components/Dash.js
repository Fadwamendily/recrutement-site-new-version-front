import React from 'react'

function Dash() {
  return (

    <div id="cpntainer">
      <br />
      <br />

      <div className="midde_cont">
        <div className="container-fluid">
          <div className="row column_title">
            <div className="col-md-12">
              <div className="page_title">
                <h2>Chart</h2>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="white_shd full margin_bottom_30">
              <div className="full graph_head">
                <div className="heading1 margin_0">
                  <h2>Line Chart</h2>
                </div>
              </div>
              <div className="map_section padding_infor_info">
                <canvas id="bar_chart"></canvas>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="white_shd full margin_bottom_30">
              <div class="full graph_head">
                <div class="heading1 margin_0">
                  <h2>Pie Chart</h2>
                </div>
              </div>
              <div class="map_section padding_infor_info">
                <canvas id="pie_chart"></canvas>
              </div>
            </div>
          </div>
          <div class="row column2 graph margin_bottom_30">
            <div class="col-md-l2 col-lg-12">
              <div class="white_shd full">
                <div class="full graph_head">
                  <div class="heading1 margin_0">
                    <h2>Extra Area Chart</h2>
                  </div>
                </div>
                <div class="full graph_revenue">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="content">
                        <div class="area_chart">
                          <canvas height="120" id="canvas">
                          
                          </canvas>
                        </div>
                      </div>
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

export default Dash
