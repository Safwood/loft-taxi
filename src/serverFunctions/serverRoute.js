export const serverRoute = async (address1, address2) => {
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
    ).then(res => res.json())
}

