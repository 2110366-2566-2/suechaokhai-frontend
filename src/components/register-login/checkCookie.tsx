export default function checkCookie(req, res) {
  const { cookies } = req;

  // Retrieve the value of a specific cookie
  const cookieValue = cookies["session"];

  if (cookieValue) {
    // Cookie exists, do something
    return cookieValue;
  } else {
    // Cookie doesn't exist
    res.status(404).json({ error: "Cookie not found" });
  }
}
