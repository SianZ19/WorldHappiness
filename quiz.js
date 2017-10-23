document.addEventListener("DOMContentLoaded",function() {
  document.getElementById('submit').onclick = function() {
    var input1 = document.getElementById('input1').value;
    input1 = parseInt(input1);
    input1 = 7 - input1;
    var input2 = document.getElementById('input2').value;
    input2 = parseInt(input2);
    var input3 = document.getElementById('input3').value;
    input3 = parseInt(input3);
    var input4 = document.getElementById('input4').value;
    input4 = parseInt(input4);
    var input5 = document.getElementById('input5').value;
    input5 = parseInt(input5);
    input5 = 7 - input5;
    var input6 = document.getElementById('input6').value;
    input6 = parseInt(input6);
    input6 = 7 - input6;
    var input7 = document.getElementById('input7').value;
    input7 = parseInt(input7);
    var input8 = document.getElementById('input8').value;
    input8 = parseInt(input8);
    var input9 = document.getElementById('input9').value;
    input9 = parseInt(input9);
    var input10 = document.getElementById('input10').value;
    input10 = parseInt(input10);
    var input11= document.getElementById('input11').value;
    input11 = parseInt(input11);
    var input12= document.getElementById('input12').value;
    input12 = parseInt(input12);
    var input13= document.getElementById('input13').value;
    input13 = parseInt(input13);
    var input14= document.getElementById('input14').value;
    input14 = parseInt(input14);
    var input15= document.getElementById('input15').value;
    input15 = parseInt(input15);
    var input16= document.getElementById('input16').value;
    input16 = parseInt(input16);
    var input17= document.getElementById('input17').value;
    input17 = parseInt(input17);
    var input18= document.getElementById('input18').value;
    input18 = parseInt(input18);
    var input19= document.getElementById('input19').value;
    input19 = parseInt(input19);
    var input20 = document.getElementById('input20').value;
    input20 = parseInt(input20);
    var input21 = document.getElementById('input21').value;
    input21 = parseInt(input21);
    var input22 = document.getElementById('input22').value;
    input22 = parseInt(input22);
    var input23 = document.getElementById('input23').value;
    input23 = parseInt(input23);
    var input24 = document.getElementById('input24').value;
    input24 = parseInt(input24);
    var input25 = document.getElementById('input25').value;
    input25 = parseInt(input25);
    var input26 = document.getElementById('input26').value;
    input26 = parseInt(input26);
    var input27 = document.getElementById('input27').value;
    input27 = parseInt(input27);
    var input28 = document.getElementById('input28').value;
    input28 = parseInt(input28);
    var input29 = document.getElementById('input29').value;
    input29 = parseInt(input29);
    input10 = 7 - input10;
    input13 = 7 - input13;
    input14 = 7 - input14;
    input19 = 7 - input19;
    input23 = 7 - input23;
    input24 = 7 - input24;
    input27 = 7 - input27;
    input28 = 7 - input28;
    input29 = 7 - input29;

    var total = input1 + input2 + input3 +input4+input5+input6+input7+input8+input9+input10+input11+input12+input13+input14+input15+input16+input17+input18+input19+input20+input21+input22+input23+input24+input25+input26+input27+input28+input29;
    var mark = total/29;

    function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
    }

    mark = roundToTwo(mark);

    document.getElementById("resultModalLabel").innerHTML = "Your Happiness Score: " + mark;

    if (mark <= 2){
      document.getElementById("explainresult").innerHTML = "1-2 : Not happy. If you answered honestly and got a very low score, you’re probably seeing yourself and your situation as worse than it really is. We recommend taking the Depression Symptoms test (CES-D Questionnaire) at the University of Pennsylvania’s “Authentic Happiness” Testing Center. You’ll have to register, but this is beneficial because there are a lot of good tests there and you can re-take them later and compare your scores.";
    }
    else if (mark <= 3) {
      document.getElementById("explainresult").innerHTML = "2-3 : Somewhat unhappy. Try some of the exercises on this site like the Gratitude Journal & Gratitude Lists, or the Gratitude Visit; or take a look at the “Authentic Happiness” site mentioned immediately above. ";
    }
    else if (mark < 4) {
      document.getElementById("explainresult").innerHTML = "3-4 : Not particularly happy or unhappy. A score of 3.5 would be an exact numerical average of happy and unhappy responses. Some of the exercises mentioned just above have been tested in scientific studies and have been shown to make people lastingly happier. ";
    }
    else if (mark == 4) {
      document.getElementById("explainresult").innerHTML = "4 : Somewhat happy or moderately happy. Satisfied. This is what the average person scores. ";
    }
    else if (mark <= 5) {
      document.getElementById("explainresult").innerHTML = "4-5 : Rather happy; pretty happy. Check other score ranges for some of my suggestions. ";
    }
    else if (mark < 6) {
      document.getElementById("explainresult").innerHTML = "5-6 : Very happy. Being happy has more benefits than just feeling good. It’s correlated with benefits like health, better marriages, and attaining your goals. Check back – I’ll be writing a post about this topic soon. ";
    }
    else if (mark == 6) {
      document.getElementById("explainresult").innerHTML = "6 : Too happy. Yes, you read that right. Recent research seems to show that there’s an optimal level of happiness for things like doing well at work or school, or for being healthy, and that being “too happy” may be associated with lower levels of such things. "
    }

  };
});
