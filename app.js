
const FristMenuli1 = document.querySelector('.FristMenuli1')
isvisibla1 = false

FristMenuli1.addEventListener("click", function(){
    const CategorisDropdrown = document.querySelector('.CategorisDropdrown')
    if(!isvisibla1){
        CategorisDropdrown.style.display = 'block'
        isvisibla1 = true
    }else{
        CategorisDropdrown.style.display = 'none'
        isvisibla1 = false
    }
});

const FristMenuli2 = document.querySelector('.FristMenuli2')
isvisibla2 = false

FristMenuli2.addEventListener("click", function(){
    const Categoris2Dropdrown = document.querySelector('.Categoris2Dropdrown')
    if(!isvisibla2){
        Categoris2Dropdrown.style.display = 'block'
        isvisibla2 = true
    }else{
        Categoris2Dropdrown.style.display = 'none'
        isvisibla2 = false
    }
});


const faBars = document.querySelector('.fa-bars')
isvisibla3 = false

faBars.addEventListener("click", function(){
    const FristMenu = document.querySelector('.FristMenu')

    const CategorisDropdrown = document.querySelector('.CategorisDropdrown')
    const Categoris2Dropdrown = document.querySelector('.Categoris2Dropdrown')
    CategorisDropdrown.style.display = 'none'
    Categoris2Dropdrown.style.display = 'none'
    isvisibla1 = false
    isvisibla2 = false

    if(!isvisibla3){
        FristMenu.style.display = 'block'
        isvisibla3 = true
    }else{
        FristMenu.style.display = 'none'
        isvisibla3 = false
    }
});
