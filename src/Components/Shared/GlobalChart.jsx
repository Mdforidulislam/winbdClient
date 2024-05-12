import  { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const GlobalChart = () => {
    const [charts, setCharts] = useState(null)


    useEffect(() => {
        fetch('../../../public/SubadminChart.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => setCharts(data))
            .catch(error => console.error('Error fetching chart data:', error));
    }, []);

    if (!charts) return <div>Loading...</div>;

    return (
        <div>
            <div>
                <div className=' bg-[#1C2340]  shodow-xl shadow-[#4e587f] mt-5' id="chart">
                    <ReactApexChart options={charts.options} series={charts.series} type="area" height={450} width={850}/>
                </div>

                <div  id="html-dist"></div>
            </div>
        </div>
    );
};

export default GlobalChart;
