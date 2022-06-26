import axios from "axios";

/* export default async function main() {
  // something here
} */
/* 
function seeInfluencers() {
  const getInfluencers = () => {
    axios
      .get(`$http://localhost:8080/api/influencers-list/`)
      .then((response) => {
      ??
      })
      .catch((error) => console.log(error));
  };
} */


async function getInfluencers() {
  try {
  
    const { data, status } = await axios.get(
      `$http://localhost:8080/api/influencers-list/`),
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

   
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

getInfluencers();