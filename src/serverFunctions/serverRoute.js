export const serverRoute = async (address1, address2) => {
  return fetch(
    `https://loft-taxi.glitch.me/route`, {
      method: "POST",
      body: JSON.stringify({
        address1: address1,
        address2: address2
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
    ).then(res => res.json())
}

