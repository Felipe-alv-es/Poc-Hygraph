import Head from "next/head";

export default function Home() {
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
