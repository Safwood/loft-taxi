
export const serverAddresses = async () => {
  return fetch(
    `https://loft-taxi.glitch.me/addressList`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
    ).then(res => res.json())
}
