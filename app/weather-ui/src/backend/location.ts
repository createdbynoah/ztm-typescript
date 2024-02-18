import dotenv from 'dotenv';
import { z } from 'zod';
import type { AxiosStatic } from 'axios';
dotenv.config({ path: '../../../env.local' });

const locationInfoSchema = z.object({
  lat: z.string(),
  lon: z.string(),
  display_name: z.string(),
});

export type LocationInfo = z.infer<typeof locationInfoSchema>;

export async function fetchLocationData(
  axios: AxiosStatic,
  apiUrl: string,
  locationName: string
): Promise<LocationInfo> {
  const options = {
    method: 'GET',
    url: apiUrl,
    params: {
      q: locationName,
      api_key: process.env.GEOCODE_API_KEY,
    },
  };

  const response = await axios.request(options);

  if (response.status === 200) {
    try {
      // uses zod to validate the response data
      return locationInfoSchema.parse(response.data[0]);
    } catch (err) {
      console.error(err);
      throw new Error(`Unable to find location data for ${locationName}`);
    }
  } else {
    throw new Error('Failed to fetch location data');
  }
}
