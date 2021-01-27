// login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display="none";
    
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display="block";
})

// deposit button event handler
const depositbtn=document.getElementById("addDeposit")
depositbtn.addEventListener("click",function(){
    const depositAmount= document.getElementById("deposit-amount").value
    const depositNumber=parseFloat(depositAmount);

    // const currentDeposit = document.getElementById("current-deposit").innerText
    // const currentDepositnumber=parseFloat(currentDeposit);
    // const totalDeposit=depositNumber+currentDepositnumber;
    // document.getElementById("current-deposit").innerText=totalDeposit;
    updateSpanText("current-deposit",depositNumber);
   

    // const currentBalance = document.getElementById("current-balance").innerText
    // const currentBalanceNumber= parseFloat(currentBalance);
    // const totalBalance=depositNumber+currentBalanceNumber;
    // document.getElementById("current-balance").innerText=totalBalance;
    updateSpanText("current-balance",depositNumber);

    document.getElementById("deposit-amount").value="";

    
})

// withdraw button event handler
const withdrawBtn=document.getElementById("addWithdraw")
withdrawBtn.addEventListener("click",function(){
    const withdrawAmount = document.getElementById("withdraw-amount").value
    const withdrawNumber=parseFloat(withdrawAmount)

    // const currentWithdraw= document.getElementById("current-withdraw").innerText
    // const currentWithdrawNumber=parseFloat(currentWithdraw);
    // const totalWithdraw= withdrawNumber+currentWithdrawNumber;
    // document.getElementById("current-withdraw").innerText=totalWithdraw;
    updateSpanText("current-withdraw",withdrawNumber)

    // const currentBalance = document.getElementById("current-balance").innerText
    // const currentBalanceNumber= parseFloat(currentBalance);
    // const totalBalance=currentBalanceNumber-withdrawNumber;
    // document.getElementById("current-balance").innerText=totalBalance;
    updateSpanText("current-balance",-1*withdrawNumber)


    document.getElementById("withdraw-amount").value="";
})











function updateSpanText(id,depositNumber){
    const current = document.getElementById(id).innerText
    const currentNumber= parseFloat(current);
    const totalAmount=depositNumber+currentNumber;
    document.getElementById(id).innerText=totalAmount;
}

