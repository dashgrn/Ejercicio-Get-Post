let $formulario = document.forms[0],
  url = "http://localhost:4000/games",
  $nombre,
  $precio,
  $desc,
  $categoria,
  $arrayCategoria = [],
  objeto;

const capturarDatos = () => {
  $nombre = $formulario.nombre.value,  
  $precio = $formulario.precio.value,
  $desc = $formulario.desc.value,
  $categoria = Array.from(document.querySelectorAll(".categoria"));  

  $categoria.forEach(elemento => {
    if(elemento.checked) $arrayCategoria.push(elemento.value);
  });

  objeto = {
    title: $nombre,
    category: $arrayCategoria,
    price: $precio,
    img: "",
    desc: $desc
  }
  
}

const crearVideojuego = async (url) => {
  await fetch(url,{
    method: 'POST',
    body: JSON.stringify(objeto),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
}

$formulario.addEventListener("submit", e => {
  e.preventDefault();
  capturarDatos();  
  crearVideojuego(url);
})