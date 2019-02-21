var anwser
var counter
function start() {
    resetText()
    document.getElementById('output').innerHTML = "   I'm thinking of a number between 0 and 100. Guesser my number, and I'll tell if you are too high, too low, or correct"
    document.getElementById('tryAgain').style.display = 'none'
    counter = 0
    anwser = parseInt(Math.random() * 100)
    document.getElementById('Guesser').focus()
    document.getElementById ('check') .style.display = "block"
    
    console.log("start game ! a anwer is : " + anwser)
}
function CheckGuesser() {
    var num = document.getElementById('Guesser').value
    console.log(num)
    if(num == ''){
        document.getElementById('output').innerHTML = "Enter a number"
    }
    else if (num == anwser) {
        resetText()
        counter ++
        message('correct')
        document.getElementById ('check') .style.display = "none"
        document.getElementById ('tryAgain') .style.display = "block"
        
    } else if (num > anwser) {
        resetText()
        counter ++
        message('Too high')
   } else {
        resetText()
        counter ++
        message('Too low')
      }
}


function resetText() {
    document.getElementById('Guesser').value = ""
}

function message (message) {
    document.getElementById('output').innerHTML ='Turn' +  counter + " : "+message
}

