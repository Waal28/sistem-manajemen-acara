import * as jose from "jose";

export async function verifyToken(token) {
  const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET_KEY);

  if (!token) {
    throw new Error("Token tidak ditemukan");
  }
  try {
    const { payload } = await jose.jwtVerify(token, secret, {
      issuer: "urn:example:issuer",
      audience: "urn:example:audience",
    });
    return { message: "Token valid", data: payload };
  } catch (error) {
    console.log(error);
    throw new Error("Token tidak valid");
  }
}
