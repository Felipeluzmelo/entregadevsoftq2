window.onload = initAll;

function hanoi (n, a, b, c){
    if (n == 1 ) {
        document.write ("Move o disco " + n + " para " + a + " para " + b + " <br> ");
    }
    else {
        hanoi (n-1, a, c, b);
        hanoi (1, a, b, c);
        hanoi (n - 1, c, b, a);
    }
}