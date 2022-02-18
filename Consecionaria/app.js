let autos = require("./autos")

const concesionaria = {
   autos: autos,

   buscarAuto(patente){     
      for (let i = 0; i < autos.length; i++){
         if(patente == autos[i].patente){
            return autos[i]
         }
      }
         return null
   },

   venderAuto(patente){
    let autoBuscado = this.buscarAuto(patente)
      if(autoBuscado != null){
         autoBuscado.vendido = true
      }
    return autoBuscado
 },

 
    autosParaLaVenta(){
      let listaAutosAVender = autos.filter(function(autos){
               if(autos.vendido == false){
                  return autos
               }
               })
      return listaAutosAVender
   },
 
   /*autosParaLaVenta(){
      let listaAutosAVender = autos.filter((filter) => filter.vendido == false)
      return listaAutosAVender;
   }*/


   autosNuevos: function(){
      autoAven = this.autosParaLaVenta();
      autos0km = autoAven.filter(function(auto){
         if (auto.km < 100) {
            return true
         }
      })
      return autos0km;
   },

   
   listaDeVentas(){
         let dinero = [];
         autos.forEach(auto => {
            if (auto.vendido == true){
               let precio = auto.precio
               dinero.push(precio)
            }
         })
      return dinero;
   },
  totalDeVentas(){
      let sumatoria = this.listaDeVentas().reduce((a,b) => a+b, 0)
      return sumatoria
   },
   
   puedeComprar(auto, persona){
      if(persona.capacidadDePagoTotal > auto.precio && persona.capacidadDePagoEnCuotas > (auto.precio/auto.cuotas)){
         return true
      }else{
         return false
      }
   }, 
   autosQuePuedeComprar: function (persona){
      let listaAutosAComprar=[];
     let  autosParaVender=this.autosParaLaVenta();
      // /console.log(autosParaVender());
      longitud = autosParaVender.length;
          for (let i=0; i<longitud; i++){
              //console.log(i);
              if (this.puedeComprar(autosParaVender[i],persona)){
                  listaAutosAComprar.push(autosParaVender[i]);
              }
           }
      return listaAutosAComprar;
      } 
}
 console.log('************* busqueda*************');
 console.log(concesionaria.buscarAuto("jjk116"));
 
 console.log('---------Autos vendidos-------------');
 console.log(concesionaria.venderAuto('APL123'));
 
console.log('---------Autos para la venta--------');
console.log(concesionaria.autosParaLaVenta());

console.log('---------Autos nuevos--------');
console.log(concesionaria.autosNuevos());

console.log("------Lista de ventas ------")
console.log(concesionaria.listaDeVentas());
console.log("----Total de ventas ----")
console.log(concesionaria.totalDeVentas())
console.log("----Puede comprar----")
console.log(concesionaria.puedeComprar({
   marca: 'Toyota',
   modelo: 'Corolla',
   color: 'Blanco',
   anio: 2019,
   km: 0,
   precio: 150000,
   cuotas: 12,
   patente: 'jjk116',
   vendido: false
 },
 {
   nombre: 'Juan',
   capacidadDePagoEnCuotas: 20000,
   capacidadDePagoTotal: 100000
   } 
 ))
 console.log("----autosQuePuedeComprar---")
 console.log(concesionaria.autosQuePuedeComprar({
   nombre: 'Juan',
   capacidadDePagoEnCuotas: 20000,
   capacidadDePagoTotal: 200000
   }))