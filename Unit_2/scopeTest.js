function a() {
    let apple = "red & round";
    console.log(apple);
    let x = 1;
    b();
    function b() {
        let banana = "yellow and curved";
        console.log(banana);
        c();
        function c() {
            let carrot = "orange and pointy";
            console.log(carrot);
            d();
            function d() {
                let dragonfruit = "strange";
                console.log(dragonfruit);
                if (x = 1) {
                    console.log("I am the result of the 'if' in the if else statement.");
                    x++;
                    console.log(x);
                    e();
                } else {
                    console.log("I am the result of the 'else' in the if else statement.");
                }
                function e() {
                    let eggplant = "purple";
                    console.log(eggplant);
                    if (x = 1) {
                        console.log("Scope is the culprit!");
                        // while function e is called within the if/else of function d, function e does not know how to read the other children of function d
                    } else {
                        console.log("This does not print!");
                    }
                    f();
                    function f() {
                        let fig = "fig newtons";
                        console.log(fig);
                        console.log(eggplant);
                        console.log(dragonfruit);
                        console.log(carrot);
                        console.log(banana);
                        console.log(apple);
                        console.log(x);
                    }
                }
            }
        }
    }
}
a();