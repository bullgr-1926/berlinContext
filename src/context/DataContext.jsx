import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataController = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(data);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "http://universities.hipolabs.com/search?name=middle"
        );
        setData(response.data)
        setIsLoading(false);
      } catch (error) {
        console.error(error.response.data);
      }
    };
    fetchAllData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <DataContext.Provider value={[data, setData]}>
            {props.children}
          </DataContext.Provider>
        </>
      )}
    </div>
  );
};
