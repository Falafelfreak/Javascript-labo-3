const setup = ()=>{
    let sliders = document.getElementsByClassName("slider");

    for(let i = 0;i < sliders.length;i++) {
        sliders[i].addEventListener("change", update);
    }
}

const update = ()=> {
    let rood = document.getElementById("rood").value;
    let groen = document.getElementById("groen").value;
    let blauw = document.getElementById("blauw").value;
    let vierkant = document.getElementsByClassName("vierkant");
    vierkant[0].style.backgroundColor = "rgb("+ rood + "," + groen + "," + blauw + ")";
}

window.addEventListener("load", setup);