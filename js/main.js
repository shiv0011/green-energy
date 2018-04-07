(function () {
    let cont = document.querySelector(".content article");
    const btns = document.querySelectorAll(".buttons button");

    const resource = {
        hydro: {
            headingContent: "Hydro",
            bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus orci sit amet fringilla egestas. Cras purus purus, mattis a ipsum ut, efficitur ultricies ipsum. Quisque ullamcorper velit sit amet purus venenatis, sit amet gravida libero auctor. Nulla sit amet dolor eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas in lacus maximus, aliquet nunc sed, mollis sapien.",
            imgUrl: "./img/hydro.png",
            imgAlt: "hydro"
        },

        solar: {
            headingContent: "Solar",
            bodyText: "Mauris iaculis vestibulum enim, non molestie lectus. Quisque et augue mattis, ullamcorper velit et, vehicula arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sit amet dolor eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas in lacus maximus, aliquet nunc sed, mollis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus orci sit amet fringilla egestas. Cras purus purus, mattis a ipsum ut, efficitur ultricies ipsum. Quisque ullamcorper velit sit amet purus venenatis, sit amet gravida libero auctor. Nulla sit amet dolor eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas in lacus maximus, aliquet nunc sed, mollis sapien.",
            imgUrl: "./img/solar.png",
            imgAlt: "solar"
        },

        wind: {
            headingContent: "Wind",
            bodyText: "Nulla sit amet dolor eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas in lacus maximus, aliquet nunc sed, mollis sapien. Nulla sit amet dolor eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas in lacus maximus, aliquet nunc sed, mollis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus orci sit amet fringilla egestas. Cras purus purus, mattis a ipsum ut, efficitur ultricies ipsum. Quisque ullamcorper velit sit amet purus venenatis, sit amet gravida libero auctor. Nulla sit amet dolor eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas in lacus maximus, aliquet nunc sed, mollis sapien.",
            imgUrl: "./img/wind.png",
            imgAlt: "wind"
        }
    };

    
    function loadContent(ev) {
        
        let clickedBtn = ev.target;
        let key = clickedBtn.getAttribute("data-content");

        for (let i = 0; i < btns.length; i++) {
            if (btns[i].hasAttribute("id")) {
                btns[i].removeAttribute("id");
            }
        } 
        clickedBtn.setAttribute("id", "active-button");


        

        cont.innerHTML = `<h1>${resource[key].headingContent}</h1>
                          <img src="${resource[key].imgUrl}" alt="${resource[key].imgAlt}">
                          <p class="info">${resource[key].bodyText}</p>`;
    }

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", loadContent);
    }

}());
