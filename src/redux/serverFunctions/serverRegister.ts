export const serverRegister = async (email: string, password: string, name: string, surname: string) => {
  return fetch(
    `https://loft-taxi.glitch.me/register`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        surname: surname
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
    ).then(res => res.json())
}
