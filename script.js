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
 const SecondWheelScreenGoBack = document.querySelector(`.SecondWheelScreenGoBack`);
 const characterImage = document.querySelector('#characterImage')


changeFont.addEventListener('click',() => {
    if (body.style.fontFamily == "unifrakturmaguntiabook"){
        body.style.fontFamily = "Libre Caslon Text";
        body.style.fontSize = "Large";
        changeFont.innerHTML = "<u>Zmień font na frakturę</u>"
    } else {
        body.style.fontFamily = "unifrakturmaguntiabook";
        body.style.fontSize = "x-large"
        changeFont.innerHTML = "<u>Zmnień font na współczesny</u>"
    }
});

function resetValues (){
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
}

goToAuguryList.addEventListener('click',() => {
    resetValues();
});

function getWheel(wheelNumber){
    document.getElementById("imageid").src=`wheels/wheelcut${wheelNumber}.png`;
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
        messageChoose = wheelText[currentWheelSelected][winningSymbolNr];
        displayMessage.innerHTML = messageChoose;
       // Zmiana tekstu w buttonie do przejścia do trzeciej sekcji
        clickCharacterText.innerHTML = `Kliknij w ${postaci[currentWheelSelected]}, by udać się z nim do miasta`;
        //Pokaż bohatera
        document.getElementById("characterImage").src = `characterPictures/characterPicture${currentWheelSelected}.png`;
        goButton.style.pointerEvents = 'auto';
        // displayAugury.innerHTML = `${tekstTestowy1[currentWheelSelected][winningSymbolNr]}`;
        //Wyłapanie zwieręcia i miasta
        displayAnimal = messageChoose.split(' ');
        console.log(displayAnimal[2]);
        displayCity = messageChoose.split(' ');
        console.log(displayCity[4]);

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

        characterImage.addEventListener('click',() => {
            document.getElementById("thirdScreen").scrollIntoView();
            ;
        });

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
        1: { //Tarcza 1 Gąsiorek
            1: "Idź do Kozy miástá Osmolin", // 1 1
            2: "Idź do Baráná miástá Opolé", // 1 2
            3: "Idź do Bor?uka miástá Podáyczé", // 2 2
            4: "Idź do Tchorzá miástá Swierców", // 1 3
            5: "Idź do Wiewiórki miast Przewor?ko", // 2 3
            6: "Idź do Láśicé miástá Stryy", // 3 3
            7: "Idź do Záiącá miástá Mieśći?ko", // 1 4
            8: "Idź do Krzeczká miástá Záwichost", // 2 4
            9: "Idź do Nowogrod miástá Rzeszów", // 3 4
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
            20: "Idź do Ryśiá miástá Grodek", // 5 6
            21: "Idź do Sobolá miástá Bochnia" // 6 6
        },

        2: { //Tarcza 2 Gołąb
            1: "Idź do Sobolá miástá Kozyrnik",
            2: "Idź do Kozy miástá Rożan",
            3: "Idź do Birana miástá Mogilnicá",
            4: "Idź do Borsuká miástá Stężycá",
            5: "Idź do Tchorzá miasta Roátyn",
            6: "Idź do Wiewiórki miástá Stryyków",
            7: "Idź do Láśice miástá Kulitów",
            8: "Idź do Záiącá miástá Ośieczno",
            9: "Idź do Krzeczká miástá Rubieszów",
            10: "Idź do Nowogrod miástá Urzędów",
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
            21: "Idź do Ryśiá miástá Fordan"
        },

        3: { //Tarcza 1 Orzeł
            1: "Idź do Ryśiá miástá Lubin", // 1 1
            2: "Idź do Sobolá miástá Kászkowo", // 1 2
            3: "Idź do Kozy miástá Szérków", // 2 2
            4: "Idź do Báráná miástá Rypin", // 1 3
            5: "Idź do Borsuká miast Buk", // 2 3
            6: "Idź do Tchorzá miástá Zwoleń", // 3 3
            7: "Idź do Wiewiórki miástá Rzemień", // 1 4
            8: "Idź do Láśice miástá Leszko", // 2 4
            9: "Idź do Záiącá miástá Radomskie", // 3 4
            10: "Idź do Krzeczká miástá Proszkowice", // 4 4
            11: "Idź do Nowogrod miástá Trębowla", // 1 5
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
            2: "Idź do Kuny miástá Rzeszów", // 1 2
            3: "Idź do Bobru miástá Bircza", // 2 2
            4: "Idź do Rysiá miástá Dopczyce", // 1 3
            5: "Idź do Sobolá miastá Gołogóry", // 2 3
            6: "Idź do Kozy miástá Solec", // 3 3
            7: "Idź do Báráná miástá Widáwá", // 1 4
            8: "Idź do Borsuká miástá Krocko", // 2 4
            9: "Idź do Tchorzá miástá Mosiná", // 3 4
            10: "Idź do Wiewiórki miástá Wysokié", // 4 4
            11: "Idź do Láśice miástá Bolesłáwiec", // 1 5
            12: "Idź do Záiącá miástá Kraśnik", // 2 5
            13: "Idź do Krzeczká miástá Koło", // 3 5
            14: "Idź do Nowogrod miástá Brzyska", // 4 5
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
            5: "Idź do Kuny miastá Lábiszyn", // 2 3
            6: "Idź do Bobru miástá Dubiecko", // 3 3
            7: "Idź do Rysiá miástá Kłodáwá", // 1 4
            8: "Idź do Sobolá miástá Brzostek", // 2 4
            9: "Idź do Kozy miástá Sokal", // 3 4
            10: "Idź do Bárána miástá Smotrzyc", // 4 4
            11: "Idź do Borsuká miástá Wawálnicá", // 1 5
            12: "Idź do Tchorzá miástá Grzegorzów", // 2 5
            13: "Idź do Wiewiórki miástá Kleczów", // 3 5
            14: "Idź do Łásice miástá Kuflów", // 4 5
            15: "Idź do Záiącá  miástá Będzyń", // 5 5
            16: "Idź do Krzeczká miástá Włozymiérz", // 1 6
            17: "Idź do Nowogrod miástá Hołbok", // 2 6
            18: "Idź do Rosomaká miástá Szyszkow", // 3 6
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
            9: "Idź do Łásice miástá Jásłowiec", // 3 4
            10: "Idź do Záiącá miástá Gośćin", // 4 4
            11: "Idź do Krzeczká miástá Chodecz", // 1 5
            12: "Idź do Nowogrod miástá Sielanów", // 2 5
            13: "Idź do Rosomaká miástá Chęciny", // 3 5
            14: "Idź do Króliká miástá Radzánów", // 4 5
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
            5: "Idź do Ryśiá miastá Huchań", // 2 3
            6: "Idź do Sobolá miástá Zduny", // 3 3
            7: "Idź do Kozy miástá Rypno", // 1 4
            8: "Idź do Baráná miástá Wártá", // 2 4
            9: "Idź do Borsuká miástá Trzemeszno", // 3 4
            10: "Idź do Tchorzá miástá Szrákowo", // 4 4
            11: "Idź do Wiewiórki miástá Liw", // 1 5
            12: "Idź do Łásice miástá Suleiów", // 2 5
            13: "Idź do Záiącá miástá Wasosze", // 3 5
            14: "Idź do Krzeczká miástá Wąkocko", // 4 5
            15: "Idź do Nowogrod miástá Siećiechów", // 5 5
            16: "Idź do Rosomaká miástá Rolno", // 1 6
            17: "Idź do Króliká miástá Rychwał", // 2 6
            18: "Idź do Popielice miástá Sieluń", // 3 6
            19: "Idź do Gronostáiá miástá Gorzków", // 4 6
            20: "Idź do Niedźwiedzia miástá Wrzesnia", // 5 6
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
            8: "Idź do Kozy miástá Węgrowice", // 2 4
            9: "Idź do Baráná miástá Pokrzywnicá", // 3 4
            10: "Idź do Borsuká miástá Skrzynno", // 4 4
            11: "Idź do Tchorzá miástá Niobylec", // 1 5
            12: "Idź do Wiewiórki miástá Sepelborg", // 2 5
            13: "Idź do Łásice miástá Denów", // 3 5
            14: "Idź do Záiącá miástá Grodźec", // 4 5
            15: "Idź do Krzeczká miástá Słupia", // 5 5
            16: "Idź do Nowogrod miástá Jáworów", // 1 6
            17: "Idź do Rosomaká miástá Przyrów", // 2 6
            18: "Idź do Króliká miástá Oporów", // 3 6
            19: "Idź do Popielice miástá Staw", // 4 6
            20: "Idź do Gronostáiá miástá Stembeg", // 5 6 ???
            21: "Idź do Niedźwiedzia miástá Zárnowiec" // 6 6
        },
		
	9: { //Tarcza 9 Kruk
            1: "Idź do Borsuká miástá Łáńcut", // 1 1
            2: "Idź do Tchorzá miástá Wolbran", // 1 2
            3: "Idź do Wiewiórki miástá Járocin", // 2 2
            4: "Idź do Łásice miástá Kiebłow", // 1 3
            5: "Idź do Záiącá miastá Rćina", // 2 3
            6: "Idź do Krzeczká miástá Nowytarg", // 3 3
            7: "Idź do Nowogrod miástá Sowozczów", // 1 4
            8: "Idź do Rosomaká miástá Trzćiél", // 2 4
            9: "Idź do Króliká miástá Bábin", // 3 4
            10: "Idź do Popielice miástá Záłoszce", // 4 4
            11: "Idź do Gronostáiá miástá Járząb", // 1 5
            12: "Idź do Niedźwiedzia miástá Buczác", // 2 5
            13: "Idź do Wydry miástá Horynin", // 3 5
            14: "Idź do Liszki miástá Górno", // 4 5
            15: "Idź do Wilká miástá Máłogoszce", // 5 5
            16: "Idź do Kuny miástá Zákroczym", // 1 6
            17: "Idź do Bobru miástá Chodel", // 2 6
            18: "Idź do Rysiá miástá Lásko", // 3 6
            19: "Idź do Sobolá miástá Fryálno", // 4 6
            20: "Idź do Kozy miástá Kiernoźia", // 5 6 ???
            21: "Idź do Baráná miástá Szczekocin" // 6 6
        },
		
	10: { //Tarcza 10 Krogulec
            1: "Idź do Rosomaká miástá Járosław", // 1 1
            2: "Idź do Króliká miástá Rynárzów", // 1 2
            3: "Idź do Popielice miástá Wyszkowo", // 2 2
            4: "Idź do Gronostáiá miástá Przeclaw", // 1 3
            5: "Idź do Niedźwiedzia miastá Sleszyn", // 2 3
            6: "Idź do Wydry miástá Rátno", // 3 3
            7: "Idź do Liszki miástá Zbączyn", // 1 4
            8: "Idź do Wilká miástá Láskárzów", // 2 4
            9: "Idź do Kuny miástá Jwánowice", // 3 4
            10: "Idź do Bobru miástá Zárszyn", // 4 4
            11: "Idź do Rysiá miástá Rydźiná", // 1 5
            12: "Idź do Sobolá miástá Dobrogoszcz", // 2 5
            13: "Idź do Kozy miástá Koszyczki", // 3 5
            14: "Idź do Baráná miástá Kónin", // 4 5
            15: "Idź do Borsuká miástá Chełmno", // 5 5
            16: "Idź do Tchorzá miástá Lubaczów", // 1 6
            17: "Idź do Wiewiórki miástá Stawiszyn", // 2 6
            18: "Idź do Łásice miástá Wieluń", // 3 6
            19: "Idź do Záiącá miástá Rywotycz", // 4 6
            20: "Idź do Krzeczká miástá Człómniki", // 5 6 ???
            21: "Idź do Nowogrod miástá Głęboczek" // 6 6
        },

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

