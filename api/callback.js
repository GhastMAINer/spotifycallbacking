export default function handler(req, res) {
  const { code, error } = req.query;

  if (error) {
    return res.status(400).send(`Spotify authorization failed: ${error}`);
  }

  if (!code) {
    return res.status(400).send("No authorization code received.");
  }

  res.status(200).send(`
    <html>
      <head>
        <title>Spotify Authorization</title>
      </head>
      <body>
        <h1>Spotify Authorization Successful!</h1>
        <p>You can close this window.</p>
        <p>Authorization code received.</p>
      </body>
    </html>
  `);
}
