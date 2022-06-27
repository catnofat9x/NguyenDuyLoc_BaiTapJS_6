document.getElementById('demSoChia').onclick = function (a) {a.preventDefault()
    var e = '',
        t = '';
    for (n = 0; n < 100; n++) {
        if (n % 2 == 0) {
            e += n + ' ';
        }
        else {
            t += n + ' ';
        }
    }
    document.getElementById('txtResult1').innerHTML = "Số chẵn: " + e + "<br>👉Số lẻ: " + t;
};

//Bài tập 2 
document.getElementById('demSoChia3').onclick = function (a) {a.preventDefault()
    var e = 0, t = 0;
    for (e = 0; t < 1000; t++) {
        if (t % 3 == 0 && e++) {

        }
    }
    document.getElementById('txtResult2').innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + e + " số";
};

//Bài tập 3
document.getElementById('timSoNguyenDuong').onclick = function (a) {a.preventDefault()
    var e = 0, t = 0;
    for (n = 1; n < 10000; n++) {
        if (((e += n), console.log(e), e > 10000)) {
            console.log(n), (t = n);
            break;
        }

    }
    document.getElementById('txtResult3').innerHTML = 'Số nguyên dương nhỏ nhất' + t;
};

//Bài Tập 4
document.getElementById('tinhTong').onclick = function (a) {a.preventDefault()
    e = Number(document.getElementById('inputX').value);
    t = Number(document.getElementById('inputN').value);
    var n = 0, o = 1;
    for (o=1; o <= t; o++) {
        n += Math.pow(e, o)
    };
    document.getElementById('txtResult4').innerHTML = 'Tổng:' + n;


};

//Bài tập 5
document.getElementById('tinhGiaThua').onclick = function(e){e.preventDefault()
    a = document.getElementById('inputN1').value;
    var i = 1,
        o = 1;
    while( o <= a){
        i = i * o;
        o++;
    }
    document.getElementById('txtResult5').innerHTML = i;

};

//Bài tập 6
document.getElementById('taoTheDiv').onclick = function(a){a.preventDefault()
    var e = "";
    for( o = 1 ; o <= 10 ; o++ ){
        if( o % 2 == 0){
            e += "<div class='bg-danger text-white p-2'>Div chẵn</div>" ;
        }
        else{
            e +="<div class='bg-primary text-white  p-2'>Div lẻ </div>";
        };
    }
    document.getElementById('txtResult6').innerHTML = e;
};


//Bài tập 7
document.getElementById('inSoNguyenTo').onclick = function(a) {a.preventDefault()
    n = document.getElementById('inputN2').value;
    e = "";
    for(var a = 2; a <= n ; a++){
        var check = kiemTraSONguyenTo(a);
        if(check === true){
            e += a + ' ';
        }
    }
    document.getElementById('txtResult7').innerHTML = e;
}
function kiemTraSONguyenTo(b){
    var check = true;
    for( var uoc = 2 ; uoc <= b / 2; uoc++ ){
        if( b % uoc == 0){
            check = false;
            break;
        }
    }
    return check;
}
   