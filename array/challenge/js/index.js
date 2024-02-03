var tbarray = [];
const row = document.getElementById("row");
function createarray() {
    tbarray = new Array(parseInt(row.value)).fill(0).map(() => new Array(2).fill(0));
    generatetable();
}
function generatetable() {
    let tb1 = document.getElementById("tb1");
    tb1.innerHTML = "";
    let tbody = "";
    for (let i = 0; i < tbarray.length; i++) {
        tbody += `<tr>
            <td> <input type ="text" id=inp${i} value="${tbarray[i][0]}"></td>

            <td><input type ="text" id=out${i} value ="${tbarray[i][1]}"></td>
    </tr>`;
    }
    tb1.innerHTML = tbody;
}
/*function updatearray(){
    var fact:number;
    for(let i=0;i<tbarray.length;i++){
    let inp:HTMLInputElement=<HTMLInputElement>document.getElementById(`inp${i}`);

    tbarray[i][1]=parseInt(inp.value);
    for(let a=1;a<=parseInt(inp.value);a++)
    {
        tbarray[i][1]=parseInt(inp.value)**a;
    }
    
    }
    generatetable();
}*/
function updatearray() {
    for (let i = 0; i < tbarray.length; i++) {
        let inp = document.getElementById(`inp${i}`);
        let num = parseInt(inp.value);
        let fact = 1;
        for (let j = 1; j <= num; j++) {
            fact *= j;
        }
        tbarray[i][1] = fact;
    }
    generatetable();
}
function showarray() {
    for (let j = 0; j < tbarray.length; j++) {
        let inp = document.getElementById(`inp${j}`);
        let inputValue = parseInt(inp.value);
        // Check if the input value is a prime number
        let isPrime = true;
        if (inputValue <= 1) {
            isPrime = false;
        }
        else {
            for (let j = 2; j <= Math.sqrt(inputValue); j++) {
                if (inputValue % j == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        // If the input value is a prime number, assign 1 to the second element of the subarray
        if (isPrime) {
            tbarray[j][1] = 1;
        }
        else {
            tbarray[j][1] = 0;
        }
    }
    generatetable();
}
//# sourceMappingURL=index.js.map