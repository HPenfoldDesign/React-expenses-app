import '../Components_css/Chart.css'
import ChartBar from'../Chart/ChartBar'

const Chart = (props) => {
    //dataPoints found in ChartBar.js, is mapped through each time with a key, value, max value and label. 
   <div className='chart'>
       {props.dataPoints.map((dataPoint) => {<ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={null} label={dataPoint.label} />})}
   </div>
};

export default Chart;