import { createContext, useContext, useEffect, useState } from "react";

// import dataFile from "assets/data.json";

// creating context
export const AppContext = createContext(null);

// context provider
const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const [data, setData] = useState([]);
  const [singleJob, setSingleJob] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("assets/data.json");
      // console.log(response);
      if (response.ok) {
        const result = await response.json();
        // console.log(result);
        setData(result);
      } else {
        throw Error;
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getSingleJobDetails = (id) => {
    const singleJob = data.filter((job) => {
      return job.id === id;
    });
    setSingleJob(singleJob);
    console.log(singleJob);
  };

  const valueProvider = {
    theme,
    setTheme,
    data,
    singleJob,
    getSingleJobDetails,
  };

  return (
    <AppContext.Provider value={valueProvider}>{children}</AppContext.Provider>
  );
};

// function for using context
export const useAppContext = () => {
  return useContext(AppContext);
};

export default ContextProvider;
