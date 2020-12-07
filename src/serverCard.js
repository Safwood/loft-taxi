
export const serverCard = async (cardNumber, expiryDate, cardName, cvc) => {
  return fetch(
    `https://loft-taxi.glitch.me/card`, {
      method: "POST",
      body: JSON.stringify({
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cardName: cardName,
        cvc: cvc
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
    ).then(res => res.json())
}
