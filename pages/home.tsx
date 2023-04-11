import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import hygraphServiceTypes from "../src/interfaces/hygraphService.types";

export default function Home() {
  const [hygraphData, getHygraphData] = useState<hygraphServiceTypes[]>([]);

  useEffect(() => {
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
  });

  console.log(hygraphData);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Head>
        <title style={{}}>NextJS with Hygraph</title>
      </Head>
      <h1> NextJS with Hygraph </h1>
      {hygraphData.map((itens) => (
        <>
          <li key={itens.id}>{itens.id}</li>
          <li>{itens.data1}</li>
        </>
      ))}
    </div>
  );
}
