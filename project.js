$('#submit').click(function() {
    window.location.href = 'pege2.html';
})

$(document).ready(function(){
    var correctAnswers=["10","snake","Animal","E","4","12","Appel","Enveloppe","3","Anxious"]
    $('#submit').click(function(){
        var score=0
        for(var i =0 ;i<correctAnswers.length;i++){
            var checkedAnswers=$('input[name="q' +(i+1)+ '"]:checked').val()
            if (checkedAnswers===correctAnswers[i]) {
                console.log(score);
                
                score=score+10
            }
        }

        
    })
   
})
$('#score').text('YOU SCORE IS:' + score +'%')





