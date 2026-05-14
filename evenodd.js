
    <script>
        function test(a){
        let result;
        if(a%2 == 0){
            result = "even";
        }
        else{
            result = "odd";
        }
        document.write("The number " + a + " is " + result);
        return result;
    }
    console.log(test(-5));
    </script>
