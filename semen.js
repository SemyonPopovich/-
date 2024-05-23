function loadAllItemInBasket() {
    let storage = window.sessionStorage;
    let main_content = document.getElementById("product-cards");
    for(let key in storage) {
        if (!storage.hasOwnProperty(key)) {
          continue; 
        }
        main_content.innerHTML += "<div class='card'>" + storage.getItem(key) + `<p style="text-align: left">Оценить: </p><div class="stars" id="stars1">
        <span class="star" onclick="changeStars('stars1', 1)">★</span>
        <span class="star" onclick="changeStars('stars1', 2)">★</span>
        <span class="star" onclick="changeStars('stars1', 3)">★</span>
        <span class="star" onclick="changeStars('stars1', 4)">★</span>
        <span class="star" onclick="changeStars('stars1', 5)">★</span>

        <div class="delete">
            <a href="#"><img src="img/trashcan.png" alt=""></a>
        </div>
    </div></div>`
    document.getElementById("clearBask").style.display = "block";
    }
}

try {

    baskets = document.getElementsByClassName("icon-img");

    for (let i = 0; i < baskets.length; i++) {
        baskets[i].addEventListener("click", (obj) => {
            let random_id = "object_" + Math.floor(Math.random() * 100);
            sessionStorage.setItem(random_id, obj.target.parentElement.parentElement.parentElement.innerHTML);
        });
    }
} catch {}

document.getElementById("clearBask").addEventListener("click", () => {
    let main_content = document.getElementById("product-cards");
    main_content.innerHTML = "";
    sessionStorage.clear();
    document.getElementById("clearBask").style.display = "none";
    alert("Майкл Джордон попал в корзину и она пропала");
});

loadAllItemInBasket();