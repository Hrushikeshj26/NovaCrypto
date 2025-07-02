import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'


function LineChart({histotricalData}) {

    const [data, setData] = useState([['Date','Prices']])

    useEffect(()=>{
        let dataCopy = [['Date','Prices']];
        if(histotricalData.prices){
            histotricalData.prices.map((item)=>{
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
            })
            setData(dataCopy);
        }
    },[histotricalData])

    const options = {
        backgroundColor: '#0f172a',
         
        colors: ['#22c55e'],
        legend: { position: 'bottom', textStyle: { color: '#fff', fontSize: 14 } },
        hAxis: {
            textStyle: { color: '#fff' },
            gridlines: { color: '#334155' },
        },
        vAxis: {
            textStyle: { color: '#fff' },
            gridlines: { color: '#334155' },
        },
        lineWidth: 3,
    };

  return (
    <Chart
        chartType='LineChart'
        data={data}
        options={options}
        height="100%"
        legendToggle
    />
  )
}

export default LineChart