var config = {
    style: 'mapbox://styles/ed1990/cll89htrx00n901pb3kms2ksx',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNsbDhhNnR4bjBnaXQzZHJteG53ZXJuanYifQ.iMG4DLNPPGon9HXYFwyQxw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:sans; padding: 0.5vh; border-radius: 10px; color:#141414; font-size:1.6rem" >Atlas of Leadership</span>',
    subtitle: '<span style=" font-family: Arial; color:#141414; font-size:2.4rem" > Navigating Academic Legacies, Gender, and Generations</span>',
    byline: '<p><a href="https://panorama.ro/author/edit/" target="_blank">Edit Gyenge</a></p> <p style="margin-left:2vh; margin-right:2vh" ><span style="font-family: Arial; color:#141414; font-size:1.2rem" >In an era where leadership takes center stage on the global platform, a groundbreaking interactive map titled "Atlas of Leadership: Navigating Academia, Gender, and Generations" offers an unprecedented exploration of head of state figures from around the world. This digital marvel takes users on a captivating journey through the lives of leaders, spotlighting their academic roots, gender dynamics, and generational influences.</span></p>',
    footer: '<br> 1 iunie 2023 </br> <br> Creat folosind <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling </a> <p>Ilustrația este făcută cu Microsoft Bing Image creator</p>',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'center',        
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slug-style-id5',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'n an era where leadership takes center stage on the global platform, a groundbreaking interactive map titled "Atlas of Leadership: Navigating Academia, Gender, and Generations" offers an unprecedented exploration of head of state figures from around the world. This digital marvel takes users on a captivating journey through the lives of leaders, spotlighting their academic roots, gender dynamics, and generational influences.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },



        
        {
            id: 'slug-style-id3',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'În funcție de țara unde se naște, sunt șanse mai mari sau mai mici ca un copil să fie o „fetiță cu chibrituri”, care nici măcar nu apucă să supraviețuiască primilor ani. Sau un „Oliver Twist” care trăiește o viață viciată de sărăcia familiei. Poate că e o Cenușăreasă orfană sau o Heidi crescută de bunici.<img src="./foh.png" class="center">',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slug-style-id4',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Poate că e un copil ca eroul din Narnia, ai cărui părinți sunt educați și îl formează după chipul și asemănarea lor. Sau o Alice într-o țară a minunilor educației, unde are șansa la o educație care să-i dezvolte competențele și abilitățile așa cum trebuie. În fine, poate că e un Huck Finn, expus abuzurilor de toate felurile. <img src="./nah.png" class="center">',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        {
            id: 'slug-style-id6',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'În partea a doua a acestei povești vizuale despre copiii lumii în care trăim, ne concentrăm pe formarea primită în primii ani de viață, de la părinți. În fiecare țară, se pune accent pe diverse valori și lucruri pe care părinții le consideră importante în viață, fără ca micii copii să aibă vreun cuvânt de spus. Plecând de la un studiu World Values Survey, facem o incursiune printre copiii din câteva țări reprezentative pentru regiunile Europei, să vedem cum îi modelează cultural și social părinții lor, încă de mici.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        



        {
            id: 'exp1',
            alignment: 'left',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Fetița cu chibrituri </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >De Hans Christian Andersen </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Tema: Moartea  </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./fetita.png"></div> Povestea emoționantă, scrisă de Hans Christian Andersen, se învârte în jurul unei tinere fete sărace, care încearcă să vândă chibrituri într-o seară de Revelion înghețată. Este desculță, îmbrăcată prost și nu are adăpost. Încearcă să se încălzească cu focul de la chibrituri, însă moare de frig până a doua zi dimineață.',
            location: {
                center: [24.233145, 45.976924],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind1',
            alignment: 'right',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem"  >Indicator: Rata mortalității la copiii până în vârsta de 5 ani </span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >Top state: România, Bulgaria, Malta </p>',
            image: '',
            description: 'E vorba de probabilitatea ca un nou-născut să moară înainte de a atinge vârsta de 5 ani, exprimată per 1.000 de nașteri vii. În 2021, 5 milioane de copii sub vârsta de 5 ani au murit, în toată lumea. În UE mor, în medie, 3,7 copii din 1000 cu vârsta sub 5 ani.  La nivel global, bolile infecțioase, inclusiv pneumonie, diaree și malarie, rămân principalele cauze ale deceselor la copiii sub 5 ani, alături de nașterea prematură și complicațiile legate de naștere. Copiii din România și Bulgaria sunt fetițele cu chibrituri ale Europei. Acestea sunt țările UE unde mor cei mai mulți copii sub 5 ani.',
            location: {
                center: [24.233145, 45.976924],
                zoom: 6,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind1.1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="Rata mortalității la copiii până în vârsta de 5 ani (%)" aria-label="Map" id="datawrapper-chart-Y5Mo0" src="https://datawrapper.dwcdn.net/Y5Mo0/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="620" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();</script>',
            location: {
                center: [24.233145, 45.976924],
                zoom: 7,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp2',
            alignment: 'left',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Cenușăreasa </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >De Frații Grimm, Charles Perrault </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Tema: Orfanii </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./cenusareasa.png"></div>Cenușăreasa este o tânără fată orfană care trăiește cu o mamă vitregă și surori vitrege crude. În ciuda dificultăților, ea rămâne amabilă și plină de speranță. Cu ajutorul Zânei Bune, Cenușăreasa participă la un bal regal, unde cucerește inima prințului.',
            location: {
                center: [33.177598, 35.103830],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind2',
            alignment: 'right',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Indicator: Rata mortalității materne</span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >Top state: Cipru, Letonia, Ungaria </p>',
            image: '',
            description: 'E vorba de mamele care mor din cauza unor complicații de sănătate, în timpul sarcinii sau nașterii. Între 2000 și 2020, rata mortalității materne globale (MMR) a scăzut cu 34% - de la 342 de decese la 223 de decese la 100.000 de nașteri vii, conform estimărilor interinstituționale ale ONU.',
            location: {
                center: [33.177598, 35.103830],
                zoom: 6,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind2.1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe title="Rata mortalității materne (%)" aria-label="Map" id="datawrapper-chart-SQyf0" src="https://datawrapper.dwcdn.net/SQyf0/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="620" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}(); </script>',
            location: {
                center: [33.177598, 35.103830],
                zoom: 7,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'exp3',
            alignment: 'left',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Oliver Twist </span> <p><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1rem" >De Charles Dickens </p> <p> </span><span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.4rem" >Tema: Sărăcie </span> </p>',
            image: '',
            description: '<div style="width:400px; height:auto; padding:5px;"> <img src="./oliver.png"></div>Romanul clasic al lui Charles Dickens urmărește viața unui tânăr orfan, care crește în condițiile aspre ale unei instituții de ocrotire din Anglia secolului al XIX-lea. După ce trece prin abuzuri și greutăți, Oliver evadează și ajunge să fie exploatat în lumea infracțională a Londrei. ',
            location: {
                center: [24.233145, 45.976924],
                zoom: 4,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ind3',
            alignment: 'right',
            hidden: false,
            title: '<span style=" font-family: playfair display, serif; color:#926834; text-align: center; font-size:2rem" >Indicator: Rata deprivării materiale severe la copiii sub 18 ani</span> <p> <span style=" font-family: playfair display, serif; color:#2A2A2A; font-size:1.2rem" >Top state: România, Bulgaria, Grecia </p>',
            image: '',
            description: 'Sărăcia nu e doar un cuvânt generic pentru cei care nu au bani. Se traduce în situații extrem de concrete, în statisticile UE. Conform Eurostat, deprivarea materială severă apare atunci când cel puțin 7 din 13 privațiuni există în viața unui copil.',
            location: {
                center: [24.233145, 45.976924],
                zoom: 5,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        {
            id: 'fin3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Există o tendință în aceste regiuni de a subestima sau de a neglija alte abilități și calități care nu sunt direct legate de munca asiduă. Caracteristici precum gestionarea banilor, altruismul sau imaginația pot fi trecute pe plan secundar, prioritate având munca și realizările materiale. Acest lucru se datorează în mare parte necesității de a rezolva problemele imediate și de a construi o stabilitate financiară.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'fin4',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'În 2023, pe întreg globul trăiau 2,2 miliarde de copii, iar aproximativ 80 de milioane dintre ei trăiau în Uniunea Europeană. Fiecare s-a născut și va crește în condiții și cu șanse diferite, în funcție de țara și familia unde a venit pe lume.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },


        
        

    ]
};