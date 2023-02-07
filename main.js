function getVal() {
    //INPUT
    const money = document.getElementById("dollar").value;
    

    //MATH
    let cents = money * 100;
    let nickels = cents / 5;
    let dime = cents / 10;
    let quarter = cents / 25;

    //OUTPUT
    document.getElementById("cents").innerHTML = cents;
    document.getElementById("pennies").innerHTML = cents;
    document.getElementById("nickel").innerHTML = nickels;
    document.getElementById("dime").innerHTML = dime;
    document.getElementById("quarter").innerHTML = quarter;
}