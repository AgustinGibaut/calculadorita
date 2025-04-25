function convertPrice() {
    const price = Number.parseFloat(document.getElementById("price").value)
    const selectedExchange = document.querySelector('input[name="exchange"]:checked').value
  
    if (isNaN(price)) {
      document.getElementById("result").innerHTML = "Por favor, ingresa un precio válido"
      return
    }
  
    const dolarBelo = 1227.07
    const dolarOficial = 1439.9
  
    let exchangeRate
    let exchangeName
    let exchangeEmoji
  
    switch (selectedExchange) {
      case "belo":
        exchangeRate = dolarBelo
        exchangeName = "Dólar Belo USDC/ARS"
        exchangeEmoji = "🪙"
        break
      case "oficial1":
        exchangeRate = dolarOficial
        exchangeName = "Dólar Oficial + IVA 21%"
        exchangeEmoji = "💵"
        break
      case "oficial2":
        exchangeRate = dolarOficial
        exchangeName = "Dólar Oficial + IVA 21%"
        exchangeEmoji = "💳"
        break
    }
  
    const precioFinal = (price * exchangeRate).toFixed(2)
  
    // Formatear el número con separadores de miles
    const precioFormateado = new Intl.NumberFormat("es-AR").format(precioFinal)
  
    const resultado = `
      <div>
        <p style="margin-bottom: 0; text-align: center;">
          ${exchangeEmoji} ${exchangeName}:<br>
          <strong style="font-size: 24px;">${precioFormateado} ARS</strong>
        </p>
      </div>
    `
  
    document.getElementById("result").innerHTML = resultado
  }
  
  // Permitir que el usuario presione Enter para convertir
  document.getElementById("price").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      convertPrice()
    }
  })
  