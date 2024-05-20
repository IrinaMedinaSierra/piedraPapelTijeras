<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="views/script/script.js"></script>
    <script src="views/script/ganador.js"></script>
    <link rel="stylesheet" href="views/css/style.css">
    <link rel="stylesheet" href="views/css/responsive.css">
</head>
<body>
<div class="contenedor1  morado col-12">
    <div class="col-6 centrado">
        <label for="piedra">
            <input type="radio" value="1" name="opcion" id="piedra">
            <img src="views/img/piedra.png" alt="Piedra" class="col-2">
        </label>
        <label for="papel">
            <input type="radio" value="2" name="opcion" id="papel">
            <img src="views/img/papel.png" alt="Papel" class="col-2">
        </label>
        <label for="tijera">
            <input type="radio" value="3" name="opcion" id="tijera">
            <img src="views/img/tijeras.png" alt="Tijera" class="col-2">
        </label>
    </div>
    <div class="maquina centrado col-2">
        <img src="" alt="respuesta maquina" id="respuestaMaquina"  class="col-6">
    </div>
    <div class="contenedor2 col-4">
        <p class="centrado" id="mensaje"></p>
        <h2 id="contador" class="centrado"></h2>
    </div>
</div>


</body>
</html>
