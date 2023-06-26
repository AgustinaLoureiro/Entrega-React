const productos = [
    { nombre: "Tapiz Valencia - 20cm", precio: 1800, id: 1, img: '../img/01a_tapiz_simple_20.jpg'},
    { nombre: "Tapiz Málaga - 40cm", precio: 4000, id: 2, img: "../img/01b_tapiz_simple_40.jpg" },
    { nombre: "Tapiz Sevilla - 60cm", precio: 6800, id: 3, img: "../img/01c_tapiz_simple_60.jpg" },
    { nombre: "Tapiz Toledo - 80cm", precio: 10000, id: 4, img: "../img/01d_tapiz_simple_80.jpg" },
    { nombre: "Tapiz Zaragoza - 100cm", precio: 15000, id: 5, img: "../img/01e_tapiz_simple_100.jpg" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}