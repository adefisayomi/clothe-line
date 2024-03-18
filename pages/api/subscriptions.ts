import { errorMessage } from '@/src/constants';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';



export default async function handler (req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        const { email } = req.body;

        if (!email) {
          return res.status(400).json({ error: 'Email is required' });
        }
      
        try {
          const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
          const API_KEY = process.env.MAILCHIMP_API_KEY;
          const DATACENTER = process.env.MAILCHIMP_API_SERVER;
          const data = {
            email_address: email,
            status: 'subscribed',
          };
      
          const response = await axios.post(
            `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
            data, {
              headers: {
                  Authorization: `apikey ${API_KEY}`,
                  'Content-Type': 'application/json',
              }
          }
          );
      
          if (response.status >= 400) throw new Error(`There was an error subscribing to the newsletter.
          Hit me up goodguys@clace.com.ng and we'll add you the old fashioned way :(.`)
      
          return res.status(201).json({
              success: true,
              message: 'Subscription successful',
              data: response.data
          });
      
        }
        catch (err: any) {
          return res.status(500).send(errorMessage(err.message));
        }
    }
};