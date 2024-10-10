/*import Cors from "cors";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"]
});
*/
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(403).send('Forbidden!');
    return;
  }
  res.status(200).json({ message: 'Test message from the API' })
}