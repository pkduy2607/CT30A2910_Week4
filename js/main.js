const form = document.querySelector("form");
const submitButton = document.getElementById("submit-data");
const container = document.querySelector(".show-container");

submitButton.addEventListener("click", async (event) => {
    event.preventDefault();
    container.innerHTML = "";

    const formData = new FormData(form);
    const showName = formData.get("showname");
    //console.log(showName);

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${showName}`);
    const data = await response.json();

    console.log(data);
    data.forEach(item => {
        const showData = document.createElement("div");
        showData.className = "show-data";
        
        const img = document.createElement("img");
        img.src = item.show.image.medium;
        showData.appendChild(img);

        const showInfo = document.createElement("div");
        showInfo.className = "show-info";
        
        const h1 = document.createElement("h1");
        h1.innerText = item.show.name;
        showInfo.appendChild(h1);
        
        const p = document.createElement("p");
        p.innerHTML = item.show.summary;
        showInfo.appendChild(p);

        showData.appendChild(showInfo);
        container.appendChild(showData);
    });
    
});
