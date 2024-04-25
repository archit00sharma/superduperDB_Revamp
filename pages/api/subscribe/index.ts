/* eslint-disable prettier/prettier */
import mailchimp from '@mailchimp/mailchimp_marketing';
import md5 from 'crypto-js/md5';
import { NextApiRequest, NextApiResponse } from 'next';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_URL,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (req.method === 'POST') {
    const { email } = req.body || {};

    if (!email)
      return res.status(400).json({ errorType: 'invalidData', message: 'Invalid patient data' });

    const emailHash = md5(email).toString();
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID ?? '';

    try {
      // comment next 6 lines if you need to receive info about audience and get audience id
      await mailchimp.lists.setListMember(audienceId, emailHash, {
        email_address: email,
        status_if_new: 'subscribed',
      });

      return res.status(201).json({ success: true });

      // uncomment next 3 lines if you need to receive info about audience and get audience id
      // const resp = await mailchimp.lists.getAllLists();

      // return res.status(201).json({ success: true, resp });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
};

export default handler;
