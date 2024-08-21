
$(document).ready(function(){
    var correctAnswers=["10","snake","Animal","E","4","12","Appel","Enveloppe","3","Anxious"]
    $('#sumit').click(function(){
        var score=0
        for(var i =0 ;i<correctAnswers.length;i++){
            var checkedAnswers=$('input[name="q' +(i+1)+ '"]:checked').val()
            console.log(checkedAnswers);
            
            if (checkedAnswers===correctAnswers[i]) {
                
                score=score+10
            }
        }

        console.log(score);
        $('#score').text('YOU SCORE IS:' + score +'%')
        
    })
    $('#a').show()
})







