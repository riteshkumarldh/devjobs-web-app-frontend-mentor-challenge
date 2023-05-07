import { createContext, useContext, useEffect, useState } from "react";

// creating context
export const AppContext = createContext(null);

// context provider
const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => JSON.parse(localStorage.getItem("theme")) || false
  );
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("allJobs")) || []
  );
  const [singleJob, setSingleJob] = useState(
    () => JSON.parse(localStorage.getItem("jobDetails")) || []
  );
  const [searchedResult, setSearchedResult] = useState([]);

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
  }, [data]);

  useEffect(() => {
    localStorage.setItem("allJobs", JSON.stringify(data));
    setSearchedResult(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("jobDetails", JSON.stringify(singleJob));
  }, [singleJob]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

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
    setData,
    singleJob,
    getSingleJobDetails,
    searchedResult,
    setSearchedResult,
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
