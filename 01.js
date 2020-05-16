const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Prueba Vue',
        imagenes: [
            {nombre:'imagen1', descripcion: 'HTML', ruta: 'public/img/img1.png', estado: false},
            {nombre:'imagen2', descripcion: 'CSS', ruta: 'public/img/img2.png', estado: false},
            {nombre:'imagen3', descripcion: 'Vue', ruta: 'public/img/img3.jpg', estado: false},
            {nombre:'imagen4', descripcion: 'Visual Studio Code', ruta: 'public/img/img4.jpg', estado: false},
            {nombre:'imagen5', descripcion: 'JavaScript', ruta: 'public/img/img5.png', estado: false}
        ],
        methods: {            
            MostrarImg(event, index) {
                this.imagenes[index].estado = true;                
            },
            OcultarImg(event, index) {
                this.imagenes[index].estado = false;                
            }
        }
    }
});