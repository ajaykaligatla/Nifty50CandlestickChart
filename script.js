google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(loadNifty50Data);

function loadNifty50Data() {
  // Array of company symbols
  let companies = [
    'ADANIENT.NS', 'ADANIPORTS.NS', 'APOLLOHOSP.NS', 'ASIANPAINT.NS', 'AXISBANK.NS', 'BAJAJ-AUTO.NS',
    'BAJAJFINSV.NS', 'BAJFINANCE.NS', 'BHARTIARTL.NS', 'BPCL.NS', 'BRITANNIA.NS', 'CIPLA.NS', 'COALINDIA.NS',
    'DIVISLAB.NS', 'DRREDDY.NS', 'EICHERMOT.NS', 'GRASIM.NS', 'HCLTECH.NS', 'HDFC.NS', 'HDFCBANK.NS', 'HDFCLIFE.NS', 'HEROMOTOCO.NS',
    'HINDALCO.NS', 'HINDUNILVR.NS', 'ICICIBANK.NS', 'INDUSINDBK.NS', 'INFY.NS', 'ITC.NS', 'JSWSTEEL.NS',
    'KOTAKBANK.NS', 'LT.NS', 'M_M.NS', 'MARUTI.NS', 'NESTLEIND.NS', 'NTPC.NS', 'ONGC.NS', 'POWERGRID.NS', 'RELIANCE.NS',
    'SBILIFE.NS', 'SBIN.NS', 'SUNPHARMA.NS', 'TATACONSUM.NS', 'TATAMOTORS.NS', 'TATASTEEL.NS', 'TCS.NS', 'TECHM.NS', 'TITAN.NS', 'ULTRACEMCO.NS', 'UPL.NS', 'WIPRO.NS'
  ];

  // Loop through each company
  companies.forEach(company => {
    Papa.parse(`http://localhost:3000/${company}.csv`, {
      header: true,
      download: true,
      complete: function (companyData) {
        // Process data from the company
        let formattedData = [['Date', 'Open', 'High', 'Low', 'Close']];
        
        // Filter data for the years up to 2015
        companyData.data.forEach(entry => {
          const year = new Date(entry.Date).getFullYear();
          if (year <= 2015) {
            formattedData.push([
              new Date(entry.Date),
              parseFloat(entry.Open),
              parseFloat(entry.High),
              parseFloat(entry.Low),
              parseFloat(entry.Close)
            ]);
          }
        });

        // Draw chart for the company
        drawCandlestickChart(company, formattedData);
      }
    });
  });
}

function drawCandlestickChart(company, data) {
  // Create a container for the chart
  const container = document.createElement('div');
  container.id = `${company}-chart-container`;
  container.className = 'company-chart-container';
  document.body.appendChild(container);

  // Draw the chart in the container
  let chartData = google.visualization.arrayToDataTable(data);
  let options = {
    legend: 'none',
    title: company, // Display company name as the chart title
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#d32f2f' },
      risingColor: { strokeWidth: 0, fill: '#388e3c' }
    }
  };

  let chart = new google.visualization.CandlestickChart(container);
  chart.draw(chartData, options);
}
