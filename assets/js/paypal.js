// ==========================================================================
// Naria Editores: Configuración de pasarela de pagos con PayPal (MXN)
// ==========================================================================

// Botón para Cuento 1: El Bosque y el Cristal ($40.00 MXN)
paypal.Buttons({
    style: {
        layout: 'vertical',
        color: 'gold',
        shape: 'pill',
        label: 'pay'
    },
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                description: "Cuento: El Bosque y el Cristal (Teatro de Sombras)",
                amount: {
                    value: '40.00'
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Redirige a la página de agradecimiento indicando qué cuento se compró
            window.location.href = "gracias.html?cuento=bosque";
        });
    },
    onError: function (err) {
        console.error("Error en la transacción de PayPal (Cuento 1):", err);
        alert("Hubo un error al procesar el pago. Por favor, inténtalo de nuevo.");
    }
}).render('#paypal-button-container-1');


// Botón para Cuento 2: La Luna de Papel ($40.00 MXN)
paypal.Buttons({
    style: {
        layout: 'vertical',
        color: 'gold',
        shape: 'pill',
        label: 'pay'
    },
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                description: "Cuento: La Luna de Papel (Teatro de Sombras)",
                amount: {
                    value: '40.00'
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Redirige a la página de agradecimiento indicando qué cuento se compró
            window.location.href = "gracias.html?cuento=luna";
        });
    },
    onError: function (err) {
        console.error("Error en la transacción de PayPal (Cuento 2):", err);
        alert("Hubo un error al procesar el pago. Por favor, inténtalo de nuevo.");
    }
}).render('#paypal-button-container-2');
