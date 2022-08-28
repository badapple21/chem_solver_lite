let element1 = document.querySelector("#element1");
let charge1 = document.querySelector("#charge1");
let element2 = document.querySelector("#element2");
let charge2 = document.querySelector("#charge2");
let amount1 = document.querySelector("#amount1");
let amount2 = document.getElementById("amount2");
let form = document.querySelector("#main_form");


function solve(reactant1, w, reactant2, r, t, y){
    let charge1 = Math.abs(w);
    let charge2 = Math.abs(r);

    let  amount1 = parseInt(t);
    let  amount2 = parseInt(y);

    let value1 = charge2;
    let value2 = charge1;

    for(let k = 2; k < 10;k++){
        if(value1 % k == 0){
            if(value2 % k == 0){
                amount1 = value1 = parseInt(value1/k);
                amount2 = value2 = parseInt(value2/k);
                if(true){break;}
            }
        }
    }

    let max = 10;
    for(let i = 1; i < max+1; i++){
        for(let j = 1; j < max+1; j++){
            let test1 = i*amount1;
            let test2 = j*amount2;
            for(let l = 2; l < max+1; l++){
                if(test1 % l == 0){
                    if(test2 % l == 0){
                        for(let r = 2; r < 10; r++){
                            if(i % r == 0){
                                if(j % r == 0){
                                    if(l % r == 0){
                                        i = parseInt(i/r);
                                        j = parseInt(j/r);
                                        l = parseInt(l/r);
                                        if(true){break;}

                        return "Solved", i, j, value1, value2, reactant1, reactant2, amount1, amount2, l;



                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return "Error" "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1";
}

form.addEventListener("input", async function(){
    let response = await fetch("/fetch?q=" + element1.value + "&w=" + charge1.value + "&e=" + element2.value + "&r=" + charge2.value + "&t=" + amount1.value + "&y=" + amount2.value);
 


    document.getElementById("ans").innerHTML = answer;
})
