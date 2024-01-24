
<?php

use PDO;

  // Conectar a la base de datos
  $db = new PDO("mysql:host=localhost;dbname=mi_base_de_datos", "mi_usuario", "mi_contraseña");

  // Obtener los datos del formulario
  $username = $_POST["username"];
  $password = $_POST["password"];
  $sql = "SELECT * FROM usuarios WHERE nombre_de_usuario = '$username' AND contraseña = '$password'";
  $result = $db->query($sql);
  

  // Verificar las credenciales
  $query = $db->prepare("SELECT * FROM usuarios WHERE nombre_de_usuario = :username AND contraseña = :password");
  $query->execute([
    ":username" => $username,
    ":password" => $password,
  ]);

  // Si las credenciales son correctas
  if ($query->rowCount() == 1) {
    // Iniciar sesión al usuario
    session_start();
    $_SESSION["usuario"] = $username;

    // Redirigir al usuario a una página segura
    header("Location: pagina_segura.php");
  } else {
    // Mostrar un mensaje de error
    echo "Credenciales incorrectas.";
    // Conectar a la base de datos
    // ...
    // Verificar las credenciales
    // ...
    // Si las credenciales son correctas
    // ...
    // En caso de error de registro, redirigir a una página de error
    header("Location: pagina_error.php");
  }
?>
