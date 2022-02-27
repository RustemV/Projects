window.addEventListener("DOMContentLoaded", () => {

    const btn = document.querySelector(".promo_btn");

    console.log(btn);
    btn.addEventListener("click", hello);
    function hello () {
        alert("Запись закончилась :(");
    }

});
