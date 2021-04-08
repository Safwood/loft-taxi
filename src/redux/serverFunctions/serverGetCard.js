
export const serverGetCard = async (token) => {
  return fetch(
    `https://loft-taxi.glitch.me/card?token=${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
    ).then(res => res.json())
}

