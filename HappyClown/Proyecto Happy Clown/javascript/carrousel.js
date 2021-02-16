document.addEventListener('DOMContentLoaded',function () {  
   let imagenes =[
        {img:'imagenes/galeria/uno.png'},
        {img:'imagenes/galeria/dos.jpg'},
        {img:'imagenes/galeria/tres.jpg'},
        {img:'imagenes/galeria/cuatro.jpg'},
        {img:'imagenes/galeria/cinco.jpg'},
        {img:'imagenes/galeria/seis.jpg'},
        {img:'imagenes/galeria/siete.jpg'},
        {img:'imagenes/galeria/ocho.jpg'},
        {img:'imagenes/galeria/nueve.jpg'},
        {img:'imagenes/galeria/diez.jpg'},
        {img:'imagenes/galeria/once.jpg'},
        {img:'imagenes/galeria/doce.jpg'},
        {img:'imagenes/galeria/trece.jpg'},
        {img:'imagenes/galeria/catorce.jpg'},
        {img:'imagenes/galeria/quince.jpg'}
    ]
let contador=0
const contenedor=document.querySelector('.slideshow')
const overlay= document.querySelector('.overlay')
const galeria_imagenes=document.querySelectorAll('.ggaleria img')
const img_slideshow=document.querySelector('.slideshow img')

    contenedor.addEventListener('click',function (event) {
        let atras=contenedor.querySelector('.atras'),
        adelante=contenedor.querySelector('.adelante'),
        img=contenedor.querySelector('img'),
        tgt=event.target
        if (tgt==atras) {
            if (contador>0) {
                img.src=imagenes[contador-1].img
                contador++
            }else{
                img.src=imagenes[imagenes.length-1].img
                contador=imagenes.length-1
            }
        }else if(tgt==adelante){
            if (contador<imagenes.length-1) {
                img.src=imagenes[contador+1].img
                contador++
            }else{
                img.src=imagenes[0].img
                contador=0
            }
        }
    })
    Array.from(galeria_imagenes).forEach(img =>{
        img.addEventListener('click',event =>{
            const imagen_seleccionada=+event.target.dataset.imgMostrar
            img_slideshow.src=imagenes[imagen_seleccionada].img
            contador=imagen_seleccionada
            overlay.style.opacity=1
            overlay.style.visibility='visible'
        })
    })

    document.querySelector('.btn_cerrar').addEventListener('click',() => {
        overlay.style.opacity= 0
        overlay.style.visibility='hidden'
    })
        
})
