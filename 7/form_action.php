<html>
    <head>
        <title>PHP</title>
    </head>
    <body>
        <?php
            //Отримання даних з форми
            $obj = $_POST["object"];
            $mat = $_POST["material"];
            $num = $_POST["amount"];
            //формування кінцевого рядка
            $x = "<h1>Ваше замовлення прийнято</h1>
                <table>
                    <tr>
                        <td>Замовлено виріб</td>
                        <td></td>
                        <td>$obj</td>
                    </tr>
                    <tr>
                        <td>Матеріал</td>
                        <td></td>
                        <td>$mat</td>
                    </tr>
                    <tr>
                        <td>Кількість</td>
                        <td></td>
                        <td>$num</td>
                    </tr>
                </table>
                <a href='index.html'>Назад</a>";
            //виведення кінцевого рядка
            echo $x;
        ?>
    </body>
</html>
