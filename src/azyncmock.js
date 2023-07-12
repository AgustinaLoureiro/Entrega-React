const productos = [
    { nombre: "Tapiz Valencia - 20cm", precio: 1800, id: "001", img: '../img/01a_tapiz_simple_20.jpg', idCat: "tap"},
    { nombre: "Tapiz Málaga - 40cm", precio: 4000, id: "2", img: "../img/01b_tapiz_simple_40.jpg", idCat: "tap"},
    { nombre: "Tapiz Sevilla - 60cm", precio: 6800, id: "3", img: "../img/01c_tapiz_simple_60.jpg", idCat: "tap"},
    { nombre: "Tapiz Toledo - 80cm", precio: 10000, id: "4", img: "../img/01d_tapiz_simple_80.jpg", idCat: "tap"},
    { nombre: "Tapiz Zaragoza - 100cm", precio: 15000, id: "5", img: "../img/01e_tapiz_simple_100.jpg", idCat: "tap"},
    
    { nombre: "Hamaca Toulouse - 50cm", precio: 12500, id: "6", img: '../img/02a_hamaca_mascota_sin_aro.jpg', idCat: "ham"},
    { nombre: "Hamaca Paris - 60cm", precio: 15000, id: "7", img: "../img/02b_hamaca_mascota_con_aro_y_juguete.jpg", idCat: "ham"},
    { nombre: "Hamaca Burdeos - 70cm", precio: 17000, id: "8", img: "../img/02c_hamaca_mascota_tipo_sillon.jpg", idCat: "ham"},

    { nombre: "Estante Oporto - 30cm", precio: 4000, id: "9", img: "../img/03a_un_estante_corto.jpg", idCat: "rep"},
    { nombre: "Estante Oporto - 60cm", precio: 6000, id: "10", img: "../img/03b_un_estante_largo.jpg", idCat: "rep"},
    { nombre: "Estante Lisboa - 30cm", precio: 7000, id: "11", img: "../img/03c_dos_estantes_cortos.jpg", idCat: "rep"},
    { nombre: "Estante Lisboa - 60cm", precio: 9000, id: "12", img: "../img/03d_dos_estantes_largos.jpg", idCat: "rep"},
    { nombre: "Estante Sintra - 30cm", precio: 10000, id: "13", img: "../img/03e_tres_estantes_cortos.jpg", idCat: "rep"},
    { nombre: "Estante Sintra - 60cm", precio: 12000, id: "14", img: "../img/03f_tres_estantes_largos.jpg", idCat: "rep"},

    { nombre: "Porta Maceta Milan", precio: 3000, id: "15", img: "../img/04a_portamaceta_simple.jpg", idCat: "mac"},
    { nombre: "Porta Maceta Florencia", precio: 3200, id: "16", img: "../img/04b_portamaceta_simple_con_agregados.jpg", idCat: "mac"},
    { nombre: "Porta Maceta Venecia", precio: 4300, id: "17", img: "../img/04c_portamaceta_tejido_simple.jpg", idCat: "mac"},
    { nombre: "Porta Maceta Roma", precio: 5000, id: "18", img: "../img/04d_portamaceta_tejido_medio.jpg", idCat: "mac"},
    { nombre: "Porta Maceta Nápoles", precio: 6000, id: "19", img: "../img/04e_portamaceta_tejido_complejo.jpg", idCat: "mac"},
    { nombre: "Porta Maceta Pisa", precio: 6500, id: "20", img: "../img/04f_portamaceta_tejido_complejo_con_tapiz.jpg", idCat: "mac"},
    { nombre: "Porta Maceta Verona", precio: 45000, id: "21", img: "../img/04g_portamaceta_doble_simple.jpg", idCat: "mac"},
    { nombre: "Porta Maceta Palermo", precio: 5500, id: "22", img: "../img/04h_portamaceta_triple_simple_con_agregados.jpg", idCat: "mac"},
    { nombre: "Porta Maceta Bolonia", precio: 9000, id: "23", img: "../img/04i_portamaceta_triple.jpg", idCat: "mac"},

    { nombre: "Llavero Bremen", precio: 900, id: "24", img: "../img/05a_llaveros_corazon.jpg", idCat: "lla"},
    { nombre: "Llavero Nuremberg", precio: 900, id: "25", img: "../img/05b_llavero_pluma.jpg", idCat: "lla"},
    { nombre: "Llavero Munich", precio: 900, id: "26", img: "../img/05c_llaveros_simple_cortos.jpg", idCat: "lla"},
    { nombre: "Llavero Bonn", precio: 1200, id: "27", img: "../img/05d_llaveros_simple_largos.jpg", idCat: "lla"},
    { nombre: "Llavero Hamburgo", precio: 1500, id: "28", img: "../img/05e_llaveros_cinta_corta.jpg", idCat: "lla"},
    { nombre: "Llavero Berlin", precio: 2500, id: "29", img: "../img/05f_llaveros_cinta_larga.jpg", idCat: "lla"},

    { nombre: "Espejo Londres", precio: 5500, id: "30", img: "../img/06a_espejo.jpg", idCat: "dec"},
    { nombre: "Funda de almohadón Oxford", precio: 5500, id: "31", img: "../img/06b_funda_almohadon.jpg", idCat: "dec"},
    { nombre: "Camino de mesa Liverpool", precio: 7000, id: "32", img: "../img/06c_camino.jpg", idCat: "dec"},
    { nombre: "Posavasos Bristol", precio: 900, id: "33", img: "../img/06d_posa_vasos.jpg", idCat: "dec"},
    { nombre: "Guirnalda York", precio: 5000, id: "34", img: "../img/06e_guirnaldas.jpg", idCat: "dec"},
    { nombre: "Sujetador de cortina Manchester", precio: 1200, id: "35", img: "../img/06f_agarra_cortina.jpg", idCat: "dec"},
]


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 200)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout( ()=>{
            const producto = productos.find(prod => prod.id === id)
            resolve(producto)
        }, 200)
    })
}

export const getProductosPorSeccion = (idSeccion) => {
    return new Promise (resolve => {
        setTimeout( () => {
            const productosSeccion = productos.filter (prod => prod.idCat === idSeccion)
            resolve (productosSeccion);
        }, 1000)
    })
}