export const serverLogin = async (email: string, password: string) => { 
  return fetch(
    `https://loft-taxi.glitch.me/auth`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
    ).then((value: Response) => value.json())
}