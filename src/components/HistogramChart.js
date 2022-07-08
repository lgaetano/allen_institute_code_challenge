import Chart from 'react-google-charts';

const HistogramChart = ({ languages, dataset }) => {
    console.log(dataset);
    
    // React Google Charts - Bar Charts docs
    // https://www.react-google-charts.com/examples/bar-chart#labeling-bars
    const primaryLanguageRepoData = [
        [
          "Language",
          "Frequency",
          { role: "style" },
          {
            sourceColumn: 0,
            role: "annotation",
            type: "string",
            calc: "stringify",
          },
        ]
      ];

    // Add language data that was scraped in DataVisualization component
    // to match Google Charts formatting.
    for (let i = 0; i < languages.length; i++) {
        primaryLanguageRepoData.push(languages[i]);
    }
      
    const chartOptions = {
        title: 'Languages used in Allen Institute Git Repos',
        width: 600,
        height: 400,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
    }

    return (
      <div className="container mt-5">
        <h2>Languages used in Allen Institute GitHub Repos</h2>
        <Chart
          chartType="BarChart"
          width={'600px'}
          height={'320px'}
          loader={<div>Loading Chart</div>}
          data={ primaryLanguageRepoData }
          options={ chartOptions }
        />
      </div>
    )
}
export default HistogramChart