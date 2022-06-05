 
 const body = document.querySelector('#body')
 const changeFont = document.querySelector('.changeFont')
 const goToAuguryList = document.querySelector('.buttonToAuguryList');
 const wheel = document.querySelector('.wheel');
 const startButton = document.querySelector('.buttonSpin');
 const goButton = document.querySelector('.goButton')
 const displayMessage = document.querySelector('.displayMessage');
 const displayNumber = document.querySelector('.displayNumber');
 const displayAugury = document.querySelector('.displayAugury');
 const goToSecondWheelScreen = document.querySelector('.goToSecondWheelScreen');
 const clickCharacterText = document.querySelector('#clickCharacterText');
 const SecondWheelScreenGoBack = document.querySelector(`.SecondWheelScreenGoBack`)

changeFont.addEventListener('click',() => {
    if (body.style.fontFamily == "unifrakturmaguntiabook"){
        body.style.fontFamily = "Roboto";
        body.style.fontSize = "Large";
        changeFont.innerHTML = "<u>Zmień font na frakturę</u>"
    } else {
        body.style.fontFamily = "unifrakturmaguntiabook";
        body.style.fontSize = "x-large"
        changeFont.innerHTML = "<u>Zmnień font na współczesny</u>"
    }
});

goToAuguryList.addEventListener('click',() => {
    document.getElementById("firstScreen").scrollIntoView();
    displayMessage.innerHTML = "-";
    displayNumber.innerHTML = "-";
    displayAugury.innerHTML = "-";
    winningSymbolNr=0;
    deg=0;
    actualDeg=0;
    goToSecondWheelScreen.style.display = "none"
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    wheel.style.transition = 'none';
    startButton.style.pointerEvents = 'auto';
});

function getWheel(wheelNumber){
    document.getElementById("imageid").src=`WheelCut${wheelNumber}.png`;
    currentWheelSelected = wheelNumber;
    document.getElementById("secondScreen").scrollIntoView();
    displayMessage.innerHTML = "-";
    displayNumber.innerHTML = "-";
    displayAugury.innerHTML = "-";
    winningSymbolNr=0;
    goToSecondWheelScreen.style.display = "none";
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
        displayNumber.innerHTML = "-";
        displayAugury.innerHTML = "-";
        startButton.style.pointerEvents = 'none';
        goButton.style.pointerEvents = 'none';
        deg = Math.floor(2000 + Math.random() * 2000);
        wheel.style.transition = 'all 2s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;
    });

    wheel.addEventListener('transitionend', () => {
        wheel.style.transition = 'none';
        const actualDeg = deg % 360;
        wheel.style.transform = `rotate(${actualDeg}deg)`;
        handleWin(actualDeg);
        // Pokazanie numerów kości
        displayNumber.innerHTML = symbolZones[winningSymbolNr];
        // Tekst z tarczy pierwszej;
        displayMessage.innerHTML = wheelText[currentWheelSelected][winningSymbolNr];
       // Zmiana tekstu w buttonie do przejścia do trzeciej sekcji
        clickCharacterText.innerHTML = `Kliknij w ${postaci[currentWheelSelected]}, by udać się z nim do miasta`;
        //Pokaż bohatera
        document.getElementById("characterImage").src = `characterPicture${currentWheelSelected}.png`;
        goButton.style.pointerEvents = 'auto';

        displayAugury.innerHTML = `${tekstTestowy1[currentWheelSelected][winningSymbolNr]}`;

        // goButton.addEventListener('click', () => {
        // displayAugury.innerHTML = `${tekstTestowy1[currentWheelSelected][winningSymbolNr]}`;
        // });
        setTimeout (function () {
            goToSecondWheelScreen.style.display = "flex";
            startButton.style.pointerEvents = 'auto';
            }, 1000);
        SecondWheelScreenGoBack.addEventListener('click',() => {
            goToSecondWheelScreen.style.display = "none";
            });
        });

    // wheel.addEventListener('transitionend', () => {
    //     startButton.style.pointerEvents = 'auto';
    //     wheel.style.transition = 'none';
    //     const actualDeg = deg % 360;
    //     wheel.style.transform = `rotate(${actualDeg}deg)`;
    //     handleWin(actualDeg);
    //     // Pokazanie numerów kości
    //     displayNumber.innerHTML = symbolZones[winningSymbolNr];
    //     // Tekst z tarczy pierwszej;
    //     displayMessage.innerHTML = wheelText[currentWheelSelected][winningSymbolNr];
    //     goButton.style.pointerEvents = 'auto';
    //     goButton.addEventListener('click', () => {
    //         show2Wheel()
    //     });
    // });

    // function show2Wheel(){
    //     console.log("Works")
    //     goButton.style.pointerEvents = 'none';

    // }

})();
    
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

    // Gąsiorek
    const wheelText = {
        1: { //Tarcza 1
            1: "Idź do kozy miasta Osmolin",
            2: "Idź do Barana miasta Opole",
            3: "Idź do Borsuka miasta Podaycze",
            4: "Idź do Tchorza miasta Swierców",
            5: "Idź do Wiewiórki miast Przeworsko",
            6: "Idź do Lasice miasta Stryy",
            7: "Idź do Zaiąca miasta Mieścisko",
            8: "Idź do Krzeczka miasta Zawichost",
            9: "Idź do Nowogrod: miasta Rzeszów",
            10: "Idź do Rosomaka miasta Szelechów",
            11: "Idź do Królika miasta Szyrnik",
            12: "Idź do Popielica miasta Brzeżek",
            13: "Idź do Gronostaja miasta Rozprza",
            14: "Idź do NIedźwiedzia miasta Sanok",
            15: "Idź do Wydry miasta Lutomiersko",
            16: "Idź do Liszki miasta Czyrsk",
            17: "Idź do Wilka miasta Czarnków",
            18: "Idź do Kuny miasta Zydaczów",
            19: "Idź do Bobru miasta Chmielnik",
            20: "Idź do Rysia miasta Grodek",
            21: "Idź do Sobola miasta Bochnia"
        },
        
        2: { //Tarcza 2
            1: "Idź do Sobol miasta Kozyrnik", 
            2: "Idź do Kozy miasta Rożan",
            3: "Idź do Barana miasta Mogilnica",
            4: "Idź do Borsuka miasta Stężyca",
            5: "Idź do Tchorza miast Roatyn",
            6: "Idź do Wiewiorki miasta Stryykow",
            7: "Idź do Lasice miasta Kuchtow",
            8: "Idź do Zaiąca miasta Osieczno",
            9: "Idź do Krzeczka miasta Rubieszów",
            10: "Idź do Nowogro miasta Urzędów",
            11: "Idź do Rosomaka miasta Wawrzynczyce",
            12: "Idź do Krolika miasta Tuchola",
            13: "Idź do Popielice miasta Chełm",
            14: "Idź do Gronostaia miasta Szczyrek",
            15: "Idź do Niedzwied miasta Poniec",
            16: "Idź do Wydry miasta Ciechanów",
            17: "Idź do Liszki miasta Lepno",
            18: "Idź do Wilka miasta Legonice",
            19: "Idź do Kuny miasta Opatowice",
            20: "Idź do Bobru miasta Bełżyce",
            21: "Idź do Rysia miasta Fordan"
        }
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
        2: "Numę Pompiliusa",
        3: "ipsum 3",
        4: "ipsum 4",
        5: "ipsum 5",
        6: "ipsum 6",
        7: "ipsum 7",
        8: "ipsum 8",
        9: "ipsum 9",
        10: "ipsum 10",
        11: "ipsum 11",
        12: "ipsum 12",
        13: "ipsum 13",
        14: "ipsum 14",
        15: "ipsum 15",
        16: "ipsum 16",
        17: "ipsum 17",
        18: "ipsum 18",
        19: "ipsum 19",
        20: "ipsum 20",
        21: "ipsum 21",
    }

