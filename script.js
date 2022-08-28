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
                if(test1 % l == 0 && test2 % l == 0){
                    if(test1 == l*value1 && test2 == l*value2){
                        for(let r = 2; r < 10; r++){
                            if(i % r == 0){
                                if(j % r == 0){
                                    if(l % r == 0){
                                        i = parseInt(i/r);
                                        j = parseInt(j/r);
                                        l = parseInt(l/r);
                                        console.log(i);
                                        console.log(j);
                                        if(true){break;}



                                    }
                                }
                            }
                        }
                        console.log(j);
                        console.log(i);
                        return ["Solved", i, j, value1, value2, reactant1, reactant2, amount1, amount2, l];
                    }
                }
            }
        }
    }

    return ["Error", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1"];
}

function check_1(num){
    if(num==1){
        return ""
    }else {
        return num
    }
}

function format(coefficient1, coefficient2, charge1, charge2, reactant1, reactant2, amount1, amount2, product_coefficient){
    coefficient1 = check_1(coefficient1)
    console.log(coefficient2);
    coefficient2 = check_1(coefficient2)
    amount1 = check_1(amount1)
    amount2 = check_1(amount2)
    charge1 = check_1(charge1)
    charge2 = check_1(charge2)
    product_coefficient = check_1(product_coefficient)
    
    console.log(coefficient2);    

    let HTML = `${coefficient1}${reactant1}<sub>${amount1}</sub> + ${coefficient2}${reactant2}<sub>${amount2}</sub> -> ${product_coefficient}${reactant1}<sub>${charge1}</sub>${reactant2}<sub>${charge2}</sub>`
    console.log(HTML);
    return HTML
}

form.addEventListener("input", async function(){
    let q = element1.value
    let w = charge1.value
    let e = element2.value
    let r = charge2.value
    let t = amount1.value
    let y = amount2.value

    if(q && w && e && r && t && y){
        let rtn = solve(q,w,e,r,t,y);
        let msg = rtn[0];
        let coefficient1 = rtn[1];
        let coefficient2 = rtn[2];
        let charge1 = rtn[3];
        let charge2 = rtn[4];
        let reactant1 = rtn[5];
        let reactant2 = rtn[6];
        t = rtn[7]
        y = rtn[8];
        let product_coefficient = rtn[9];
        if(msg == "Error"){
            let answer = "Could Not Calculate" 
        }
        else {
            answer = format(coefficient1, coefficient2, parseInt(charge1), parseInt(charge2), reactant1, reactant2, parseInt(t), parseInt(y), parseInt(product_coefficient))
        }
        document.getElementById("ans").innerHTML = answer;
    }
    else {
        document.getElementById("ans").innerHTML = "Error - Enter all feilds";
    }


})
