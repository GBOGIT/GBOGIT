exports.handler = async (event) => {
  const email = JSON.parse(event.body).user.email.toLowerCase();
  const permitidos = ["@arautos.org.br","@acnsf.org.br","@arautos.com.br","@acnsf.com.br"];
  if (!permitidos.some(d => email.endsWith(d))) {
    return { statusCode: 401, body: JSON.stringify({msg:"E-mail não autorizado"}) };
  }
  return { statusCode: 200, body: JSON.stringify({}) };
}
