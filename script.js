 const body = document.querySelector('#body')
 const changeFont = document.querySelector('.changeFont');
 const goToAuguryList = document.querySelector('.buttonToAuguryList');
 const wheel = document.querySelector('.wheel');
 const startButton = document.querySelector('.buttonSpin');
 const goButton = document.querySelector('.goButton')
 const displayMessage = document.querySelector('.displayMessage');
//  const displayNumber = document.querySelector('.displayNumber');
 const displayAugury = document.querySelector('.displayAugury');
 const goToSecondWheelScreen = document.querySelector('.goToSecondWheelScreen');
 const clickCharacterText = document.querySelector('#clickCharacterText');
 const SecondWheelScreenGoBack = document.querySelector(`.SecondWheelScreenGoBack`);
 const characterImage = document.querySelector('#characterImage');
 const animalWheel = document.querySelector('#secondWheel');
 const displayAuguryCoordinates = document.querySelector('#displayAuguryCoordinates');
 const clickOnAnimal = document.querySelector('#clickOnAnimal');
 const firstScreenH1 = document.querySelector('#firstScreenTitles');


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
    // displayNumber.innerHTML = "-";
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
    // displayNumber.innerHTML = "-";
    displayAugury.innerHTML = "-";
    winningSymbolNr=0;
    goToSecondWheelScreen.style.display = "none";
    firstScreenH1.innerHTML = firstScreenTitles[wheelNumber];
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
        // displayNumber.innerHTML = "-";
        displayAugury.innerHTML = "-";
        startButton.style.pointerEvents = 'none';
        goButton.style.pointerEvents = 'none';
        deg = Math.floor(2000 + Math.random() * 2000);
        wheel.style.transition = 'all 0.1s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;
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
        clickCharacterText.innerHTML = `Kliknij w ${postaci[currentWheelSelected]}, by udać się z nim do miasta`;
        //Pokaż bohatera
        document.getElementById("characterImage").src = `characterPictures/characterPicture${currentWheelSelected}.png`;
        goButton.style.pointerEvents = 'auto';
        // displayAugury.innerHTML = `${tekstTestowy1[currentWheelSelected][winningSymbolNr]}`;
        //Wyłapanie zwieręcia i miasta
        animalSplit = messageChoose.split(' ');
        animal = animalSplit[2];
        citySplit = messageChoose.split(' ');
        city = citySplit[4];

        currentCity=animalWheels[animal][city];
        document.getElementById("secondWheel").src=`animalWheels/${animal}.png`;

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

        // Ekran 3
        characterImage.addEventListener('click',() => {
            console.log(animal, city);
            document.getElementById("thirdScreen").scrollIntoView();
        setTimeout (function () {
            degAnim = zoneSize*currentCity[1];
            animalWheel.style.transition = 'all 2s ease-out';
            animalWheel.style.transform = `rotate(${-degAnim}deg)`;
            }, 1500);
            console.log(currentCity[0])
        });

        animalWheel.addEventListener('transitionend', () => {
            displayAuguryCoordinates.innerHTML=`${currentCity[0]}`;
            clickOnAnimal.innerHTML=`Kliknij na tarczę ${animal}, by przjeść do Sybilli i poznać swoją przyszłość`;
            displayAuguryCoordinates.style.display = "flex";


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
        3: "Tuliusa Hostiliusa",
        4: "Tymoteusa",
        5: "Fabiusa",
        6: "Alcestisa Admetusa",
        7: "Orestesa Piladesa",
        8: "Narsesa",
        9: "Calchasa",
        10: "Bigesa",
        11: "Eurialusa",
        12: "Ventidiusa Bassusa",
        13: "Niobe",
        14: "Helenę",
        15: "Aspazję",
        16: "Chinoe",
        17: "Cresusa",
        18: "Toraniusa",
        19: "Iasona",
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
                12: "Idź do Nowogródká miástá Sielanów", // 2 5
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
            Ciechanów: ["Sybillá 8. wiersz 2.", 17], 		// 18
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
        1: "Jeſli kto będzie długo żyw",
        2: "Jeſli kto będzie Duchownym",
        3: "Jeſli kto będzie podwyſzſzon",
        4: "Jeſli kto będzie fortunny",
        5: "Jeſli ſye czyie myślenie ſpełni",
        6: "Jeſli ſye dobrze ożenić",
        7: "Jeſli kto komu jest prawie",
        8: "Jeſli kto będzie co wyſłuży ná Panie",
        9: "Jeſli co dobrze czynić",
        10: "Jeſli kto bydzie czego żąda",
        11: "Jeſli sye kto ná miłości dobrze ma",
        12: "Jeſli dobrze do ktorego Pana przystać",
        13: "Jeſli ktora porodzi syna albo dziewkę",
        14: "Jeſli która biała głowa miłuje",
        15: "Jeſli która poymie dobrego męża",
        16: "Jeſli która rychło zá mąż poydzie",
        17: "Jeſli kto będzie bogátym",
        18: "Jeſli dobrze być kupcem",
        19: "Jesli drogá będzie ſzczęśliwa",
        20: "Jeſli kto zgubę naydzie",
        21: "Jeſli kto z świátá zeydzie",
        }