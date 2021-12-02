<html>
    <head>
        <title>PHP</title>
    </head>
    <body>
        <?php
            $obj = $_POST["object"];
            $mat = $_POST["material"];
            $num = $_POST["amount"];
            $x = "Ваше замовлення прийнято\n
                Замовлено виріб - $obj\n
                Матеріал  - $mat\n
                Кількість - $num";
            echo($x);
        ?>
    </body>
</html>
