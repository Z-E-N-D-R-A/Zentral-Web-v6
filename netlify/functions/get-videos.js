export const handler = async (event) => {
  const YAK = process.env.YOUTUBE_API_KEY;
  const YCI = process.env.CHANNEL_ID;
  const numVideos = 18;

  const url = `https://www.googleapis.com{YAK}&channelId=${YCI}&part=snippet,id&order=date&maxResults=${numVideos}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    };
  } catch (error) {
    return { statusCode: 500, body: "Error fetching data" };
  }
};
