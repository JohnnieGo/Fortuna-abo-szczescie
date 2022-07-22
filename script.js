 const body = document.querySelector('#body')
 const changeFont = document.querySelector('.changeFont');
 const goToAuguryList = document.querySelector('.buttonToAuguryList');
 const wheel = document.querySelector('.wheel');
 const startButton = document.querySelector('.buttonSpin');
 const goButton = document.querySelector('.goButton')
 const displayMessage = document.querySelector('.displayMessage');
//  const displayNumber = document.querySelector('.displayNumber');
 const goToSecondWheelScreen = document.querySelector('.goToSecondWheelScreen');
 const clickCharacterText = document.querySelector('#clickCharacterText');
 const SecondWheelScreenGoBack = document.querySelector(`.SecondWheelScreenGoBack`);
 const characterImage = document.querySelector('#characterImage');
 const animalWheel = document.querySelector('#secondWheel');
 const displayAuguryCoordinates = document.querySelector('#displayAuguryCoordinates');
 const clickOnAnimal = document.querySelector('#clickOnAnimal');
 const firstScreenH1 = document.querySelector('#firstScreenTitles');
 const insertAuguryText = document.querySelector('#auguryText');
 const menuBtn = document.querySelector('#menu')
 const showMenu = document.querySelector('#menuScreen')
 const menuTopLine = document.querySelector('#menuTopLine')
 const menuMiddleLine = document.querySelector('#menuMiddleLine')
 const menuBottomLine = document.querySelector('#menuBottomLine')
 const inMenuContent = document.querySelector('.inMenuContent')
 const secondMenuContent = document.querySelector('#secondMenuContent')
 const sybillaPicture = document.querySelector('#sybillaPicture')
 const sybillaName = document.querySelector('#sybillaName')
 const dmuch1 = document.querySelector('#dmuch1')
 const goBackInfo = document.querySelector('#goBackInfo')
 const opisPostaci = document.querySelector('#opisPostaci')
 const heartEmpty = document.querySelector("#heartEmpty")
 const heartFull = document.querySelector("#heartFull")
 const sybillaPictureDiv = document.querySelector("#sybillaPictureDiv")
//  const usuń = document.querySelector('#clear')
 const tekstUlubionejWróżby = document.querySelector(".ulubioneWróżby1")
 const checkBox = document.querySelector('.checkBox')
 const checkBoxEmpty = document.querySelector('#checkBoxEmpty')
 const checkBoxFull = document.querySelector('#checkBoxFull')
 const przejdźDoWróżb = document.querySelector('#przejdźDoWróżb')
 const zeroScreen = document.querySelector('#zeroScreen')
 const fortunaZero = document.querySelector('#fortunaZero')
 const section0 = document.querySelector('#section0')

 // przyciski menu
 const zasadyGry = document.querySelector('#zasadyGry')
 const oAplikacji = document.querySelector('#oAplikacji')
 const oFortunie = document.querySelector('#oFortunie')
 const odAutora = document.querySelector('#odAutora')
 const ulubioneWróżby = document.querySelector('#ulubioneWróżby')
 const drzeworyty = document.querySelector('#drzeworyty')
 const wróćDoPoczątku = document.querySelector('#wróćDoPoczątku')
 const menuSecondContent = document.querySelector('#menuSecondContent')
 const goBackDiv = document.querySelector('#goBackDiv')

let numbersCheck = 0
let checkFirstScreenTrue = 0

//menu
menuBtn.addEventListener('click',() => {
    if (showMenu.style.display === "none"){
        showMenu.style.display = "flex";
        showMenu.classList.add('menuScrollUp')
        showMenu.classList.remove('menuScrollDown')
        menuTopLine.classList.add('menuTopLineTransition');
        menuMiddleLine.classList.add('menuMiddleLineTransition');
        menuBottomLine.classList.add('menuBottomLineTransition');

    } else {
        showMenu.classList.add('menuScrollDown')
        showMenu.classList.remove('menuScrollUp')
        menuTopLine.classList.remove('menuTopLineTransition');
        menuMiddleLine.classList.remove('menuMiddleLineTransition');
        menuBottomLine.classList.remove('menuBottomLineTransition');
        setTimeout (function () {
            showMenu.style.display = "none";
            menuSecondContent.style.display = "none";
            removeAllChildNodes(tekstUlubionejWróżby);
            secondMenuContent.style.display = "flex"
            }, 900);
    }
    tekstUlubionejWróżby.style.display = "none";
});

if (localStorage.getItem('checkFirstScreenTrue') === "1"){
    zeroScreen.remove()
    console.log("równa się 1")
}else{
    console.log("równa się 0")
}

isCheckBoxFull = false;

checkBoxEmpty.addEventListener('click', () => {
    checkBoxEmpty.style.display = "none";
    checkBoxFull.style.display = "block";
    isCheckBoxFull = true;
    console.log(isCheckBoxFull);
});

checkBoxFull.addEventListener('click', () => {
    checkBoxFull.style.display = "none";
    checkBoxEmpty.style.display = "block";
    isCheckBoxFull = false
    console.log(isCheckBoxFull)
});

// fortunaZero.addEventListener('click', () => {

//     section0.scroll({ 
//         top: section0.scroll(0, 90 * window.innerHeight/100),
//         behavior: 'smooth', 
//       });
//       console.log("aaa");
// });


var elem = document.getElementById("zasadyZabawy");


var topPos = elem.offsetTop

fortunaZero.onclick = function () {
    console.log('click')
  scrollTo(document.getElementById('section0'), topPos-30, 90 * window.innerHeight/100);   
}
    
function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        
    var animateScroll = function(){        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};





przejdźDoWróżb.addEventListener('click', () => {
    if (isCheckBoxFull === true){
        localStorage.setItem('checkFirstScreenTrue', JSON.stringify(1));
    }else{
    console.log("Ok1.")};
    document.getElementById("firstScreen").scrollIntoView();
});

wróćDoPoczątku.addEventListener('click', () => {
    resetValues();
    showMenu.classList.add('menuScrollDown');
    showMenu.classList.remove('menuScrollUp');
    menuTopLine.classList.remove('menuTopLineTransition');
    menuMiddleLine.classList.remove('menuMiddleLineTransition');
    menuBottomLine.classList.remove('menuBottomLineTransition');
    setTimeout (function () {
        showMenu.style.display = "none";
        }, 900);
    console.log(localStorage.getItem('checkFirstScreenTrue'))
});

sybillaPicture.addEventListener('click', () => {
    resetValues()
});


changeFont.addEventListener('click',() => {
    if (body.style.fontFamily == "unifrakturmaguntiabook"){
        body.style.fontFamily = "beryliumregular";
        body.style.lineHeight = "1.1";
        // body.classList.add("modernFontProprties");
        // body.classList.remove("frakturFontProperties");
        tekstUlubionejWróżby.classList.add("modernFontProprties");
        tekstUlubionejWróżby.classList.remove("frakturFontProperties");
        insertAuguryText.classList.add("modernFontProprties");
        insertAuguryText.classList.remove("frakturFontProperties"); 
        opisPostaci.classList.add("modernFontProprties");
        opisPostaci.classList.remove("frakturFontProperties");
        changeFont.innerHTML = "<u>Zmień krój na frakturę</u>";
        changeFont.style.fontSize = "22px"
        changeFont.style.fontFamily = "unifrakturmaguntiabook";
    } else {
        body.style.fontFamily = "unifrakturmaguntiabook";
        // body.classList.add("frakturFontProperties");
        // body.classList.remove("modernFontProprties");
        tekstUlubionejWróżby.classList.remove("modernFontProprties");
        tekstUlubionejWróżby.classList.add("frakturFontProperties");
        insertAuguryText.classList.remove("modernFontProprties");
        insertAuguryText.classList.add("frakturFontProperties");
        opisPostaci.classList.remove("modernFontProprties");
        opisPostaci.classList.add("frakturFontProperties");
        changeFont.innerHTML = "<u>Zmnień krój na antykwę</u>";
        changeFont.style.fontFamily = "beryliumregular";
        changeFont.style.fontSize = "18px"
    }
});

function showSecondMenu (){
    menuSecondContent.style.display = "flex"
}

function hideSecondMenu (){
    menuSecondContent.style.display = "none"
}

document.querySelectorAll('.menuItem').forEach(item => {
    item.addEventListener('click', event => {
        showSecondMenu()
        menuSecondContent.classList.add('menuScrollLeft')
        menuSecondContent.classList.remove('menuScrollRight')
    })
});

goBackDiv.addEventListener ('click', event => {
    menuSecondContent.classList.add('menuScrollRight')
    menuSecondContent.classList.remove('menuScrollLeft')
    setTimeout (function () {
        menuSecondContent.style.display = "none";
        removeAllChildNodes(tekstUlubionejWróżby);
        secondMenuContent.style.display = "flex";
        tekstUlubionejWróżby.style.display = "none";
        }, 800);
});

function removeAllChildNodes(parent) {
    // ulubioneWróżby1.style.display = "none";
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }};

zasadyGry.addEventListener ('click', event => {
    removeAllChildNodes(secondMenuContent);
    secondMenuContent.innerHTML = '<img src="nauka.png" style="width: 98%"><div>Gracz na początku wybiera jedną z 21 wróżb, a następnie jest kierowany do koła fortuny. By zakręcić kołem, należy kliknąć przycisk "Zakręć". Po zakręceniu koła pojawia się ekran z postacią, na którą należy nacisnąć, by przejść dalej. Kolejne koło obraca się automatycznie, by poznać wróżbę, należy nacisnąć w tarczę koła.</div>';
});


oAplikacji.addEventListener ('click', event => {
    removeAllChildNodes(secondMenuContent)
    secondMenuContent.innerHTML += '<img src="dmuchacz.png"><div>Niniejsza aplikacja jest próbą przeniesienia do świata wirtualnego pochodzącego z lat ok. 1561–1577 <a target="_blank" href="https://www.digitale-sammlungen.de/en/view/bsb00117329?page=1,2" >wydania książki</a> do wróżb Stanisława z Bochnie. Mechanika rozgrywki zaproponowana przez XVI wiecznego twórcę pozostała niezmieniona, gracz dalej wybiera jedno z 21  pytań, a następnie przechodzi przez kolejne etapy do przepowiedni. Jednak zamiast rzucać fizycznymi kośćmi, powierza swój los cyberbogini, która obraca koło fortuny w wybrane przez siebie miejsce.<br><br>Projekt aplikacji nawiązuje do krakowskiego wydania <i>Fortuny albo szczęścia</i>, które zdigitalizowane zostało przez Bayerische Staatsbibliothek. Tła stanowią oryginalne karty edycji Drukarni Łazarzowej, elementy interfejsu zbudowane są z wykorzystanych przez Łazarza Andrysowicza drzeworytów, obydwa fonty występujące w apliakcji: UnifrakturMaguntia i Berylium nawiązują do dawnych krojów pisma.<br><br>Zmodernizowany tekst przepowiedni, pytania oraz nazwy osób i miejsc podane zostały za wspomnianym wydaniem. Pokuszono się o przybliżenie postaci ujętych na drzeworytach i wyjaśnienie kontekstu, jaki wprowadzają. Wszystkie informacje o oryginalnej <i>Fortunie</i> podawane są za wydaniem <a target="_blank" href="https://ksiegarnia.pwn.pl/Fortuna-albo-szczescie,130842766,p.html"><i>Fortuny</i> autorstwa prof. Justyny Kiliańczyk-Zięby</a>.<br><br>Historię powstania aplikacji prześledzić można w <a>serwisie Behance.net</a><br><br>Dziękuję wszystkim, którzy pomogli mi w tym projekcie, szczególnie moim siostrom i mojej Laurce.<br><br>Jan Żaborowski 2022<br><a href="mailto:zaborowski.janko@gmail.com">zaborowski.janko@gmail.com</a></div>'
});

odAutora.addEventListener ('click', event => {
    removeAllChildNodes(secondMenuContent)
secondMenuContent.innerHTML = '<img src="nauka.png" style="width: 98%"><h2 style="padding-bottom: 15px">Wprowadzające teksty Stanisława z Bochnie</h2><h4>Nauka szukania w tych księgach</h4><div>Kto będzie chciał mieć krotofilę na tych księgach, patrzajże napisów nad pierwszymi koły, które są z kostkami, a ptaki we śrzodku mają. O czym będzie napis nad którym kołem, o to mieć dwiema kostkami na onymże kole, a tam któryć szanc na dwu kostkach stanie, ten w kole najdziesz i przeczćiesz, co napisano przeciwko onemu szancowi. Tedyć ukaże do drugich kół, które są z zwierzęty, szukać któregokolwiek miasteczka. Tam, gdy je najdziesz, przeczci, co przeciwko onemu miasteczku napisano, tedyć zaś ukaże do Sybille którejkolwiek, wiersz którykolwiek, a tam się dowiesz, co się w tej rzeczy stanie, o którąś miotał. Na przykład: jeśli chcesz wiedzieć, długo li żyw będziesz, rzućże dwiema kostkami na kole, w którym jest gąsiorek. Jeśli zezy staną, tedy idź do koła, na którym jest sobol, a szukaj miasta Bochnie, potym idź do Sybile pierwszej (boć tam ukaże), przeczćisz wiersz pierwszy,  tak się dowiesz, długo li żyw masz być. Tymże też obyczajem insze rzeczy, mietając, sprawować będziesz. A pamiętaj, każdy, cóżcikolwiek na tych książkach stanie, bądź dobrze, bądź źle, abyś tey nie wierzył, ale to miał za krotofilę a za śmiech.</div><h4>Każdemu, który tych książek używać ku krotofili będzie </h4><div id="wierszOdAutora" class ="modernFontProprties">Aby każdy wiedzieć o tym raczył,<br/>Którykolwiek ty książki będzie baczył,<br/>Iż prze krotofile są złożone, <br/>Od Stanisława z Bochnie wymyślone.<br/>Nie trzeba w nich nadzieje pokładać,<br/>Choć komu dobrze będzie przypadać,<br/>Bo miejsca nie mają gusła, czary<br/>Między ludźmi krześcijańskej wiary.<br/>A jeśli też komu co śmiesznego stanie,<br/>Nie mów: „Bodaj zabić za twoje składanie”.</div>'
});


oFortunie.addEventListener ('click', event => {
    removeAllChildNodes(secondMenuContent)
secondMenuContent.innerHTML = '<img src="dmuchacz.png"><div>Stanisław z Bochnie, zwany też Stanisławem Kleryką, był polskim renesansowym poetą. Pochodził ze średniozamożnej rodziny mieszczańskiej. Od 1519 roku odbywał studia wyższe na Akademii Krakowskiej, gdzie najprawdopodobniej zetknął się z twórczością autorów takich jak: Andrzej Frycz Modrzewski, Mikołaj Rej, Stanisław Hozjusz. Od 1529 roku związał się z dworem królewskim Zygmunta Starego, szybko robiąc karierę. Według niektórych, np. prof. Henryka Barycza, to właśnie Stanisławowi z Bochnie powinno przysługiwać miano ojca nowożytnej literatury polskiej. Do dziś jednak zachowało się jednak bardzo niewiele utworów poety.</br>Jednym z kilku dzieł, które dotarły do naszych czasów, jest właśnie <i>Fortuna</i>. Jej pierwodruk miał miejsce najprawdopodobniej ok. roku 1531, nie znamy jednak żadnego jego fragmentu. Książka ta wpisuje się w nurt literatury wróżbiarskiej, której tradycja sięga aż do czasów antycznych i która osiągnęła niezwykłą popularność w średniowieczu. Świadczą o tym wielokrotne wznowienia <i>Fortuny</i>, które szybko zaczytywano. Zabawne przepowiednie czytali zarówno mieszanie, jak i rzemieślnicy mieszkający z dala od miast, kobiety, jak i mężczyźni. Była to jedna z pierwszych książek skierowanych do szerokiej publiczności oraz jedna z pierwszych książek w całości napisanych w języku polskim.</br>Po więcej informacji o tej arcyciekawej książce zapraszam do <a target="_blank" href="https://pressto.amu.edu.pl/index.php/b/article/download/27954/28187">artykułu prof. Justyny Kiliańczyk-Zięby</a> oraz do wydania <i>Fortuny</i> w jej opracowaniu (Kraków, 2015).</div>'
});



// koniec menu



function resetValues (){
    document.getElementById("firstScreen").scrollIntoView();
    displayMessage.innerHTML = "";
    // displayNumber.innerHTML = "-";
    winningSymbolNr=0;
    deg=0;
    actualDeg=0;
    degAnim=0;
    goToSecondWheelScreen.style.display = "none"
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    wheel.style.transition = 'none';
    startButton.style.pointerEvents = 'auto';
    displayAuguryCoordinates.innerHTML = '';
    displayAuguryCoordinates.style.display = 'none';
    clickOnAnimal.innerHTML="";
    clickOnAnimal.style.display="none";
    setTimeout (function () {
        sybillaName.style.display = "none";
        sybillaPictureDiv.style.display = "none";          
        insertAuguryText.style.display = "none";
        goBackInfo.style.display = "none";
        sybillaPicture.src = "";
        sybillaName.innerHTML = "";
        insertAuguryText.innerHTML="";
        }, 300);
}

goToAuguryList.addEventListener('click',() => {
    resetValues();
});

function getWheel(wheelNumber){
    document.getElementById("imageid").src=`wheels/wheelcut${wheelNumber}.png`;
    currentWheelSelected = wheelNumber;
    document.getElementById("secondScreen").scrollIntoView();
    displayMessage.innerHTML = "-";
    winningSymbolNr=0;
    goToSecondWheelScreen.style.display = "none";
    firstScreenH1.innerHTML = firstScreenTitles[wheelNumber];
    
}


function przejdźDalejZLandingScreena(){
    document.getElementById("secondScreen").scrollIntoView();

}


(function wheelSpin() {

 
    let deg = 0;
    let zoneSize = 17.14285714285714; // deg


    const handleWin = (actualDeg) => {
        winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    }

    goButton.style.pointerEvents = 'none';


    startButton.addEventListener('click',() => {
        displayMessage.innerHTML = "-";
        startButton.style.pointerEvents = 'none';
        goButton.style.pointerEvents = 'none';
        deg = Math.floor(1000 + Math.random() * 2000);
        wheel.style.transition = 'all 2s ease';
        wheel.style.transform = `rotate(${deg}deg)`;
        dmuch1.style.display = "block";
    });

    wheel.addEventListener('transitionend', () => {
        wheel.style.transition = 'none';
        const actualDeg = deg % 360;
        wheel.style.transform = `rotate(${actualDeg}deg)`;
        handleWin(actualDeg);
        // Pokazanie numerów kości
        // displayNumber.innerHTML = symbolZones[winningSymbolNr];
        // Tekst z tarczy pierwszej;
        messageChoose = wheelText[currentWheelSelected][winningSymbolNr];
        displayMessage.innerHTML = messageChoose;
       // Zmiana tekstu w buttonie do przejścia do trzeciej sekcji
        clickCharacterText.innerHTML = `*<span class="element">Kliknij w obrazek</span> ${postaci[currentWheelSelected]}, by udać się do miasta`;
        //Pokaż bohatera
        characterImage.src = `characterPictures/characterPicture${currentWheelSelected}.png`;
        goButton.style.pointerEvents = 'auto';
        opisPostaci.innerHTML = `${opisyPostaci[currentWheelSelected]}`;
        // displayAugury.innerHTML = `${tekstTestowy1[currentWheelSelected][winningSymbolNr]}`;
        //Wyłapanie zwieręcia i miasta
        animalSplit = messageChoose.split(' ');
        animal = animalSplit[2];
        citySplit = messageChoose.split(' ');
        city = citySplit[4];

        currentCity=animalWheels[animal][city];
        document.getElementById("secondWheel").src=`animalWheels/${animal}.png`;

        setTimeout (function () {
            goToSecondWheelScreen.style.display = "flex";
            startButton.style.pointerEvents = 'auto';
            }, 1000);
        SecondWheelScreenGoBack.addEventListener('click',() => {
            goToSecondWheelScreen.style.display = "none";
            });
        });

        // Ekran 3
        characterImage.addEventListener('click',() => {
            animalWheel.style.pointerEvents = 'none';
            document.getElementById("thirdScreen").scrollIntoView();
        setTimeout (function () {
            degAnim = zoneSize*currentCity[1];
            animalWheel.style.transition = 'all 2s ease-out';
            animalWheel.style.transform = `rotate(${-degAnim}deg)`;
            }, 1500);
            console.log(currentCity[0]);
            animalWheel.style.cursor = "default";
        });

        animalWheel.addEventListener('transitionend', () => {
            animalWheel.style.pointerEvents = 'auto'
            animalWheel.style.cursor = "pointer"
            displayAuguryCoordinates.innerHTML=`${currentCity[0]}`;
            clickOnAnimal.innerHTML=`<span><span class="element">*Kliknij w tarczę</span> ${animal}, by przjeść do Sybilli i poznać swoją przyszłość</span>`;
            clickOnAnimal.style.display="flex";
            displayAuguryCoordinates.style.display = "flex";
            animalWheel.addEventListener('click',() => {
                document.getElementById("fourthScreen").scrollIntoView();
                //Wzięcie numerów Sybilli i wierszy
                sybillaSplit=currentCity[0].split(' ');
                sybillaNr=sybillaSplit[1];
                wierszNr=sybillaSplit[3];
                slicedSybillaNr=sybillaNr.slice(0,-1);
                slicedWierszNr=wierszNr.slice(0,-1);
                //Przygotowanie do ulubionch
                numbersCheck = (slicedSybillaNr + '-' + slicedWierszNr);
                zmieńSerce()

                

                //Pokazanie Diva z wróżbą i obrazka
                convertSybillaNr = sybillaNrConversion[slicedSybillaNr];
                sybillaPicture.src = `characterPictures/characterPicture${convertSybillaNr}.png`;
                sybillaName.innerHTML = sybillaNames[slicedSybillaNr];
                insertAuguryText.innerHTML=wróżby[slicedSybillaNr][slicedWierszNr];
                
                setTimeout (function () {
                    sybillaName.style.display = "flex";
                    }, 200);
                setTimeout (function () {
                        sybillaPictureDiv.style.display = "flex";
                    }, 600); 
                setTimeout (function () {
                        insertAuguryText.style.display = "flex";
                    }, 1100);
                    setTimeout (function () {
                        goBackInfo.style.display = "flex"
                    }, 1200);
                    
            });  

            
        });

        // Dodaj do ulubionych

items = [];
// if (itemsRetrieved.includes(numbersCheck)){
//     console.log("Jest")
// }else{
//     // Tu zdobić tak, żeby blokowało 
// };

function dodaj (){
if (itemsRetrievedNew?.includes(numbersCheck)){
    console.log(numbersCheck);
    heartEmpty.style.display = "block";
    heartFull.style.display = "none";
}else{
    console.log(numbersCheck); 
    console.log(itemsRetrievedNew);
    heartEmpty.style.display = "none";
    heartFull.style.display = "block";
    itemsRetrievedNew.push(slicedSybillaNr + '-' + slicedWierszNr);
    localStorage.setItem('list', JSON.stringify(itemsRetrievedNew));
}};  

function sprawdzenie () {
    checkStorage = localStorage.getItem('list');
    if (checkStorage === null){
        localStorage.setItem('list', JSON.stringify(items));
        console.log("Lista nie istnieje, dodano")
    }else{
        console.log("Lista istnieje")
    }
}

function dodajDoUlubionych() {
        sprawdzenie ();
        itemsRetrievedNew = JSON.parse(localStorage.getItem('list'));
        dodaj ();
    };

function usuńZUlubionych() {
    let itemsRetrievedNew = JSON.parse(localStorage.getItem('list'));
    let index = itemsRetrievedNew.indexOf(slicedSybillaNr + "-" + slicedWierszNr);
    itemsRetrievedNew.splice(index, 1);
    console.log(index)
    localStorage.setItem('list', JSON.stringify(itemsRetrievedNew));
    console.log("Ok.");
    heartEmpty.style.display = "block";
    heartFull.style.display = "none";
}

// usuń.addEven tListener('click',() => {
//     window.localStorage.clear();
//     console.log("Usunięto pamięć");
//     sprawdzenie();
//     zmieńSerce();
// });  

heartEmpty.addEventListener('click',() => {
    dodajDoUlubionych ()
});  

heartFull.addEventListener('click',() => {
    usuńZUlubionych()
});  

ulubioneWróżby.addEventListener('click',() => {
    removeAllChildNodes(secondMenuContent);
    tekstUlubionejWróżby.style.display = "flex";
    secondMenuContent.style.display = "none";
    pokażUlubionePętla()
})

})();
    
function myFunction(a) {
    let itemsRetrievedNew = JSON.parse(localStorage.getItem('list'));;
    let test = itemsRetrievedNew.splice(a, 1);
    localStorage.setItem('list', JSON.stringify(itemsRetrievedNew));
    removeAllChildNodes(tekstUlubionejWróżby);
    pokażUlubionePętla()
    console.log("Ok.");    
}

function pokażUlubione(){
    arrayUlubione = window.localStorage.getItem('list');
    arrayFromString = JSON.parse(arrayUlubione.split(','));
    console.log(arrayFromString);
    let ulubioneDiv;
    let ulubioneDivContainer;
    let ulubioneDivName;
    let ulubioneDivContent;

    arrayFromString.forEach(function (objectNumber, index) {

        let splittedNumbers = objectNumber.split('-');
        console.log(splittedNumbers);
        splittedNumberSybilla = splittedNumbers[0];
        splittedNumberWiersz = splittedNumbers[1];
        
        ulubioneDiv = document.createElement('div');
        ulubioneDiv.className = 'results';
        ulubioneDiv.id=`results${index}`

        ulubioneDivName = document.createElement('span');
        ulubioneDivName.innerHTML+=`Sybilla ${splittedNumberSybilla}, wiersz ${splittedNumberWiersz}:<br/>`;
        ulubioneDivName.className = 'ulubioneDivName';
        ulubioneDivName.innerHTML += `<img src='Del.png' id='deleteImg${index}' onclick = 'myFunction(${index})' style='width: 20px; height: 20px'>`;
        
        ulubioneDivContent = document.createElement('span');
        ulubioneDivContent.className = 'ulubioneDivContent';
        ulubioneDivContent.innerHTML+=wróżby[splittedNumberSybilla][splittedNumberWiersz];

        tekstUlubionejWróżby.appendChild(ulubioneDiv);
        document.querySelector(`#results${index}`).appendChild(ulubioneDivName);
        document.querySelector(`#results${index}`).appendChild(ulubioneDivContent);
        console.log("Halo jak")
        });



        function usuńZUlubionychZUlubionych() {
            arrayFromString.splice(index, 1);

            // localStorage.setItem('list', JSON.stringify(itemsRetrievedNew));
        }
};

function zmieńSerce (){
    itemsRetrieved = JSON.parse(localStorage.getItem('list'));

    if (itemsRetrieved?.includes(numbersCheck)){
        console.log("Jest");
        heartEmpty.style.display = "none";
        heartFull.style.display = "block";
    }else{
        console.log("Nie jest");
        heartEmpty.style.display = "block";
        heartFull.style.display = "none";
    }};

function pokażUlubionePętla(){
    console.log(localStorage.getItem('list'))
    if (localStorage.getItem('list') === "[]"){
        tekstUlubionejWróżby.innerHTML = "<h4>Nie masz ulubionych wróżb. Dodaj je za pomocą serduszka w prawym górnym rogu Sybilli.<h4>";
        console.log("Ulubionepętlaop1")
    }else{
    pokażUlubione()}
    zmieńSerce()}



    const symbolZones = {
        1: "1 1",
        2: "2 1",
        3: "2 2",
        4: "3 1",
        5: "3 2",
        6: "3 3",
        7: "4 1",
        8: "4 2",
        9: "4 3",
        10: "4 4",
        11: "5 1",
        12: "5 2",
        13: "5 3",
        14: "5 4",
        15: "5 5",
        16: "6 1",
        17: "6 2",
        18: "6 3",
        19: "6 4",
        20: "6 5",
        21: "6 6"
    }    

    const tekstTestowy1 = {
        1:{
            0: "Zakręć kołem",
            2: "Lorem 1 ipsum 2",
            3: "Lorem 1 ipsum 3",
            4: "Lorem 1 ipsum 4",
            5: "Lorem 1 ipsum 5",
            6: "Lorem 1 ipsum 6",
            7: "Lorem 1 ipsum 7",
            8: "Lorem 1 ipsum 8",
            9: "Lorem 1 ipsum 9",
            1: "Lorem 1 ipsum 1",
            10: "Lorem 1 ipsum 10",
            11: "Lorem 1 ipsum 11",
            12: "Lorem 1 ipsum 12",
            13: "Lorem 1 ipsum 13",
            14: "Lorem 1 ipsum 14",
            15: "Lorem 1 ipsum 15",
            16: "Lorem 1 ipsum 16",
            17: "Lorem 1 ipsum 17",
            18: "Lorem 1 ipsum 18",
            19: "Lorem 1 ipsum 19",
            20: "Lorem 1 ipsum 20",
            21: "Lorem 1 ipsum 21",
            },
        2:{
            0: "Zakręć kołem",
            1: "Lorem 2 ipsum 1",
            2: "Lorem 2 ipsum 2",
            3: "Lorem 2 ipsum 3",
            4: "Lorem 2 ipsum 4",
            5: "Lorem 2 ipsum 5",
            6: "Lorem 2 ipsum 6",
            7: "Lorem 2 ipsum 7",
            8: "Lorem 2 ipsum 8",
            9: "Lorem 2 ipsum 9",
            10: "Lorem 2 ipsum 10",
            11: "Lorem 2 ipsum 11",
            12: "Lorem 2 ipsum 12",
            13: "Lorem 2 ipsum 13",
            14: "Lorem 2 ipsum 14",
            15: "Lorem 2 ipsum 15",
            16: "Lorem 2 ipsum 16",
            17: "Lorem 2 ipsum 17",
            18: "Lorem 2 ipsum 18",
            19: "Lorem 2 ipsum 19",
            20: "Lorem 2 ipsum 20",
            21: "Lorem 2 ipsum 21",
            }
    }

    const postaci = {
        1: "Nestora",
        2: "Numę Pompiliusza",
        3: "Tullusa Hostiliusza",
        4: "Tymoteusza",
        5: "Fabiusza",
        6: "Alcestisa i Admetusza",
        7: "Orestesa i Pyladesa",
        8: "Narsesa",
        9: "Kalchasa",
        10: "Gygesa",
        11: "Euryjalusa",
        12: "Ventidiusa Bassusa",
        13: "Niobe",
        14: "Helenę",
        15: "Aspazję",
        16: "Chinoe",
        17: "Krezusa",
        18: "Toraniusa",
        19: "Jazona",
        20: "Polikratesa",
        21: "Śmierć",
    }

    const wheelText = {
            1: { //Tarcza 1 Gąsiorek
                1: "Idź do Kozy miástá Osmolin", // 1 1
                2: "Idź do Baráná miástá Opolé", // 1 2
                3: "Idź do Borsuká miástá Podáyczé", // 2 2
                4: "Idź do Tchorzá miástá Swierców", // 1 3
                5: "Idź do Wiewiórki miast Przeworsko", // 2 3
                6: "Idź do Láśice miástá Striy", // 3 3
                7: "Idź do Záiącá miástá Mieśćisko", // 1 4
                8: "Idź do Krzeczká miástá Záwichost", // 2 4
                9: "Idź do Nowogródká miástá Rzeszów", // 3 4
                10: "Idź do Rosomaká miástá Szelechów", // 4 4
                11: "Idź do Króliká miástá Szyrniki", // 1 5
                12: "Idź do Popielice miástá Brzéżek", // 2 5
                13: "Idź do Gronostáiá miástá Kozprza", // 3 5
                14: "Idź do Niedźwiedzia miástá Sanok", // 4 5
                15: "Idź do Wydry miástá Lutomiersko", // 5 5
                16: "Idź do Liszki miástá Czyrsk", // 1 6
                17: "Idź do Wilká miástá Czárnków", // 2 6
                18: "Idź do Kuny miástá Zydáczów", // 3 6
                19: "Idź do Bobru miástá Chmielnik", // 4 6
                20: "Idź do Rysiá miástá Grodek", // 5 6
                21: "Idź do Sobolá miástá Bochnia" // 6 6
            },

            2: { //Tarcza 2 Gołąb
                1: "Idź do Sobolá miástá Koźirynek",
                2: "Idź do Kozy miástá Rożan",
                3: "Idź do Baráná miástá Mogilnicá",
                4: "Idź do Borsuká miástá Stężycá",
                5: "Idź do Tchorzá miasta Roátyn",
                6: "Idź do Wiewiórki miástá Striyków",
                7: "Idź do Láśice miástá Kulitów",
                8: "Idź do Záiącá miástá Ośieczno",
                9: "Idź do Krzeczká miástá Rubieszów",
                10: "Idź do Nowogródká miástá Urzędów",
                11: "Idź do Rosomaká miástá Wáwrzinczyce",
                12: "Idź do Króliká miástá Tuchola",
                13: "Idź do Popielice miástá Chełm",
                14: "Idź do Gronostáiá miástá Szczyrcz",
                15: "Idź do Niedźwiedzia miástá Póniec",
                16: "Idź do Wydry miástá Ciechanów",
                17: "Idź do Liszki miástá Lepno",
                18: "Idź do Wilká miástá Legonice",
                19: "Idź do Kuny miástá Opátowice",
                20: "Idź do Bobru miástá Bełżyce",
                21: "Idź do Rysiá miástá Fordan"
            },

            3: { //Tarcza 1 Orzeł
                1: "Idź do Rysiá miástá Łubin", // 1 1
                2: "Idź do Sobolá miástá Kászków", // 1 2
                3: "Idź do Kozy miástá Szérków", // 2 2
                4: "Idź do Baráná miástá Rypin", // 1 3
                5: "Idź do Borsuká miast Buk", // 2 3
                6: "Idź do Tchorzá miástá Zwoleń", // 3 3
                7: "Idź do Wiewiórki miástá Rzemień", // 1 4
                8: "Idź do Láśice miástá Leszko", // 2 4
                9: "Idź do Záiącá miástá Radomskie", // 3 4
                10: "Idź do Krzeczká miástá Proszkowice", // 4 4
                11: "Idź do Nowogródká miástá Trębowla", // 1 5
                12: "Idź do Rosomaká miástá Opalenicá", // 2 5
                13: "Idź do Króliká miástá Oleszko", // 3 5
                14: "Idź do Popielice miástá Szczebrzeszyn", // 4 5
                15: "Idź do Gronostáiá miástá Wolborz", // 5 5
                16: "Idź do Niedźwiedzia miástá Ráwá", // 1 6
                17: "Idź do Wydry miástá Gárwolin", // 2 6
                18: "Idź do Liszki miástá Biéle", // 3 6
                19: "Idź do Wilká miástá Gębicá", // 4 6
                20: "Idź do Kuny miástá Syroczko", // 5 6
                21: "Idź do Bobru miástá Kobylno" // 6 6
            },

            4: { //Tarcza 4 Pápugá
                1: "Idź do Wilká miástá Opátowek", // 1 1
                2: "Idź do Kuny miástá Krzeszów", // 1 2
                3: "Idź do Bobru miástá Bircza", // 2 2
                4: "Idź do Rysiá miástá Dobczyce", // 1 3
                5: "Idź do Sobolá miastá Gołogóry", // 2 3
                6: "Idź do Kozy miástá Solec", // 3 3
                7: "Idź do Baráná miástá Widáwá", // 1 4
                8: "Idź do Borsuká miástá Krocko", // 2 4
                9: "Idź do Tchorzá miástá Mosiná", // 3 4
                10: "Idź do Wiewiórki miástá Wysokié", // 4 4
                11: "Idź do Láśice miástá Bolesłáwiec", // 1 5
                12: "Idź do Záiącá miástá Kraśnik", // 2 5
                13: "Idź do Krzeczká miástá Koło", // 3 5
                14: "Idź do Nowogródká miástá Brzyská", // 4 5
                15: "Idź do Rosomaká miástá Zychlin", // 5 5
                16: "Idź do Króliká miástá Páczánów", // 1 6
                17: "Idź do Popielice miástá Bábimost", // 2 6
                18: "Idź do Gronostáiá miástá Przedbórz", // 3 6
                19: "Idź do Niedźwiedzia miástá Ostrowia", // 4 6
                20: "Idź do Wydry miástá Drzewicá", // 5 6
                21: "Idź do Liszki miástá Gostyń" // 6 6
            },

            5: { //Tarcza 5 Słowik
                1: "Idź do Niedźwiedzia miástá Pakość", // 1 1
                2: "Idź do Wydry miástá Inowłódz", // 1 2
                3: "Idź do Liszki miástá Msków", // 2 2
                4: "Idź do Wilká miástá Márgonin", // 1 3
                5: "Idź do Kuny miastá Łábiszyn", // 2 3
                6: "Idź do Bobru miástá Dubiecko", // 3 3
                7: "Idź do Rysiá miástá Kłodáwá", // 1 4
                8: "Idź do Sobolá miástá Brzostek", // 2 4
                9: "Idź do Kozy miástá Sokal", // 3 4
                10: "Idź do Baráná miástá Smotrzyc", // 4 4
                11: "Idź do Borsuká miástá Wąwálnicá", // 1 5
                12: "Idź do Tchorzá miástá Grzegorzów", // 2 5
                13: "Idź do Wiewiórki miástá Kleczów", // 3 5
                14: "Idź do Láśice miástá Kuflów", // 4 5
                15: "Idź do Záiącá miástá Będzyń", // 5 5
                16: "Idź do Krzeczká miástá Włodźimiérz", // 1 6
                17: "Idź do Nowogródká miástá Hołbok", // 2 6
                18: "Idź do Rosomaká miástá Szyszków", // 3 6
                19: "Idź do Króliká miástá Tyráwá", // 4 6
                20: "Idź do Popielice miástá Wąsoczyn", // 5 6
                21: "Idź do Gronostáiá miástá Bárczyn" // 6 6
            },

            6: { //Tarcza 6 Wroná
                1: "Idź do Bobru miástá Strzelec", // 1 1
                2: "Idź do Rysiá miástá Słáwków", // 1 2
                3: "Idź do Sobolá miástá Kwiatków", // 2 2
                4: "Idź do Kozy miástá Kurnik", // 1 3
                5: "Idź do Baráná miastá Kámionká", // 2 3
                6: "Idź do Borsuká miástá Számotuły", // 3 3
                7: "Idź do Tchorzá miástá Kołomyia", // 1 4
                8: "Idź do Wiewiórki miástá Stárościanki", // 2 4
                9: "Idź do Láśice miástá Jásłowiec", // 3 4
                10: "Idź do Záiącá miástá Gośćin", // 4 4
                11: "Idź do Krzeczká miástá Chodecz", // 1 5
                12: "Idź do Nowogródká miástá Gielnów", // 2 5
                13: "Idź do Rosomaká miástá Chęciny", // 3 5
                14: "Idź do Króliká miástá Rádzánów", // 4 5
                15: "Idź do Popielice miástá Mielec", // 5 5
                16: "Idź do Gronostáiá miástá Kurów", // 1 6
                17: "Idź do Niedźwiedzia miástá Kłobucko", // 2 6
                18: "Idź do Wydry miástá Strzeżów", // 3 6
                19: "Idź do Liszki miástá Zábno", // 4 6
                20: "Idź do Wilká miástá Piątek", // 5 6
                21: "Idź do Kuny miástá Borek" // 6 6
            },

            7: { //Tarcza 7 Synogárlicá
                1: "Idź do Liszki miástá Brzyská", // 1 1
                2: "Idź do Wilká miástá Kostrzyn", // 1 2
                3: "Idź do Kuny miástá Zwáradz", // 2 2
                4: "Idź do Bobru miástá Secemin", // 1 3
                5: "Idź do Rysiá miastá Huchań", // 2 3
                6: "Idź do Sobolá miástá Zduny", // 3 3
                7: "Idź do Kozy miástá Rypno", // 1 4
                8: "Idź do Baráná miástá Wártá", // 2 4
                9: "Idź do Borsuká miástá Trzemeszno", // 3 4
                10: "Idź do Tchorzá miástá Szrákowo", // 4 4
                11: "Idź do Wiewiórki miástá Liw", // 1 5
                12: "Idź do Láśice miástá Suleiów", // 2 5
                13: "Idź do Záiącá miástá Wąsosze", // 3 5
                14: "Idź do Krzeczká miástá Wąkocko", // 4 5
                15: "Idź do Nowogródká miástá Siećiechów", // 5 5
                16: "Idź do Rosomaká miástá Kolno", // 1 6
                17: "Idź do Króliká miástá Rychwał", // 2 6
                18: "Idź do Popielice miástá Sieluń", // 3 6
                19: "Idź do Gronostáiá miástá Gorzków", // 4 6
                20: "Idź do Niedźwiedzia miástá Września", // 5 6
                21: "Idź do Wydry miástá Koźiegłowy" // 6 6
            },
            
            8: { //Tarcza 8 Sroká
                1: "Idź do Wydry miástá Ryszkowo", // 1 1
                2: "Idź do Liszki miástá Sámbor", // 1 2
                3: "Idź do Wilká miástá Niżánkowice", // 2 2
                4: "Idź do Kuny miástá Górká", // 1 3
                5: "Idź do Bobru miastá Lubomla", // 2 3
                6: "Idź do Rysiá miástá Bábicá", // 3 3
                7: "Idź do Sobolá miástá Dźiergów", // 1 4
                8: "Idź do Kozy miástá Węgrowiec", // 2 4
                9: "Idź do Baráná miástá Pokrzywnicá", // 3 4
                10: "Idź do Borsuká miástá Skrzynno", // 4 4
                11: "Idź do Tchorzá miástá Niebylec", // 1 5
                12: "Idź do Wiewiórki miástá Sępelbork", // 2 5
                13: "Idź do Láśice miástá Denów", // 3 5
                14: "Idź do Záiącá miástá Grodźec", // 4 5
                15: "Idź do Krzeczká miástá Słupia", // 5 5
                16: "Idź do Nowogródká miástá Jáworów", // 1 6
                17: "Idź do Rosomaká miástá Przyrów", // 2 6
                18: "Idź do Króliká miástá Oporów", // 3 6
                19: "Idź do Popielice miástá Staw", // 4 6
                20: "Idź do Gronostáiá miástá Stemberg", // 5 6 ???
                21: "Idź do Niedźwiedzia miástá Zárnowiec" // 6 6
            },
            
            9: { //Tarcza 9 Kruk
                1: "Idź do Borsuká miástá Łáńcut", // 1 1
                2: "Idź do Tchorzá miástá Wolbran", // 1 2
                3: "Idź do Wiewiórki miástá Járocin", // 2 2
                4: "Idź do Láśice miástá Kiebłow", // 1 3
                5: "Idź do Záiącá miastá Rćina", // 2 3
                6: "Idź do Krzeczká miástá Nowytarg", // 3 3
                7: "Idź do Nowogródká miástá Gowoczów", // 1 4
                8: "Idź do Rosomaká miástá Trzćiél", // 2 4
                9: "Idź do Króliká miástá Bábin", // 3 4
                10: "Idź do Popielice miástá Záłoszce", // 4 4
                11: "Idź do Gronostáiá miástá Járząb", // 1 5
                12: "Idź do Niedźwiedzia miástá Buczác", // 2 5
                13: "Idź do Wydry miástá Horynin", // 3 5
                14: "Idź do Liszki miástá Górno", // 4 5
                15: "Idź do Wilká miástá Máłogoszcz", // 5 5
                16: "Idź do Kuny miástá Zákroczym", // 1 6
                17: "Idź do Bobru miástá Chodel", // 2 6
                18: "Idź do Rysiá miástá Laśko", // 3 6
                19: "Idź do Sobolá miástá Fryálno", // 4 6
                20: "Idź do Kozy miástá Kiernoźia", // 5 6 ???
                21: "Idź do Baráná miástá Szczekocin" // 6 6
            },
            
            10: { //Tarcza 10 Krogulec
                1: "Idź do Rosomaká miástá Járosław", // 1 1
                2: "Idź do Króliká miástá Rynárzów", // 1 2
                3: "Idź do Popielice miástá Wyszkowo", // 2 2
                4: "Idź do Gronostáiá miástá Przecław", // 1 3
                5: "Idź do Niedźwiedzia miastá Sleszyn", // 2 3
                6: "Idź do Wydry miástá Rátno", // 3 3
                7: "Idź do Liszki miástá Zbąszyn", // 1 4
                8: "Idź do Wilká miástá Laśkárzów", // 2 4
                9: "Idź do Kuny miástá Jwánowice", // 3 4
                10: "Idź do Bobru miástá Zárszyn", // 4 4
                11: "Idź do Rysiá miástá Rydźiná", // 1 5
                12: "Idź do Sobolá miástá Dobrogoszcz", // 2 5
                13: "Idź do Kozy miástá Koszyczki", // 3 5
                14: "Idź do Baráná miástá Kónin", // 4 5
                15: "Idź do Borsuká miástá Chełmno", // 5 5
                16: "Idź do Tchorzá miástá Lubaczów", // 1 6
                17: "Idź do Wiewiórki miástá Stawiszyn", // 2 6
                18: "Idź do Láśice miástá Wieluń", // 3 6
                19: "Idź do Záiącá miástá Rywotycz", // 4 6
                20: "Idź do Krzeczká miástá Człomniki", // 5 6 ???
                21: "Idź do Nowogródká miástá Głęboczek" // 6 6
            },
            
            11: { //Tarcza 11 Kur
                1: "Idź do Nowogródká miástá Janowiec", // 1 1
                2: "Idź do Rosomaká miástá Grocholice", // 1 2
                3: "Idź do Króliká miástá Skąpe", // 2 2
                4: "Idź do Popielice miástá Gliniány", // 1 3
                5: "Idź do Gronostáiá miastá Odalánow", // 2 3
                6: "Idź do Niedźwiedzia miástá Pilcá", // 3 3
                7: "Idź do Wydry miástá Wrónki", // 1 4
                8: "Idź do Liszki miástá Tárczyn", // 2 4
                9: "Idź do Wilká miástá Kielce", // 3 4
                10: "Idź do Kuny miástá Czyrkaszno", // 4 4
                11: "Idź do Bobru miástá Olesznicá", // 1 5
                12: "Idź do Rysiá miástá Wiśniá", // 2 5
                13: "Idź do Sobolá miástá Pleszów", // 3 5
                14: "Idź do Kozy miástá Káćiąż", // 4 5
                15: "Idź do Baráná miástá Głodkowice", // 5 5
                16: "Idź do Borsuká miástá Bobrowniki", // 1 6
                17: "Idź do Tchorzá miástá Czucz", // 2 6
                18: "Idź do Wiewiórki miástá Grzymiszów", // 3 6
                19: "Idź do Láśice miástá Milczyce", // 4 6
                20: "Idź do Záiącá miástá Pczew", // 5 6 ???
                21: "Idź do Krzeczká miástá Hálicz" // 6 6
            },
            
            12: { //Tarcza 12 Sokoł
                1: "Idź do Krzeczká miástá Ropczyce", // 1 1
                2: "Idź do Nowogródká miástá Fálków", // 1 2
                3: "Idź do Rosomaká miástá Lopienno", // 2 2
                4: "Idź do Króliká miástá Tyczyn", // 1 3
                5: "Idź do Popielice miastá Lutów", // 2 3
                6: "Idź do Gronostáiá miástá Smigiel", // 3 3
                7: "Idź do Niedźwiedzia miástá Myńsk", // 1 4
                8: "Idź do Wydry miástá Olsztynek", // 2 4
                9: "Idź do Liszki miástá Półkpie", // 3 4
                10: "Idź do Wilká miástá Chełmża", // 4 4
                11: "Idź do Kuny miástá Młáwá", // 1 5
                12: "Idź do Bobru miástá Miłosław", // 2 5
                13: "Idź do Rysiá miástá Tuchów", // 3 5
                14: "Idź do Sobolá miástá Turobin", // 4 5
                15: "Idź do Kozy miástá Wieczbórz", // 5 5
                16: "Idź do Baráná miástá Skáwiná", // 1 6
                17: "Idź do Borsuká miástá Szorstyn", // 2 6
                18: "Idź do Tchorzá miástá Iłów", // 3 6
                19: "Idź do Wiewiórki miástá Smielów", // 4 6
                20: "Idź do Láśice miástá Zywiec", // 5 6 ???
                21: "Idź do Záiącá miástá Wilczyno" // 6 6
            },
            
            13: { //Tarcza 13 Kuropátwá
                1: "Idź do Záiącá miástá Skáła", // 1 1
                2: "Idź do Krzeczká miástá Namysłow", // 1 2
                3: "Idź do Nowogródká miástá Bieláwy", // 2 2
                4: "Idź do Rosomaká miástá Kożmin", // 1 3
                5: "Idź do Króliká miastá Wilánów", // 2 3
                6: "Idź do Popielice miástá Kurzelów", // 3 3
                7: "Idź do Gronostáiá miástá Busko", // 1 4
                8: "Idź do Niedźwiedzia miástá Powidz", // 2 4
                9: "Idź do Wydry miástá Międzychód", // 3 4
                10: "Idź do Liszki miástá Máków", // 4 4
                11: "Idź do Wilká miástá Duklá", // 1 5
                12: "Idź do Kuny miástá Tyszkowice", // 2 5
                13: "Idź do Bobru miástá Wyszków", // 3 5
                14: "Idź do Rysiá miástá Ostrów", // 4 5
                15: "Idź do Sobolá miástá Szymbárk", // 5 5
                16: "Idź do Kozy miástá Káźimierz", // 1 6
                17: "Idź do Baráná miástá Krzemieniec", // 2 6
                18: "Idź do Borsuká miástá Wyszogród", // 3 6
                19: "Idź do Tchorzá miástá Stobnica", // 4 6
                20: "Idź do Wiewiórki miástá Krasnostaw", // 5 6 ???
                21: "Idź do Láśice miástá Pinczów" // 6 6
            },
            
            14: { //Tarcza 14 Kukułká
                1: "Idź do Gronostáiá miástá Słowaczów", // 1 1
                2: "Idź do Niedźwiedzia miástá Bodzięćin", // 1 2
                3: "Idź do Wydry miástá Nowotaniec", // 2 2
                4: "Idź do Liszki miástá Piłá", // 1 3
                5: "Idź do Wilká miastá Wieliczká", // 2 3
                6: "Idź do Kuny miástá Chrzanów", // 3 3
                7: "Idź do Bobru miástá Pobiedźiská", // 1 4
                8: "Idź do Rysiá miástá Rymánów", // 2 4
                9: "Idź do Sobolá miástá Krotyszyn", // 3 4
                10: "Idź do Kozy miástá Brudzowo", // 4 4
                11: "Idź do Baráná miástá Wąsoszyn", // 1 5
                12: "Idź do Borsuká miástá Pomorzány", // 2 5
                13: "Idź do Tchorzá miástá Iłżá", // 3 5
                14: "Idź do Wiewiórki miástá Brzozów", // 4 5
                15: "Idź do Láśice miástá Sol", // 5 5
                16: "Idź do Záiącá miástá Frystag", // 1 6
                17: "Idź do Krzeczká miástá Grzebołów", // 2 6
                18: "Idź do Nowogródká miástá Czchów", // 3 6
                19: "Idź do Rosomaká miástá Gąsáwá", // 4 6
                20: "Idź do Króliká miástá Sędźiszów", // 5 6 ???
                21: "Idź do Popielice miástá Steszów" // 6 6
            },
            
            15: { //Tarcza 15 Drop
                1: "Idź do Króliká miástá Pieńsko", // 1 1
                2: "Idź do Popielice miástá Złoczew", // 1 2
                3: "Idź do Gronostáiá miástá Służów", // 2 2
                4: "Idź do Niedźwiedzia miástá Kráienká", // 1 3
                5: "Idź do Wydry miastá Zadybie", // 2 3
                6: "Idź do Liszki miástá Orchów", // 3 3
                7: "Idź do Wilká miástá Bnin", // 1 4
                8: "Idź do Kuny miástá Dobra", // 2 4
                9: "Idź do Bobru miástá Wielopole", // 3 4
                10: "Idź do Rysiá miástá Zbárasz", // 4 4
                11: "Idź do Sobolá miástá Jároczewo", // 1 5
                12: "Idź do Kozy miástá Jędrzeiów", // 2 5
                13: "Idź do Baráná miástá Leszczysko", // 3 5
                14: "Idź do Borsuká miástá Jácymierz", // 4 5
                15: "Idź do Tchorzá miástá Bróg", // 5 5
                16: "Idź do Wiewiórki miástá Drohobicz", // 1 6
                17: "Idź do Láśice miástá Znin", // 2 6
                18: "Idź do Záiącá miástá Szubin", // 3 6
                19: "Idź do Krzeczká miástá Brzeźnicá", // 4 6
                20: "Idź do Nowogródká miástá Bedlno", // 5 6 ???
                21: "Idź do Rosomaká miástá Kámieńsko" // 6 6
            },
            
            16: { //Tarcza 16 Piegzá
                1: "Idź do Kuny miástá Przytyk", // 1 1
                2: "Idź do Bobru miástá Jásliská", // 1 2
                3: "Idź do Rysiá miástá Kępno", // 2 2
                4: "Idź do Sobolá miástá Zárnowá", // 1 3
                5: "Idź do Kozy miastá Prasznysz", // 2 3
                6: "Idź do Baráná miástá Tuszyn", // 3 3
                7: "Idź do Borsuká miástá Czepiełów", // 1 4
                8: "Idź do Tchorzá miástá Ostrzeszów", // 2 4
                9: "Idź do Wiewiórki miástá Syroczec", // 3 4
                10: "Idź do Láśice miástá Sienno", // 4 4
                11: "Idź do Záiącá miástá Waśniów", // 1 5
                12: "Idź do Krzeczká miástá Turek", // 2 5
                13: "Idź do Nowogródká miástá Skierbieszów", // 3 5
                14: "Idź do Rosomaká miástá Miedzybórz", // 4 5
                15: "Idź do Króliká miástá Rádźiłów", // 5 5
                16: "Idź do Popielice miástá Knyszowo", // 1 6
                17: "Idź do Gronostáiá miástá Szochów", // 2 6
                18: "Idź do Niedźwiedzia miástá Woysłáwice", // 3 6
                19: "Idź do Wydry miástá Felsztyn", // 4 6
                20: "Idź do Liszki miástá Dolsko", // 5 6 ???
                21: "Idź do Wilká miástá Cieszylesy" // 6 6
            },
            
            17: { //Tarcza 17 Paw
                1: "Idź do Popielice miástá Ośieczno", // 1 1
                2: "Idź do Gronostáiá miástá Bydlin", // 1 2
                3: "Idź do Niedźwiedzia miástá Gołup", // 2 2
                4: "Idź do Wydry miástá Popów", // 1 3
                5: "Idź do Liszki miastá Woynicz", // 2 3
                6: "Idź do Wilká miástá Zgłobień", // 3 3
                7: "Idź do Kuny miástá Łobżenicá", // 1 4
                8: "Idź do Bobru miástá Mielszyno", // 2 4
                9: "Idź do Rysiá miástá Próchnik", // 3 4
                10: "Idź do Sobolá miástá Siedlec", // 4 4
                11: "Idź do Kozy miástá Grodziąc", // 1 5
                12: "Idź do Baráná miástá Bóbrká", // 2 5
                13: "Idź do Borsuká miástá Wieruszów", // 3 5
                14: "Idź do Tchorzá miástá Grábów", // 4 5
                15: "Idź do Wiewiórki miástá Krzywcza", // 5 5
                16: "Idź do Láśice miástá Brzeńsk", // 1 6
                17: "Idź do Záiącá miástá Bodzánów", // 2 6
                18: "Idź do Krzeczká miástá Łomża", // 3 6
                19: "Idź do Nowogródká miástá Dębicá", // 4 6
                20: "Idź do Rosomaká miástá Bużenin", // 5 6 ???
                21: "Idź do Króliká miástá Wálcz" // 6 6
            },
            
            18: { //Tarcza 18 Zoraw
                1: "Idź do Popielice miástá Szydłowiec", // 1 1
                2: "Idź do Gronostáiá miástá Lowicz", // 1 2
                3: "Idź do Niedźwiedzia miástá Brodnica", // 2 2
                4: "Idź do Wydry miástá Ostróda", // 1 3
                5: "Idź do Liszki miastá Nur", // 2 3
                6: "Idź do Wilká miástá Kłocko", // 3 3
                7: "Idź do Kuny miástá Kutno", // 1 4
                8: "Idź do Bobru miástá Ośiek", // 2 4
                9: "Idź do Rysiá miástá Miechów", // 3 4
                10: "Idź do Sobolá miástá Moráczewo", // 4 4
                11: "Idź do Kozy miástá Łękno", // 1 5
                12: "Idź do Baráná miástá Dąbrowno", // 2 5
                13: "Idź do Borsuká miástá Smálino", // 3 5
                14: "Idź do Tchorzá miástá Czyrwieńsko", // 4 5
                15: "Idź do Wiewiórki miástá Lelów", // 5 5
                16: "Idź do Láśice miástá Rádymno", // 1 6
                17: "Idź do Záiącá miástá Kámień", // 2 6
                18: "Idź do Krzeczká miástá Golina", // 3 6
                19: "Idź do Nowogródká miástá Jáworniczek", // 4 6
                20: "Idź do Rosomaká miástá Drobnin", // 5 6 ???
                21: "Idź do Króliká miástá Mrocza" // 6 6
            },

            19: { //Tarcza 19 Kaczor
                1: "Idź do Wiewiórki miástá Sobótka", // 1 1
                2: "Idź do Láśice miástá Zębrów", // 1 2
                3: "Idź do Záiącá miástá Pábijánice", // 2 2
                4: "Idź do Krzeczká miástá Syców", // 1 3
                5: "Idź do Nowogródká miastá Myślimice", // 2 3
                6: "Idź do Rosomaká miástá Iłkusz", // 3 3
                7: "Idź do Króliká miástá Tuliszków", // 1 4
                8: "Idź do Popielice miástá Włocłáw", // 2 4
                9: "Idź do Gronostáiá miástá Látowić", // 3 4
                10: "Idź do Niedźwiedzia miástá Sąchoczyn", // 4 4
                11: "Idź do Wydry miástá Bráńsk", // 1 5
                12: "Idź do Liszki miástá Gąbin", // 2 5
                13: "Idź do Wilká miástá Rádzieiów", // 3 5
                14: "Idź do Kuny miástá Ogrodźieniec", // 4 5
                15: "Idź do Bobru miástá Kłódnicá", // 5 5
                16: "Idź do Rysiá miástá Bełz", // 1 6
                17: "Idź do Sobolá miástá Dobrzycá", // 2 6
                18: "Idź do Kozy miástá Wárká", // 3 6
                19: "Idź do Baráná miástá Szádek", // 4 6
                20: "Idź do Borsuká miástá Pniewy", // 5 6 ???
                21: "Idź do Tchorzá miástá Mośćiská" // 6 6
            },
            
            20: { //Tarcza 20 Boćian
                1: "Idź do Tchorzá miástá Skármierz", // 1 1
                2: "Idź do Wiewiórki miástá Kopánice", // 1 2
                3: "Idź do Láśice miástá Petulicá", // 2 2
                4: "Idź do Záiącá miástá Máków", // 1 3
                5: "Idź do Krzeczká miastá Rádoszyce", // 2 3
                6: "Idź do Nowogródká miástá Węgrów", // 3 3
                7: "Idź do Rosomaká miástá Uście", // 1 4
                8: "Idź do Króliká miástá Kliffów", // 2 4
                9: "Idź do Popielice miástá Przedecz", // 3 4
                10: "Idź do Gronostáiá miástá Bukowiec", // 4 4
                11: "Idź do Niedźwiedzia miástá Kromołów", // 1 5
                12: "Idź do Wydry miástá Káńczugá", // 2 5
                13: "Idź do Liszki miástá Łágów", // 3 5
                14: "Idź do Wilká miástá Oborniki", // 4 5
                15: "Idź do Kuny miástá Nádárzyn", // 5 5
                16: "Idź do Bobru miástá Brzostek", // 1 6
                17: "Idź do Rysiá miástá Krákowiec", // 2 6
                18: "Idź do Sobolá miástá Iutroszyn", // 3 6
                19: "Idź do Kozy miástá Krzywin", // 4 6
                20: "Idź do Baráná miástá Zmigród", // 5 6 ???
                21: "Idź do Borsuká miástá Lodźia" // 6 6
            },
            
            21: { //Tarcza 21 Sowá
                1: "Idź do Láśice miástá Zegan", // 1 1
                2: "Idź do Záiącá miástá Zegrze", // 1 2
                3: "Idź do Krzeczká miástá Połániec", // 2 2
                4: "Idź do Nowogródká miástá Krobia", // 1 3
                5: "Idź do Rosomaká miastá Lwówek", // 2 3
                6: "Idź do Króliká miástá Zagorów", // 3 3
                7: "Idź do Popielice miástá Jásło", // 1 4
                8: "Idź do Gronostáiá miástá Kołáczyce", // 2 4
                9: "Idź do Niedźwiedzia miástá Zarki", // 3 4
                10: "Idź do Wydry miástá Gołanczá", // 4 4
                11: "Idź do Liszki miástá Płóńsko", // 1 5
                12: "Idź do Wilká miástá Grodźisko", // 2 5
                13: "Idź do Kuny miástá Piaseczno", // 3 5
                14: "Idź do Bobru miástá Peplin", // 4 5
                15: "Idź do Rysiá miástá Cieszkowice", // 5 5
                16: "Idź do Sobolá miástá Sulumrzyce", // 1 6
                17: "Idź do Kozy miástá Srzem", // 2 6
                18: "Idź do Baráná miástá Stryyków", // 3 6
                19: "Idź do Borsuká miástá Obrzywół", // 4 6
                20: "Idź do Tchorzá miástá Wárzymów", // 5 6 ???
                21: "Idź do Wiewiórki miástá Bobowa" // 6 6
            },


    }

    const animalWheels = {
        Baráná: {
            Kámionká: ["Sybillá 12. wiersz 1.", 0.01],		// 1
            Bóbrká: ["Sybillá 12. wiersz 2.", 1], 		// 2
            Dąbrowno: ["Sybillá 12. wiersz 3.", 2], 		// 3
            Leszczysko: ["Sybillá 12. wiersz 4.", 3], 		// 4
            Kónin: ["Sybillá 12. wiersz 5.", 4], 		// 5
            Głodkowice: ["Sybillá 12. wiersz 6.", 5],		// 6
            Skáwiná: ["Sybillá 12. wiersz 7.", 6],		// 7 
            Krzemieniec: ["Sybillá 12. wiersz 8.", 7], 		// 8
            Stryyków: ["Sybillá 12. wiersz 9.", 8],		// 9
            Wártá: ["Sybillá 12. wiersz 10.", 9], 		// 10
            Szádek: ["Sybillá 12. wiersz 11.", 10],		// 11
            Zmigród: ["Sybillá 12. wiersz 12.", 11],		// 12
            Szczekocin: ["Sybillá 12. wiersz 13.", 12],		//13
            Opolé: ["Sybillá 11. wiersz 30.", 13],		// 14
            Mogilnicá: ["Sybillá 11. wiersz 31.", 14],		// 15
            Rypin: ["Sybillá 11. wiersz 32.", 15],		// 16
            Tuszyn: ["Sybillá 11. wiersz 33.", 16],		// 17
            Widáwá: ["Sybillá 11. wiersz 34.", 	17],	// 18
            Pokrzywnicá: ["Sybillá 11. wiersz 35.", 18],		// 19
            Smotrzyc: ["Sybillá 11. wiersz 36.", 19],		// 20
            Wąsoszyn: ["Sybillá 11. wiersz 37.", 20],		// 21
            },
        
        Borsuká: {
            Pomorzány: ["Sybillá 11. wiersz 16.", 0.01], 		// 1
            Számotuły: ["Sybillá 11. wiersz 17.", 1], 		// 2
            Wieruszów: ["Sybillá 11. wiersz 18.", 2], 		// 3
            Smálino: ["Sybillá 11. wiersz 19.", 3], 		// 4
            Jácymierz: ["Sybillá 11. wiersz 20.", 4], 		// 5
            Chełmno: ["Sybillá 11. wiersz 21.", 5], 		// 6
            Bobrowniki: ["Sybillá 11. wiersz 22.", 6], 		// 7 
            Szorstyn: ["Sybillá 11. wiersz 23.", 7], 		// 8
            Wyszogród: ["Sybillá 11. wiersz 24.", 8], 		// 9
            Obrzywół: ["Sybillá 12. wiersz 25.", 9], 		// 10
            Trzemeszno: ["Sybillá 12. wiersz 26.", 10], 		// 11
            Pniewy: ["Sybillá 12. wiersz 27.", 11], 		// 12
            Lodźia: ["Sybillá 12. wiersz 28.", 12], 		//13
            Łáńcut: ["Sybillá 11. wiersz 29.", 13], 		// 14
            Podáyczé: ["Sybillá 11. wiersz 9.", 14], 		// 15
            Stężycá: ["Sybillá 11. wiersz 10.", 15], 		// 16
            Buk: ["Sybillá 11. wiersz 11.", 16], 		// 17
            Czepiełów: ["Sybillá 11. wiersz 12.", 17], 		// 18
            Krocko: ["Sybillá 11. wiersz 13.", 18], 		// 19
            Skrzynno: ["Sybillá 11. wiersz 14.", 19], 		// 20
            Wąwálnicá: ["Sybillá 11. wiersz 15.", 20], 		// 21
        },
        
        Bobru: {
            Peplin: ["Sybillá 2. wiersz 22.", 0.01], 		// 1
            Secemin: ["Sybillá 2. wiersz 23.", 1], 		// 2
            Kłódnicá: ["Sybillá 2. wiersz 24.", 2], 		// 3
            Brzostek: ["Sybillá 2. wiersz 25.", 3], 		// 4
            Chodel: ["Sybillá 2. wiersz 26.", 4], 		// 5
            Chmielnik: ["Sybillá 2. wiersz 6.", 5], 		// 6
            Bełżyce: ["Sybillá 2. wiersz 7.", 6], 		// 7 
            Kobylno: ["Sybillá 2. wiersz 8.", 7], 		// 8
            Jásliská: ["Sybillá 2. wiersz 9.", 8], 		// 9
            Bircza: ["Sybillá 12. wiersz 10.", 9], 		// 10
            Lubomla: ["Sybillá 12. wiersz 11.", 10], 		// 11
            Dubiecko: ["Sybillá 12. wiersz 12.", 11], 		// 12
            Pobiedźiská: ["Sybillá 12. wiersz 13.", 12], 		//13
            Strzelec: ["Sybillá 2. wiersz 14.", 13], 		// 14
            Mielszyno: ["Sybillá 2. wiersz 15.", 14], 		// 15
            Ośiek: ["Sybillá 2. wiersz 16.", 15], 		// 16
            Wielopole: ["Sybillá 2. wiersz 17.", 16], 		// 17
            Zárszyn: ["Sybillá 2. wiersz 18.", 17], 		// 18
            Olesznicá: ["Sybillá 2. wiersz 19.", 18], 		// 19
            Miłosław: ["Sybillá 2. wiersz 20.", 19], 		// 20
            Wyszków: ["Sybillá 2. wiersz 21.", 20], 		// 21
        },
        
        Gronostáiá: {
            Kołáczyce: ["Sybillá 5. wiersz 37.", 0.01], 		// 1
            Gorzków: ["Sybillá 6. wiersz 1.", 1], 		// 2
            Látowić: ["Sybillá 6. wiersz 2.", 2], 		// 3
            Bukowiec: ["Sybillá 6. wiersz 3.", 3], 		// 4
            Járząb: ["Sybillá 6. wiersz 4.", 4], 		// 5
            Kozprza: ["Sybillá 5. wiersz 21.", 5], 		// 6
            Szczyrcz: ["Sybillá 5. wiersz 22.", 6], 		// 7 
            Wolborz: ["Sybillá 5. wiersz 23.", 7], 		// 8
            Szochów: ["Sybillá 5. wiersz 24.", 8], 		// 9
            Przedbórz: ["Sybillá 5. wiersz 25.", 9], 		// 10
            Stemberg: ["Sybillá 5. wiersz 26.", 10], 		// 11
            Bárczyn: ["Sybillá 5. wiersz 27.", 11], 		// 12
            Słowaczów: ["Sybillá 5. wiersz 28.", 12], 		//13
            Kurów: ["Sybillá 5. wiersz 29.", 13], 		// 14
            Bydlin: ["Sybillá 5. wiersz 30.", 14], 		// 15
            Lowicz: ["Sybillá 5. wiersz 31.", 15], 		// 16
            Służów: ["Sybillá 5. wiersz 32.", 16], 		// 17
            Przecław: ["Sybillá 5. wiersz 33.", 17], 		// 18
            Odalánow: ["Sybillá 5. wiersz 34.", 18], 		// 19
            Smigiel: ["Sybillá 5. wiersz 35.", 19], 		// 20
            Busko: ["Sybillá 5. wiersz 36.", 20], 		// 21
        },
        
        Kozy: {
            Srzem: ["Sybillá 12. wiersz 30.", 0.01], 		// 1
            Rypno: ["Sybillá 12. wiersz 31.", 1], 		// 2
            Wártá: ["Sybillá 12. wiersz 32.", 2], 		// 3
            Krzywin: ["Sybillá 12. wiersz 33.", 3], 		// 4
            Kiernoźia: ["Sybillá 12. wiersz 34.", 4], 		// 12
            Osmolin: ["Sybillá 12. wiersz 14.", 5], 		// 6
            Rożan: ["Sybillá 12. wiersz 15.", 6], 		// 7 
            Szérków: ["Sybillá 12. wiersz 16.", 7], 		// 8
            Prasznysz: ["Sybillá 12. wiersz 17.", 8], 		// 9
            Solec: ["Sybillá 12. wiersz 18.", 9], 		// 10
            Węgrowiec: ["Sybillá 12. wiersz 19.", 10], 		// 11
            Sokal: ["Sybillá 12. wiersz 20.", 11], 		// 12
            Brudzowo: ["Sybillá 12. wiersz 21.", 12], 		//13
            Kurnik: ["Sybillá 12. wiersz 22.", 13], 		// 14
            Grodziąc: ["Sybillá 12. wiersz 23.", 14], 		// 15
            Łękno: ["Sybillá 12. wiersz 24.", 15], 		// 16
            Jędrzeiów: ["Sybillá 12. wiersz 25.", 16], 		// 17
            Koszyczki: ["Sybillá 12. wiersz 26.", 17], 		// 18
            Káćiąż: ["Sybillá 12. wiersz 27.", 18], 		// 19
            Wieczbórz: ["Sybillá 12. wiersz 28.", 19], 		// 20
            Káźimierz: ["Sybillá 12. wiersz 29.", 20], 		// 21
        },
        
        Króliká: {
            Oporów: ["Sybillá 6. wiersz 31.", 0.01], 		// 1
            Páczánów: ["Sybillá 6. wiersz 30.", 1], 		// 2
            Rádzieiów: ["Sybillá 6. wiersz 29.", 2], 		// 3
            Oleszko: ["Sybillá 6. wiersz 28.", 3], 		// 4
            Tuchola: ["Sybillá 6. wiersz 27.", 4], 		// 12
            Szyrniki: ["Sybillá 6. wiersz 26.", 5], 		// 6
            Bábin: ["Sybillá 7. wiersz 9.", 6], 		// 7 
            Kliffów: ["Sybillá 7. wiersz 8.", 7], 		// 8
            Tuliszków: ["Sybillá 7. wiersz 7.", 8], 		// 9
            Rychwał: ["Sybillá 7. wiersz 6.", 9], 		// 10
            Zagorów: ["Sybillá 7. wiersz 5.", 10], 		// 11
            Wilánów: ["Sybillá 7. wiersz 4.", 11], 		// 12
            Tyczyn: ["Sybillá 7. wiersz 3.", 12], 		//13
            Skąpe: ["Sybillá 7. wiersz 2.", 13], 		// 14
            Rynárzów: ["Sybillá 7. wiersz 1.", 14], 		// 15
            Pieńsko: ["Sybillá 6. wiersz 37.", 15], 		// 16
            Mrocza: ["Sybillá 6. wiersz 36.", 16], 		// 17
            Wálcz: ["Sybillá 6. wiersz 35.", 17], 		// 18
            Rádzánów: ["Sybillá 6. wiersz 34.", 18], 		// 19
            Sędźiszów: ["Sybillá 6. wiersz 33.", 19], 		// 20
            Tyráwá: ["Sybillá 6. wiersz 32.", 20], 		// 21
        },
        
        Krzeczká: {
            Włodźimiérz: ["Sybillá 6. wiersz 21.", 0.01], 		// 1
            Słupia: ["Sybillá 8. wiersz 20.", 1], 		// 2
            Koło: ["Sybillá 8. wiersz 19.", 2], 		// 3
            Turek: ["Sybillá 8. wiersz 18.", 3], 		// 4
            Proszkowice: ["Sybillá 8. wiersz 17.", 4], 		// 12
            Rubieszów: ["Sybillá 8. wiersz 16.", 5], 		// 6
            Záwichost: ["Sybillá 8. wiersz 15.", 6], 		// 7 
            Nowytarg: ["Sybillá 8. wiersz 35.", 7], 		// 8
            Rádoszyce: ["Sybillá 8. wiersz 34.", 8], 		// 9
            Syców: ["Sybillá 8. wiersz 33.", 9], 		// 10
            Wąkocko: ["Sybillá 8. wiersz 32.", 10], 		// 11
            Połániec: ["Sybillá 8. wiersz 31.", 11], 		// 12
            Namysłow: ["Sybillá 8. wiersz 30.", 12], 		//13
            Ropczyce: ["Sybillá 8. wiersz 29.", 13], 		// 14
            Hálicz: ["Sybillá 8. wiersz 28.", 14], 		// 15
            Człomniki: ["Sybillá 8. wiersz 27.", 15], 		// 16
            Brzeźnicá: ["Sybillá 8. wiersz 26.", 16], 		// 17
            Golina: ["Sybillá 8. wiersz 25.", 17], 		// 18
            Łomża: ["Sybillá 8. wiersz 24.", 18], 		// 19
            Chodecz: ["Sybillá 8. wiersz 23.", 19], 		// 20
            Grzebołów: ["Sybillá 8. wiersz 22.", 20], 		// 21
        },
        
        Kuny: {
            Tyszkowice: ["Sybillá 3. wiersz 5.", 0.01], 		// 1
            Młáwá: ["Sybillá 3. wiersz 4.", 1], 		// 2
            Czyrkaszno: ["Sybillá 3. wiersz 3.", 2], 		// 3
            Jwánowice: ["Sybillá 3. wiersz 2.", 3], 		// 4
            Dobra: ["Sybillá 3. wiersz 1.", 4], 		// 12
            Kutno: ["Sybillá 2. wiersz 37.", 5], 		// 6
            Łobżenicá: ["Sybillá 2. wiersz 36.", 6], 		// 7 
            Borek: ["Sybillá 2. wiersz 35.", 7], 		// 8
            Chrzanów: ["Sybillá 2. wiersz 34.", 8], 		// 9
            Łábiszyn: ["Sybillá 2. wiersz 33.", 9], 		// 10
            Górká: ["Sybillá 2. wiersz 32.", 10], 		// 11
            Krzeszów: ["Sybillá 2. wiersz 31.", 11], 		// 12
            Przytyk: ["Sybillá 2. wiersz 30.", 12], 		//13
            Syroczko: ["Sybillá 2. wiersz 29.", 13], 		// 14
            Opátowice: ["Sybillá 2. wiersz 28.", 14], 		// 15
            Zydáczów: ["Sybillá 2. wiersz 27.", 15], 		// 16
            Zákroczym: ["Sybillá 3. wiersz 10.", 16], 		// 17
            Nádárzyn: ["Sybillá 3. wiersz 9.", 17], 		// 18
            Ogrodźieniec: ["Sybillá 3. wiersz 8.", 18], 		// 19
            Zwáradz: ["Sybillá 3. wiersz 7.", 19], 		// 20
            Piaseczno: ["Sybillá 3. wiersz 6.", 20], 		// 21
        },
        
        Liszki: {
            Czyrsk: ["Sybillá 3. wiersz 32.", 0.01], 		// 1
            Lepno: ["Sybillá 3. wiersz 33.", 1], 		// 2
            Biéle: ["Sybillá 3. wiersz 34.", 2], 		// 3
            Dolsko: ["Sybillá 3. wiersz 35.", 3], 		// 4
            Gostyń: ["Sybillá 3. wiersz 36.", 4], 		// 12
            Sámbor: ["Sybillá 3. wiersz 37.", 5], 		// 6
            Msków: ["Sybillá 4. wiersz 1.", 6], 		// 7 
            Piłá: ["Sybillá 4. wiersz 2.", 7], 		// 8
            Zábno: ["Sybillá 4. wiersz 3.", 8], 		// 9
            Woynicz: ["Sybillá 4. wiersz 4.", 9], 		// 10
            Nur: ["Sybillá 4. wiersz 5.", 10], 		// 11
            Orchów: ["Sybillá 4. wiersz 6.", 11], 		// 12
            Zbąszyn: ["Sybillá 4. wiersz 7.", 12], 		//13
            Tárczyn: ["Sybillá 4. wiersz 8.", 13], 		// 14
            Półkpie: ["Sybillá 4. wiersz 9.", 14], 		// 15
            Máków: ["Sybillá 4. wiersz 10.", 15], 		// 16
            Płóńsko: ["Sybillá 4. wiersz 11.", 16], 		// 17
            Brzyská: ["Sybillá 4. wiersz 12.", 17], 		// 18
            Gąbin: ["Sybillá 4. wiersz 13.", 18], 		// 19
            Łágów: ["Sybillá 4. wiersz 14.", 19], 		// 20
            Górno: ["Sybillá 4. wiersz 15.", 20], 		// 21
        },
        
        Láśice: {
            Wieluń: ["Sybillá 9. wiersz 32.", 0.01], 		// 1
            Znin: ["Sybillá 9. wiersz 31.", 1], 		// 2
            Rádymno: ["Sybillá 9. wiersz 30.", 2], 		// 3
            Brzeńsk: ["Sybillá 9. wiersz 29.", 3], 		// 4
            Jásłowiec: ["Sybillá 9. wiersz 28.", 4], 		// 12
            Sol: ["Sybillá 9. wiersz 27.", 5], 		// 6
            Kuflów: ["Sybillá 9. wiersz 26.", 6], 		// 7 
            Denów: ["Sybillá 9. wiersz 25.", 7], 		// 8
            Bolesłáwiec: ["Sybillá 9. wiersz 24.", 8], 		// 9
            Sienno: ["Sybillá 9. wiersz 23.", 9], 		// 10
            Leszko: ["Sybillá 9. wiersz 22.", 10], 		// 11
            Kulitów: ["Sybillá 9. wiersz 21.", 11], 		// 12
            Striy: ["Sybillá 9. wiersz 20.", 12], 		//13
            Kiebłow: ["Sybillá 10. wiersz 3.", 13], 		// 14
            Petulicá: ["Sybillá 10. wiersz 2.", 14], 		// 15
            Zębrów: ["Sybillá 10. wiersz 1.", 15], 		// 16
            Suleiów: ["Sybillá 9. wiersz 37.", 16], 		// 17
            Zegan: ["Sybillá 9. wiersz 36.", 17], 		// 18
            Pinczów: ["Sybillá 9. wiersz 35.", 18], 		// 19
            Zywiec: ["Sybillá 9. wiersz 34.", 19], 		// 20
            Milczyce: ["Sybillá 9. wiersz 33.", 20], 		// 21
        },
        
        Niedźwiedzia: {
            Zarki: ["Sybillá 5. wiersz 16.", 0.01], 		// 1
            Września: ["Sybillá 5. wiersz 17.", 1], 		// 2
            Sąchoczyn: ["Sybillá 5. wiersz 18.", 2], 		// 3
            Kromołów: ["Sybillá 5. wiersz 19.", 3], 		// 4
            Buczác: ["Sybillá 5. wiersz 22.", 4], 		// 12
            Sanok: ["Sybillá 4. wiersz 37.", 5], 		// 6
            Póniec: ["Sybillá 5. wiersz 1.", 6], 		// 7 
            Ráwá: ["Sybillá 5. wiersz 2.", 7], 		// 8
            Woysłáwice: ["Sybillá 5. wiersz 3.", 8], 		// 9
            Ostrowia: ["Sybillá 5. wiersz 4.", 9], 		// 10
            Zárnowiec: ["Sybillá 5. wiersz 5.", 10], 		// 11
            Pakość: ["Sybillá 5. wiersz 6.", 11], 		// 12
            Bodzięćin: ["Sybillá 5. wiersz 7.", 12], 		//13
            Kłobucko: ["Sybillá 5. wiersz 8.", 13], 		// 14
            Gołup: ["Sybillá 5. wiersz 9.", 14], 		// 15
            Brodnica: ["Sybillá 5. wiersz 10.", 15], 		// 16
            Kráienká: ["Sybillá 5. wiersz 11.", 16], 		// 17
            Sleszyn: ["Sybillá 5. wiersz 12.", 17], 		// 18
            Pilcá: ["Sybillá 5. wiersz 13.", 18], 		// 19
            Myńsk: ["Sybillá 5. wiersz 14.", 19], 		// 20
            Powidz: ["Sybillá 5. wiersz 15.", 20], 		// 21
        },
        
        Nowogródká: {
            Brzyská: ["Sybillá 7. wiersz 35.", 0.01], 		// 1
            Skierbieszów: ["Sybillá 7. wiersz 34.", 1], 		// 2
            Trębowla: ["Sybillá 7. wiersz 33.", 2], 		// 3
            Urzędów: ["Sybillá 7. wiersz 32.", 3], 		// 4
            Rzeszów: ["Sybillá 7. wiersz 31.", 4], 		// 12
            Gowoczów: ["Sybillá 8. wiersz 14.", 5], 		// 6
            Węgrów: ["Sybillá 8. wiersz 13.", 6], 		// 7 
            Myślimice: ["Sybillá 8. wiersz 12.", 7], 		// 8
            Siećiechów: ["Sybillá 8. wiersz 11.", 8], 		// 9
            Krobia: ["Sybillá 8. wiersz 10.", 9], 		// 10
            Bieláwy: ["Sybillá 8. wiersz 9.", 10], 		// 11
            Fálków: ["Sybillá 8. wiersz 8.", 11], 		// 12
            Janowiec: ["Sybillá 8. wiersz 7.", 12], 		//13
            Głęboczek: ["Sybillá 8. wiersz 6.", 13], 		// 14
            Bedlno: ["Sybillá 8. wiersz 5.", 14], 		// 15
            Jáworniczek: ["Sybillá 8. wiersz 4.", 15], 		// 16
            Dębicá: ["Sybillá 8. wiersz 3.", 16], 		// 17
            Gielnów: ["Sybillá 8. wiersz 2.", 17], 		// 18
            Czchów: ["Sybillá 8. wiersz 1.", 18], 		// 19
            Hołbok: ["Sybillá 7. wiersz 37.", 19], 		// 20
            Jáworów: ["Sybillá 7. wiersz 36.", 20], 		// 21
        },
        
        Popielice: {
            Jásło: ["Sybillá 6. wiersz 21.", 0.01], 		// 1
            Sieluń: ["Sybillá 6. wiersz 22.", 1], 		// 2
            Włocłáw: ["Sybillá 6. wiersz 23.", 2], 		// 3
            Przedecz: ["Sybillá 6. wiersz 24.", 3], 		// 4
            Záłoszce: ["Sybillá 6. wiersz 25.", 4], 		// 12
            Brzéżek: ["Sybillá 6. wiersz 5.", 5], 		// 6
            Chełm: ["Sybillá 6. wiersz 6.", 6], 		// 7 
            Szczebrzeszyn: ["Sybillá 6. wiersz 7.", 7], 		// 8
            Knyszowo: ["Sybillá 6. wiersz 8.", 8], 		// 9
            Bábimost: ["Sybillá 6. wiersz 9.", 9], 		// 10
            Staw: ["Sybillá 6. wiersz 10.", 10], 		// 11
            Wąsoczyn: ["Sybillá 6. wiersz 11.", 11], 		// 12
            Steszów: ["Sybillá 6. wiersz 12.", 12], 		//13
            Mielec: ["Sybillá 6. wiersz 13.", 13], 		// 14
            Ośieczno: ["Sybillá 6. wiersz 14.", 14], 		// 15
            Szydłowiec: ["Sybillá 6. wiersz 15.", 15], 		// 16
            Złoczew: ["Sybillá 6. wiersz 16.", 16], 		// 17
            Wyszkowo: ["Sybillá 6. wiersz 17.", 17], 		// 18
            Gliniány: ["Sybillá 6. wiersz 18.", 18], 		// 19
            Lutów: ["Sybillá 6. wiersz 19.", 19], 		// 20
            Kurzelów: ["Sybillá 6. wiersz 20.", 20], 		// 21
        },
        
        Rosomaká: {
            Lwówek: ["Sybillá 7. wiersz 26.", 0.01], 		// 1
            Kolno: ["Sybillá 7. wiersz 27.", 1], 		// 2
            Iłkusz: ["Sybillá 7. wiersz 28.", 2], 		// 3
            Uście: ["Sybillá 7. wiersz 29.", 3], 		// 4
            Trzćiél: ["Sybillá 7. wiersz 30.", 4], 		// 12
            Szelechów: ["Sybillá 7. wiersz 10.", 5], 		// 6
            Wáwrzinczyce: ["Sybillá 7. wiersz 11.", 6], 		// 7 
            Opalenicá: ["Sybillá 7. wiersz 12.", 7], 		// 8
            Miedzybórz: ["Sybillá 7. wiersz 13.", 8], 		// 9
            Zychlin: ["Sybillá 7. wiersz 14.", 9], 		// 10
            Przyrów: ["Sybillá 7. wiersz 15.", 10], 		// 11
            Szyszków: ["Sybillá 7. wiersz 16.", 11], 		// 12
            Gąsáwá: ["Sybillá 7. wiersz 17.", 12], 		//13
            Chęciny: ["Sybillá 7. wiersz 18.", 13], 		// 14
            Bużenin: ["Sybillá 7. wiersz 19.", 14], 		// 15
            Drobnin: ["Sybillá 7. wiersz 20.", 15], 		// 16
            Kámieńsko: ["Sybillá 7. wiersz 21.", 16], 		// 17
            Járosław: ["Sybillá 7. wiersz 22.", 17], 		// 18
            Grocholice: ["Sybillá 7. wiersz 23.", 18], 		// 19
            Lopienno: ["Sybillá 7. wiersz 24.", 19], 		// 20
            Kożmin: ["Sybillá 7. wiersz 25.", 20], 		// 21
        },
        
        Rysiá: {
            Cieszkowice: ["Sybillá 2. wiersz 1.", 0.01], 		// 1
            Huchań: ["Sybillá 2. wiersz 2.", 1], 		// 2
            Bełz: ["Sybillá 2. wiersz 3.", 2], 		// 3
            Krákowiec: ["Sybillá 2. wiersz 4.", 3], 		// 4
            Laśko: ["Sybillá 2. wiersz 5.", 4], 		// 12
            Grodek: ["Sybillá 1. wiersz 22.", 5], 		// 6
            Fordan: ["Sybillá 1. wiersz 23.", 6], 		// 7 
            Łubin: ["Sybillá 1. wiersz 24.", 7], 		// 8
            Kępno: ["Sybillá 1. wiersz 25.", 8], 		// 9
            Dobczyce: ["Sybillá 1. wiersz 26.", 9], 		// 10
            Bábicá: ["Sybillá 1. wiersz 27.", 10], 		// 11
            Kłodáwá: ["Sybillá 1. wiersz 28.", 11], 		// 12
            Rymánów: ["Sybillá 1. wiersz 29.", 12], 		//13
            Słáwków: ["Sybillá 1. wiersz 30.", 13], 		// 14
            Próchnik: ["Sybillá 1. wiersz 31.", 14], 		// 15
            Miechów: ["Sybillá 1. wiersz 32.", 15], 		// 16
            Zbárasz: ["Sybillá 1. wiersz 33.", 16], 		// 17
            Rydźiná: ["Sybillá 1. wiersz 34.", 17], 		// 18
            Wiśniá: ["Sybillá 1. wiersz 35.", 18], 		// 19
            Tuchów: ["Sybillá 1. wiersz 36.", 19], 		// 20
            Ostrów: ["Sybillá 1. wiersz 37.", 20], 		// 21
        },
        
        Sobolá: {
            Brzostek: ["Sybillá 1. wiersz 7.", 0.01], 		// 1
            Dźiergów: ["Sybillá 1. wiersz 6.", 1], 		// 2
            Gołogóry: ["Sybillá 1. wiersz 5.", 2], 		// 3
            Zárnowá: ["Sybillá 1. wiersz 4.", 3], 		// 4
            Kászków: ["Sybillá 1. wiersz 3.", 4], 		// 12
            Koźirynek: ["Sybillá 1. wiersz 2.", 5], 		// 6
            Bochnia: ["Sybillá 1. wiersz 1.", 6], 		// 7 
            Fryálno: ["Sybillá 1. wiersz 21.", 7], 		// 8
            Iutroszyn: ["Sybillá 1. wiersz 20.", 8], 		// 9
            Dobrzycá: ["Sybillá 1. wiersz 19.", 9], 		// 10
            Zduny: ["Sybillá 1. wiersz 18.", 10], 		// 11
            Sulumrzyce: ["Sybillá 1. wiersz 17.", 11], 		// 12
            Szymbárk: ["Sybillá 1. wiersz 16.", 12], 		//13
            Turobin: ["Sybillá 1. wiersz 15.", 13], 		// 14
            Pleszów: ["Sybillá 1. wiersz 14.", 14], 		// 15
            Dobrogoszcz: ["Sybillá 1. wiersz 13.", 15], 		// 16
            Jároczewo: ["Sybillá 1. wiersz 12.", 16], 		// 17
            Moráczewo: ["Sybillá 1. wiersz 11.", 17], 		// 18
            Siedlec: ["Sybillá 1. wiersz 10.", 18], 		// 19
            Kwiatków: ["Sybillá 1. wiersz 9.", 19], 		// 20
            Krotyszyn: ["Sybillá 1. wiersz 8.", 20], 		// 21
        },
        
        Tchorzá: {
            Wárzymów: ["Sybillá 2. wiersz 4.", 0.01], 		// 1
            Szrákowo: ["Sybillá 2. wiersz 5.", 1], 		// 2
            Mośćiská: ["Sybillá 2. wiersz 6.", 2], 		// 3
            Skármierz: ["Sybillá 2. wiersz 7.", 3], 		// 4
            Wolbran: ["Sybillá 2. wiersz 8.", 4], 		// 12
            Swierców: ["Sybillá 10. wiersz 25.", 5], 		// 6
            Roátyn: ["Sybillá 10. wiersz 26.", 6], 		// 7 
            Zwoleń: ["Sybillá 10. wiersz 27.", 7], 		// 8
            Ostrzeszów: ["Sybillá 10. wiersz 28.", 8], 		// 9
            Mosiná: ["Sybillá 10. wiersz 29.", 9], 		// 10
            Niebylec: ["Sybillá 10. wiersz 30.", 10], 		// 11
            Grzegorzów: ["Sybillá 10. wiersz 31.", 11], 		// 12
            Iłżá: ["Sybillá 10. wiersz 32.", 12], 		//13
            Kołomyia: ["Sybillá 10. wiersz 33.", 13], 		// 14
            Grábów: ["Sybillá 10. wiersz 34.", 14], 		// 15
            Czyrwieńsko: ["Sybillá 10. wiersz 35.", 15], 		// 16
            Bróg: ["Sybillá 10. wiersz 36.", 16], 		// 17
            Lubaczów: ["Sybillá 10. wiersz 37.", 17], 		// 18
            Czucz: ["Sybillá 2. wiersz 1.", 18], 		// 19
            Iłów: ["Sybillá 2. wiersz 2.", 19], 		// 20
            Stobnica: ["Sybillá 2. wiersz 3.", 20], 		// 21
        },
        
        Wiewiórki: {
            Sępelbork: ["Sybillá 10. wiersz 9.", 0.01], 		// 1
            Kleczów: ["Sybillá 10. wiersz 10.", 1], 		// 2
            Brzozów: ["Sybillá 10. wiersz 11.", 2], 		// 3
            Stárościanki: ["Sybillá 10. wiersz 12.", 3], 		// 4
            Krzywcza: ["Sybillá 10. wiersz 13.", 4], 		// 12
            Lelów: ["Sybillá 10. wiersz 14.", 5], 		// 6
            Drohobicz: ["Sybillá 10. wiersz 15.", 6], 		// 7 
            Stawiszyn: ["Sybillá 10. wiersz 16.", 7], 		// 8
            Grzymiszów: ["Sybillá 10. wiersz 17.", 8], 		// 9
            Smielów: ["Sybillá 10. wiersz 18.", 9], 		// 10
            Krasnostaw: ["Sybillá 10. wiersz 19.", 10], 		// 11
            Bobowa: ["Sybillá 10. wiersz 20.", 11], 		// 12
            Liw: ["Sybillá 10. wiersz 21.", 12], 		//13
            Sobótka: ["Sybillá 10. wiersz 22.", 13], 		// 14
            Kopánice: ["Sybillá 10. wiersz 23.", 14], 		// 15
            Járocin: ["Sybillá 10. wiersz 24.", 15], 		// 16
            Przeworsko: ["Sybillá 10. wiersz 4.", 16], 		// 17
            Striyków: ["Sybillá 10. wiersz 5.", 17], 		// 18
            Rzemień: ["Sybillá 10. wiersz 6.", 18], 		// 19
            Syroczec: ["Sybillá 10. wiersz 7.", 19], 		// 20
            Wysokié: ["Sybillá 10. wiersz 8.", 20], 		// 21
        },
        
        Wilká: {
            Grodźisko: ["Sybillá 3. wiersz 27.", 0.01], 		// 1
            Kostrzyn: ["Sybillá 3. wiersz 28.", 1], 		// 2
            Rádzieiów: ["Sybillá 3. wiersz 29.", 2], 		// 3
            Oborniki: ["Sybillá 3. wiersz 30.", 3], 		// 4
            Máłogoszcz: ["Sybillá 3. wiersz 31.", 4], 		// 12
            Czárnków: ["Sybillá 3. wiersz 11.", 5], 		// 6
            Legonice: ["Sybillá 3. wiersz 12.", 6], 		// 7 
            Gębicá: ["Sybillá 3. wiersz 13.", 7], 		// 8
            Cieszylesy: ["Sybillá 3. wiersz 14.", 8], 		// 9
            Opátowek: ["Sybillá 3. wiersz 15.", 9], 		// 10
            Niżánkowice: ["Sybillá 3. wiersz 16.", 10], 		// 11
            Márgonin: ["Sybillá 3. wiersz 17.", 11], 		// 12
            Wieliczká: ["Sybillá 3. wiersz 18.", 12], 		//13
            Piątek: ["Sybillá 3. wiersz 19.", 13], 		// 14
            Zgłobień: ["Sybillá 3. wiersz 20.", 14], 		// 15
            Kłocko: ["Sybillá 3. wiersz 21.", 15], 		// 16
            Bnin: ["Sybillá 3. wiersz 22.", 16], 		// 17
            Laśkárzów: ["Sybillá 3. wiersz 23.", 17], 		// 18
            Kielce: ["Sybillá 3. wiersz 24.", 18], 		// 19
            Chełmża: ["Sybillá 3. wiersz 25.", 19], 		// 20
            Duklá: ["Sybillá 3. wiersz 26.", 20], 		// 21
        },
        
        Wydry: {
            Gołanczá: ["Sybillá 4. wiersz 32.", 0.01], 		// 1
            Koźiegłowy: ["Sybillá 4. wiersz 33.", 1], 		// 2
            Bráńsk: ["Sybillá 4. wiersz 34.", 2], 		// 3
            Káńczugá: ["Sybillá 4. wiersz 35.", 3], 		// 4
            Horynin: ["Sybillá 4. wiersz 36.", 4], 		// 12
            Lutomiersko: ["Sybillá 4. wiersz 16.", 5], 		// 6
            Ciechanów: ["Sybillá 4. wiersz 17.", 6], 		// 7 
            Gárwolin: ["Sybillá 4. wiersz 18.", 7], 		// 8
            Felsztyn: ["Sybillá 4. wiersz 19.", 8], 		// 9
            Drzewicá: ["Sybillá 4. wiersz 20.", 9], 		// 10
            Ryszkowo: ["Sybillá 4. wiersz 21.", 10], 		// 11
            Inowłódz: ["Sybillá 4. wiersz 22.", 11], 		// 12
            Nowotaniec: ["Sybillá 4. wiersz 23.", 12], 		//13
            Strzeżów: ["Sybillá 4. wiersz 24.", 13], 		// 14
            Popów: ["Sybillá 4. wiersz 25.", 14], 		// 15
            Ostróda: ["Sybillá 4. wiersz 26.", 15], 		// 16
            Zadybie: ["Sybillá 4. wiersz 27.", 16], 		// 17
            Rátno: ["Sybillá 4. wiersz 28.", 17], 		// 18
            Wrónki: ["Sybillá 4. wiersz 29.", 18], 		// 19
            Olsztynek: ["Sybillá 4. wiersz 30.", 19], 		// 20
            Międzychód: ["Sybillá 4. wiersz 31.", 20], 		// 21
        },
        
        Záiącá: {
            Radomskie: ["Sybillá 9. wiersz 1.", 0.01], 		// 1
            Ośieczno: ["Sybillá 8. wiersz 37.", 1], 		// 2
            Mieśćisko: ["Sybillá 8. wiersz 36.", 2], 		// 3
            Rćina: ["Sybillá 9. wiersz 19.", 3], 		// 4
            Máków: ["Sybillá 9. wiersz 18.", 4], 		// 12
            Pábijánice: ["Sybillá 9. wiersz 17.", 5], 		// 6
            Wąsosze: ["Sybillá 9. wiersz 16.", 6], 		// 7 
            Zegrze: ["Sybillá 9. wiersz 15.", 7], 		// 8
            Skáła: ["Sybillá 9. wiersz 14.", 8], 		// 9
            Wilczyno: ["Sybillá 9. wiersz 13.", 9], 		// 10
            Pczew: ["Sybillá 9. wiersz 12.", 10], 		// 11
            Rywotycz: ["Sybillá 9. wiersz 11.", 11], 		// 12
            Szubin: ["Sybillá 9. wiersz 10.", 12], 		//13
            Kámień: ["Sybillá 9. wiersz 9.", 13], 		// 14
            Bodzánów: ["Sybillá 9. wiersz 8.", 14], 		// 15
            Gośćin: ["Sybillá 9. wiersz 7.", 15], 		// 16
            Frystag: ["Sybillá 9. wiersz 6.", 16], 		// 17
            Będzyń: ["Sybillá 9. wiersz 5.", 17], 		// 18
            Grodźec: ["Sybillá 9. wiersz 4.", 18], 		// 19
            Kraśnik: ["Sybillá 9. wiersz 3.", 19], 		// 20
            Waśniów: ["Sybillá 9. wiersz 2.", 20], 		// 21
        },
        
    }

    const firstScreenTitles = {
        1: "Jeśli kto długo będzie żyw",
        2: "Jeśli kto będzie duchownym",
        3: "Jeśli kto będzie podwyższon",
        4: "Jeśli kto będzie fortunny",
        5: "Jeśli się czyje myślenie spełni",
        6: "Jeśli się dobrze ożenić",
        7: "Jeśli kto komu jest prawie",
        8: "Jeśli kto będzie co wysłuży ná panie",
        9: "Jeśli co dobrze czynić",
        10: "Jeśli kto będzie czego żąda",
        11: "Jeśli się kto ná miłości dobrze ma",
        12: "Jeśli dobrze do którego pana przystać",
        13: "Jeśli która porodzi syna albo dziewkę",
        14: "Jeśli którą białą głowę miłują",
        15: "Jeśli która pojmie dobrego męża",
        16: "Jeśli która rychło zá mąż pójdzie",
        17: "Jeśli kto będzie bogátym",
        18: "Jeśli dobrze być kupcem",
        19: "Jesli drogá będzie szcześliwa",
        20: "Jeśli kto zgubę najdzie",
        21: "Jeśli kto z świátá zejdzie",
    }

    const wróżby = {
        1: {
        1:"Żadnemu Bóg nie raczył dać tego, <br/>Iżby wiedział wiek zdrowia swego.<br/>Wszakże to powiem iście tobie,<br/>Że ty pomieszkasz na świecie sobie.",
        
        2:"Ty masz myśli rozdwojone,<br/>Chcesz być popem, chcesz mieć żonę.<br/>Para asów tobie prorokuje,  <br/>Że cię kurwa uczaruje.",
        
        3:"Sprawiedliwieć życzę tego,<br/>Dojdziesz rządu wysokiego,<br/>Będziesz podwyższon nad swój stan,<br/>Ze się temu będziesz dziwować sam.",
        
        4:"Abyś iście temu wierzyć chciała,<br/>Nie będziesz ty rychło męża miała.<br/>Muszę-ć teraz prawdą dojąć.<br/>Złaś, rozpustna, nie śmie cię nikt pojąć.",
        
        5:"Masz mieć szczęście w rzeczy każdej<br/>W młodości i w starości swej.<br/>Przyjdziesz ku stanu wysokiemu,<br/>Uczynisz cześć domowi swemu.",
        
        6:"Chceszli w tym mej rady użyć,<br/>Nie radzę-ć tu dłużej służyć,<br/>Bo acz ty w tym panie nadzieję masz,<br/>Wiecznie jednak pożytku nie doznasz.",
        
        7:"Dobry panie, bądź w tym upewnieniu,<br/>Myśli twoje przyjdą ku skończeniu.<br/>Acz ty o tym małe dufanie masz,<br/>Będzieć lepiej, niżli się nadziewasz.",
        
        8:"Ten, który cię pojąć obiecuje,<br/>Już temu wierz, że cię nie miłuje.<br/>Tak się to on tylko z ciebie śmieje,<br/>Nie miej w nim żadnej nadzieje.",
        
        9:"Często pomyślasz o żenie,<br/>A mnie też żądasz o poradzenie.<br/>Jeślić się bogata nagodzi,<br/>Wieręć jej pojąć nie szkodzi.",
        
        10:"Możesz o tym nikąska nie myślić,<br/>Abyś kiedy miał panem być,<br/>Bo się ku statku nic nie chcesz mieć, <br/>Jedno by też pić, srać a jeść.",
        
        11:"Bracie miły, miej się do kupiectwa, <br/>A poniechaj wszelkiego rzemiosła.<br/>Będziesz li rzemieślnikiem, wszytko stracisz,<br/>Kupcem będąc, tedy się zbogacisz.",
        
        12:"Baczę, żeć się tym nie zachowam,<br/>Boć tu prawdę w oczy wyznam,<br/>Wszytko ważysz na gładkiego,<br/>A musisz mieć chłopa mierzioneg.",
        
        13:"Masz mieć fortunę w swej rzeczy,<br/>Którą teraz masz na pieczy.<br/>A w tym namniej nie pochybuj,<br/>Lecz się tu już ku posesyjej gotuj.",
        
        14:"Kochasz się barzo w swej miłej,<br/>A rad czynisz wszytko dla niej.<br/>Ona też na cię silno łaskawa,<br/>Rada by cię w wychodzie widziała.",
        
        15:"Jeśli chcesz rozkoszy użyć,<br/>Radzę-ć duchownemu służyć.<br/>Będziesz miał wiele ku woli swej,<br/>Podziękujesz mi z rady mej.",
        
        16:"Ty byś rada tego doczekała,<br/>Abyś tym połogiem syna miała,<br/>Ale bądź upewniona w tym:<br/>Będzie dziewka, nie będzie syn.",
        
        17:"Naśladuj w tym Boskiego uczenia,<br/>Nie daj z siebie nigdy pogorszenia,<br/>Dobremu się zawżdy dobrze stanie,<br/>Miewa każdy dobre dokonanie.",
        
        18:"Ty by przysiągł, że to przyjaźń prawa,<br/>Gdy z tobą kto łaskawie co sprawia.<br/>Ale ty mnie wierz, jeśli chcesz,<br/>Kto co liże, tego się strzeż.",
        
        19:"Za toć pewnie ślubić mogę,<br/>Że masz mieć szczęśliwą drogę;<br/>Jedno wyjedź co narychlej<br/>A nie odwłaczaj woley swej.",
        
        20:"Możesz przestać o tym myślić,<br/>Abyś zaś miał ku tej rzeczy przydź,<br/>Którąś zgubił niedbalstwem swym;<br/>Będzie się inszy kochał w tym.",
        
        21:"Coś przedsięwziął śmiele konaj,<br/>A odradzać sobie nie daj.<br/>Będziesz mieć pożytek z tego<br/>I cześć większą, niż z czego inszego.",
        
        22:"Bądź pokorny co możesz nawięcej,<br/>A chciej się strzec zwady wszelkiej,<br/>Barzo mię twe fata straszą,<br/>Byś nie przyszedł o żywot przez czasu.",
        
        23:"Radzę-ć, miej się ku święceniu,<br/>Tak przyjdziesz i dobremu mieniu,<br/>Kapłaństwo-ć dobroć przystoi,<br/>Gdyć się w tobie gamractwo ukoi.",
        
        24:"Powiem ci pewnymi słowy,<br/>Niechając tej próżnej wymowy,<br/>Ty na wieki nie powstaniesz,<br/>Jeszcze rychlej lekkości dostaniesz. ",
        
        25:"Wiedz to, panno, za pewną wieść,<br/>Tobie rychło przy mężu sieść.<br/>Nie wynidzie spełna ćwierć roku,<br/>Będzieć legał małżonek przy boku.",
        
        26:"Cokolwiek będziesz począć chciał,<br/>Nigdy szczęścia nie będziesz miał,<br/>Boś barzo silnem gamratem,<br/>A u każdej statecznej ingratem.",
        
        27:"Miej nadzieję w swoim panie:<br/>Dosyć ci się za służbę dostanie,<br/>Ale bądź co najpilniejszy,<br/>Tegoć trzeba w czas dzisiejszy.",
        
        28:"Myślisz próżno barzo wiele,<br/>Nie potka cię iście to wesele.<br/>A radzę-ć, myśl co inszego,<br/>A poniechaj myślenia pierwszego.",
        
        29:"Słuchaj pilnie, biała głowo,<br/>Masz usłyszeć wdzięczne słowo,<br/>Miłuje cię panic nad wsze insze,<br/>Nie jest mu żadne stworzenie milsze.",
        
        30:"Słuchaj pilnie, co poradzę,<br/>Wierz mi, że cię w tym nie zdradzę,<br/>Nie pojmuj ty nigdy żony,<br/>Patrz obeścia z innej strony.",
        
        31:"Będziesz Panem w rychłym czasie,<br/>Jednoć powiem drugie zasię,<br/>Pamiętaj miłemu Bogu służyć,<br/>Aby-ć dał państwa we zdrowiu użyć.",
        
        32:"Lepiej by tobie buty szyć,<br/>Niźliby miał kupczykiem być,<br/>Boś pachołek barzo głupi,<br/>Nie zyszczesz ty nic na kupi.",
        
        33:"Służ Bogu a bądź cnotliwą,<br/>Powiem ci nowinę miłą,<br/>Będziesz mieć męża pięknego,<br/>Dobrego, mądrego i bogatego.",
        
        34:"Ta rzecz, o którą się starasz,<br/>Nie dojdzie cię sam to poznasz,<br/>A też nie masz o co prosić,<br/>Będziesz tego po chwili mieć dosyć.",
        
        35:"Bądź wesół w swojej miłości,<br/>Bo w niej używiesz radości.<br/>Na tym ci jest miła twoja,<br/>Abyć na wolą czyniła.",
        
        36:"Porucz się Bogu miłemu,<br/>Służ przedsię panu pierwszemu,<br/>A nie przystaj do inszego,<br/>Chceszli potym nie żałować tego.",
        
        37:"Abyś temu zupełnie wierzyła,<br/>Będziesz miała nadobnego syna,<br/>A dziewkę też w drugim roce,<br/>Będzie li kto legał przy twym boce.",
        },
        
        2: {
        1:"Od młodości zawżdyś złym był,<br/>Każdy to po tobie baczył.<br/>Przeto musisz marnie zginąć, <br/>Hańba cię nie może minąć.",
        
        2:"Abyć tak każdy dobrze był, <br/>Jako ten coś nań pomyślił,<br/>Tedy by się u ludzi dobrze miał,<br/>Żeby w tym z każdym porównał.",
        
        3:"Ja by tobie chciała radzić,<br/>Byś mi w tym chciał powolen być,<br/>Abyś dał pokój tej drodze,<br/>Nie chcesz li mieć rany w nodze.",
        
        4:"Nie chciej tego powiedzieć nikomu,<br/>Jest twa zguba u jednego w domu,<br/>A ma-ć się zaś iście wrócić,<br/>Jedno tego chciej pilen być.",
        
        5:"Używaj w tym rady ludzkiej,<br/>Nie chciej nigdy rzeczy takiej,<br/>Która rada próżni mieszki  <br/>Kto utraci, niecudne to śmieszki.",
        
        6:"Tyś przyrodzenia trwałego<br/>I żołądka barzo wybornego,<br/>Będzieszli się chował miernie,<br/>Dojdziesz sta lat, to wiedz pewnie.",
        
        7:"Czystać rzecz jest kapłanem być, <br/>Panu Bogu wiernie służyć,<br/>Ale ja tak o tobie rozumiem,<br/>Że ty nigdy nie będziesz duchownem.",
        
        8:"Baczę to po twej postawie,<br/>Ześ jest baczny w każdej sprawie,<br/>Przeto dla tej twej baczności,<br/>Dojdziesz silnej dostojności.",
        
        9:"Przejdzie jeszcze czasu wiele,<br/>Niżli u ciebie będzie wesele.<br/>Twą rozpustność słyszeć wszędzie,<br/>Żadny mądry twym mężem nie będzie.",
        
        10:"Szczęście-ć wielkie obiecuję, <br/>Na długi czas toć ślubuję,<br/>Cokolwiek będziesz chciał działać,<br/>W każdej rzeczy masz szczęście znać.",
        
        11:"Miej ku tym słowom pilne uszy,<br/>Wiem, żeć twój pan siła tuszy,<br/>Ale dam się osrać na krzyż,<br/>Jeśli na nim co wysłużysz.",
        
        12:"Powiedzą-ć dryje, jeśli chcesz:<br/>W swym myśleniu dobry koniec weźmiesz,<br/>Jedno się ku temu pilnie miej,<br/>Panu swemu usługować umiej.",
        
        13:"Daj ty pokój młodzieńcowi temu,<br/>Boś nierówna niewymownie ku niemu.<br/> A też to wiedz, że cię nie miłuje, <br/>Łaski-ć nieco na żart okazuje.",
        
        14:"Przebóg pofolguj myśli swej,<br/>A ożeń się co możesz najrychlej,<br/>Boć to będzie ku twemu polepszeniu,<br/>I przyjacielom ku pocieszeniu.",
        
        15:"Cóż bych ci miał próżno tuszyć,<br/>Panem wiecznie nie możesz być,<br/>Leda z łotrem ty się zbracisz,<br/>Tak, że co masz, z nim utracisz.",
        
        16:"Kupiectwa ja nie odradzam tobie,<br/>Bo w nim możesz siła zwyśić sobie,<br/>Aleć radzę nic borgować,<br/>Chceszli na tym nie szkodować.",
        
        17:"Nie tak się to trzeba rzędzić,<br/>Kto ma ku dobremu mężu przydź,<br/>Aleś ty już w rozpustność wstąpiła<br/>I sromuś już barzo natraciła.",
        
        18:"Nie troszcz się nic synu miły,<br/>Ta rzecz ciebie nic pochybi,<br/>Możesz się o nię nie troskać,<br/>Masz jej bez wątpienia dostać.",
        
        19:"Obacz się, dudku, w swej głupości,<br/>Nie barzoś poczesny ku miłości,<br/>Przestań serca kazić sobie,<br/>Boć nierówna silno ku tobie.",
        
        20:"Nie służ panu niewdzięcznemu,<br/>Przystań śmiele ku inszemu.<br/>Rychlej zwyśszysz niż u tego,<br/>Dostaniesz czego wiecznego.",
        
        21:"Powiedz mi, co byś woliła,<br/>Jeśli dziewkę, jeśli syna?<br/>Będziesz iście syna miała,<br/>Z taką dziurą jakoś sama.",
        
        22:"Dla twojej sprawiedliwości,<br/>Będziesz mieć dosyć radości.<br/>Na tym i na onym świecie<br/>I z pamięcią wyborną umrzecie.",
        
        23:"Gdyż to chcesz ode mnie wiedzieć,<br/>Muszę-ć to teraz powiedzieć:<br/>Ten, któregoś teraz myślił,<br/>Rad by cię w łyżce wody utopił.",
        
        24:"Wiem, że się na drogę bierzesz,<br/>A powiem ci, że nieźle chcesz,<br/>Bo to będzie ku powstaniu twemu <br/>I ku pożytkowi niemałemu.",
        
        25:"Miej pracę o inszej rzeczy,<br/>A zguby nie miej na pieczy,<br/>Bo byś się na wieki troskał,<br/>Tedy nie wiem, byś jej zasię dostał.",
        
        26:"Jedno Boga proś o zdrowie,<br/>A miej wszystko pogotowie.<br/>Pocznisz swą rzecz, gdy jedno chcesz,<br/>Iście z niej pożytek weźmiesz.",
        
        27:"Ten świata długo pożywie,<br/>Jeśli go kto nie zabije,<br/>Ale mu trudno bydź tego,<br/>Bo nie czyni nic dobrego.",
        
        28:"Barzo prędkie dziwne myśli twoje,<br/>Myślisz drugdy na dwoję, na troję,<br/>Ale to niechaj ode mnie słynie,<br/>Że cię szara kapica nie minie.",
        
        29:"Acz się ty nad insze wynosisz,<br/>Jednak nic takiego nie uprosisz,<br/>Czym byś miał nad insze słynąć,<br/>Jeszcze ku temu waruj marnie zginąć.",
        
        30:"Tego maja, który ma przydź,<br/>Masz iście za starego idź, <br/>Ale na tym nie będziesz szkodować,<br/>Będziesz młodsze od niego miłować.",
        
        31:"Gdyż to chcesz ode mnie wiedzieć,<br/>Ninacz szczęścia nie będziesz mżeć,<br/>Jeszcze-ć muszę ten strach zadać,<br/>Waruj gardła marnie stradać.",
        
        32:"To jest pewna, synaczku, nowina,<br/>Miłuje cię twój pan jako syna.<br/>Z jego ręki masz panem być,<br/>Jedno mu chciej wiernie służyć.",
        
        33:"Wielka głupość jest to myślić,<br/>Ku czemu człowiek nie może przydź.<br/>Takowe ty myślenie masz,<br/>Przeto też w nim wesela nie uznasz.",
        
        34:"Nie wątp namniej w swoim miłym,<br/>Ma cię głęboko w sercu swym.<br/>Nie będzie mu taka żadna miła,<br/>Która by cię do niego skaziła.",
        
        35:"Radzę-ć, abyś nie pomyślał,<br/>Byś się kiedy ożenić miał,<br/>Boć żona zawżdy nałaje,<br/>Będziesz u niej stał za jaje.",
        
        36:"Pierwej nie będziesz skarbu mieć,<br/>Aż musisz na swym chlebie sieść.<br/>Po tym dojdziesz zacnej żony,<br/>Będzieć rosło z każdej strony.",
        
        37:"To wiedz, że ty z kupiectwa nic nie masz,<br/>A też z rodu słowa nierad trzymasz,<br/>A tacy więc wszytko utracają,<br/>Co w kupiectwie słowa nie trzymają.",
        },
        
        3: {
        1:"Kiedy byś mi wierzyć chciała,<br/>Będziesz w rychle męża miała,<br/>A pożywiesz z nim bytu dobrego,<br/>Nie będziesz li patrzyła inszego.",
        
        2:"Pięknie twa rzecz z przodku pojdzie,<br/>Lecz cię na koniec nie dojdzie,<br/>Boć przekazi towarzysz twój,<br/>Każdy woli pożytek swój. ",
        
        3:"Bądź w tej miłości serca dobrego,<br/>Dostaniesz u miłej wszego.<br/>A umiem powiedzieć tobie,<br/>Żeć nie ma milszego sobie.",
        
        4:" Umyśliłeś sobie indzie przystać,<br/>Ale tam nic nie masz zyskać.<br/>Cynek z asem tobie wiernie radził,<br/>Byś się na obietnicy nie sadził.",
        
        5:" Miła pani, bądź wesoła z tego,<br/>Doczkasz wrichle płodu nadobnego.<br/>A taki płód będziesz miała,<br/>Jakiegoś od Boga pożądała.",
        
        6:"Synaczku, słuchaj coć powiem,<br/>Toć mówię, o czym dobrze wiem,<br/>Nie byłeś za młodu w grozie,<br/>Boję się, byś nie był na powrozie.",
        
        7:"Ten, o którym teraz pytasz,<br/>Miłuje cię, sam dobrze znasz,<br/>Ale go ty nie miłujesz zasię,<br/>Ukazujesz swą niecnotę na się. ",
        
        8:"Droga, którą masz przed sobą,<br/>Chcę się ja założyć z tobą,<br/>Zeć będzie ku wielkiej szkodzie<br/>I sam przyjdziesz ku dziwnej przygodzie.",
        
        9:"Chceszli dostać zguby swojej,<br/>Słuchajże w tym rady mojej,<br/>Chciej szukać w kupie kamienia,<br/>Tam ją najdziesz bez wątpienia.",
        
        10:"Jeśli mię w tym chcesz posłuchać,<br/>Radzę-ć tej rzeczy pokój dać,<br/>Którą teraz na myśli masz,<br/>Jeśli poczniesz, źle jej dokonasz.",
        
        11:"Chcesz li, abyś długo żyw był,<br/>Radzę-ć, abyś Bogu służył,<br/>Bo jeśli nie umrzesz lecie,<br/>Pomieszkasz długo na świecie.",
        
        12:"Będziesz duchownym, ale złym,<br/>Zgorszysz wiele ludzi przykładem swym,<br/>A toć ma nawięcej szkodzić,<br/>Ze cię kurwa za nos będzie wodzić.",
        
        13:"Żadny jak żyw z rodu twego<br/>Nie dostąpił miejsca tak zacnego,<br/>Jakiego ty masz dostąpić,<br/>Jedno nie chciej nazbyt skąpić.",
        
        14:"Możesz o tym ni kąska nie myślić<br/>Abyś miała rychło za kogo idź,<br/>Boś za młodu barzo przebierała,<br/>Tak żeś też już sobie podstarzała.",
        
        15:"Bądź pocieszon z powieści mej:<br/>Masz mieć szczęście z łaski Bożej.<br/>W każdej swej pobożnej sprawie,<br/>Wszytkoć się szczęśliwie stanie.",
        
        16:"Wiecznie w tym nadzieję nie miej,<br/>Byś wziął pożytek z służby swej,<br/>Bo twój pan jest barzo ścisły,<br/>A dziś dziwne lata przyszły.",
        
        17:"Myślenie twe jest ci słuszne dosyć,<br/>Spełni się, będziesz li rychło prosić.<br/>Jedno w tym poczynaj śmiele,<br/>Bój zaspać gruszki w popiele.",
        
        18:"Pan, na któregoś ty pomyśliła,<br/>Na wieki nie będzie taki wiła,<br/>Aby ciebie miłować miał,<br/>Bo niestałość w tobie poznał.",
        
        19:"Ożeń się, radzę-ć, za młodu,<br/>Chcesz li doczkać nieco płodu,<br/>Jeśli omieszkasz do roku,<br/>Omierznie-ć żona przy boku.",
        
        20:"Tobie wiecznie nędznikiem być,<br/>Bo kto z młodu nie chce robić,<br/>Na to mu po tym przychodzi,<br/>Że więc z mantykami chodzi.",
        
        21:"Chceszli, synaczku, kupcem być, <br/>Możesz kupcząc ku chlebu przydź,<br/>Ale chciej być nieleniwy,<br/>Sprawny, baczny a nie łżywy.",
        
        22:"Żal by się Boże kogo dobrego,<br/>By miał żądać towarzystwa twego,<br/>Gdyś tak jest mierziona i leniwa,<br/>A to gorsza, żeś niesromięźliwa.",
        
        23:"Chceszli mieć swą rzecz powoli, <br/>Naprawże swe przyjacioły,<br/>A sam przed się pilność działaj,<br/>Towarzyszom się nie zwierzaj.",
        
        24:"Wiedz ty o tym, iż tam, gdzie miłujesz,<br/>Na miłości namniej nie zyskujesz,<br/>A prawie się twoja miła wstydzi,<br/>Gdy cię kolwiek w swoim domu widzi.",
        
        25:"Radzę-ć do młodszego przystać,<br/>Chcesz li nieco w służbie zyskać,<br/>Bo młody pospolicie utraca,<br/>Tam sługa zwyśi, który nie straca.",
        
        26:"Abyś temu wierzyć chciała,<br/>Ty nie będziesz syna miała,<br/>Ale dziewczysko szkarade,<br/>Lisowate, ku temu zawżdy blade.",
        
        27:"Na saniach się nie chciej wozić,<br/>Toć by miało zdrowiu szkodzić,<br/>Będziesz li się tej woźby strzedz,<br/>Umrzesz dobrze, to iście wiedz.",
        
        28:"Człowiek, którego w myśli masz,<br/>Jest zakryty, a tego nie znasz.<br/>Możeć się stawić łaskawie,<br/>Aleć z żadnym nigdy nie jest prawie.",
        
        29:"Na tę drogę prześpiecznie jedź,<br/>Masz mieć szczęście, to iście wiedz.<br/>A radzę-ć: chciej rychło jechać,<br/>Masz tam silną fortunę znać.",
        
        30:"Coś stracił, już nie myśl o tym, <br/>Przyrzekam ci to słowem swym, <br/>żeć się to już wrócić nie ma,<br/>Bo ten, co wziął, duże trzyma.",
        
        31:"Słuszną ty rzecz na myśli masz,<br/>A źle czynisz, że jej mieszkasz,<br/>Przeto nie odkładaj więcej,<br/>Bo będziesz mieć pożytek z niej.",
        
        32:"Nie wiem, jakoć to mam zjawić,<br/>Nie chciałać bym serca kazić,<br/>Radzęć się konia barzo strzedz,<br/>Nie chcesz li przed czasem umrzeć.",
        
        33:"Duchownym być jest rzecz czysta,<br/>Ty nim będziesz, to jest ista,<br/>A jedziesz prawie na gody,<br/>Będziesz mieć dobre dochody.",
        
        34:"Baczę dobrze, na który stan godzisz,<br/>Każdy to zna, a tym sobie szkodzisz,<br/>Boś już podniósł wysoki umysł swój,<br/>Ubieży cię w tym nieprzyjaciel twój.",
        
        35:"Już się twa rzecz nie odwlecze,<br/>Pójdziesz za mąż w przyszłym lecie,<br/>Wszakżeć radzę, byś milczała,<br/>By cię insza w tym nie ubieżała.",
        
        36:"Znać, żeś się w czepku nie urodził,<br/>Nie w czaseś po szczęście chodził,<br/>Przetoć się go nie dostało<br/>I rozumu też masz mało.",
        
        37:"Służ przedsię z wielką pilnością,<br/>Weźmiesz zapłatę z radością,<br/>Czyście to po twym panie znać,<br/>Zeć ma dosyć za służbę dać.",
        },
        
        4: {
        1:"Nie myśl pyszno, miły bracie,<br/>Już mię jest srom barzo za cię.<br/>Jednak z twego myślenia nic,<br/>Jeszcze ku temu waruj o rozum przydź.",
        
        2:"Byś ty temu wierzyć chciała,<br/>Nigdyś większej wierności nie znała,<br/>Jaką ten ma naprzeciwko tobie,<br/>Coś go teraz pomyśliła sobie.",
        
        3:"Myślisz ty pilno o żenie,<br/>Iżby-ć się z nią dostało imienie.<br/>Ale by-ć miała po sobie tysiąc,<br/>Nie radzę jej tobie pojąć.",
        
        4:"Będziesz panem znamienitym<br/>I w swym państwie tak obfitym,<br/>Iż każdą rzecz będziesz mógł mieć,<br/>Którą jedno będziesz sam chcieć.",
        
        5:"Kupcem być ani pomyślaj,<br/>Inędy obchodu szukaj.<br/>Jeśli będziesz, bądź w nadziei,<br/>Że masz zginąć od złodziei.",
        
        6:"Chceszli mieć męża dobrego,<br/>Bierz poradę od starego,<br/>A nie bądź harda żadnemu,<br/>Bogatemu i też ubogiemu.",
        
        7:"Siła w tym człowjeku dufasz,<br/>Przez którego swą rzecz jednasz,<br/>A mógł ci by pomóc czyście,<br/>Aleć nie chce, to wiedz iście.",
        
        8:"Nie troszcz się nic w miłości swej,<br/>Nie możesz się u żadnej mieć lepiej.<br/>W dobrej jest a woli z sobą,<br/>Będzie rychło w jednym łożu z tobą.",
        
        9:"Nie chcęć radzić tam przystawać,<br/>Gdzie nic nie chcą z łaski dawać,<br/>A ty chcesz być u takiego,<br/>Co nie dawa i uroczystego.",
        
        10:"Pana Boga nie przestajesz prosić,<br/>By cię raczył synaczkiem pocieszyć,<br/>Otóż za proszenie twoje,<br/>Da-ć ich Pan Bóg razem dwoje.",
        
        11:"To nagorszy obyczaj masz,<br/>Że się z kurwami przemieniasz,<br/>Dziś jedna, a jutro wtóra,<br/> Strzeż, by cię nie otruła która.",
        
        12:"Wiem, że cię nie omylę w tym,<br/>Nie wątp nic w przyjacielu swym,<br/>Boć się silno kocha w tobie,<br/>Inaczej nie daj powiadać sobie.",
        
        13:"Nie jedź, radzę-ć, gdzieś umyślił,<br/>Boby jednak nic nie zwyśił,<br/>Jeszcze to tak chcę powiedzieć,<br/>Musiałby w więzieniu siedzieć.",
        
        14:"Chciej być serca wesołego,<br/>Masz naleść złodzieja swego,<br/>W poniedziałek, niżli słońce zajdzie,<br/>Przy którym się twoja zguba najdzie.",
        
        15:"Chceszli nie żałować potym,<br/>Niechaj tego, co masz w umyśle swym,<br/>Bo na tym utracisz siła,<br/>Zabłaznujesz by naczystszy wiła.",
        
        16:"Bacząc twoje przyrodzenie,<br/>Czas poczęcia, narodzenie,<br/>Mogę-ć to pewnie ślubować,<br/>Że masz dobrze przez sto lat trwać.",
        
        17:"Kapłanem tym nie będziesz iście,<br/>A też ci tak barzo czyście,<br/>Zwłaszcza gdy te lata nastawaią,<br/>Iż też na kapłany i wrony krakają.",
        
        18:"Bądź pocieszon z powieści mej, <br/>Uczynisz cześć rodzinie swej,<br/>Bo masz zacnym człekiem zostać,<br/>Bracia twoi mają przez cię powstać.",
        
        19:"Pysznaś, zła,  ku temu plugawa,<br/>Niewdzięczna, a smrodzisz rada,<br/>NIżeby jaki chłop szalony,<br/>Toż by sobie żądał takiej żony.",
        
        20:"Dufaj szczęściu, cokolwiek chcesz czynić,<br/>Nie zdradzi cię, nie będziesz go winić,<br/>Będzieć we wszem folgowało,<br/>By też i z powinności działało.",
        
        21:"Możesz dobrze sam pobaczyć,<br/>Że tu nie masz nic wysłużyć. <br/>Ponieważ ci pan nie daje,<br/>To zwyśisz, coć próżno łaje.",
        
        22:"Proś Boga, a miej się ku temu,<br/>A służ pilnie panu swemu.<br/>Spełni się twoje myślenie,<br/>Przez jednego pana przyczynienie.",
        
        23:"Nie miej nadzieje w swym miłym,<br/>Nie wierz jego słowom pięknym,<br/>Na toć się pilnie nasadził,<br/>Aby cię na twej czci przyzdradził.",
        
        24:"Jeśli chcesz mnie starej słuchać,<br/>Radzę-ć rychlej żony szukać,<br/>Bo niewolny siła za rok stoi,<br/>I barzo rad ku rtęci przystoi.",
        
        25:"Ty na wieki panem nie możesz być<br/>I to, co masz, wszytko masz utracić,<br/>Bo twój przodek nabywał barzo źle,<br/>Tak żeć też to imienie odejdzie.",
        
        26:"Dzierżę ja siła o tobie,<br/>Gdy z młodu myślisz o sobie,<br/>Radzę-ć tym rychlej kupcem być,<br/>Masz kupiectwie ku państwu przydź.",
        
        27:"Przez twą pychę i pierzchliwość<br/>Odpłoszysz sobie mężów dość,<br/>Wszak mi to jeden powiadał,<br/>Gdy cię poznał, by mu po gębie dał.",
        
        28:"W swej rzeczy się nic nie troszczy,<br/>Jedno jeszcze małą chwilę pożdży.<br/>Nie możeć to inaczej być,<br/>Ta rzecz ciebie nie ma chybić.",
        
        29:"Ty w swej szalonej miłości,<br/>Masz przydź ku wielkiej lekkości.<br/>A muszę-ć jawnie powiedzieć:<br/>Będzieć o tym wiele ludzi wiedzieć.",
        
        30:"Nie dawaj sobie rozradzać,<br/>Abyś nie miał indzie przystać,<br/>Gdy twój pan próżno swarzy,<br/>A zalić się indzie lepiej zdarzy.",
        
        31:"Wierę nic wiem, byś ty syna miała,<br/>Boś mężowi nic folgowała.<br/>Więcejś godziła sobie,<br/>Przeto dziewkę obiecuję tobie.",
        
        32:"Nic chciej nazbyt gmyrać w tym,<br/>Boć takowe dyjabeł bierze.<br/>Miej nadzieję w Bodze stałą,<br/>Zejdziesz z świata z wielką chwałą.",
        
        33:"Przebóg, bądź opatrzniejszy w tym,<br/>Nie wierz nigdy słowom pięknym,<br/>Nic trzeba się nic na słowa kwapić,<br/>Bo kto głaszcze ten więc chce ułapić.",
        
        34:"Kiedy chcesz, wyjechać możesz<br/>Na tej drodze się wspomożesz.<br/>Wszytkoć pójdzie po woli twej,<br/>Podziękujesz mi z rady mej.",
        
        35:"Próżno byś miał kogo winić,<br/>Nie chciałeś pilności czynić,<br/>Póki była łacniejsza rzecz,<br/>Lecz już zgubę wieziono precz.",
        
        36:"Powiadam to tobie, dobry panie,<br/>Twa rzecz ma mieć dobre dokonanie,<br/>A chceszli to wrychle poznać,<br/>Chciej nakładu nie żałować.",
        
        37:"By się ciebie i Apollo podjął,<br/>Byś też wszytkę aptekę wziął,<br/>Tedy z tego świata zejdziesz,<br/>Skoro w pierwszą niemoc przyjdziesz.", 
        },
        
        5: {
        1:"Panu Bogu barzo dziękuję z tego,<br/>Że rychło będziesz piastunem jego,<br/>A już się ku temu gotuj,<br/>Pocieszysz tym wszytek ród swój.",
        
        2:"Nie przyjdziesz na wieki ku temu,<br/>Byś uczynił cześć domowi swemu,<br/>Bo sam przez się chcesz dojdź tego,<br/>Waśnisz sobie na świecie każdego.",
        
        3:"Jako skoro przyszłe święta przyjdą,<br/>Tedy się do was gamraci zejdą.<br/>Tam się jeden piękny trafi,<br/>Który ciebie do matki połapi.",
        
        4:"Nie myśl o tym, abyś fortunę miał,<br/>Sam to poznasz, kiedy będziesz igrał,<br/>Żeć szczęście ma przeciwne być,<br/>Tak że zawżdy musisz nieco stracić.",
        
        5:"Potrwać jeszcze długo musisz,<br/>Niżli szczęścia przy swym panie skusisz,<br/>Ale jeśli twój pan nie utraci,<br/>Wierz mi, żeć służbę dobrze zapłaci.",
        
        6:"Powiem ci krótkimi słowy,<br/>Nie myśl próżno, nie psuj sobie głowy,<br/>Bo cokolwiek twój rozumek stroi,<br/>Wszystko to za gówno stoi.",
        
        7:"Ten człowiek, co myślisz o nim,<br/>Jest ci przyjacielem prawym,<br/>Masz być prawie łaskawa na niego,<br/>Boć życzy czci i wszego dobrego.",
        
        8:"Niechaj żony, panie bracie miły,<br/>Bo ja baczę, że w tobie nie masz siły,<br/>A ta rzecz chce wielkiej mocy,<br/>Robić zimie, lecie, we dnie, w nocy.",
        
        9:"To proroctwo ciebie nie omyli,<br/>Będziesz panem w rychłej chwili,<br/>Ale się strzeż byś nie upadł,<br/>Kiedyć będzie pięćdziesiąt lat.",
        
        10:"Synu, nie radzę-ć kupcem być,<br/>Chceszli wszego nie utracić,<br/>Bo co ociec z matką nabył,<br/>To by ty kupcząc utracił.",
        
        11:"Twa cudność, dobroć, mierność w mowie,<br/>Ta zjedna dobrego męża tobie,<br/>Boś jest godna męża szlachetnego,<br/>Jedno się nie zgarszaj z chwalenia mojego.",
        
        12:"Byś największą pilność działał,<br/>Tedy tego nie będziesz miał,<br/>Na co z dawna pilnie godzisz,<br/>Uporem swym sobie szkodzisz.",
        
        13:"Miłuj prześpiecznie, ale taj,<br/>Towarzyszom się nie zwierzaj,<br/>Boć się na to nasadzili,<br/>By cię u miłej skazili.",
        
        14:"Nic przystawaj ty do żonatego,<br/>Trafisz panią zadku waśniwego,<br/>Nie będzieszli na nię łazić,<br/>Będzie cię do pana kazić.",
        
        15:"Pani, bądź w radości z swoim panem,<br/>Syna nosisz, zdziej mu Janem,<br/>Doczekasz po nim radości,<br/>Jedno go miej za młodu w karności.",
        
        16:"W każdej zwadzie ciebie znajdzie,<br/>Lub we dnie, lub słońce zajdzie,<br/>Nie będzieszli się tych zwad strzedz,<br/>Zabiją cię, to iście wiedz.",
        
        17:"Nie wiem, abyś jednego miał,<br/>Coć by tak wiele sprzyjał,<br/>Jako ten, co o nim myślisz.<br/>Na tym się nic nie omylisz.",
        
        18:"Proszę cię, radzić sobie daj,<br/>Tej drogi teraz poniechaj,<br/>Pójdzieszli, nie lza mi tego przeć,<br/>Że masz na tej drodze umrzeć.",
        
        19:"Wiem, że będziesz rad nowinie,<br/>Zguba twoja już nie zginie,<br/>Bo o niej dobry człowiek wie,<br/>Aleć jeszcze tak rychło nie powie.",
        
        20:"Powiadam to tobie prawie,<br/>Nie miej nadzieje w swej sprawie,<br/>Abyć miała szczęśliwie idź,<br/>Musisz próżno o nakład przydź.",
        
        21:"Strzeż się apteki co możesz,<br/>Bo tym więcej skazisz, niż pomożesz.<br/>Jeśli się w lekarstwa nie wdasz,<br/>Dziewięćdziesiąt lat doczekasz.",
        
        22:"Jeśli się możesz z tego wykręcić,<br/>Miły bracie, nie dawaj się święcić,<br/>Źle czyni, kto cię do kielicha stroi,<br/>Lepiej ci z konewką przystoi.",
        
        23:"Dobry panie, prawdę-ć powiem,<br/>Masz być podwyszon w stanie swym.<br/>Będąć chcieć niektórzy kazić,<br/>Aleć to nie ma nic wadzić.",
        
        24:"O tym, dziewko, za pewne wiedz,<br/>Będzie się ciebie każdy strzec,<br/>Boś nazbyt świebodna w mowie,<br/>A to nie przysłusze białejgłowie.",
        
        25:"Matka, ociec i czas fortunny był,<br/>Dzień, godzina, w którąś się narodził,<br/>Masz pocieszyć swych przyjaciół wiele,<br/>Będą z ciebie mieć wielkie wesele.",
        
        26:"Żal mi cię, mój miły bracie,<br/>Że twój pan źle baczy na cię.<br/>Radzę-ć pomyślić o sobie,<br/>Boć ten pan nic nie da tobie.",
        
        27:"Dziwne ty przyrodzenie masz,<br/>Wiele myślisz, mało działasz,<br/>Wszakże cię w tym nie chcę winić<br/>Ma człek długo myślić, rychło czynić.",
        
        28:"Wiedz, że cię twój panic nie miłuje,<br/>Chociać nazbyt wiele obiecuje,<br/>Daszli się mu za nos wodzić,<br/>Będzie twej czci barzo szkodzić.",
        
        29:"Powiem ci pewnymi słowy:<br/>Pojmiesz dziewkę, nie dostaniesz wdowy,<br/>A jeśli więc tego nie omieszkasz,<br/>W radości z żonką pomieszkasz.",
        
        30:"To się ten ubóstwa barzo boi,<br/>A państwo mu namniej nie przystoi,<br/>I trudno by miał ku temu przyść,<br/>Musi wiecznie nędznikiem być.",
        
        31:"Gdy twe fata praktykuję,<br/>Kupcem masz być, tobie obiecuję,<br/>Ale musisz gardło ważyć,<br/>Chceszli z kupiectwa panem być.",
        
        32:"Słuchaj, córko, pilnie tego,<br/>Nie masz mieć męża dobrego,<br/>Sama go skazisz swą złością,<br/>Ale tego pożywiesz z lekkością.",
        
        33:"Na to możesz przespiecznie spać,<br/>Nie trzebać się namniej troskać,<br/>Twoja się rzecz dobrze ściele,<br/>Dokończy się do wielkiej niedziele.",
        
        34:"Hamuj się od swojej miłości,<br/>Nie ukazuj na się tej głupości,<br/>Nie baczysz nic, co się dzieje,<br/>Wszak się małpa z ciebie śmieje.",
        
        35:"Idź służyć, gdzie dawno myślisz,<br/>Bo tam iście siła zwysysz,<br/>Masz mieć pana łaskawego<br/>I ku temu barzo datnego.",
        
        36:"Prawda, że byś dziewkę wolała,<br/>Ale to wiedz, że będziesz syna miała.<br/>Mocniejszy jest twój pan niż ty w łożu,<br/>Przeto się po nim synowie mnożą.",
        
        37:"Jedno mężatkom daj pokój,<br/>Tedy się nic złego nie bój,<br/>Umrzesz jako dobremu przysłusze,<br/>A nie zawiedziesz swej dusze.",
        },
        
        6: {
        1:"Z tym człowiekiem, co na myśli masz,<br/>Nie towarzysz, bo na tym nie wygrasz. <br/>Boć dobrego twego nie sprzyjaje,<br/>Gdy je widzi, serce mu się kraje.",
        
        2:"Gdzieś umyślił, już więc wsiadaj,<br/>Na dalszy czas nie odkładaj,<br/>Chceszli tego pożytek mieć,<br/>Nabędziesz tam, co będziesz chcieć.",
        
        3:"Upewniam cię jako brata,<br/>Nie wróci się twoja strata,<br/>Bo już w dziwne ręce wpadła,<br/>A tam na wieki przepadła.",
        
        4:"W rzeczy, którą przed sobą masz,<br/>Iście szczęście wielkie uznasz.<br/>Jedno wżdy z nią pośpieszyć chciej,<br/>Weźmiesz wielki pożytek z niej.",
        
        5:"Za to ty sobie pewnie masz,<br/>Żeć to zdrowo, iż się tak opijasz,<br/>Ale tego chciej pewien być,<br/>Że masz w rychle żywot przepić.",
        
        6:"Radzę-ć, zostań już kapłanem lecie,<br/>Chceszli użyć rozkoszy na świecie,<br/>Ale chciej być przykładu dobrego,<br/>Nie chceszli wziąć upadku dusznego.",
        
        7:"Tobie na wieki nie powstać,<br/>Musisz tak w swej jusze zostać,<br/>Próżno się wysoko wznosisz,<br/>Nic zacnego sobie nie uprosisz.",
        
        8:"Ku czemu masz przydź, byś wiedziała,<br/>Iście by się barzo radowała,<br/>Już możesz na gody prosić,<br/>Masz tych czasów za wdowca iść.",
        
        9:"Ty masz szczęścia barzo mało,<br/>Tak mi się o tobie zdało,<br/>A wżdy się więc na nie sadzisz,<br/>Nie dufaj mu, iście się sam zdradzisz.",
        
        10:"Ty na swej służbie dzisiejszej,<br/>Nie masz podjąć szkody żadnej, <br/>To jest w tym otucha twoja,<br/>Zapłaci-ć się dobrze służba twoja.",
        
        11:"Ten siła myśli za młodu,<br/>Rad by przyszedł ku dobremu obchodu,<br/>Ale mu tak zez, cynki prorokuje,<br/>Że on próżno sobie głowę psuje.",
        
        12:"Przez twą wielką mierność w mowie<br/>Każdy będzie przyjacielem tobie.<br/>I ten, coś go teraz pomyśliła,<br/>Jest ci dobrze, toć pewna nowina.",
        
        13:"Nie kwap się pojmować żony,<br/>Boć ten szach nie ma obrony,<br/>Kto raz pojmie, już się nie wywierci,<br/>Musi z żoną mieszkać aż do śmierci.",
        
        14:"Ty się możesz nic nie troskać,<br/>Bo masz w rychle panem ostać,<br/>Umrze jeden pan bogaty,<br/>Spadną na cię jego płaty.",
        
        15:"Proszę cię, niechaj kupiectwa,<br/>Radszej się miej do rzemiosła,<br/>Boć w kupiectwie potrzeba chytrości,<br/>A w rzemieśle zejdą się i prości.",
        
        16:"Bądź pocieszona z mej mowy,<br/>Chciej mieć posag gotowy.<br/>Barzo rychło masz za mąż idź,<br/>A mąż ma nazbyt dobry być.",
        
        17:"W tej swej rzeczy, którąś począł,<br/>Ja nie tuszę, byś radość wziął,<br/>Bo twój towarzysz nie leży,<br/>Pewnie, że cię w tym ubieży.",
        
        18:"Co mi dasz, żeć prawdę powiem?<br/>Toć mówię, o czym dobrze wiem,<br/>O tym twoja miła myśli,<br/>Byście ku sobie rychło przyszli.",
        
        19:"Miły bracie, słuchaj mię w tym,<br/>A nie dufaj w rozumie swym,<br/>Nie radzę-ć indzie przystawać,<br/>Boć tam nie będą nic dawać.",
        
        20:"Ta mię doszła nowina o tobie,<br/>Że ty masz urodzić syna sobie,<br/>Który będzie to szczęście miał,<br/>Będzie go każdy miłował.",
        
        21:"Radzę-ć koni się wystrzegać,<br/>Chceszli gardła źle nie stradać.<br/>Zwłaszcza, który sierści siwej,<br/>Tego się strzeż, co nawięcej.",
        
        22:"Synu miły, wiernie radzę tobie,<br/>Tego, o kim myślisz, nie trać sobie,<br/>Boć jest przyjacielem silnym,<br/> <br/>By-ć miał być bratem rodzonym.",
        
        23:"Byś wiedział, co cię ma potkać,<br/>Nie kwapiłbyś się precz jechać.<br/>Mają cię tam silno zdradzić,<br/>Przeto nie jeźdź, daj sobie poradzić.",
        
        24:"Słuchaj pilnie tych moich słów:<br/>Szukaj swej zguby u Żydów,<br/>A który Żyd siwiznę w brodzie ma,<br/>U tegoć jest w zastawie zguba twa.",
        
        25:"Prawdziwieć powiem swe zdanie,<br/>Co się w twojej rzeczy stanie,<br/>Nie mać iście szczęśliwie idź,<br/>Musisz dla niej ku szkodzie przydź.",
        
        26:"Ty mocne przyrodzenie masz,<br/>A rad się też miernie chowasz,<br/>Będzieszli tak zawżdy działał,<br/>Będziesz żyw, dokąd będziesz chciał.",
        
        27:"Kapłanem ty na wieki nie będziesz,<br/>A w mieście też nigdy nie osiędziesz,<br/>Jedno się po światu będziesz włóczyć,<br/>Patrząc, gdzie by gębę w piwie moczyć.",
        
        28:"Z łaski Boga wszechmocnego,<br/>Masz dostąpić rządu wysokiego,<br/>A masz ku tej dostojności przydź,<br/>Że cię wszyscy będą powinni czcić.",
        
        29:"Odpuśćże mi, białagłowo,<br/>Muszę rzec prawdziwe słowo,<br/>Tobie nigdy za mąż nie iść,<br/>Musisz wiecznie bez męża być.",
        
        30:"Szczęśliwieć się wszytko będzie wodzić,<br/>Sam miły Bóg z tobą będzie chodzić,<br/>Ale go nie gniewaj, chceszli,<br/>Abyś miał szczęście do śmierci.",
        
        31:"Synu miły, byś wierzyć chciał,<br/>Nie będziesz tu wysługi miał,<br/>Bo twój pan ma dziwne obyczaje,<br/>Obiecujeć, ale nic nie daje.",
        
        32:"Coś umyślił, z tym pośpieszaj,<br/>A nikomu się nie zwierzaj,<br/>Bo, jakoć ja zinąd słyszę,<br/>Chcąć przekazić towarzysze.",
        
        33:"Myślisz pilno o swym miłym,<br/>Abyś była wesoła z nim.<br/>A on jest takowy błazen,<br/>Rad by cię był wiecznie prożen.",
        
        34:"Ożenisz się w rychłym czasie,<br/>Leczbyś się rad potym rozwiódł zasię.<br/>Nie trzebać nic Boga prosić,<br/>Będziesz mieć przyjaciół dosyć.",
        
        35:"Miasto tego, co byś miał być panem,<br/>Będziesz rychło żebraczym hetmanem,<br/>Będziesz baby po odpuściech wodził,<br/>Złym przykłade będziesz inszym szkodził.",
        
        36:"Tobie dozwalam kupcem być,<br/>Bo masz przez nie ku chlebu przydź.<br/>Ale by-ć też nawięcej dać,<br/>Radzęć sprawne sługi chować.",
        
        37:"Córko, pilnie tego słuchaj,<br/>A cześć i chwałę Bogu daj,<br/>Będziesz mieć męża dobrego<br/>I syna w rok nadobnego."
        },
        
        7: {
        1:"Nie troszczy się, a wesół bądź,<br/>Masz w rychle pocieszenie wziąć,<br/>Ta rzecz ciebie nie ma minąć,<br/>Będziesz dla niej barzo słynąć.",
        
        2:"Witaj, bracie, co tam słychasz,<br/>A snadź po swej miłej wzdychasz,<br/>Szaty sprawiasz, dajesz dosyć,<br/>Jednak ona da inszym uprosić.",
        
        3:"Jeśli chcesz mej rady użyć,<br/>Nie radzęć tu dłużej służyć,<br/>Bo tu nie będziesz mieć zysku,<br/>Oprócz tego, co wyniesiesz w pysku.",
        
        4:"Tak mi się zda, a w tym się nie mylę,<br/>Że ty bez synów pomieszkasz chwilę,<br/>Chyba jeśliby stadnika odmieniła,<br/>Tedy by wszytko syny rodziła.",
        
        5:"Jedno chciej miłosiernym być,<br/>Tedy masz z świata dobrze zyść.<br/>A iżbyś miał łaskę Bożą,<br/>Daj ubogim, wszak cię nie zubożą.",
        
        6:"Ten człowiek, o którym pytasz,<br/>Dobrzeli się w jego przyjaźni masz,<br/>Tak barzo jest łaskaw na cię,<br/>Nie dałby pieniądza za cię.",
        
        7:"Jeśli tymi czasy na koń wsiędziesz,<br/>Wiedz to iście, że fortunny będziesz.<br/>Większy będziesz mieć pożytek,<br/>Niżby żeglował rok wszytek.",
        
        8:"O tym ci nie trzeba myślić,<br/>By-ć się zguba miała wrócić,<br/>Bo ta rzecz już dziwno chodzi,<br/>Skażono ją, aż się czertu godzi.",
        
        9:"Ta rzecz, którąś teraz myślił,<br/>Kiedyś kwater z dryją rzucił,<br/>Ma być ku skóraniu tobie,<br/>Zwysisz barzo wiele na niej sobie.",
        
        10:"Radzęć, byś się po wodzie nie woził<br/>A iżbyś też sam w drogę nie chodził,<br/>Bowiem się ja barzo boję tego,<br/>Byś ty w drodze nie zbył gardła swego.",
        
        11:"Bądź duchownym a już nie odwłoczy,<br/>Szczęśliwieć się wszytko w tym potoczy,<br/>Będziesz miał dosyć duchownego chleba,<br/>Jedno nie wiem, abyś szedł do nieba.",
        
        12:"Przestań się za dworem włóczyć,<br/>Już nie możesz wyszej wskoczyć,<br/>Jednakeś też już nie głodzien,<br/>Dał ci Pan Bóg tyle, ileś godzien.",
        
        13:"Pomyśliłaś teraz na jednego,<br/>A o tym wiedz – masz mieć męża z niego, <br/>A będzie to barzo w rychłym czasie,<br/>Będzieta łaskawa silno na się.",
        
        14:"Bracie miły, nie barzoś szczęśliwy,<br/>Ku temuś głupi a barzo zwadliwy.<br/>Nie będzieszli się zwady strzec,<br/>Urąbają cię, to iście wiedz.",
        
        15:"Byś też nie wiem komu służył,<br/>Nie wiem, byś takiej fortuny użył,<br/>Jaką masz mieć przy tym panie,<br/>Imienie-ć się od niego dostanie.",
        
        16:"Ostrzegam cię, bracie miły,<br/>Próżno się myśl w tobie sili,<br/>Myśl co inszego, jeśli chcesz,<br/>Tego pierwszego nie dojdziesz.",
        
        17:"Miej nadzieję zupełną w swym miłym,<br/>Żeć do końca przyjacielem prawym.<br/>A tak cię prawie miłuje,<br/>Zdrowia, gardła przez cię nielituje.",
        
        18:"Ożenić się żadny nie obroni tobie,<br/>Boś to już dawno umyślił sobie,<br/>Ale nie wiesz, nieboże, czego chcesz,<br/>Iście się ty nad dziurą napłaczesz.",
        
        19:"To jest pewna a dobra nowina,<br/>Że ty będziesz panem co godzina,<br/>Bo to twój pan już umyślił,<br/>Aby cię wrychle opatrzył.",
        
        20:"Nie kupcz, by-ć też mnichem zostać,<br/>Nie będziesz mógł temu sprostać,<br/>Bo rozumu mało w tobie,<br/>Z innej strony, radzęć, myśl o sobie.",
        
        21:"Masz mieć męża dobrzuchnego,<br/>Miłego, rączego, chędogiego,<br/>Pożywiesz z nim rozkoszy na świecie,<br/>Na każdy dzień tobą dom umiecie.",
        
        22:"Miej co inszego na pieczy,<br/>A poniechaj pierwszcj rzeczy,<br/>Ten, któregoś się w tym radził,<br/>Ten cię w tej rzeczy przyzdradził.",
        
        23:"Wiem, żeć się nie uprzykrzę w tym,<br/>Boć barzo wdzięczną rzecz powiem:<br/>Twa miła jest barzo wierna tobie,<br/>A więcej ci folguje niż sobie.",
        
        24:"Radzęć, dzierż się ty rady mej,<br/>Nie opuszczaj służby pirwszej.<br/>Opuściszli, jużeś zginął,<br/>Nie będziesz tak indzie słynął.",
        
        25:"Miła pani, nie troszcz się nic,<br/>Będziesz ty i syny rodzić,<br/>Pocieszy cię Pan Bóg miły,<br/>Po tej dziewce urodzisz dwa syny.",
        
        26:"Kto nie błądzi w krześcijańskiej wierze,<br/>Tego Pan Bóg od złego strzeże,<br/>Ale iż ty Lutra naśladujesz,<br/>Przeto sobie złą śmierć zasługujesz.",
        
        27:"Upewniam cię jako brata swego:<br/>Masz to przyjaciela niepospolitego.<br/>A miej o nim to dufanie,<br/>Zeć się jego radą dobrze stanie.",
        
        28:"Nie jedź synu na tę drogę!<br/>Niech to u ciebie wymogę,<br/>Bo tam szczęśliwym nie będziesz<br/>I ku temu zdrowia pozbędziesz.",
        
        29:"Po tym będziesz pilniejszy rzeczy swych,<br/>Gdy obaczysz, iż dziś niemało tych,<br/>Co radzi cudze chapają,<br/>A gdy wezmą, nieradzi wracają.",
        
        30:"Słuchaj, ale się na mię nie gniewaj,<br/>Takiej ty rzeczy zawżdy pokój daj,<br/>Której twój rozum nie może sprostać,<br/>Nie chceszli kpem wiecznym zostać.",
        
        31:"Witaj miły bracie, boży sługo,<br/>Ty będziesz żyw na tym świecie długo,<br/>Lecz chceszli mieć dobre dokonanie,<br/>Pamiętaj na Boże przykazanie.",
        
        32:"Nie chcęć, synku, próżno tuszyć,<br/>Złyś, krnąbrny, nie chcesz się uczyć,<br/>Przeto kapłanem nie będziesz<br/>I na świecie się nie zbędziesz.",
        
        33:"Chciej to wiedzieć, panie miły,<br/>Że ty wskórasz w rychłej chwili.<br/>Takie ma być twe wskóranie,<br/>Że twój dom przez cię powstanie.",
        
        34:"Po twej chęci łacno baczyć,<br/>Chciałabyś rychło za mąż iść,<br/>A tyś jest każdemu pyszna,<br/>Nie wiem, by-ć ta hardość w dobre wyszła.",
        
        35:"Jedno chciej być sprawiedliwy,<br/>Będziesz aż nazbyt szczęśliwy,<br/>Pomnoży cię Pan Bóg miły,<br/>Będziesz panem w rychłej chwili.",
        
        36:"Nie chcę z tobą dzielić tego,<br/>Co wysłużysz u pana swojego,<br/>Masz wziąć kijem na odprawie,<br/>Pójdziesz dalej o swej strawie.",
        
        37:"Myślisz próżno a trudną rzecz,<br/>Wszakże to jednak możesz mieć,<br/>Jedno się dzierż mojej rady -<br/>Strzeż się z towarzyszmi zwady.",
        },
        
        8: {
        1:"Żal mi twego rozumu głupiego,<br/>Chcesz miłować sobie nierównego,<br/>A tyś szpetna i ku temu niemłoda,<br/>A to gorsza, żeś nie jest chędoga.",
        
        2:"Co się małżeństwa dotycze,<br/>Powiem ci dzisia nieskrycie:<br/>Dostaniesz ty żony dobrej,<br/>Będziesz Bogu dziękować z niej.",
        
        3:"Urzuciłeś sześć a troje,<br/>Oto masz proroctwo moje:<br/>Jesteś barzo zuchwał na bliźniego,<br/>Przetoć Pan Bóg nie da nic dobrego.",
        
        4:"Tako doma, jako też na drogach,<br/>Tak w lesie, w polu i w gospodach,<br/>Będziesz kupcząc fortunę miał,<br/>Jednoć radzę, byś kamienia nie kupował.",
        
        5:"Pojmie cię rychło dobry pan,<br/>Lecz mu sama na cię kij dam.<br/>Niechże cię nim dobrze bija,<br/>Boś zła, krnąbrna, warkotliwa.",
        
        6:"Potrwasz jeszcze z miesiąc namniej,<br/>Niżli będziesz wdzięczen w rzeczy swej.<br/>A radzęć sługom jego ugadzać,<br/>Tedyć nie będą przeszkadzać.",
        
        7:"Biedasz tobie z twą miłością,<br/>Co jej używasz z lekkością,<br/>Kurwa ciebie prawie łupi,<br/>A ty dawasz, błaźnie głupi.",
        
        8:"Powiedam ci, synu, swoje zdanie,<br/>Masz wysłużyć siła na swym panie,<br/>Któremuś pomyślił służyć,<br/>I masz przy nim świata użyć.",
        
        9:"Wiecznie tak nie będziesz syna miała,<br/>Jeśli jedno sobie będziesz ugadzała,<br/>Chciej też mężowi godzić,<br/>Chceszli parobka urodzić.",
        
        10:"Wiesz, synu, coć mam powiedzieć,<br/>Ty byś nie miał dobrze umrzeć.<br/>Sądząć według zasługi twej,<br/>Ale nie wątp w łasce Bożej.",
        
        11:"Towarzyszu, tak o tym wiedz:<br/>Chciej się zawżdy takiego strzec,<br/>A nie miewaj go rad z sobą,<br/>Coć mówi o inszych z tobą.",
        
        12:"Wielką sobie szkodę działasz,<br/>Iż tak wiele drodze mieszkasz,<br/>Przeto słuchaj porady mej:<br/>Wyjedź co możesz narychlej.",
        
        13:"Już żadnej nadzieje nie miej,<br/>Byś to nalazł, co wziął złodziej.<br/>Jeszczeć co lepszego zginie,<br/>Niźli ćwierć roku przeminie.",
        
        14:"Bądź pocieszon z mej powieści,<br/>A chciej słuchać istych wieści,<br/>Z tej to rzeczy, którą myślisz począć,<br/>To wiedz, że masz wielki pożytek wziąć.",
        
        15:"Barzo krótki czas żywota twego,<br/>Nie doczekasz miesiąca ósmego.<br/>Przetoć radzę, byś był gotów,<br/>Nie dbaj na to, żeś teraz dobrze zdrów.",
        
        16:"Dziękuj Bogu z daru tego,<br/>Dojdziesz rządu duchownego,<br/>Ale wiedz, że mnichem będziesz,<br/>Po tym na probostwie siędziesz.",
        
        17:"Założę się śmiele z tobą o to,<br/>Chocia dawasz srebro i też złoto,<br/>Że ty nie masz tego dostać,<br/>Czym byś miał nad insze powstać.",
        
        18:"Zimie, będzieli dobra sanica,<br/>Pójdziesz, panno, iście za panica,<br/>A jest piękny, ku temu nie ubogi,<br/>Jedno czeka dobrej sannej drogi.",
        
        19:"Bracie miły, liche szczęście twoje,<br/>A wysoko wznosisz myśli swoje,<br/>Chcesz zrównać z większymi pany,<br/>A tyś jest kiep wyjebany.",
        
        20:"Dokądeś żyw, dzierż się pana tego,<br/>Bo nie trafisz wiecznie na lepszego,<br/>Wysłużyć masz na nim dosyć,<br/>Jedno go śmiej o co prosić.",
        
        21:"Myślenie twe prostą drogą idzie,<br/>A ku dobremu końcu rychło przyjdzie,<br/>I tęć fortunę obiecam,<br/>Będzieć lepiej niźli chcesz sam.",
        
        22:"Białagłowo, tak się mnie zda,<br/>Że twój panic o cię namniej nie dba.<br/>Abych prawdę powiedzieć chciał,<br/>Nierad by cię wiecznie widział.",
        
        23:"Cóż wżdy tobie po żonie, powiedz mi,<br/>Tyś już jest pachołek letni,<br/>By-ć nalepsza twoja żona była,<br/>Tedyć będzie młodszego woliła.",
        
        24:"Synaczku mój, daj się nędzy,<br/>Będziesz miał dosyć pieniędzy,<br/>Jedno je umiej dobrze szafować,<br/>Możesz ich siła nachować.",
        
        25:"Radszej się im kożuchów szyć,<br/>Niźliby ty miał kupcem być,<br/>Boś jest chłop tak barzo głupi <br/>Nie wiesz, co za pieniądz mydła kupi.",
        
        26:"Dobrego ty męża będziesz miała,<br/>A lepszego niżliś sama chciała,<br/>Jednoć powiem: nie da-ć rozpustnie żyć,<br/>Będzieszli zła, będzie cię barzo bić.",
        
        27:"Barzo silno o swej rzeczy pilisz,<br/>Lecz ja baczę, że się w tym omylisz.<br/>O tym ci myślić nie trzeba,<br/>Szkoda by też psu białego chleba.",
        
        28:"Nie wątp namniej w swojej miłej,<br/>Iście masz przyjaciela z niej,<br/>Aleć powiem, coć ma wadzić:<br/>Chce cię z nią towarzysz zwadzić.",
        
        29:"Ostrzegam cię jako brata swego, <br/>Nie przystawaj do pana świeckiego,<br/>Bo na tym nic nie utyjesz, <br/>Chyba tego, co zjesz i spijesz.",
        
        30:"Dobra żono, bądź ty ista tego,<br/>Będziesz miała syna nadobnego.<br/>A już mu możesz komżą szyć,<br/>Bo ma iście kapłanem być.",
        
        31:"Nie chcesz przestać złośliwym być,<br/>Musisz złą śmiercią z świata ziść.<br/>Będzie Pan Bóg swej krzywdy mścił,<br/>Jeszcze się strzeż, abyś w piekle nie był.",
        
        32:"Ten człowiek, coś o nim myślił,<br/>Niżliś cynk, kwater urzucił,<br/>Jest ci lepiej niż kto inszy,<br/>Boś mu nade wszytko milszy.",
        
        33:"Droga twoja ma-ć siła zawadzić,<br/>Towarzysz twój ma cię zdradzić.<br/>Przyjdziesz ku lekkości silnej,<br/>Przeto nie jedź, odejm się woli swej.",
        
        34:"Znać po tobie czyście, miły bracie,<br/>Że ty myślisz pilnie o swej stracie.<br/>Ale się namniej nie trzeba troskać,<br/>Masz jej bez wątpienia dostać.",
        
        35:"By-ć ma rada wdzięczna była,<br/>Ja bych tobie wiernie poradziła,<br/>Byś poniechał swoich myśli, <br/>Abyć po tym ku lekkości nie przyszły.",
        
        36:"Muszę cię nieco przestraszyć,<br/>Nie miałby ty długo żyw być,<br/>Nie wątp jednak w łasce Bożej,<br/>Boć on więcej niż proroctwo może.",
        
        37:"Chocia duchowny chleb trzymasz,<br/>Jednak wżdy z tego nic nić masz,<br/>Abyś kiedy dobrym duchownym był,<br/>Boś się złego pisma napił.",
        },
        
        9: {
        1:"Panie mój, racz o tym wiedzieć,<br/>Dał ci to kwater z dryją powiedzieć:<br/>Masz urzędu wrychle dostać,<br/>Przez który masz barzo powstać.",
        
        2:"Kiedyby jaki szalony,<br/>Głuchy, ślepy albo chromy,<br/>Taki by się tobie godził,<br/>By cię po odpuściech wodził.",
        
        3:"W każdej rzeczy swej cnotliwej,<br/>W szczęściu zawżdy nadzieję miej,<br/>Chociać insze będą przeszkadzać chcieć,<br/>Jednak będziesz wszytko na wolą mieć.",
        
        4:"Towarzyszu, muszę cię przestraszyć,<br/>Nie masz na tym panie nic wysłużyć,<br/>Boś leniwy a k temu niepilny,<br/>Być miał co dać, byłby to dziw silny.",
        
        5:"Myśl przedsię a nie przestawaj,<br/>Prze miły Bóg nieco zawżdy dawaj.<br/>Ten sprawi, że twe myślenie<br/>Przyjdzie w dobre dokończenie.",
        
        6:"Pomyśliłaś teraz na jednego,<br/>Miłuje cię z serca prawego.<br/>Nie omylę ja w tym ciebie,<br/>Miłuje cię więcej niżli siebie.",
        
        7:"Dostaniesz nadobnej żony,<br/>Jednoć powiem z drugiej strony:<br/>Musisz jej barzo pilnie strzec,<br/>Jeśli z niej chcesz cnotliwą mieć.",
        
        8:"Nie kazał ci ześ as tuszyć,<br/>Abyś kiedy miał panem być,<br/>Bo się nie masz ku żadnej rządnej rzeczy,<br/>Jedno kostki, karty masz na pieczy.",
        
        9:"Jeśli jeden fortunny kupiec był,<br/>Tedy ty, będzieszli kupczył.<br/>A radzęć co rychlej począć,<br/>Chceszli wielki pożytek wziąć.",
        
        10:"Ty się barzo kwapisz za męża iść,<br/>Bowiem nie wiesz, ku czemu masz przyść;<br/>Lecz, niebogo, gdybyś wieszczą była,<br/>Iście by się za mąż nie kwapiła.",
        
        11:"Nie wątp namniej w rzeczy swojej,<br/>Da-ć ją Pan Bóg z łaski swojej,<br/>Aleć się jeszcze odwlecze,<br/>Ta grzanka się za rok nie upiecze.",
        
        12:"Niewymowne głupstwo twoje,<br/>Że ty próżno kazisz serce swoje,<br/>Gdy to wszyscy dobrze znają,<br/>Że tam o cię nic nie dbają.",
        
        13:"Przystań śmiele ku panu inszemu,<br/>Uczyń dosyć umysłowi swemu,<br/>Możesz za silnym zyskiem być,<br/>Masz na nim siła wysłużyć.",
        
        14:"Ty o syna zawżdy Boga prosisz,<br/>Ale wiedz, że dziewkę nosisz,<br/>A to ja z tego poznawam,<br/>Chciwszaś w łożu niżli twój pan.",
        
        15:"Tyś jest na ubogie lutościwy,<br/>A tak nam rozkazał Pan Bóg miły.<br/>Dla tegoć da dobre dokonanie<br/>I w swej chwale wieczne przebywanie.",
        
        16:"Za to ty masz, iż ten czyni prawie,<br/>Co z tobą rozmawia łaskawie.<br/>Ale się ty nigdy na to nie sadź,<br/>Zdradziwszy cię, będzie się z ciebie śmiać.",
        
        17:"Jedź na drogę, kiedy raczysz.<br/>Tam więc, jeśli nie przebaczysz<br/>Dosyć pieniędzy nabędziesz,<br/>Przyjechawszy imienie osiędziesz.",
        
        18:"Synaczku, ja tobie ślubuję,<br/>Ze ty najdziesz swoję zgubę.<br/>A nie trzebać barzo szukać <br/>Ma-ć ją jeden człowiek w ręce dać.",
        
        19:"Poczni rzecz swą kiedy raczysz.<br/>Sam to okiem swym obaczysz,<br/>Żeć wszytko pójdzie fortunnie.<br/>Przyjdziesz po tym o poradę ku mnie.",
        
        20:"Prawdę ja powiadam tobie,<br/>Nie pokładaj długiego żywota sobie,<br/>Bo acz dufasz w swoim zdrowiu wiele,<br/>Jednak zdrów nie będziesz do niedziele.",
        
        21:"Bądź tego ist jako czego,<br/>Dojdziesz stanu duchownego.<br/>A będziesz prełaturę miał,<br/>Jeśli będziesz pilność działał.",
        
        22:"Silne szczęście ciebie wzniosło,<br/>Nad twój stan barzo podniosło.<br/>Aleć się już odmieniło,<br/>Nie będzieć więcej służyło.",
        
        23:"Będziesz w rychle męża miała,<br/>Będzieszli za wdowca chciała,<br/>Nie dostanieć się panica,<br/>Boś niedobra tanecznica.",
        
        24:"W każdej twej wielkiej potrzebie<br/>Prawie się szczęście naśmieje z ciebie,<br/>Będziesz mniemał, aby już jeść,<br/>Ali twojej rzeczy na koniec sieść.",
        
        25:"Nie dbaj nic, że cię pan swarzy,<br/>Jednak ci się przy nim dobrze zdarzy.<br/>Wysłużysz u niego dosyć chleba,<br/>Jedno wiernym a pilnym być trzeba.",
        
        26:"Wiele myśli w twojej głowie szkodzi,<br/>Myślisz drugdy to, co się nie godzi,<br/>Tak też z nich więc nie bywa nic,<br/>A ty się strzeż kiedy o lekkość przysc.",
        
        27:"Wiedzieć tego barzo żądasz,<br/>Jeśli się u panica dobrze masz.<br/>Prawdęć w tym powiedzieć muszę:<br/>Miłuje cię jako własną duszę.",
        
        28:"Kwater z dryją tobie prorokował,<br/>Ze ty wdzięcznej żony nie będziesz miał.<br/>A też ci by szkoda cudnej żony,<br/>Boś sam chłop silno mierziony.",
        
        29:"Jedno się rządź, jakoś począł:<br/>Dobryś pochop ku państwu wziął.<br/>Nabędziesz imienia dosyć,<br/>Ale się nie chciej podnosić.",
        
        30:"Kupiec, który chce dojdź chleba,<br/>Silnej mu chytrości trzeba,<br/>Ale jej w tobie nie masz nic,<br/>Przetoć nie radzę kupcem być.",
        
        31:"Biała głowo, możesz wesoła być:<br/>Masz ku dobremu mężu przydź.<br/>Będzieta się tak cnotliwie chować,<br/>Inszy ludzie będą z was przykład brać.",
        
        32:"Próżno pilisz, próżno dary nosisz,<br/>O tym wiedz, że tego nie uprosisz,<br/>Już inszy dał dobrze więcej,<br/>Będzie wysłuchan w prośbie swej.",
        
        33:"W miłowaniu swym dzisiejszym<br/>Możesz nie frymarczyć z żadnym;<br/>A możesz ku pożytku przydź,<br/>Jedno patrz, byś umiał taić.",
        
        34:"Umyśliłeś do pana jednego,<br/>Aleć radzę, nie przystaj do niego.<br/>Obiecujeć siła, lecz obłudnie,<br/>Rzyć napasiesz, ale mieszek schudnie.",
        
        35:"Pani miła, to jest prawdziwa nowina,<br/>Że ty będziesz mieć pięknego syna.<br/>Mień mu Janem, co go bywa lecie,<br/>Tedyć będzie szczęśliwy na świecie.",
        
        36:"Nie chcesz się swej złości odjąć,<br/>Musisz za to zapłatę wziąć,<br/>Nie przepomni Pan Bóg tego,<br/>Że ty naśladujesz Lutra złego.",
        
        37:"Silno się ku temu człowieku chylisz,<br/>A temu wierz, że się w tym nie mylisz,<br/>Bo co wiem barzo dowodnie,<br/>Żeć jest dobrze niewymownie.",
        },
        
        10: {
        1:"Prze Bóg, chciej mi powolen być,<br/>Nie racz na tę drogę jeździć,<br/>Bo pojedzieszli przez wodę,<br/>Masz wziąć barzo wielką szkodę.",
        
        2:"Prawda, żeć teraz nieśmieszno,<br/>Że cię po twej zgubie tęskno,<br/>Aleć nie trzeba w tym wątpić,<br/>Ma-ć się zasię iście wrócić.",
        
        3:"Masz umysł ku rzeczy jednej<br/>A w tym żądasz porady mej.<br/>Ja bych rzekła, byś pokój dał,<br/>Chceszli, abyś potym nie żałował.",
        
        4:"Patrzaj, abyś Bogu służył,<br/>Chceszli, abyś świata użył.<br/>Ale się nie kąp na wodzie,<br/>Byś nie przyszedł ku jakiej przygodzie.",
        
        5:"Nie myśl o tym, abyś duchownym był,<br/>Złyś był z młodu, niepilnieś się uczył,<br/>Przeto się odejmij swej wolej,<br/>Gdyś chłop prosty, miejże się do role.",
        
        6:"Pierwej nie masz podwyższon być,<br/>Aż masz wiele świata zjeździć,<br/>Przyjdzieć potym wszytko snadnie,<br/>Sam nie zwiesz, skąd ci przypadnie.",
        
        7:"Chciej to dziś za pewne wiedzieć:<br/>Tobie męża wiecznie nie mieć.<br/>A toć siedm ok za znak dają,<br/>Że cię wszyscy za zuchwałą mają.",
        
        8:"Radzęć się na grę gotować,<br/>Zyszczesz wiele, jedno umiej chować.<br/>Lecz się strzeż, byś zawżdy w tym nie leżał,<br/>Byś ręki na stole nie odbieżał.",
        
        9:"Nie miałby ty nic wysłużyć,<br/>Bo nie umiesz sobie w tym podrużyc,<br/>Chcesz swą cnotę nazbyt chować,<br/>Nie chcesz się jąć pochlebować.",
        
        10:"Myśl twoja jest przy trudniejszym,<br/>Zwłaszcza w tym czasie dzisiejszym,<br/>Wszakże wżdy miej to dufanie,<br/>Żeć się po twej woli zstanie.",
        
        11:"Przestań, radzęć, tej miłości,<br/>Abyś nie przyszła ku lekkości.<br/>Bo cię nie miłuje panicz,<br/>Ma cię sobie prosto za nic.",
        
        12:"Będziesz mieć żonę nadobną<br/>A iście silno podobną,<br/>Jedno nie chciej oktaw święcić,<br/>Chceszli inszych do niej nie przyłęczyć.",
        
        13:"Ostrzegam cię, brata swego:<br/>Nie będziesz miał nic dobrego,<br/>Za młodu będziesz dworakiem,<br/>A na starość zaś żebrakiem.",
        
        14:"Bądź kupcem, ja tobie radzę,<br/>Będzieszli nim, rękę na to sadzę,<br/>Że masz ku takiemu państwu przydź,<br/>Że będziesz mógł i za morze kupczyć.",
        
        15:"Plugawaś, zła, rozpustna, leniwa,<br/>Głupia, nierobotna, warchotliwa,<br/>Pokusi-li się jaki mąż o cię,<br/>Tedy kij będzie często w robocie.",
        
        16:"Radzęć silną pilność czynić,<br/>Chceszli ku tej swej rzeczy przydź,<br/>Pracuje się o nię inszy,<br/>Wszakże ty będziesz szczęśliwszy.",
        
        17:"Siłaś ważył, a mało zyskujesz,<br/>Tobą gardzą, ty przdsię miłujesz,<br/>Aleć powiem, zacz cię dziewki mają<br/>Natrętem cię wszytki nazywają.",
        
        18:"Nie odradzam ci służyć młodemu, <br/>Podrużysz tam mieszkowi swojemu.<br/>Ale nie służ białejgłowie,<br/>Nie chceszli przydź ku obmowie.",
        
        19:"Abyś temu wierzyć chciała,<br/>Nie będziesz ty syna miała<br/>Ani teraz, ani potym,<br/>Wiem barzo dowodnie o tym.",
        
        20:"Jedno się ognia barzo strzeż,<br/>U puszkarza w domu nie leż,<br/>Nie bójże się śmierci nagłej,<br/>Oprócz onej przyrodzonej dawnej.",
        
        21:"W takim nigdy nie miewaj nadzieje,<br/>Coć się to przez zęby śmieje,<br/>Boć to jest każdy łotr czysty,<br/>Nigdy nie bywa przyjaciel isty.",
        
        22:"Na tę drogę możesz śmiele jechać.<br/>Nie daj sobie nikomu rozradzać,<br/>Boć to z twym pożytkiem będzie,<br/>Będziesz mieć fortunę wszędzie.",
        
        23:"Zguba twoja nie wróci się iście,<br/>A też to tak na cię barzo czyście,<br/>Bo twa miłość źle swe rzeczy chowa,<br/>A to ku straceniu przyczyna gotowa.",
        
        24:"Coś umyślił, już poczynaj,<br/>A mów tak: Boże pomagaj!<br/>Bowiem bez pomocy jego<br/>Nie sprawi człek nic dobrego.",
        
        25:"Chceszli długo świata użyć,<br/>Nie radzęć przy dworze służyć.<br/>A będzieszli, już o tym wiedz,<br/>Że masz barzo rychło umrzeć.",
        
        26:"Bądź pocieszon z tej nowiny:<br/>Będzie z ciebie człowiek inny.<br/>Odmienisz się w duchownego,<br/>Dojdziesz stanu wysokiego.",
        
        27:"Każdyć to mądry za złe ma,<br/>Iż to łakomstwo w tobie zna:<br/>Masz już dosyć, wżdy dworujesz.<br/>Abo na dyszlu umrzeć chcesz?",
        
        28:"Nie trzebać się o to troskać,<br/>Masz mężatką wrychle zostać,<br/>Stara-ć się o to jeden pan,<br/>By cię sobie za żonę wziął.",
        
        29:"Synaczku, bądź już tego ist:<br/>Nie omyli ciebie tenlist.<br/>Nie masz szczęścia na żadną rzecz,<br/>Jeszczeć wrychle pan każe precz.",
        
        30:"Nie chciej jedno utratnym być,<br/>Możesz tu siła wysłużyć,<br/>Kto chce co mieć, musi chować,<br/>Musi nie pić, nie grać, nie łotrować.",
        
        31:"Możesz mi za dobre nie mieć,<br/>Kazałyć siedm ok powiedzieć,<br/>Abyś próżno przestał myślić,<br/>Nie chceszli ku lekkości przyść.",
        
        32:"Pomyśliłaś na panica swego,<br/>Miłuje cię więcej niż ty jego,<br/>A ty namniej o to nie dbasz.<br/>Odda-ć się to zinąd, sama poznasz.",
        
        33:"Nie wiem, byś ty małżonkiem był,<br/>Jednakbyś też mało zwyśił,<br/>Bo w małżeństwie niewczesności wiele,<br/>Długi smutek za krótkie wesele.",
        
        34:"Mogę na to gardło sadzić,<br/>Że ty masz silnym panem być.<br/>Jedno radzę: wdowy się dzierż,<br/>Będzieć dawać, a ty więc bierz.",
        
        35:"Ani kupcem, ani rzemieślnikiem<br/>Ty nie będziesz, oprócz by rzeźnikiem<br/>Onym, co w rynku, w ulicach poluje,<br/>Czyściąc miasto, wychody szufluje.",
        
        36:"Nadalej o drugim roku,<br/>Iż będziesz mieć małżonka przy boku.<br/>A pięknego i barzo dobrego;<br/>Będziesz Bogu dziękować z niego.",
        
        37:"Żal mi tego, żeś błaznem takowym,<br/>Że się nie chcesz obaczyć w głupstwie swym,<br/>Tego żądasz, czego nie masz dostać,<br/>Przeto masz u ludzi w śmiechu zostać.",
        },
        
        11: {
        1:"Kiedyż mnie niemłodej pytasz, <br/>Dobrzeli się w miłości masz, <br/>Umiem ci powiedzieć tobie: <br/>Masz miłą po woli sobie.",
        
        2:"Możesz do młodego przystać,<br/>Ale nie masz na tym zyskać,<br/>Będzie tobą robił jako wołem, <br/>A musisz się źle miewać za stołem.",
        
        3:"Dobra pani, wesoła bądź,<br/>Masz pociechę od Boga wziąć:<br/>Urodzi-ć się syn nadobny, <br/>Dobry, mądry, cichy i pokorny.",
        
        4:"Jeszczem nie znała żadnego<br/>Nad cię na świecie gorszego,<br/>Przeto nie ujdziesz lekkości,<br/>Zginiesz marnie dla miłości.",
        
        5:"Ani siostra, ani własny brat,<br/>Nie będzie cię miłować tak <br/>Jako ten, co myślisz o nim -<br/>Masz znać wielką przyjaźń po nim.",
        
        6:"Byś mej rady posłuchać chciał,<br/>Radzęć, byś tej drogi niechał,<br/>Bo sobie zdrowia ukrócisz, <br/>A nie wiem więc, jeśli się zaś wrócisz.",
        
        7:"Przyjdziesz zasię ku swej zgubie,<br/>Ale się masz zwadzić grubie<br/>Z tym człowiekiem, co wziął tę rzecz,<br/>A pan mu przeto każe precz.",
        
        8:"Ponieważ się mnie w tym radzisz,<br/>Nie poczynaj to, co myślisz.<br/>Powiem ci: próżno się kusisz,<br/>Ze sromotą tego przestać musisz.",
        
        9:"Będziesz długo żyw, o tym wiedz, <br/>Jednoć się tego trzeba strzec,<br/>Iżbyś nigdy małżeństwa nie łączył,<br/>By cię chłop od żony nie zatracił.",
        
        10:"Muszę cię nieco zatroskać:<br/>Nie możesz ty popem zostać,<br/>Bo jakoś zwykł z młodu złym być,<br/>Tak-że się nie chcesz polepszyć.",
        
        11:"Urzuciłeś dryję z tuzem sobie, <br/>Otóż ci tak prorokuję tobie, <br/>Że u dworu masz urzędu dostać,<br/>Przez który masz silno powstać.",
        
        12:"Nie chcęć tego przed tobą przeć,<br/>Ze ty masz przez męża umrzeć,<br/>Bo cię żadny nie będzie chciał,<br/>Chyba ten, co by wisieć miał.",
        
        13:"Ni w tobie statku, nie troski,<br/>Prawieć łupią i drą koczki, <br/>Tak że cię szczęście wewszem ominie, <br/>Co nabędziesz, wszytkoć marnie zginie.",
        
        14:"Jeśli chcesz, mej rady słuchaj:<br/>Wlitwie sobie pana szukaj,<br/>Ty w Polszcze nie wysłużysz nic,<br/>Musisz wiecznie nędznikiem być.",
        
        15:"Masz teraz myślenia dosyć,<br/>Bo chcesz o jednę rzecz prosić,<br/>A iścieć to pan uczyni,<br/>Jeślić się kto za tobą przyczyni.",
        
        16:"Ten, któregoś ty pomyśliła,<br/>Niżliś cynk, tus urzuciła,<br/>Kiedy idzie tu, o tobie żuje,<br/>Rozumiejże, jeśli cię miłuje.",
        
        17:"Radząć obie dryje sprawiedliwie:<br/>Pojmi żonę wnet po żniwie,<br/>Bo ondzie zimie za mrozu,<br/>Cieplej dwiema społem w łożu.",
        
        18:"Jako cię znam, złymeś robotnikiem,<br/>A dla tego musisz być nędznikiem;<br/>Wiecznie tak nic nie będziesz miał,<br/>Jeszcze się strzeż, byś nie wisiał.",
        
        19:"Możesz prześpiecznie handel wieść,<br/>Bo to może twój dowcip znieść.<br/>A będzieszli pilen tego,<br/>Możesz siła zebrać z niego.",
        
        20:"Jużeś sobie barzo podstarzała,<br/>Wżdy byś jeszcze rada męża miała,<br/>Zaden nie jest tak barzo głupi,<br/>Każdy radszej nową suknią kupi.",
        
        21:"Przez przyczynę paniej jednej<br/>Masz być wysłuchan w prośbie swej,<br/>Aleć radzę, byś nie leżał, <br/>By cię w tym kto nie ubieżał.",
        
        22:"Masz się barzo za chytrego,<br/>Wżdy nie możesz poznać tego,<br/>Że twa miła z ciebie szudzi,<br/>Tak żeś przyszedł w śmiech u ludzi.",
        
        23:"Już przystań do tego pana,<br/>Boć jest dobry sam i sama,<br/>Będzie cię oboje miłowało, <br/>Wysłużysz tam pieniędzy niemało.",
        
        24:"Baczę to, pani, po tobie, <br/>Ze ty dziewkę masz urodzić sobie,<br/>Ale jej żywot nie będzie długi,<br/>Nie będziesz mieć z niej żadnej posługi.",
        
        25:"Bracie miły, gdy wiedzieć chcesz,<br/>Ty swą własną śmiercią umrzesz,<br/>A nie umrzesz aż w starości,<br/>Aleć podagra dochłości.",
        
        26:"Ten, o którym myślisz, powiem tobie,<br/>Życzy-ć wszego tak jako sam sobie, <br/>W nim nie trzeba wątpić namniej,<br/>Masz go mieć zawżdy ku woli swej.",
        
        27:"Acześ umyślił precz jechać,<br/>Radzęć tego teraz niechać,<br/>Nie masz mieć szczęśliwej drogi,<br/>Pójdzieszli, masz nałomić nogi.",
        
        28:"Chcesz, żeć powiem o twej zgubie:<br/>Szukaj w piwnicy i w grubie,<br/>Najdziesz, będzieszli szukać wczas,<br/>Na świetleć jej nigdy niemasz.",
        
        29:"Dobrze mi się w tym podobasz,<br/>Że takowe umysły masz,<br/>Z których pożytek być może,<br/>Dajże-ć szczęście, miły Boże!",
        
        30:"Idź do spowiednika rychlej,<br/>A spowiadaj się złości swej,<br/>Oto śmierć za tobą chodzi,<br/>Na każdy dzień zagryznąć cię godz",
        
        31:"Święć się co możesz narychlej,<br/>Dojdziesz plebanijej dobrej<br/>I k temu czego lepszego,<br/>Jedno proś Boga miłego.",
        
        32:"O tym wiedz, że się sam zdradzisz,<br/>Gdy się na swą chytrość sadzisz.<br/>A tać ma nawięcej szkodzić,<br/>Musisz dla niej poniżon być.",
        
        33:"Siostro, radzęć, bądź gotowa,<br/>Ma być o cię wrychle zmowa.<br/>Ma cię jeden dobry człowiek żądać<br/>A mają cię iście zań dać.",
        
        34:"Szczęścia ja tobie nie obiecuję,<br/>Tak z twego narodzenia najduję,<br/>W każdej rzeczy, którą zaczniesz,<br/>Zawżdy jaką szkodę weźmiesz.",
        
        35:"Służ powolnie, wiernie, a pilen bądź,<br/>Masz za służbę dobrą zapłatę wziąć.<br/>Twój dobry pan myśli o tym,<br/>Byś się też ty miał dobrze na potym.",
        
        36:"Barzo wiele myśli miewasz sobie,<br/>A statku żadnego niemasz w tobie.<br/>Także i teraz co myślisz,<br/>Na tym iście nic nie zwyśisz.",
        
        37:"Bądź, siostro, serca dobrego,<br/>Masz po woli przyjaciela swego,<br/>A nie chciej go sobie waśnić,<br/>Możesz potym jego małżonką być.",
        },
        
        12: {
        1:"Radszej się daj komu zabić,<br/>Niżlibyś miał małżonkiem być.<br/>Bo jeślibyś żony dostał,<br/>Na wieki byś jej nie sprostał.",
        
        2:"Bracie miły, o cię się nie staram,<br/>Będziesz panem, to ja po tobie znam.<br/>Jedno się zaś troszczę o cię,<br/>By nie był powróz w robocie.",
        
        3:"Skąd ty masz kupiectwo począć,<br/>A ty nie masz gdzie grosza wziąć.<br/>Odejm się oto swej wolej,<br/>A radzęć: miej się ku rolej.",
        
        4:"Dla sławy ojca twojego<br/>Dojdziesz męża szlachetnego,<br/>Jedno się strzeż, byś go nie gniewała, <br/>Byś z niego złego nie udziałała.",
        
        5:"Radzęć: daj tej rzeczy pokój,<br/>Próżno sobie głowy nie psuj.,<br/>Acześ ty dary obiecał,<br/>Psie gówno za to będziesz miał.",
        
        6:"Tobie dopuszczam miłować,<br/>Gdy się tak umiesz sprawować:<br/>Umiesz przywieść po swej woli,<br/>Każdać na wszytko przyzwoli.",
        
        7:"Przystać tamo nie chcęć radzić,<br/>Mogłoć by to siła wadzić,<br/>Przyszedłbyś tam ku dziwnej ranie,<br/>Miałbyś przez twarz szpetne znamię.",
        
        8:"Życzęć tego, dobra pani,<br/>Że miły Bóg łaską z wami:<br/>Urodzi-ć się syn nadobny,<br/>A będzie z niego duchowny.",
        
        9:"Witajże panie luteryjanie,<br/>Ważysz sobie duszę tanie,<br/>Naśladujesz złości jego,<br/>Przeto cię zabiją jako złego.",
        
        10:"Dziwni się dziś ludzie rodzą,<br/>Zdradnie się z sobą obchodzą,<br/>Tak-żeć też twój, acz ci mówi cudnie,<br/>To wiedz iście, iż czyni obłudnie.",
        
        11:"Gdzieś umyślił, już jedź w imię Boże,<br/>Pan Bóg cię na tej drodze wspomoże.<br/>Będziesz miał pożytku dosyć,<br/>Jednoć radzę: chciej swego pilen być.",
        
        12:"Żal mi cię, miły nieboże,<br/>Zguba twoja wrócić się nie może;<br/>Abowiem to wiadoma rzecz,<br/>Iż ten, co wziął, już jechał precz.",
        
        13:"Brzespiecznie czyń, coś przed się wziął:<br/>Będziesz dla tej rzeczy barzo słynął.<br/>I masz na tym zwyszyć wiele,<br/>Jedno w tym poczynaj śmiele.",
        
        14:"Ten wiersz tobie iście powie:<br/>Nie troszcz się nic o swe zdrowie,<br/>Miej w tym zupełne wesele,<br/>Przetrwasz nieprzyjaciół wiele.",
        
        15:"Nie tak by to Bogu służyć,<br/>Jeśliby chciał duchownym być,<br/>Ale się z kurwami wodzisz,<br/>Złym przykładem inszym szkodzisz.",
        
        16:"Skoro umrze jeden człowiek,<br/>Nie mienię go, któryżkolwiek,<br/>Tedyć dadzą państwo jego,<br/>Dojdziesz miejsca wysokiego.",
        
        17:"Możesz już prosić na gody,<br/>Pojmie cię parobek młody.<br/>Będziesz się z nim wybornie mieć,<br/>Będzieszli jedno sama chcieć.",
        
        18:"W szczęściu ty nadzieje nie miej,<br/>Szanuj, radzęć, ojczyzny swej.<br/>Jeślić się jako noga powinie,<br/>Wiedz, żeć zaraz wszytko zginie.",
        
        19:"Acz ci radzą inszy abyś odstał,<br/>Ja radzę, abyś na miejscu został,<br/>Przyjdzie ten czas, to jest pewna,<br/>Że się tobie służba odda.",
        
        20:"Ten piękny szańc, kwater z dryją,<br/>Niejednego więc bez ługu zmyją<br/>I też kazali tobie powiedzieć,<br/>Ze z swej myśli nic nie masz mieć.",
        
        21:"Ni kąska w tym nie pochybuj.<br/>Miłuje cię przyjaciel twój<br/>Więcej niżli wszyscy inszy.<br/>Niechżeć będzie ze wszech milszy!",
        
        22:"Nigdy nie miej nadzieje w tym,<br/>Abyś kiedyś był małżonkiem,<br/>A też nie masz po czym tużyć,<br/>Lepiej wolnie świata użyć.",
        
        23:"Możesz państwa snadnie nabyć,<br/>Ale zaś masz wszytko stracić,<br/>Miłość i gra a myślistwo,<br/>To cię przyprawi w ubóstwo.",
        
        24:"Jeśli ty będziesz kupczyć chciał,<br/>Byś jednę dziesięć złotych miał,<br/>Będzieć szczęście silno służyć,<br/>Jedno go więc umiej użyć.",
        
        25:"Prawie we dwudziestym lecie<br/>Masz być małżonką na świecie.<br/>A będziesz mieć męża niemłodego,<br/>Ale barzo poradneg i dobrego.",
        
        26:"Acz się o swoję rzecz starać będziesz,<br/>Nie masz jej mieć, a rozumu zbędziesz,<br/>Bo to ma mieć człowiek inszy,<br/>Zawżdy przyrodzony milszy.",
        
        27:"Wiem, żeć się tym nie zachowam, <br/>Zawżdyś głupi, jako cię znam,<br/>A wżdy sobie radzić nie dasz,<br/>Miłujesz, gdzie łaski nie znasz.",
        
        28:"Radzęć o tym ani myślić,<br/>Byś miał kiedy wlitwie służyć,<br/>Bo jeśli tam służyć będziesz,<br/>Wiedz, że gardła marnie zbędziesz.",
        
        29:"Chceszli synaczka donosić<br/> Każysz za się Boga prosić,<br/>A gniewu się barzo strzeży<br/>I urazu, na tym ci zależy.",
        
        30:"Już poniechaj złości twojej,<br/>Będzie Bóg mścił krzywdy swojej,<br/>Jeśli się ty złego nie odejmiesz,<br/>Wiedz, że z świata marnie zejdziesz.",
        
        31:"Mało takich na świecie dziś,<br/>Jaki ten, co o nim myślisz,<br/>A toć przyrzekam słowem swym,<br/>Ze tobie jest przyjacielem prawym.",
        
        32:"Nie jedź, radzęć, gdzie masz wolą,<br/>Bo cię tam szpetnie ogolą,<br/>A nie tylko na cześnym imieniu,<br/>Ale się strzeż rany na ramieniu.",
        
        33:"Taka jest nadzieja moja,<br/>Żeć się wróci zguba twoja,<br/>Aleć radzę, chowaj lepiej,<br/>Chceszli nie mieć szkody większej.",
        
        34:"Radzęć iście przyjacielskie:<br/>Nie poczynaj sobie kiepskie,<br/>Daj pokój sprawie takowej,<br/>Co jest wątpliwy koniec w niej.",
        
        35:"Nie miej nadzieje w długim żywocie,<br/>Wszakże nie chciej być w kłopocie,<br/>Bo ten dług każdy płacić ma,<br/>A kto później, mało na tym wygra.",
        
        36:"Kapłanem ty wybornie możesz być,<br/>Jedno się chciej co napilniej uczyć,<br/>Abyć się według moich słów stało,<br/>Bo teraz masz pisma barzo mało.",
        
        37:"Jesteś ty człowiek barzolichy,<br/>Przetoć radzę wstąpić w mnichy,<br/>A jeśli więc nim zostaniesz,<br/>Na opactwo tam powstaniesz.",
        },
        
        
    };

    const sybillaNrConversion = {
        1:"22",
        2:"23",
        3:"24",
        4:"25",
        5:"25",
        6:"26",
        7:"16",
        8:"15",
        9:"25",
        10:"26",
        11:"25",
        12:"14",
    };

    const sybillaNames = {
        1:"Sybilla Persyka I",
        2:"Sybilla Libika II",
        3:"Delphika III",
        4:"Sybilla Cymeria IV",
        5:"Sybilla Erytrea V",
        6:"Sybilla Samia VI",
        7:"Sybilla Kumana VII",
        8:"Sybilla Hellespontica VIII",
        9:"Sybilla Phrygia IX",
        10:"Sybilla Tiburtina X",
        11:"Sybilla Kumea XI",
        12:"Sybilla Agrypina XII",
    };

    const opisyPostaci = {
        1: "*Nestor – w mitologii greckiej najstarszy wódz walczący podczas wojny trojańskiej, mityczny król miasta Pylos. On jeden ocalał z synów Neleusa i Chloris, zamordowanych przez Heraklesa. Już za młodu bohater uczestniczył w wyprawie Argonautów. Brał udział w łowach na dzika kalidońskiego i licznych walkach przeciw centaurom. Jako starzec poszedł przeciw Troi, gdzie wsławił się jako dobry doradca, znany z ogromnego doświadczenia i wiedzy. Po zdobyciu grodu wrócił szczęśliwie do ojczyzny. Nestor przeżył 3 pokolenia ludzkie.<br/>Nestorem nazywa się obecnie doświadczonego starca lub najstarszego członka jakiegoś towarzystwa.",
        2: "*Numa Pompilius – legendarny drugi król Rzymu (następca Romulusa), organizator życia religijnego w Rzymie. Był znany ze swej mądrości, pobożności i pokojowego nastawienia. Według tradycji zapoczątkował w Rzymie państwowy kult bogów. Wprowadził między innymi kult Westy, bogini ogniska domowego, dla której wybudował świątynię (datowaną przez archeologów na podstawie badań stratygrafii Forum Romanum na ok. 650 rok p.n.e.). Za jego panowania powstał dwunastomiesięczny kalendarz. Wprowadził również podział na dni robocze (dies fasti) i świąteczne (dies nefasti). Jego następcą był Tullus Sostilusz.",
        3: "*Tullus Hostiliusz – król, trzeci władca Rzymu w latach 673 p.n.e.–642 p.n.e., następca Numy Pompiliusza. Tullus Hostiliusz był wnukiem Hostusa Hostiliusza, który zginął w czasie inwazji Sabinów na Rzym. Był zwolennikiem polityki ekspansjonistycznej, pokonał króla albańskiego Mettiusa, zdobył miasto Alba Longa oraz pokonał Sabinów. Wybudował miejsce posiedzeń senatu (kuria Hostiliusza) i włączył do miasta wzgórze Celius, które według Liwiusza wybrał za siedzibę królewską. Po wygranej wojnie z Sabinami miasto nawiedziła zaraza, o którą obwiniano króla i jego niespokojne rządy. Liwiusz twierdzi, że aby przebłagać bogów, Tulliusz uczestniczył w tajemnym kulcie Jowisza. Niestaranność obrzędu rozgniewała jednak boga i król spłonął w pożarze własnego domu, który zapalił się od uderzenia pioruna.",
        4: "*Tymoteusz – strategii i polityk ateński.",
        5: "*Kwintus Fabiusz Maksimus (ur. ok. 280 p.n.e. w Rzymie, zm. 203 p.n.e. w Rzymie) – rzymski polityk i wódz, pięciokrotnie konsul, dwukrotnie dyktator (w roku 221 p.n.e. i ponownie w 217 p.n.e.). Przydomek Verrucosus oznacza pokryty brodawkami, z powodu brodawek, jakie miał nad górną wargą. Drugi przydomek – Kunktator (łac. zwlekający) – wywodził się od jego strategii w rozmieszczaniu wojsk podczas II wojny punickiej.",
        6: "*Admet – w mitologii greckiej syn Feresa i Klimeny, król Feraj w Tesalii. Brał udział w wyprawie Argonautów i polowaniu na słynnego dzika kalidońskiego. Na jego dworze dziewięć lat musiał spędzić Apollo ukarany przez Zeusa. Służył jako pasterz-niewolnik, pokutując za zabicie Cyklopa. Gospodarz okazywał boskiemu pasterzowi wiele względów, co mu się później sowicie opłaciło. Admet poprosił o rękę Alkestis (Alcesta), córki króla Jolkosu – Peliasa, ten zgodził się na małżeństwo pod warunkiem, że konkurent przyjedzie w odwiedziny wozem zaprzężonym w lwa i dzika. Apollo wytresował zaprzęg dzikich zwierząt dla Admeta, dzięki czemu umożliwił mu upragnione małżeństwo. W dzień ślubu Admet zapomniał złożyć ofiarę Artemidzie, która w akcie zemsty nasłała do jego małżeńskiej sypialni węże, lecz czujny Apollo uratował życie małżonkom. Następnie u mojr (rzymskie Parki) uzyskał przyrzeczenie, że Admetowi zostanie przedłużone życie, jeśli w wyznaczonej, ostatniej godzinie jego życia, ktoś z rodziny zgodzi się umrzeć za niego. Ze wszystkich bliskich tylko Alkestis zgodziła się na to bez wahania i dobrowolnie zeszła do grobu – skąd, w uznaniu jej czynu, przywrócił ją do życia Herakles (według innej wersji mitu: wzruszona jej poświęceniem Persefona).",
        7: "*Orestes – w mitologii greckiej syn Agamemnona i Klitajmestry, który pomścił ojca, zabijając matkę (jego morderczynię) i jej kochanka. Postaci Orestesa poświęcone są liczne antyczne dzieła literackie, przede wszystkim tragedie.<br/>Pyledes – syn władcy Fokidy, Strofiosa i Anaksibii, kuzyn Orestesa. Pylades został najwierniejszym przyjacielem Orestesa i pomagał mu w trudnych sytuacjach. Po siedmiu latach od śmierci Agamemnona wyruszył z Orestesem do jego ojczyzny. Rozwiał wątpliwości Orestesa i wręcz przymusił go, aby pomścił ojca i zabił matkę. Pylades towarzyszył także Orestesowi w wyprawie po posąg Artemidy. Pomógł krewnemu i jego siostrze – Ifigenii – opracować plan wykradnięcia posągu.",
        8: "*Narses – pierwotnie eunuch cesarski, następnie wysoki urzędnik i dowódca bizantyński. Pochodził z Persarmenii, części Armenii zajętej w 384 roku przez Persów. Został dowódcą armii bizantyńskiej w Italii, mimo że nie posiadał wykształcenia wojskowego i był w podeszłym wieku, odniósł szereg zwycięstw. W latach 552–555 rozbił Ostrogotów (Busta Gallorum 552, Cumae 555, Werona 562). Od 567 roku piastował stanowisko prefekta Italii. W czasie walk z Ostrogotami korzystał z pomocy Longobardów. Według Historii Longobardów Pawła Diakona popadłszy w niełaskę, nakłonił ich do opanowania Italii. Został odwołany z urzędu na skutek skarg o nadużycia. Był małego wzrostu i słabego zdrowia.",
        9: "*Kalchas – obok Mopsosa i Tejrezjasza jeden z najsłynniejszych wieszczów greckich, słynący z wróżenia z lotu ptaków. Znanych jest kilka jego przepowiedni:<br/>Kiedy Achajowie składali ofiarę bogom przed rozpoczęciem oblężenia Ilionu, spod ołtarza wypełzł wąż, wspiął się na pobliskie drzewo i pożarł znajdujące się w gnieździe osiem piskląt i ich matkę. Następnie wąż zamienił się w kamień. Kalchas trafnie zinterpretował to wydarzenie jako znak od Zeusa. Zapowiadał on, że Achajowie będą bezskutecznie oblegać mury Troi przez dziewięć lat i zdobędą je dopiero w dziesiątym roku.<br/>Przepowiedział Agamemnonowi, że żadne okręty wojenne nie będą mogły wypłynąć do Troi, dopóki nie uśmierzy gniewu Artemidy. W tym celu polecił złożyć w ofierze córkę Agamemnona, Ifigenię.<br/>Potrafił wyjaśnić, dlaczego w dziesiątym roku oblężenia na Achajów spadła zaraza. Okazało się, że zesłał ją Apollon, na prośbę swojego kapłana, Chryzesa, któremu Agamemnon porwał córkę, Chryzejdę. Jedynym wyjściem było oddanie porwanej ojcu.<br/>Przepowiedział również, że mury Troi pozostaną niezdobyte tak długo, jak w trojańskiej świątyni Ateny będzie znajdował się Palladion. Posążek został ukradziony przez Diomedesa i Odyseusza.<br/>Jego mniej znane przepowiednie mówiły o tym, że do zwycięstwa nad Troją konieczna jest przy oblężeniu obecność dwóch wojowników: Achillesa i Filokteta.<br/>Kalchas przepowiedział sam sobie, że umrze wtedy, gdy spotka wieszcza mądrzejszego od siebie. Pokonany został w sztuce wieszczenia dopiero przez Mopsosa, wnuka Terezjasza. Zobaczywszy maciorę, która się prosiła, starali się przewidzieć, ile urodzi prosiąt. Kalchas przewidział narodziny ośmiu, Mopsos - dziewięciu. Kiedy okazało się, że rację ma ten drugi, Kalchas umarł ze zmartwienia.<br/>Świątynia poświęcona Kalchasowi znajdowała się w Apulii, gdzie wyznawcy we śnie usyskiwali wyrok wyroczni.",
        10: "*Giges – król Lidii. Według mitu przekazanego przez Platona był właścicielem pierścienia, dzięki któremu stawał się niewidzialny (J. Kiliańczyk-Zięba, s. 91.)",
        11: "*Euryalos – w mitologii greckiej syn Mekisteusa, uczestnik wyprawy Argonautów, epigonów przeciw Tebom i wojny trojańskiej, jeden z bohaterów <i>Eneidy<i> Wirgiliusza. Jego ukochanym i przyjacielem jest Nisus",
        12: "*Publiusz Wentydiusz Bassus – rzymski generał i jeden z podopiecznych Juliusza Cezara. Odniósł kluczowe zwycięstwa przeciwko Partom, które doprowadziły do śmierci kluczowych dowódców Partów. Zwycięstwa te odkupiły straty Krassusa i utorowały drogę najazdom Antoniusza. Wentydiusz za swoje zwycięstwa nad Partami otrzymał prawo odbycia triumfu w Rzymie.",
        13: "*Niobe – w mitologii greckiej królowa Teb, małżonka Amfiona, z którym miała 7 synów i 7 córek, zwanych Niobidami.",
        14: "*Helena – w mitologii greckiej królewna i królowa Sparty; bohaterka Iliady Homera. Z wielu starających się o jej rękę zalotników wybrała Menelaosa, księcia Myken i brata Agamemnona, króla Myken, który był żonaty z Klitajmestrą, siostrą Heleny. Aby zapobiec waśniom, jej przybrany ojciec Tyndareos, król Sparty (był to pomysł Odyseusza), zobowiązał innych, by w razie potrzeby pośpieszyli z pomocą wybranemu przez Helenę oblubieńcowi. Kiedy Tyndareos zmarł, Menelaos został królem Sparty. Helena miała z Menelaosem córkę Hermionę. W wyniku wywołanego przez Eris sporu trzech bogiń: Hery, Afrodyty i Ateny o to, która z nich jest najpiękniejsza, została przyrzeczona królewiczowi trojańskiemu Parysowi, który spór rozsądził na korzyść Afrodyty. Parys porwał Helenę do swojej ojczystej Troi. Menelaos, by odbić ukochaną, zorganizował wyprawę przeciw Troi, pod dowództwem swego brata, Agamemnona. W czasie wojny Parys został zabity, a Helena została żoną jego brata, Deifobosa. Wreszcie, po 10 latach wojny, Troja została zdobyta, a Menelaos ujrzawszy piękno żony, niezmienione mimo upływu czasu, wybaczył jej niewierność i lata rozłąki i zabrał jako małżonkę na swój dwór w Sparcie.",
        15: "*Aspazja – mieszkanka Miletu, która zasłynęła swym związkiem z Peryklesem, ateńskim mężem stanu. Według niektórych autorów była jego żoną. Niewiele wiadomo o szczegółach jej życia. Większą część dorosłych lat spędziła w Atenach, prawdopodobnie wywierając wpływ na Peryklesa i ateńską politykę. Jest o niej mowa w dziełach Platona, Arystofanesa, Ksenofonta i innych autorów tego czasu. Starożytni pisarze wspominają również, że Aspazja prowadziła dom publiczny i sama była nierządnicą, jednakże współcześni naukowcy kwestionują te relacje, które miałyby pochodzić od komediopisarzy zainteresowanych zniesławianiem Peryklesa. Niektórzy badacze kwestionują nawet historyczną tradycję, zgodnie z którą miała być ona heterą albo kurtyzaną. Zasugerowali, że w rzeczywistości mogła być żoną Peryklesa. Aspazja miała z Peryklesem syna, Peryklesa Młodszego, który później, będąc strategiem w armii greckiej, został stracony po bitwie pod Arginuzami. Przyjmuje się, że po śmierci Peryklesa Starszego została kurtyzaną Lizyklesa, innego ateńskiego dowódcy i męża stanu.",
        16: "*Chione – w mitologii greckiej nimfa śniegu. Była córką Boreasza, boga północnego wiatru, i Orejtyji. Miała być matką Eumolposa, twórcy misteriów eleuzyjskich, którego miała z Posejdonem.",
        17: "*Krezus – ostatni król Lidii, kraju na zachodzie Azji Mniejszej. Jego imię jest synonimem bogacza od starożytności. Pochodził z dynastii Mermnadów. Był synem Alyattesa. Objął tron około 560 roku p.n.e. Był mecenasem poetów, uczonych i filozofów, których chętnie gościł na swoim dworze.",
        18: "*Toranius – znany starożytny handlarz niewolników.",
        19: "*Iazon – w mitologii greckiej Argonauta, heros, syn Ajzona, króla Jolkos w Tesalii.",
        20: "*Polikratesa – tyran Samos w latach 537-522 p.n.e., Polikrates był przez starożytnych uważany za człowieka niezwykle szczęśliwego. Wzbudziło to zaniepokojenie Amasisa – sojusznika i przyjaciela tyrana – który wierzył, że ktoś, komu powodzi się nazbyt dobrze we wszystkim, musi marnie zakończyć żywot. Jest to przejaw silnie zaznaczonej u Herodota wiary w Ananke – zrównującą moc przeznaczenia, która nazbyt pomyślne losy odwraca w końcu na niekorzyść. Jak podaje Herodot, Amasis poradził Polikratesowi, by ten dobrowolnie wyrzekł się czegoś, co jest dla niego cenne. Uznawszy słuszność tej rady, Polikrates wyrzuca do morza piękny sygnet, dzieło Teodorosa z Samos. Bogowie nie przyjmują jednak tej dobrowolnej ofiary i pierścień powraca do władcy w brzuchu ryby podarowanej mu przez jednego z poddanych.",
        21: "*Śmierć",
    }
