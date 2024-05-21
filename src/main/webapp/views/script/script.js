window.onload=function () {
    let contadorU=0;
    let contadorM=0;
    let div=document.querySelector(".maquina");
    let img=document.querySelector("#respuestaMaquina");
    let user = document.querySelectorAll('input[type=radio][name="opcion"]'); //All cuando son varios
    user.forEach(function (userOption) {//ForEarch = por cada uno ...distinto
        userOption.addEventListener("click", function () {
            document.querySelector("#mensaje").innerHTML="";
            //verificar si el radio esta marcado
            if (this.checked) { //si ese radio esta marcado, hacer lo siguiete
                //mostrar que opcion marco el cliente
                let userResp = this.value;
                let maq = parseInt(Math.random() * 3 + 1);
                console.log("Maquina->" + maq);
                console.log("Usuario->" + userResp);
                div.style.visibility = "visible";
                div.classList.add("maquina-respuesta");
                switch (maq) {
                    case 1: {
                        img.src = "views/img/piedra.png";
                        break;
                    }
                    case 2: {
                        img.src = "views/img/papel.png";
                        break;
                    }
                    case 3: {
                        img.src = "views/img/tijeras.png";
                        break;
                    }
                }

                let msn = ""
                if (userResp == maq) {
                    msn = "Empate";
                } else if (userResp == 1 && maq == 2) {
                    contadorM++;
                    msn = "Gana la Máquina";
                } else if (userResp == 1 && maq == 3) {
                    contadorU++;
                    msn = "Ganas tu!"
                } else if (userResp == 2 && maq == 1) {
                    contadorU++;
                    msn = "Ganas tu!"
                } else if (userResp == 2 && maq == 3) {
                    contadorM++;
                    msn = "Gana la Máquina";
                } else if (userResp == 3 && maq == 1) {
                    contadorM++;
                    msn = "Gana la Máquina";
                } else if (userResp == 3 && maq == 2) {
                    contadorU++;
                    msn = "Ganas tu!"
                }
                document.querySelector("#mensaje").innerHTML = msn;
                document.querySelector("#contador").innerHTML = `Usuario: ${contadorU} | Máquina: ${contadorM}`;

                if (contadorU == 1 || contadorM == 1) {
                    if (contadorU == 1) {
                        ganador();
                    } else {
                        let marquesina=document.querySelector(".marquesina");
                        marquesina.style.display="block";
                        //mostramos carita triste...

                    }
                    let boton = document.querySelector("#nuevaP");
                    let salir = document.querySelector("#salir");
                    boton.style.display = "block";
                    salir.style.display = "block"

                    boton.addEventListener("click", function () {
                        window.location.replace("index.jsp");
                    })
                    salir.addEventListener("click", function () {
                        window.close();
                    })
                    //tanto si la maquina gana como si el user gana!
                    user.forEach(function (userOption) {//ForEarch = por cada uno ...distinto
                        userOption.disabled = true;
                        let imagenes=document.querySelectorAll(".imagenes");
                        imagenes.forEach(function (img){
                            img.style.transform="scale(1.0)";
                            img.style.filter="grayscale(100%)";
                            img.addEventListener("mouseover",function (){
                                img.style.cursor="none";
                            })
                        })

                    })
                }
            }
        })
    })

}