import React from 'react'
import '../index'
function ThreeBox() {
    return (
        <div>
            <div>
  {/* https://codepen.io/jlalovi/details/bIyAr */}
  <div className="container">
    {/* DONUT CHART BLOCK (LEFT-CONTAINER) */} 
    <div className="donut-chart-block block"> 
      <h2 className="titular">OS AUDIENCE STATS</h2>
      <div className="donut-chart">
        {/* PORCIONES GRAFICO CIRCULAR
ELIMINADO #donut-chart
MODIFICADO CSS de .donut-chart */}
        <div id="porcion1" className="recorte"><div className="quesito ios" data-rel={21} /></div>
        <div id="porcion2" className="recorte"><div className="quesito mac" data-rel={39} /></div>
        <div id="porcion3" className="recorte"><div className="quesito win" data-rel={31} /></div>
        <div id="porcionFin" className="recorte"><div className="quesito linux" data-rel={9} /></div>
        {/* FIN AÑADIDO GRÄFICO */}
        <p className="center-date">JUNE<br /><span className="scnd-font-color">2013</span></p>        
      </div>
      <ul className="os-percentages horizontal-list">
        <li>
          <p className="ios os scnd-font-color">iOS</p>
          <p className="os-percentage">21<sup>%</sup></p>
        </li>
        <li>
          <p className="mac os scnd-font-color">Mac</p>
          <p className="os-percentage">39<sup>%</sup></p>
        </li>
        <li>
          <p className="linux os scnd-font-color">Linux</p>
          <p className="os-percentage">9<sup>%</sup></p>
        </li>
        <li>
          <p className="win os scnd-font-color">Win</p>
          <p className="os-percentage">31<sup>%</sup></p>
        </li>
      </ul>
    </div>
    {/* LINE CHART BLOCK (LEFT-CONTAINER) */}
    <div className="line-chart-block block">
      <div className="line-chart">
        <div className="grafico">
          <ul className="eje-y">
            <li data-ejey={30} />
            <li data-ejey={20} />
            <li data-ejey={10} />
            <li data-ejey={0} />
          </ul>
          <ul className="eje-x">
            <li>Apr</li>
            <li>May</li>
            <li>Jun</li>
          </ul>
          <span data-valor={25}>
            <span data-valor={8}>
              <span data-valor={13}>
                <span data-valor={5}>   
                  <span data-valor={23}>   
                    <span data-valor={12}>
                      <span data-valor={15}>
                      </span></span></span></span></span></span></span>
        </div>
      </div>
      <ul className="time-lenght horizontal-list">
        <li><a className="time-lenght-btn" href="#14">Week</a></li>
        <li><a className="time-lenght-btn" href="#15">Month</a></li>
        <li><a className="time-lenght-btn" href="#16">Year</a></li>
      </ul>
      <ul className="month-data clear">
        <li>
          <p>APR<span className="scnd-font-color"> 2013</span></p>
          <p><span className="entypo-plus increment"> </span>21<sup>%</sup></p>
        </li>
        <li>
          <p>MAY<span className="scnd-font-color"> 2013</span></p>
          <p><span className="entypo-plus increment"> </span>48<sup>%</sup></p>
        </li>
        <li>
          <p>JUN<span className="scnd-font-color"> 2013</span></p>
          <p><span className="entypo-plus increment"> </span>35<sup>%</sup></p>
        </li>
      </ul>
    </div>
    <div className="bar-chart-block block">
      <h2 className="titular">By Country <span>*1000</span></h2>
      <div className="grafico bar-chart">
        <ul className="eje-y">
          <li data-ejey={60} />
          <li data-ejey={45} />
          <li data-ejey={30} />
          <li data-ejey={15} />
          <li data-ejey={0} />
        </ul>
        <ul className="eje-x">
          <li data-ejex={37}><i>a</i></li>
          <li data-ejex={56}><i>b</i></li>
          <li data-ejex={25}><i>c</i></li>
          <li data-ejex={18}><i>d</i></li>
          <li data-ejex={45}><i>e</i></li>
          <li data-ejex={50}><i></i>f</li>
          <li data-ejex={33}><i>g</i></li>
        </ul>
      </div>
    </div>
  </div>
  <p className="nota-final">borrowed from codepen<strong>@codepen</strong> thank you <a href="https://codepen.io/jlalovi/details/bIyAr"></a>.</p>
</div>
        </div>
    )
}

export default ThreeBox
