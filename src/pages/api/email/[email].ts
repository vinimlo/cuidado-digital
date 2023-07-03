import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.query;

  let options = {
    method: "GET",
    url: `https://${process.env.HIBP_HOST}/api/v3/breachedaccount/${email}`,
    headers: {
      "hibp-api-key": process.env.HIBP_API_KEY,
      "User-Agent": process.env.HIBP_USER_AGENT,
      Host: process.env.HIBP_HOST,
    },
    params: {
      truncateResponse: false,
    },
  };

  const response = await axios.request(options);

  res.status(200).json({ breaches: response.data });
}
