import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const WpButton = () => {

    return (
        <FloatingWhatsApp phoneNumber='+598097508710'statusMessage="Te respondemos a la brevedad." avatar={require("../images/logokeplan.png")} accountName='Keplan' chatMessage='¡Hola, estoy a las ordenes por cualquier consulta!' />
    )
}

export default WpButton;