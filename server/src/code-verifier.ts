function dec2hex(dec: any) {
  return `0${dec.toString(16)}`.substr(-2);
}

function generateRandomString() {
  const array = new Uint32Array(56 / 2);
  global.crypto.getRandomValues(array);
  return Array.from(array, dec2hex).join('');
}

const verifier = generateRandomString();

function sha256(plain: any) {
  // returns promise ArrayBuffer
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return global.crypto.subtle.digest('SHA-256', data);
}

function base64urlencode(a: any) {
  let str = '';
  const bytes = new Uint8Array(a);
  const len = bytes.byteLength;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < len; i++) {
    str += String.fromCharCode(bytes[i]);
  }
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function challenge_from_verifier(v: any) {
  const hashed = await sha256(v);
  const base64encoded = base64urlencode(hashed);
  return base64encoded;
}

const challenge = await challenge_from_verifier(verifier);

export { verifier, challenge };
