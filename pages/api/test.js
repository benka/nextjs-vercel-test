/*import Cors from "cors";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"]
});
*/
export default async function handler(req, res) {
  const testEnvVar = process.env.TEST_ENV_VAR
  if (req.method !== 'POST') {
    res.status(403).send('Forbidden!');
    return;
  }
  res.status(200).json({ message: `Test message from the API with ${testEnvVar}` })
}