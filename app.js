function getInnerText(fildId){
    const fildTag=document.getElementById(fildId);
    const fildText=fildTag.innerText;
    const valu=parseFloat(fildText);
    return valu;
}

function getIntoValu(fildId){
    const inputFild=document.getElementById(fildId);
    const inputValue=inputFild.value;
    const value=parseFloat(inputValue);
    inputFild.value='';
    return value;
}

function updateTotal(textId,amount){
    const priviusTextValu=getInnerText(textId);
    const newFildText=priviusTextValu+amount;
    document.getElementById(textId).innerText=newFildText;
}

function updateBlance(amount,add){ 
    const balaceValu=getInnerText('totalBlance');
    let updateBlance;
    if(add==true){
        updateBlance=balaceValu+amount;
    }
    else{
        updateBlance=balaceValu-amount;
    }
    document.getElementById('totalBlance').innerText=updateBlance;
}
// deposite btn
document.getElementById('diposittBtn').addEventListener('click',function(){
    const amount=getIntoValu('depositInput');
    if(amount>0){
        updateTotal('totalDiposit',amount)
        updateBlance(amount,true);
    }
})
// widrow btn
document.getElementById('witdrawBtn').addEventListener('click',function(){
    const amount=getIntoValu('withdrawInput');
    const balace=getInnerText('totalBlance');
    if(amount>0 && amount<=balace){
        updateTotal('widrawTotal',amount)
        updateBlance(amount,false);
        }
})