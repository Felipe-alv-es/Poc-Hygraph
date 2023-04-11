import Head from "next/head";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    axios
      .get(
        "https://api-sa-east-1.hygraph.com/v2/clg4k0jbw25dl01tdghh81uic/master"
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

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
    </div>
  );
}
