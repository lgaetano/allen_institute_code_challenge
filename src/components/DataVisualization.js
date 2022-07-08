import HistogramChart from "./HistogramChart";

const DataVisualization = ({ data }) => {

    const parseRepoData = (data) => {
        // Calculates frequencies of each language
        const languageFrequencyMap = {};
        
        // Extract primary language from each repo
        for (let i = 0; i < data.length; i++) {
            const language = data[i].language;
            // Scrub blank values
            if (language !== null) {
                // Reduce strings to lowercase for true uniqueness 
                // i.e. MATLAB and Matlab
                language.toLowerCase();
                // languageData.push(language.toLowerCase());
                
                // Add language to the dictionary
                const languageKey = language.toLowerCase();
                if (!languageFrequencyMap[languageKey]) {
                    languageFrequencyMap[languageKey] = 1;
                }
                languageFrequencyMap[languageKey] += 1;
            }
        }
        return languageFrequencyMap;
    }

    const generateRandomColor = () => {
        var hexLetters = '0123456789ABCDEF';
        var hexString = '#';
        for (var i = 0; i < 6; i++) {
            hexString += hexLetters[Math.floor(Math.random() * 16)];
        }
        return hexString;
    }

    const createArrayToPopulateBarChart = (data) => {
        const barChartArray = [];

        // Creates a set of unique languages from the languageFrequencyMap
        // Unique languages will be used on the x-axis
        const langaugeFrequencyMap = parseRepoData(data);
        
        for (const [language, frequency] of Object.entries(langaugeFrequencyMap)) {
            const randomColor = generateRandomColor();
            barChartArray.push([language, frequency, randomColor, null]);
        }

        return barChartArray;
    }

    return (
        <>
            <HistogramChart 
                languages={ createArrayToPopulateBarChart(data) }
                dataset={  parseRepoData(data) }
            />
        </>
    );
};
  
  
export default DataVisualization;