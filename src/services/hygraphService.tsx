import axios from "axios";
import hygraphServiceTypes from "../interfaces/hygraphService.types";
import { useState } from "react";

const { API_URL } = process.env; // TODO: Implement dotenv

const GetApiContent = () => {
  const [hygraphData, getHygraphData] = useState<hygraphServiceTypes[]>([]);

  axios
    .get(
      "https://api-sa-east-1.hygraph.com/v2/clg4k0jbw25dl01tdghh81uic/master",
      { params: { query: `query getBdData { dataBase1S { id data1 } }` } }
    )
    .then((response) => {
      getHygraphData(response.data.data.dataBase1S);
    })
    .catch((error) => {
      console.log(error);
    });

  return hygraphData;
};

export default GetApiContent;
