import mysql from 'mysql2/promise';

export async function POST(req) {
  const body = await req.json();

  const { nombre, apellidos, email, telefono } = body;

  // Validación básica
  if (!nombre || !apellidos || !email) {
    return Response.json({ message: "Campos obligatorios faltantes." }, { status: 400 });
  }

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    await connection.execute(
      'INSERT INTO contactos (nombre, apellidos, email, telefono) VALUES (?, ?, ?, ?)',
      [nombre, apellidos, email, telefono || null]
    );

    await connection.end();

    return Response.json({ message: 'Datos guardados correctamente.' });
  } catch (error) {
    console.error(error);
    return Response.json({ message: 'Error en el servidor.' }, { status: 500 });
  }
}
