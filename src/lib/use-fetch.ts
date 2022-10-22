import axios from 'axios';

export async function useFetch(url: string) {
  const data = await axios.get(url)
    .then((res) => res.data);

  return data;
}
