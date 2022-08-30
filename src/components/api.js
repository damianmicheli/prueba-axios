// api.js
import axios from 'axios';

const APIKEY =
"live_d0eb3ZDtUUwGJBJJawQcrCaE7fLqEDWsmkS4FSTXNVVXSZ4PfrfUlPwx7wGylRzz";

export default axios.create({
baseURL: `https://api.thedogapi.com/v1/`,
headers: {"x-api-key": APIKEY}
});