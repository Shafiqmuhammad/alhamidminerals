import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../lib/db';

async function handler(req: NextRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, contact, message } = await req.json();
    console.log('Received POST request for item with :', req.json);
    if (!name || !email || !contact || !message) {
      return NextResponse.json({ error: 'Data Missing' }, { status: 400 });
    }
    try {
      const client = await pool.connect();
      const result = await client.query('INSERT INTO contact_form (name, email,contact, message) VALUES ($1, $2, $3, $4) RETURNING *', [name, email, contact, message]);
      client.release();
      console.log('Contact data added successfully'); // Log success
      return NextResponse.json(result.rows[0], { status: 201 });
    } catch (error) {
      console.error('Error adding contact info:', error);
      return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }

  } else {
    NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

}


export { handler as POST }


