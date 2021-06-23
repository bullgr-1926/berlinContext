import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const DataList = () => {
  const [data] = useContext(DataContext);

  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Country</th>
            <th scope="col">Webpage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="col">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.country}</td>
              <td>{item.web_pages}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataList;
