import { google } from "googleapis";

let googleAuth;
const YT_CHANNEL_ID = "UCx4Ey4e3LPO4yWpwJNcLInw";

export async function getChannelStatistics() {
  const youtube = await openYTAPI();

  const response = await youtube.channels.list({
    id: YT_CHANNEL_ID,
    part: "statistics,contentDetails",
  });

  const channel = response.data.items[0];
  const id = channel.id;
  const { subscriberCount } = channel.statistics;

  return {
    id,
    subscriberCount,
  };
}

export async function getLastestVideos() {
  const youtube = await openYTAPI();

  let response = await youtube.channels.list({
    // channelId: YT_CHANNEL_ID,
    id: YT_CHANNEL_ID,
    part: "contentDetails",
  });

  const uploadPlaylist =
    response.data.items[0].contentDetails.relatedPlaylists.uploads;

  //   console.log(response.data.items[0].contentDetails);

  response = await youtube.playlistItems.list({
    // channelId: YT_CHANNEL_ID,
    playlistId: uploadPlaylist,
    part: "snippet,contentDetails,status",
  });

  console.log(response.data.items);

  let titles = response.data.items.map((videoItem) => {
    let id = videoItem.contentDetails.videoId;
    let title = videoItem.snippet.title;
    // let pubDate = videoItem.snippet.publishedAt;
    let pubDate = videoItem.contentDetails.videoPublishedAt;
    let description = videoItem.snippet.description;
    let thumbnail = videoItem.snippet.thumbnails["default"].url;
    return { id, title, pubDate, description, thumbnail };
  });

  //console.log(titles)
  return {
    titles,
  };
}

async function openYTAPI() {
  googleAuth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      private_key: process.env.GOOGLE_CLIENT_PRIVATE_KEY,
    },
    scopes: ["https://www.googleapis.com/auth/youtube.readonly"],
  });

  const youtube = google.youtube({
    auth: googleAuth,
    version: "v3",
  });

  return youtube;
}
