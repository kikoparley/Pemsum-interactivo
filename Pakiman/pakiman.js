class Pakiman{
  constructor(n, v, a)  {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.atk = a;

    this.imagen.src = imagenes[this.nombre];
  }
  hablar (){
    alert (this.nombre);
  }

  mostrar (){
  document.body.appendChild(this.imagen);
  document.write("<p>")
  document.write("<strong>" + this.nombre + "</strong> <br />");
  document.write("HP" + this.vida +  "<br />");
  document.write("ATK" + this.atk + "<hr />");
  document.write("</p>")
  }
}