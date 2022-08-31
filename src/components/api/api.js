import axios from "axios";

const APIKEY =
  "live_h2SI9SCI5oxvJDwPMsGSzgveOmq84LoflDgwRIZk5O31QDYcZuZ4ac9s9FyoYLzk";

export default axios.create({
  baseURL: `https://api.thedogapi.com/v1/`,
  headers: { "x-api-key": APIKEY },
});
