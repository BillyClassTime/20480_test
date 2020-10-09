
let listadepaginas = [

    {
      "pregunta": "313",
      "pagina": "313.html",
      "tema": "sinespecificar"
    },
    {
      "pregunta": "296",
      "pagina": "296.html",
      "tema": "sinespecificar"
    },
    {
      "pregunta": "279",
      "pagina": "279.html",
      "tema": "sinespecificar"
    },
    {
      "pregunta": "278",
      "pagina": "278.html",
      "tema": "sinespecificar"
    },
    {
      "pregunta": "262",
      "pagina": "262.html",
      "tema": "sinespecificar"
    },
    {
      "pregunta": "245",
      "pagina": "245.html",
      "tema": "sinespecificar"
    },
    {
      "pregunta": "228",
      "pagina": "228.html",
      "tema": "sinespecificar"
    },
    {
      "pregunta": "211",
      "pagina": "211.html",
      "tema": "sinespecificar"
    },
    {
      "pregunta": "194",
      "pagina": "194.html",
      "tema": "sinespecificar"
    },
    {
      "pregunta": "177",
      "pagina": "177.html",
      "tema": "sinespecificar"
    },
    {
      "pregunta": "160",
      "pagina": "160.html",
      "tema": "sinespecificar"
    },
    {
      "pregunta": "143",
      "pagina": "143.html",
      "tema": "sinespecificar"
    },

    {
      "pregunta": "109",
      "pagina": "109.html",
      "tema": "sinespecificar"
    },
    {
      "pregunta": "92",
      "pagina": "92.html",
      "tema": "sinespecificar"
    },
    {
      "pregunta": "75",
      "pagina": "75.html",
      "tema": "sinespecificar"
    },
  
    {
      "pregunta": "41",
      "pagina": "41.html",
      "tema": "sinespecificar"
    },
    {
      "pregunta": "24",
      "pagina": "24.html",
      "tema": "sinespecificar"
    },
    {
      "pregunta": "8",
      "pagina": "8.html",
      "tema": "ajax"
    }

  ];


let n = 0;
let  url = window.location.href ;
 
let arr = url.split("/"); 

let nombrepagina =(arr [ arr.length-1]);
 
  const downloadjson = async () => {
    // carga en un await la lista de preguntas
    let response = await fetch("./lista.json");

    // checking response is ok
    if (response.ok) {
        // transform body to json
        let data = await response.json();
        listadepaginas = ( data.preguntas);
    
         dibujaranterior();
    }
    else
        alert("la lista de preguntas no se ha podido cargar");
    }
    const buscarpagina = () => 
    {
     
        let encontrado = -1;
        for (i=0; i<listadepaginas.length;i++ )
        { 
              
            if (listadepaginas[i].pagina == nombrepagina )
           {     return (i);
           }
        }
        return (encontrado);
    }

    const dibujaranterior = ()  =>
    {
        n = buscarpagina(nombrepagina);
  
        
        const anterior = document.getElementById("anterior");
        const siguiente = document.getElementById("siguiente");
       
        
        if ( n-1 >=0  ) {
           anterior.textContent = "<< Anterior " + listadepaginas[n-1].pagina;
           anterior.setAttribute("href", listadepaginas[n-1].pagina);
           anterior.setAttribute("class", "anchor");
        }
        else
        {
          // anterior.remove();
        }
        if ( n+1 < listadepaginas.length ) {
           siguiente.textContent = " Siguiente >>" + listadepaginas[n+1].pagina;
           siguiente.setAttribute("href", listadepaginas[n+1].pagina);
           siguiente.setAttribute("class", "anchor");
        }
       else
        { //siguiente.remove();
        }
    
    }

///downloadjson();

dibujaranterior();