
    <script>
        year=prompt("Enter year");
        if((year%4==0 && year%100!=0) || year%400==0)
        {
            document.write("It is a leap year!!");
        }
        else
        {
            document.write("It is not a leap year!!");
        }
    </script>

