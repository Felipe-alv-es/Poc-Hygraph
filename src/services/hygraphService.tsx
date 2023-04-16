import axios from "axios";
import hygraphServiceTypes from "../interfaces/hygraphService.types";
import { useState } from "react";

const { API_URL } = process.env;

const GetApiContent = async () => {
  const [hygraphData, getHygraphData] = useState<hygraphServiceTypes[]>([]);

  console.log(API_URL);

  axios
    .get(
      // API_URL,
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

// const GetApiContent = () => {
//   useEffect(() => {
//     axios
//       .get(
//         "https://api-sa-east-1.hygraph.com/v2/clg4k0jbw25dl01tdghh81uic/master",
//         {
//           headers: {
//             Authorization: `Basic eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODEwOTQ1OTAsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xnNGswamJ3MjVkbDAxdGRnaGg4MXVpYy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNWE0YWVmZjMtNzEyMy00OWZmLTg3M2YtZjQ1OWIyNjM0ODg5IiwianRpIjoiY2xnYThiYmczMm1oMzAxdGZlMHUxNmw2eSJ9.GRD63Af6AIwhi0iULrptRJ18KGBYfeVlMzjC_3FL4tOWlqZTHx-RRzVyzkXGssL-DmxxK7R0IZHB-jLHPD-o61UrYk21PRCj5NPTNafvOb7Uzzy_zjQfHJ9tnn7XQLfJuTU8gKytnA56nxGL1FqfKEN9TVV1Dp4Xrpie6BmONTKvVj1ggQbyEW1pa9pBYK-3oygEkwkL1nlp-FfKiZbX80HtulTA1n7Nf7u89kFy1DFevrTKpzhEJ4mgxeyHqGI88sRZpLf85_uCbUp_c-iWY-SosSqvr66RweQ2NJogj-Bf8TOa-XOwcKBBxFGt79F1fgA4FiAxIKmceGNM0bja1kGdSrgw-omdK2guCssaQ_5x5D3lA7LmMKCrp24opu2z-kr-jFirhv2u0KbO5Izujdw5UdpO2OdvFLQKscmr_de2lwpYLMwb8h9ZGqV_9Yk-qCsIEuv2NSuE-Gcu3t1KFy6_Uny8j3_sY1Q-ee-tRQOMo40HdHPPBM49ngBXYCIlYREwnOafrYoR-EdmfjyWY0gnmmeebZI95Zb0egpkcSiM5t45YlxRmD7XvNJ4jE7iLDqXEtxJeLgtl5SG57axQ4I0-edyn4UAJhFStTGNaas-7aU3mKEPedrlA-a7rvPSDc8oxYv9VK0VZ__muf0XDSxePg4uPohCbi6V-s6eP_A`,
//           },
//         }
//       )
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });
// };

// export default GetApiContent;
