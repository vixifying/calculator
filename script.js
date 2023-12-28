function display(val){
    document.getElementById('result').value ==='ERROR' && clr()
    document.getElementById('result').value +=val
    document.getElementById('result').style.color = "white"
}

function equate(){
    try{

        let val = document.getElementById('result').value
        let res = eval(val)
        document.getElementById('result').value = res
    }
    catch(err){
        document.getElementById('result').value = 'ERROR'
        document.getElementById('result').style.color = "red"
    }
}
function clr(){
    document.getElementById('result').style.color = "white"
let res = document.getElementById('result').value = ''
}