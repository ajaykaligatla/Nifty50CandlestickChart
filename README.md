# Nifty50 Candlestick Chart

This project demonstrates a candlestick chart visualization for the Nifty50 stock data of various companies. 

Each company's candlestick chart is displayed in a separate chart container.

## Prerequisites 
1.Node.js installed

2.Express.js for serving static files

## Getting Started
1.Navigate to the project directory:

cd nifty50-candlestick-chart

2.Install the required dependencies:

npm install

## Running the Application

1.Start the Express server:

node server.js

2.Live Server:

   *Open VS Code and install the "Live Server" extension.
   
   *Right-click on index.html and choose "Open with Live Server."

## Project Structure

1.index.html: HTML file with the structure of the web page.

2.server.js: Express server for serving static files.

3.styles.css: CSS file for styling the web page.

4.script.js: JavaScript file for handling chart rendering and data loading.

5.data/50Companies: Directory containing CSV files for each company's stock data.

## Data Source

The stock data is obtained from CSV files located in the data/50Companies directory. 

Each CSV file contains historical stock data for a specific company.

## Customization

You can customize the chart appearance and data loading in the script.js file.

### code:

// Modify the 'companies' array with the desired list of company symbols

let companies = [...];

// Customize chart options in the 'drawCandlestickChart' function

let options = {

  legend: 'none',
  
  title: company, // Display company name as the chart title
  
  candlestick: {
  
    fallingColor: { strokeWidth: 0, fill: '#d32f2f' },
    risingColor: { strokeWidth: 0, fill: '#388e3c' }
    
  }
  
};

Feel free to explore and adapt the code according to your requirements.
