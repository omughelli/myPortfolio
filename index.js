function displayNavigation(){
    let displayNavigation = document.getElementById('displayNavigation');
    let navigation = document.querySelector('nav');
    let navigationDownArrow = document.querySelector('.sort-down');
    let navigationUl = document.querySelector('.navigationUl');
    displayNavigation.addEventListener('click', function(){
        if(navigation.style.display === "block"){
            navigation.style.display = "none";
        }
        else{
            navigation.style.display = "block";
        }
        
    })
    navigationDownArrow.addEventListener('click', function(){
        if(navigationUl.style.display === "block"){
            navigationUl.style.display = "none";
        }
        else{
            navigationUl.style.display = "block";
        }
    })
    let navigationDownArrow2 = document.getElementById('sort-down');
    let navigationUl2 = document.querySelector('#navigationUl');
    navigationDownArrow2.addEventListener('click', function(){
        if(navigationUl2.style.display === "block"){
            navigationUl2.style.display = "none";
        }
        else{
            navigationUl2.style.display = "block";
        }
    })
}
displayNavigation();

function displayForm(){
    let howMayWeBeOfHelp = document.getElementById('how_we_be_of_help');
    let form = document.querySelector('#form');
    let requestQoute = document.getElementById('requestQuoteButton');
    let cancel = document.getElementById('cancelForm');

    howMayWeBeOfHelp.addEventListener('click', function(){
        if(form.style.display === "block"){
            form.style.display = "none";
            
        }
        else{
            form.style.display = "block";
        }
    })

    cancel.addEventListener('click', function(){
        form.style.display = "none";
    })
    requestQoute.addEventListener('click', function(){
        if(form.style.display === "block"){
            form.style.display = "none";
            
        }
        else{
            form.style.display = "block";
        } 
    })
    if(document.body.style.scrollTop > 100){
        requestQoute.style.display = "none";
    }
    else{
        requestQoute.style.display = "block";
    }
}
displayForm();

function learnMore(){
    let learnMoreButton = document.querySelector('.learn_more_about_us');
    let aboutText = document.getElementById('about_text_no_display');
    let pOfAbout = document.querySelector('#pTag');
    learnMoreButton.addEventListener('click', function(){
        if(aboutText.style.display === "block"){
            aboutText.style.display = "none";
            pOfAbout.textContent = 'Click the button below to learn more...';
        }
        else{
            aboutText.style.display = "block";
            pOfAbout.textContent = '';
        }
    })
}
learnMore();