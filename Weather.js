
    <script>
        var temp = prompt("Enter the temperature in celsius");
        if (temp > 30) {
            document.write("It is hot outside");
        }
        else if (temp > 20 && temp <= 30) {
            document.write("The weather is normal");
        }
        else if (temp > 10 && temp <= 20) {
            document.write("It is cold outside");
        }
        else {
            document.write("OMG! It is so cold outside");
        }
    </script>
