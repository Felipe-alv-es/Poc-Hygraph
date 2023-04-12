import Head from "next/head";
import GetApiContent from "../src/services/hygraphService";

export default function Home() {
  const test = GetApiContent();

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
      {test.map((itens) => (
        <>
          <ul key={itens.id}>
            <li>{itens.id}</li>
            <li>{itens.data1}</li>
          </ul>
        </>
      ))}
    </div>
  );
}
