const balanceP = document.getElementById("balanceP");
const placeBetButR = document.getElementById("placeBetButR");
const rolledNumberPR = document.getElementById("rolledNumberPR");

const placeBetButColorR = document.getElementById("placeBetButColorR");
const rolledNumberColorPR = document.getElementById("rolledNumberColorPR");
const greenRadio = document.getElementById("greenRadio");
const redRadio = document.getElementById("redRadio");
const blackRadio = document.getElementById("blackRadio");

const redR = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
const blackR = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
const greenR = [0];

let balance = 100;

placeBetButR.onclick = function(){
    let numberPickR = document.getElementById("numberPickR").value;
    let betR = document.getElementById("betR").value;
    
    if(numberPickR =="" || betR ==""){
        alert("Pick a number and place the bet!");
    } else {
        if(numberPickR < 0 || numberPickR > 36){
            alert("Pick a number between 0 and 36!");
        } else {
            if(betR < 1){
                alert("Place at least 1 at bet!")
            } else {
                if(balance - betR < 0){
                    alert("Can't get balance on minus!");
                } else {
                    balance = balance - betR;
                    balanceP.textContent = balance;

                    placeBetButR.disabled = true;

                    for(let i=0; i<37; i++){
                        let elem = 'R' + i;
                        document.getElementById(elem).style.color = "white";
                    }

                    for(let i=0; i<20; i++){
                        setTimeout(()=>{
                            rolledNumberPR.textContent = Math.floor(Math.random() * (36+1));
                        },20*(i+1));
                    }
                    
                    let rolledNumberR = Math.floor(Math.random() * (36+1));
                    console.log(rolledNumberR);

                    setTimeout(()=>{
                        rolledNumberPR.textContent = rolledNumberR;
                        placeBetButR.disabled = false;
                        let bCTD = 'R' + rolledNumberR;
                        document.getElementById(bCTD).style.color = "darkseagreen";
                    },420);

                    if(rolledNumberR == betR){
                        setTimeout(()=>{
                            balance = balance + (betR*35)
                            balanceP.textContent = balance;
                            rolledNumberPR.textContent = `${rolledNumberR} You win!`
                        },420);
                    }
                }
            }
        }
    }
}

placeBetButColorR.onclick = function(){
    const betColorR = document.getElementById("betColorR").value;

    if((blackRadio.checked || redRadio.checked || greenRadio.checked) & betColorR != ""){
        if(betColorR < 1){
            alert("Place at least 1 at bet!")
        } else {
            if(balance - betColorR < 0){
                alert("Can't get balance on minus!");
            } else {
                balance = balance - betColorR;
                balanceP.textContent = balance;

                placeBetButColorR.disabled = true;

                for(let i=0; i<37; i++){
                    let elem = 'R' + i;
                    document.getElementById(elem).style.color = "white";
                }

                for(let i=0; i<20; i++){
                    setTimeout(()=>{
                        rolledNumberColorPR.textContent = Math.floor(Math.random() * (36+1));
                    },20*(i+1));
                }
                
                let rolledNumberR = Math.floor(Math.random() * (36+1));
                let rolledNumberArrayR = [rolledNumberR];
                console.log(rolledNumberR);

                setTimeout(()=>{
                    rolledNumberColorPR.textContent = rolledNumberR;
                    placeBetButColorR.disabled = false;
                    let bCTD = 'R' + rolledNumberR;
                    document.getElementById(bCTD).style.color = "darkseagreen";
                },420);

                const hasCommonItem = (arr1, arr2) => {
                    const map = new Map();
                    arr1.forEach(item => map.set(item, true));
                    return arr2.some(item => map.has(item));
                };

                const blackCheck = hasCommonItem(rolledNumberArrayR, blackR);
                const redCheck = hasCommonItem(rolledNumberArrayR, redR);
                const greenCheck = hasCommonItem(rolledNumberArrayR, greenR);

                if(blackCheck == false){
                    if(redCheck == false){
                        if(greenCheck == false){
                            alert("asd")
                        } else{
                            if(greenRadio.checked){
                                setTimeout(()=>{
                                    balance = balance + (betColorR*35)
                                    balanceP.textContent = balance;
                                    rolledNumberColorPR.textContent = `${rolledNumberR} You win!`
                                },420);
                               }
                        }
                    } else {
                        if(redRadio.checked){
                            setTimeout(()=>{
                                balance = balance + (betColorR*2)
                                balanceP.textContent = balance;
                                rolledNumberColorPR.textContent = `${rolledNumberR} You win!`
                            },420);
                        }
                    }
                } else {
                   if(blackRadio.checked){
                    setTimeout(()=>{
                        balance = balance + (betColorR*2)
                        balanceP.textContent = balance;
                        rolledNumberColorPR.textContent = `${rolledNumberR} You win!`
                    },420);
                   }
                }
            }
        }

    } else {
        alert("Pick a color and place the bet!");
    }
}