var ssqScore = 0;
function calcscore(){
    $(".ssq.active").each(function(){
        ssqScore+=parseInt($(this).find("input").val());
    });
}

$('#calc').click(function() {
    calcscore();
    console.log(ssqScore);
    if (ssqScore > 120) {
        $('#calc').attr('href','../overtwelve.html');
        console.log(">120");
    }
    else if (ssqScore < 80) {
        $('#calc').attr('href','../undereight.html');
        console.log("<80");
    }
    else {
        $('#calc').attr('href','../baseline1.html');
        console.log("8-11");
    }
});
