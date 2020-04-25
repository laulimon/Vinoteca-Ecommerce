const { Producto, Categoria, Usuario } = require("./models/index")

// -------------------> usuarios
Usuario.create({
    nombre: "Super",
    apellido: "Admin",
    email: "superAdmin@gmail.com",
    username: "SuperAdmin",
    password: "123",
    typoUsuario: "superAdmin"
})
    .then(() => {
        return Usuario.create({
            nombre: "Laura",
            apellido: "Limon",
            email: "laura@gmail.com",
            username: "Laura",
            password: "123",
            typoUsuario: "user"
        })
    })
    .then(console.log("1. se creo el super usario, usuario regular"))

//--------------------> Categorias
Categoria.bulkCreate([
    {
        nombre: "Dulce"
    },
    {
        nombre: "Semi-Dulce"
    },
    {
        nombre: "Seco"
    },
    {
        nombre: "Semi-Seco"
    },
    {
        nombre: "Reserva"
    },
    {
        nombre: "Gran Reserva"
    },
    {
        nombre: "Carton"
    },
])
    //---------------- Productos
    .then(() => {
        console.log("2.  Se crearon las categorias")
        return Producto.create({
            nombre: "Catena Zapata Malbec Argentino 2017. 750 ml",
            descripcion: "No importa cuál sea la cosecha, en realidad este vino posee más de 100 años de antigüedad. Representa el trayecto emprendido por una familia para producir un Malbec argentino que pudiese competir con los mejores vinos del mundo. Malbec Argentino es un corte de uvas provenientes de dos viñedos históricos de Malbec de la familia Catena: el Viñedo “Adrianna” y el Viñedo “Nicasia”.",
            precio: 5203,
            imagen: "https://tonelprivado.vteximg.com.br/arquivos/ids/183278-1000-1000/catena_zapata_nuevo.jpg?v=637158997628700000",
            tipo: "Tinto",
            cepa: "Malbec",
            stock: 5,
            bodega: "Catena Zapata",
            provincia: "Mendoza",
            alcohol: 14.5
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(6)
    })
    .then(() => {
        return Producto.create({
            nombre: "Love Malbec. 750 ml",
            descripcion: "Love Malbec de Fincas Las Moras es un 100% malbec. Presenta un color rojo intenso, tiene un paso por barrica de 9 meses le da aromas muy marcados a frutos rojos maduros con notas a vainilla y chocolate. En boca logra una gran equilibrio entre la fruta y la madera.",
            precio: 393,
            imagen: "https://tonelprivado.vteximg.com.br/arquivos/ids/172786-1000-1000/120075.jpg?v=636269061355170000",
            tipo: "Tinto",
            cepa: "Malbec",
            stock: 5,
            bodega: "Finca Las Moras",
            provincia: "Mendoza",
            alcohol: 14
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(5)
    })
    .then(() => {
        return Producto.create({
            nombre: "Alta Vista Single Vineyard Alizarine. 750 ml",
            descripcion: "Elaborado 100% con Malbec del viñedo que lleva su nombre, desde 2001 es la auténtica expresión del terroir de Las Compuertas. Con una crianza de 12 meses en barricas nuevas, es un tinto profundo, con aromática floral, buena acidez y taninos redondos. Alizarine es una palabra francesa que define un rojo sostenido.",
            precio: 1581,
            imagen: "https://tonelprivado.vteximg.com.br/arquivos/ids/171421-1000-1000/Alta-Vista-.-Single-Vineyard-Alizarin-2012-.-750-Ml-111589.jpg?v=636148997386070000",
            tipo: "Tinto",
            cepa: "Malbec",
            stock: 5,
            bodega: "Alta Vista",
            provincia: "Mendoza",
            alcohol: 14
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(4)
    })
    .then(() => {
        return Producto.create({
            nombre: "Don Malbec. 750 ml",
            descripcion: "Apto para guarda de unos 8 años. Decantar por espacio de una hora antes de beberlo. La temperatura adecuada para su consumo es entre 16º y 18º C. Maridar con un Lomo Welintong puré de papas y zanahorias glaseadas. ",
            precio: 3107,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Don_Miguel_Escorihuela_Gasc%C3%B3n_Malbec_mr8lbq.jpg",
            tipo: "Tinto",
            cepa: "Malbec",
            stock: 5,
            bodega: "Escorihuela Gascon",
            provincia: "Salta",
            alcohol: 14.5
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(3)
    })
    .then(() => {
        return Producto.create({
            nombre: "Hey Malbec. 750 ml",
            descripcion: "Temperatura de servicio para este vino es entre 16º y 18º C, Potencial de guarda 4 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un Bife a la pimienta con aros de cebollas.",
            precio: 509,
            imagen: "https://cepadevinos.com/wp-content/uploads/2016/09/heymalbec.jpg",
            tipo: "Tinto",
            cepa: "Malbec",
            stock: 5,
            bodega: "Matías Riccitelli Wines",
            provincia: "Mendoza",
            alcohol: 14
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(2)
    })
    .then(() => {
        console.log("3.  Se crearon los MALBEC")
        return Producto.create({
            nombre: "Trumpeter Cabernet Sauvignon. 750 ml",
            descripcion: "Apto para guarda de unos 5 años. La temperatura adecuada para su consumo es entre 16º y 18º C. Decantar por espacio de una hora antes de beberlo. Este vino es ideal para combinarlo con carnes vacunas grilladas y horneadas, guisados, carne de caza.",
            precio: 408,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Trumpeter_Cabernet_Sauvignon_ns62ut.jpg",
            tipo: "Tinto",
            cepa: "Cabernet Sauvignon",
            stock: 5,
            bodega: "La Rural",
            provincia: "Mendoza",
            alcohol: 13
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(1)
    })
    .then(() => {
        return Producto.create({
            nombre: "Luigi Bosca Cabernet Sauvignon. 750 ml",
            descripcion: " Apto para guarda de unos 10 años. Decantar por espacio de una hora. La temperatura adecuada para disfrutar este vino es entre 18º y 20º C. Ideal para acompañar racks de Cordero asados con risotto de hongos.",
            precio: 583,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Luigi_Bosca_Cabernet_Sauvignon_qzcfcf.jpg",
            tipo: "Tinto",
            cepa: "Cabernet Sauvignon",
            stock: 5,
            bodega: "Luigi Bosca ",
            provincia: "Mendoza",
            alcohol: 14
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(6)
    })
    .then(() => {
        return Producto.create({
            nombre: "Salentein Reserve Cabernet Sauvignon. 750 ml",
            descripcion: "Temperatura de servicio de este vino es entre 16º y 18º C. Potencial de guarda unos 5 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para maridar con Mollejas glaceadas al Oporto.",
            precio: 407,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Salentein_Reserve_Cabernet_Sauvignon_cmnmwp.jpg",
            tipo: "Tinto",
            cepa: "Cabernet Sauvignon",
            stock: 5,
            bodega: "Salentein",
            provincia: "Mendoza,",
            alcohol: 14.5
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(5)
    })
    .then(() => {
        return Producto.create({
            nombre: "Altas Cumbres Cabernet Sauvignon. 750 ml",
            descripcion: "Temperatura de servicio para este vino es entre 16º y 18º C, Potencial de guarda 5 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un Entrecot a las brasas con mil hojas de batatas.",
            precio: 328,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Altas_Cumbres_Cabernet_Sauvignon_enloja.jpg",
            tipo: "Tinto",
            cepa: "Cabernet Sauvignon",
            stock: 5,
            bodega: "Lagarde",
            provincia: "Mendoza",
            alcohol: 14.1
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(4)
    })
    .then(() => {
        return Producto.create({
            nombre: "Reto Cabernet Sauvignon. 750 ml",
            descripcion: "Temperatura de servicio para este vino es entre 16º y 18º C, Potencial de guarda 5 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un Pulpo a la plancha con vegetales blanqueados. ",
            precio: 283,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Reto_Cabernet_Sauvignon_dpzhm1.jpg",
            tipo: "Tinto",
            cepa: "Cabernet Sauvignon",
            stock: 5,
            bodega: "Vicentin Family Wines",
            provincia: "Mendoza",
            alcohol: 13.90
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(3)
    })
    .then(() => {
        console.log("4.  Se crearon los Cabernet Sauvignon")
        return Producto.create({
            nombre: "Salentein Reserve Merlot. 750 ml",
            descripcion: "Temperatura de servicio de este vino es entre 16º y 18º C.Potencial de guarda unos 5 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para maridar un Pulpo caramelizado a la plancha y polenta frita con salsa de tomates. ",
            precio: 407,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Reto_Cabernet_Sauvignon_dpzhm1.jpg",
            tipo: "Tinto",
            cepa: "Merlot",
            stock: 5,
            bodega: "Salentein",
            provincia: "Mendoza,",
            alcohol: 14
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(1)
    })
    .then(() => {
        return Producto.create({
            nombre: "Primogénito Merlot. 750 ml",
            descripcion: "Temperatura de servicio para este vino es de 18º C, Potencial de guarda 5 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. ideal para acompañar un Salmón con costra de hongos y penca de acelga con crema. ",
            precio: 578,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Primog%C3%A9nito_Merlot_z3augg.jpg",
            tipo: "Tinto",
            cepa: "Merlot",
            stock: 5,
            bodega: "Patritti",
            provincia: "Neuquén",
            alcohol: 14.2
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(6)
    })
    .then(() => {
        return Producto.create({
            nombre: "Angelica Zapata Merlot. 750 ml",
            descripcion: "Apto para guarda de unos 15 años, se aconseja decantar el vino por una hora antes ser degustado. La temperatura adecuada para su consumo es entre 16º y 18º C. Maridar con todo tipo de carnes rojas en distintas preparaciones, bien condimentadas. tipo goulash.  ",
            precio: 1129,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Angelica_Zapata_Merlot_bsaotr.jpg",
            tipo: "Tinto",
            cepa: "Merlot",
            stock: 5,
            bodega: "Catena Zapata",
            provincia: "Mendoza",
            alcohol: 14
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(5)
    })
    .then(() => {
        return Producto.create({
            nombre: "Fabre Montmayou Grand Vin. 750 ml",
            descripcion: "",
            precio: 1959,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Fabre_Montmayou_Grand_Vin_tb6uaf.jpg",
            tipo: "Tinto",
            cepa: "Merlot",
            stock: 5,
            bodega: "Fabre Montmayou",
            provincia: "Mendoza",
            alcohol: 14.9
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(4)
    })
    .then(() => {
        return Producto.create({
            nombre: "Trumpeter Merlot. 750 ml",
            descripcion: "Apto para guarda de unos 5 años. Decantar por espacio de una hora antes de beberlo. La temperatura adecuada para su consumo es entre 16º y 18º C. Este vino es ideal para combinarlo con carnes rojas grilladas y salseadas, risotto de hongos, carbonada, platos criollos.",
            precio: 408,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Trumpeter_Merlot_gas74f.jpg",
            tipo: "Tinto",
            cepa: "Merlot",
            stock: 5,
            bodega: "Rutini Wines",
            provincia: "Mendoza",
            alcohol: 13.5
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(3)
    })
    .then(() => {
        return Producto.create({
            nombre: "Primogénito Merlot. 750 ml",
            descripcion: "Temperatura de servicio para este vino es de 18º C, Potencial de guarda 5 años. Decantar por espacio de una hora antes de beberlo. Conservar en lugar fresco, oscuro, y sin vibraciones. ideal para acompañar un Salmón con costra de hongos y penca de acelga con crema. ",
            precio: 578,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Primog%C3%A9nito_Merlot_z3augg.jpg",
            tipo: "Tinto",
            cepa: "Merlot",
            stock: 5,
            bodega: "Patritti",
            provincia: "Neuquén",
            alcohol: 14.2
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(2)
    })
    .then(() => {
        console.log("5. Se crearon los Merlot")
        return Producto.create({
            nombre: "Luca Chardonnay. 750 ml",
            descripcion: "Apto para guarda de unos 5 años, La temperatura adecuada para su consumo es entre 10º y 12º C. Decantar por espacio de una hora antes de su servicio. Un maridaje especial seria chupe de camarones. Este plato arequipeño es un embajador de la comida peruana y lleva ingredientes como la leche, queso fresco y habas verdes que combinan perfecto con este vino.",
            precio: 1310,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Luca_Chardonnay_dvowii.jpg",
            tipo: "Blanco",
            cepa: "Chardonnay",
            stock: 5,
            bodega: "Luca",
            provincia: "Mendoza",
            alcohol: 14
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(1)
    })
    .then(() => {
        return Producto.create({
            nombre: "Reto Chardonnay. 750 ml",
            descripcion: "Amarillo pajico con ligeras tonalidades doradas y cotas verdosas, brillante limpido y homogenio. Buen intensidad aromatica recuerdan frutales, de los que se destacan manzanda verde, limon, pomelo y especies varias, muy fresco. Muy condesciente con los aromas que se presentan en la copa, se descaca una notable acidez muy bien lograda y equilibrada, no se presentan cotas amargas ni durezas. Muy buena persistencia, adorna la boca con descriptores citricos, pomelo, minerales en un excelente estado de equilibrio.",
            precio: 283,
            imagen: "https://cepadevinos.com/wp-content/uploads/2019/01/reto-chardonnay.jpg",
            tipo: "Blanco",
            cepa: "Chardonnay",
            stock: 5,
            bodega: "Vicentin Family Wines",
            provincia: "Mendoza",
            alcohol: 12.5
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(6)
    })
    .then(() => {
        return Producto.create({
            nombre: "Zolo Chardonnay. 750 ml",
            descripcion: "Temperatura de servicio para este vino es entre 8º y 10º C, Potencial de guarda 1 año. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un Arroz con mejillones.",
            precio: 349,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Zolo_Chardonnay_cdnld5.jpg",
            tipo: "Blanco",
            cepa: "Chardonnay",
            stock: 5,
            bodega: "Vicentin Family Wines",
            provincia: "Mendoza",
            alcohol: 13.8
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(5)
    })
    .then(() => {
        return Producto.create({
            nombre: "Phebus Chardonnay. 750 ml",
            descripcion: "Temperatura de servicio de este vino es entre 10º y 12º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar unas Tapas de arrolladitos de hojaldre de calabaza y queso de cabra.",
            precio: 275,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Phebus_Chardonnay_xozmw0.jpg",
            tipo: "Blanco",
            cepa: "Chardonnay",
            stock: 5,
            bodega: "Fabre Montmayou",
            provincia: "Mendoza",
            alcohol: 14.5
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(4)
    })
    .then(() => {
        return Producto.create({
            nombre: "Animal Chardonnay. 750 ml",
            descripcion: "Apto para guarda de unos 3 años, La temperatura adecuada para su consumo es entre 10º y 12º C. Ideal para carnes blancas como el pavo, mariscos como la cigala y pescados como el pacu.",
            precio: 659,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Animal_Chardonny_illld0.jpg",
            tipo: "Blanco",
            cepa: "Chardonnay",
            stock: 5,
            bodega: "Ernesto Catena Vineyards",
            provincia: "Mendoza",
            alcohol: 13
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(3)
    })
    .then(() => {
        console.log("6. Se crearon los Chardonnay")
        return Producto.create({
            nombre: "RD Sauvignon Blanc. 750 ml",
            descripcion: "Apto para guarda de unos 2 años. La temperatura adecuada para su consumo es entre 8º y 10º C. Para estivarlos realizarlo en un lugar oscuro, fresco, sin vibraciones y acostado. Maridar este vino con carnes o pastas.",
            precio: 826,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/RD_Sauvignon_Blanc_dlnin1.jpg",
            tipo: "Blanco",
            cepa: "Sauvignon Blanc",
            stock: 5,
            bodega: "Tacuil",
            provincia: "Salta",
            alcohol: 13.5
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(2)
    })
    .then(() => {
        return Producto.create({
            nombre: "Serbal Sauvignon Blanc. 750 ml",
            descripcion: "La temperatura adecuada para su degustacion es de 11º C. Es un vino apto para guarda de 3 años. Maridaje, frutos de mar, fondue de queso, queso de cabra, ensaladas.",
            precio: 354,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Serbal_Sauvignon_Blanc_h6sp0a.jpg",
            tipo: "Blanco",
            cepa: "Sauvignon Blanc",
            stock: 5,
            bodega: "Atamisque",
            provincia: "Mendoza",
            alcohol: 13.2
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(1)
    })
    .then(() => {
        return Producto.create({
            nombre: "Killka Sauvignon Blanc. 750 ml",
            descripcion: "La temperatura adecuada para su degustacion es de 11º C. Es un vino apto para guarda de 3 años. Maridaje, frutos de mar, fondue de queso, queso de cabra, ensaladas.",
            precio: 241,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/02/Killka-Sauvignon-Blanc.jpg",
            tipo: "Blanco",
            cepa: "Sauvignon Blanc",
            stock: 5,
            bodega: "Salentein",
            provincia: "Mendoza",
            alcohol: 14
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(6)
    })
    .then(() => {
        return Producto.create({
            nombre: "Rutini Sauvignon Blanc. 750 ml",
            descripcion: "Apto para guarda de unos 4 años. La temperatura adecuada para disfrutar este vino es entre 10º y 12º C. Este vino es ideal para combinarlo con carpaccio, tartas de verdura y hortalizas, frutos del mar, pescados, alcauciles, queso de cabra.",
            precio: 614,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Rutini_Sauvignon_Blanc_v0ejxc.jpg",
            tipo: "Blanco",
            cepa: "Sauvignon Blanc",
            stock: 5,
            bodega: "Rutini Wines",
            provincia: "Mendoza",
            alcohol: 13.4
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(5)
    })
    .then(() => {
        return Producto.create({
            nombre: "Lagarde Sauvignon Blanc. 750 ml",
            descripcion: "Temperatura de servicio para este vino es de 8º  C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar unas Rica Gambas a la cerveza.",
            precio: 650,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Lagarde_Sauvignon_Blanc_iu2mbi.jpg",
            tipo: "Blanco",
            cepa: "Sauvignon Blanc",
            stock: 5,
            bodega: "Lagarde",
            provincia: "Mendoza",
            alcohol: 12
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(4)
    })
    .then(() => {
        console.log("7. Se crearon los Sauvignon Blanc")
        return Producto.create({
            nombre: "Séptima Tardío. 750 ml",
            descripcion: "Temperatura de servicio para este vino es entre 10º y 12º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un hojaldre de manzana con praline de nueces.",
            precio: 275,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/S%C3%A9ptima_Tard%C3%ADo_aqjod8.jpg",
            tipo: "Blanco",
            cepa: "Tardio",
            stock: 5,
            bodega: "Septima",
            provincia: "Mendoza",
            alcohol: 15.3
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(3)
    })
    .then(() => {
        return Producto.create({
            nombre: "Finca Sophenia Tardío. 750 ml",
            descripcion: "Temperatura de servicio para este vino es entre 8º y 10º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar unos Farfalle con pesto y verduras campestres.",
            precio: 720,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Finca_Sophenia_Tard%C3%ADo_b7la4d.jpg",
            tipo: "Blanco",
            cepa: "Tardio",
            stock: 5,
            bodega: "Finca Sophenia",
            provincia: "Mendoza",
            alcohol: 12
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(2)
    })
    .then(() => {
        return Producto.create({
            nombre: "Cafayate Tardío. 750 ml",
            descripcion: "Temperatura de servicio para este espumante es entre 6º y 8º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar una Lemon Pie o Tarta de frutas.",
            precio: 480,
            imagen: "https://tonelprivado.vteximg.com.br/arquivos/ids/160105-1000-1000/CafayateTorrontes-113036.jpg?v=635501056031970000",
            tipo: "Blanco",
            cepa: "Tardio",
            stock: 5,
            bodega: "Bodegas Etchart",
            provincia: "Mendoza",
            alcohol: 12.1
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(1)
    })
    .then(() => {
        console.log("8. Se crearon los Tardio")
        return Producto.create({
            nombre: "Trumpeter Reserve Rosé de Malbec. 750 ml",
            descripcion: "Apto para guarda de unos 3 años. La temperatura adecuada para su consumo es entre 6º y 8º C. Este vino es ideal para maridar con guacamole, fiambres (jamón cocido, salame de Milán) arroces marineros y paella valenciana, centolla, carpaccio clásico, sardinas y anchoas a la plancha, risotto de langostinos.",
            precio: 599,
            imagen: "https://cepadevinos.com/wp-content/uploads/2016/09/Trumpeter-Reserve-Ros%C3%A9-de-Malbec.jpg",
            tipo: 'Rosado',
            cepa: "Malbec Rosé",
            stock: 5,
            bodega: "La Rural",
            provincia: "Mendoza",
            alcohol: 13.2
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(6)
    })
    .then(() => {
        return Producto.create({
            nombre: "Emilia Nieto Senetiner Malbec Rosé. 750 ml",
            descripcion: "Apto para guarda de unos 1 años. La temperatura adecuada para disfrutar este vino es de 10º C. Ideal para beber solo como vino de postre o también con frutos del mar, ensaladas de verano, tunas asadas, embutidos ibéricos y quesos livianos.",
            precio: 315,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Emilia_Nieto_Senetiner_Malbec_Ros%C3%A9_gto0qk.jpg",
            tipo: 'Rosado',
            cepa: "Malbec Rosé",
            stock: 5,
            bodega: "Nieto Senetiner",
            provincia: "Mendoza",
            alcohol: 13
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(5)
    })
    .then(() => {
        return Producto.create({
            nombre: "Cuvelier Los Andes Malbec Rosé. 750 ml",
            descripcion: "Temperatura de servicio de este vino es entre 8º  y 12º C,  2 años en botella. Ideal para acompañar ensaladas, frutos de mar y pescado.",
            precio: 315,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Cuvelier_Los_Andes_Malbec_Ros%C3%A9_qjfj9p.jpg",
            tipo: 'Rosado',
            cepa: "Malbec Rosé",
            stock: 5,
            bodega: "Cuvelier Los Andes",
            provincia: "Mendoza",
            alcohol: 12.5
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(4)
    })
    .then(() => {
        return Producto.create({
            nombre: "Coquena Rosado de Malbec. 750 ml",
            descripcion: "Apto para guarda de unos 3 años. La temperatura adecuada para su consumo es entre 8º y 12º C. Este vino se puede maridar con con una buena ensalada de maricos.",
            precio: 495,
            imagen: "https://cepadevinos.com/wp-content/uploads/2018/04/Coquena-Rosado-de-Malbec.jpg",
            tipo: 'Rosado',
            cepa: "Malbec Rosé",
            stock: 5,
            bodega: "San Pedro de Yacochuya",
            provincia: "Salta",
            alcohol: 14.7
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(3)
    })
    .then(() => {
        return Producto.create({
            nombre: "Piattelli Reserva Rosé de Malbec. 750 ml",
            descripcion: "Apto para guarda de 2 años. La temperatura adecuada para su consumo es entre 10º y 12º C. Mantener en lugar fresco y sin luz ni vibraciones. Ideal para acompañas, Carnes blancas, pescados, quesos, ensaladas. ",
            precio: 599,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Piattelli_Premium_Ros%C3%A9_de_Malbec_xgrfvg.jpg",
            tipo: 'Rosado',
            cepa: "Malbec Rosé",
            stock: 5,
            bodega: "Piattelli Vineyards",
            provincia: "Mendoza",
            alcohol: 14
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(2)
    })
    .then(() => {
        console.log("9. Se crearon los Malbec Rose")
        return Producto.create({
            nombre: "L'Argentin de Malartic Rosado. 750 ml",
            descripcion: "Temperatura de servicio de este vino es entre 7º y 9º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar una Tarta invertida de mozzarella, tomate y albahaca con ensalada de rucula.",
            precio: 415,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/L_Argentin_de_Malartic_Rosado_genqmm.jpg",
            tipo: "Rosado",
            cepa: "Rosado",
            stock: 5,
            bodega: "Diamantes",
            provincia: "Mendoza",
            alcohol: 12.2
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(1)
    })
    .then(() => {
        return Producto.create({
            nombre: "Alamos Malbec Maceracion Rose. 750 ml",
            descripcion: "Recomendamos decantar este vino al menos una hora antes de beberse. Temperatura de servicio entre 9° y 11° C. Este vino permite guarda de 2 años. Es ideal para acompañar diferentes tipos de carnes,como un Curry de Cordero o Moqueca de pescado.",
            precio: 399,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/alamosrose_ithizp.jpg",
            tipo: "Rosado",
            cepa: "Rosado",
            stock: 5,
            bodega: "Catena Zapata",
            provincia: "Mendoza",
            alcohol: 11.5
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(6)
    })
    .then(() => {
        return Producto.create({
            nombre: "Amalaya Rosé. 750 ml",
            descripcion: "Temperatura de servicio de este vino es entre 8º y 10º C. Potencial de guarda unos 1 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un tapeo o tortas chocolatozas.",
            precio: 280,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Amalaya_Ros%C3%A9_xvdl2x.jpg",
            tipo: "Rosado",
            cepa: "Rosado",
            stock: 5,
            bodega: "Amalaya",
            provincia: "Salta",
            alcohol: 12.8
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(5)
    })
    .then(() => {
        return Producto.create({
            nombre: "Rincón Famoso Rosado. 750 ml",
            descripcion: "Temperatura de servicio para este vino es entre 8º y 10º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un Souffle de queso o una quiche de camarones.",
            precio: 190,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Rinc%C3%B3n_Famoso_Rosado_rdbjk6.jpg",
            tipo: "Rosado",
            cepa: "Rosado",
            stock: 5,
            bodega: "Lopez",
            provincia: "Mendoza",
            alcohol: 13.1
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(4)
    })
    .then(() => {
        return Producto.create({
            nombre: "Lagarde Blanc de Noir. 750 ml",
            descripcion: "Temperatura de servicio para este vino es entre 5º y 7º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar una Ensalada de rucula, pomelo y parmesano.",
            precio: 450,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Lagarde_Blanc_de_Noir_ibavjw.jpg",
            tipo: "Rosado",
            cepa: "Rosado",
            stock: 5,
            bodega: "Lagarde",
            provincia: "Mendoza",
            alcohol: 13.2
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(3)
    })
    .then(() => {
        console.log("10. Se crearon los rosados")
        return Producto.create({
            nombre: "Carmela Benegas Cabernet Franc Rose. 750 ml",
            descripcion: "La temperatura adecuada para su degustacion es entre 8º y 10º C. Es un vino apto para guarda de 2 años. Acompaña muy bien los pescados de carne fina asado como abadejo, trillas o truchas o las ensaladas con mariscos.",
            precio: 390,
            imagen: "https://cepadevinos.com/wp-content/uploads/2018/08/Carmela_Benegas_Cabernet_Franc_Rose_c10hyg.jpg",
            tipo: "Rosado",
            cepa: "Rose",
            stock: 5,
            bodega: "Banegas",
            provincia: "Mendoza",
            alcohol: 13.5
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(2)
    })
    .then(() => {
        return Producto.create({
            nombre: "Foster Pink. 750 ml",
            descripcion: "Temperatura de servicio de este vino es entre 10º y 12º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar unos Langostinos con crema de papa y ajos dulces.",
            precio: 330,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Foster_Pink_ozyhws.jpg",
            tipo: "Rosado",
            cepa: "Rose",
            stock: 5,
            bodega: "Enrique Foster",
            provincia: "Mendoza",
            alcohol: 13.3
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(1)
    })
    .then(() => {
        return Producto.create({
            nombre: "Hey Rose. 750 ml",
            descripcion: "Temperatura de servicio para este vino es entre 8º y 10º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Se recomienda servir como aperitivo o con toda clase de carnes blancas.",
            precio: 650,
            imagen: "https://cepadevinos.com/wp-content/uploads/2018/02/Hey-Rose.jpg",
            tipo: "Rosado",
            cepa: "Rose",
            stock: 5,
            bodega: "Matías Riccitelli Wines",
            provincia: "Mendoza",
            alcohol: 13
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(6)
    })
    .then(() => {
        return Producto.create({
            nombre: "Sylvestra Pinot Noir Rose. 750 ml",
            descripcion: "Apto para guarda de 2 año. La temperatura adecuada para su consumo es entre 7º y 9º C. Mantener en lugar fresco y sin luz ni vibraciones.  Ideal para acompañas copas de camarones o ensaladas de frutos de mar.",
            precio: 555,
            imagen: "https://cepadevinos.com/wp-content/uploads/2017/07/Sylvestra_Pinot_Noir_Rose_t8y3rq.jpg",
            tipo: "Rosado",
            cepa: "Rose",
            stock: 5,
            bodega: "Bressia",
            provincia: "Mendoza",
            alcohol: 12
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(5)
    })
    .then(() => {
        return Producto.create({
            nombre: "Desquiciado Rose. 750 ml",
            descripcion: "Temperatura de servicio para este vino es entre 8º y 10º C, Potencial de guarda 2 años. Conservar en lugar fresco, oscuro, y sin vibraciones. Ideal para acompañar un Souffle de queso o una quiche de camarones.",
            precio: 495,
            imagen: "https://cepadevinos.com/wp-content/uploads/2019/01/desquiciado-rose-1.jpeg",
            tipo: "Rosado",
            cepa: "Rose",
            stock: 5,
            bodega: "Desquiciado Wines",
            provincia: "Mendoza",
            alcohol: 12
        })
    }
    )
    .then((producto) => {
        return producto.addCategoria(4)
    })
    .then(console.log("11. Se crearon los Rose"))
