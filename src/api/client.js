import { create } from "apisauce";

const API_KEY = "93dc0f425f1346a8b5268df158cba204";

export default create({
  baseURL: `https://newsapi.org/v2/everything?q=Apple&from=2022-12-01&sortBy=popularity&apiKey=${API_KEY}`,
});
