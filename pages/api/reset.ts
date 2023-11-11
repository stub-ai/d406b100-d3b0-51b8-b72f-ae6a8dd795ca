import type { NextApiRequest, NextApiResponse } from 'next'

let count = 0;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) {
  count = 0;
  res.status(200).json({ message: 'Counter reset successful.' });
}