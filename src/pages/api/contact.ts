import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // Validate content type
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return new Response(JSON.stringify({ message: 'Content-Type inválido.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Parse body
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ message: 'Cuerpo de la solicitud inválido.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { nombre, empresa, email, telefono, servicio, mensaje } = body;

  // Basic server-side validation
  if (!nombre || !email || !servicio || !mensaje) {
    return new Response(
      JSON.stringify({ message: 'Por favor complete todos los campos requeridos.' }),
      { status: 422, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ message: 'El correo electrónico no es válido.' }),
      { status: 422, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // Send via Resend
  const resend      = new Resend(import.meta.env.RESEND_API_KEY);
  const toEmail     = import.meta.env.CONTACT_EMAIL;

  const { error } = await resend.emails.send({
    from:    'Formulario Web <onboarding@resend.dev>', // replace with your verified domain
    to:      [toEmail],
    replyTo: email,
    subject: `Nueva solicitud de contacto — ${servicio}`,
    html: `
      <h2>Nueva solicitud de contacto</h2>
      <table cellpadding="6" style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
        <tr><td><strong>Nombre:</strong></td>   <td>${nombre}</td></tr>
        <tr><td><strong>Empresa:</strong></td>  <td>${empresa || '—'}</td></tr>
        <tr><td><strong>Correo:</strong></td>   <td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td><strong>Teléfono:</strong></td> <td>${telefono || '—'}</td></tr>
        <tr><td><strong>Servicio:</strong></td> <td>${servicio}</td></tr>
      </table>
      <h3>Descripción del proyecto</h3>
      <p style="font-family:sans-serif;font-size:14px;line-height:1.6;">${mensaje.replace(/\n/g, '<br/>')}</p>
    `,
  });

  if (error) {
    console.error('[contact API] Resend error:', error);
    return new Response(
      JSON.stringify({ message: 'No se pudo enviar el correo. Intente más tarde.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }

  return new Response(JSON.stringify({ message: 'Enviado correctamente.' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
