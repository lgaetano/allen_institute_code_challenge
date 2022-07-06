const DataVisualization = ({ data }) => {

    const getLanguageData = (data) => {
      const languageData = [];
      
      // Extract primary language from each repo
      for (let i = 0; i < data.length; i++) {
        languageData.push(data[i].language);
      }
      return languageData;
    }

    return (
        <p>
        TODO: Create Data Visualization
        </p>
    );
};
  
  
export default DataVisualization;