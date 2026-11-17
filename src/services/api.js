const BASE = import.meta.env.VITE_API_URL || "/api";
export async function sendContact(payload) {
  let res;
  try {
    res = await fetch(`${BASE}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw {
      message: "Can't reach the server. Check your connection and try again.",
    };
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok)
    throw {
      message: data.message || "Something went wrong.",
      errors: data.errors || {},
    };
  return data;
}
