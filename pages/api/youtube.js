import { google } from 'googleapis'

let googleAuth;

export default async (_, res) => {
    googleAuth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            client_id: process.env.GOOGLE_CLIENT_ID,
            private_key: process.env.GOOGLE_CLIENT_PRIVATE_KEY.replace(/\\n/g, "\n")
        },
        scopes: ['https://www.googleapis.com/auth/youtube.readonly']
    });

    const youtube = google.youtube({
        auth: googleAuth,
        version: 'v3'
    });

    const response = await youtube.channels.list({
        id: 'UCx4Ey4e3LPO4yWpwJNcLInw',
        part: 'statistics'
    });

    const channel = response.data.items[0];
    const {subscriberCount, viewCount} = channel.statistics;

    return res.status(200).json({
        subscriberCount,
        viewCount
    });
}