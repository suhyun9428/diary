export default async function handler(req, res) {
  const query = encodeURIComponent(req.query.q || '테크');
  const clientId = process.env.NAVER_CLIENT_ID;
  const clientSecret = process.env.NAVER_CLIENT_SECRET;

  const url = `https://openapi.naver.com/v1/search/news.json?query=${query}&display=10&start=1&sort=date`;

  try {
    const response = await fetch(url, {
      headers: {
        'X-Naver-Client-Id': clientId,
        'X-Naver-Client-Secret': clientSecret,
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch news' });
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
