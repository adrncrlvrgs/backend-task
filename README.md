# Useless Facts API Utility - Backend Instructions

## **Overview**  
This is a simple CLI utility that fetches data from the **Useless Facts API** (`https://uselessfacts.jsph.pl/api/v2/facts/random`) a specified number of times and either prints the results to the console, saves them as a JSON file, or saves them as a CSV file.

## **Getting Started**  

### **Clone the Repository**  

git clone https://github.com/adrncrlvrgs/backend-task
cd backend-task
npm install

### **Example Usage** 

# Fetch 10 activities and save as JSON
node src/main.js -n 10 -f json

# Fetch 5 activities and save as CSV
node src/main.js -n 5 -f csv

# Fetch 15 activities and print to console
node src/main.js -n 15 -f console

## **Dependencies Used**  
- **axios** - For making HTTP requests  
- **csv-writer** - For writing data to CSV files  
- **yargs** - For handling command-line arguments  



