const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")




function cliqueiNoBotao () {
    form.computedStyleMap.left = "50%"
    form.style.transform = "translateX( 300%)"
    mascara.style.visibility ="visible"
}

function esconderform(){
    form.computedStyleMap.left = "300%"
    form.style.transform = "translateX( 0)"
    mascara.style.visibility ="hidden"
     
}

