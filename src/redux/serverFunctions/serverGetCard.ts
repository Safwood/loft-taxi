
export const serverGetCard = async (token: string) => {
  return fetch(
    `https://loft-taxi.glitch.me/card?token=${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
    ).then((value: Response) => value.json())
}

