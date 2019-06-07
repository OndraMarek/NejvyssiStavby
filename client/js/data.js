var budovy = [
    {
        "name":"Burdž Chalífa",
        "year":"2009",
        "photo":"budova1.jpg",
        "city":"Dubaj",
        "state":"Spojené arabské emiráty",
        "height":"828 m",
        "storey":"163",
        "link":"https://en.wikipedia.org/wiki/Burj_Khalifa",
    },
    {
        "name":"Shanghai Tower",
        "year":"2015",
        "photo":"budova2.jpg",
        "city":"Šanghaj",
        "state":"Čína",
        "height":"632 m",
        "storey":"128",
        "link":"https://en.wikipedia.org/wiki/Shanghai_Tower",
    },
    {
        "name":"Abrádž Al-Bajt",
        "year":"2012",
        "photo":"budova3.jpg",
        "city":"Mekka",
        "state":"Saúdská Arábie",
        "height":"601 m",
        "storey":"120",
        "link":"https://en.wikipedia.org/wiki/Abraj_Al_Bait",
    },
    {
        "name":"Ping An International Finance Centre",		 			
        "year":"2017",
        "photo":"budova4.jpg",
        "city":"Šen-čen",
        "state":"Čína",
        "height":"599 m",
        "storey":"115",
        "link":"https://en.wikipedia.org/wiki/Ping_An_Finance_Centre",
    },
    {
        "name":"Lotte World Tower",		
        "year":"2016",
        "photo":"budova5.jpg",
        "city":"Soul",
        "state":"Jižní Korea",
        "height":"554,5 m",
        "storey":"123",
        "link":"https://en.wikipedia.org/wiki/Lotte_World_Tower",
    },            
    {
        "name":"One World Trade Center",
        "year":"2013",
        "photo":"budova6.jpg",
        "city":"New York",
        "state":"USA",
        "height":"541,3 m",
        "storey":"104",
        "link":"https://en.wikipedia.org/wiki/One_World_Trade_Center",
    },            
    {
        "name":"CTF Finance Centre",
        "year":"2015",
        "photo":"budova7.jpg",
        "city":"Kanton",
        "state":"Čína",
        "height":"530 m",
        "storey":"111",
        "link":"https://en.wikipedia.org/wiki/Guangzhou_CTF_Finance_Centre",
    },            
    {
        "name":"Tianjin CTF Finance Centre",
        "year":"2018",
        "photo":"budova8.jpeg",
        "city":"Tchien-ťin",
        "state":"Čína",
        "height":"530 m",
        "storey":"98",
        "link":"https://en.wikipedia.org/wiki/Tianjin_CTF_Finance_Centre",
    },
    {
        "name":"China Zun",
        "year":"2017",
        "photo":"budova9.jpg",
        "city":"Peking",
        "state":"Čína",
        "height":"528 m",
        "storey":"108",
        "link":"https://en.wikipedia.org/wiki/China_Zun",
    },
    {
        "name":"Tchaj-pej 101",
        "year":"2004",
        "photo":"budova10.jpg",
        "city":"Tchaj-pej",
        "state":"Tchaj-wan",
        "height":"509,2 m",
        "storey":"101",
        "link":"https://en.wikipedia.org/wiki/Taipei_101",
    },     
];

var vystavba = [
    {
        "place":"Jeddah Tower",
        "description": "Jeddah Tower je název mrakodrapu, jehož výstavba byla zahájena v saúdskoarabském městě Džidda na pobřeží Rudého moře dne 1. dubna 2013. Očekávaný termín dokončení je listopad 2019. Po dokončení by se mělo jednat o nejvyšší stavbu světa s minimálně 167 patry a výškou přibližně 1000 metrů. Budova bude součástí nového městského komplexu Jeddah Economic City. Její stavba bude stát více než 1,2 miliard dolarů a bude vyrobena z více než 80 tisíc tun oceli.",
        "photo": "vystavba1.jpeg"
    },
    {
        "place":"Central Park Tower",
        "description": "Central Park Tower je mrakodrap ve výstavbě na newyorském Manhattanu. Budova má dosáhnout výše 472 metrů a má mít 95 pater. Po svém dokončení se stane druhým nejvyšším mrakodrapem ve Spojených státech Amerických. V budově mají být obchody, hotel a byty. Stavba budovy začala v roce 2014 a budova má být dokončena v roce 2020. Developery budovy jsou americká Extell Development Company a SMI USA, dceřiná společnost čínské Shanghai Municipal Investment Group.",
        "photo": "vystavba2.jpeg"
    },
    {
        "place":"PNB 118",
        "description": "PNB 118 bude 118 ti patrový, 644 metrů vysoký, mrakodrap, který je momentálně ve výstavbě v Kuala Lumpuru, v Malaysii.",
        "photo": "vystavba3.jpeg"
    }
];

var zajimavosti = [ 
    {
        "title":"Nejvyšší budova česka",
        "text": "AZ Tower je výšková budova v Brně a nejvyšší budova Česka, postavená v letech 2011 až 2013. Nachází se v ulici Pražákova, v katastrálním území Štýřice, v městské části Brno-střed, poblíž M-Paláce a objektu Spielberk Tower.",
    },
    {
        "title":"Specializovaní umývači oken",
        "text": "K mytí oken mrakodrapu Burj Khalifa jsou zvenčí nainstalovány tři mycí plošiny, každá o hmotnosti 1 500 kg. Ta nejvyšší patra jsou však ponechána specialistům, kteří pracují v doslova extrémních podmínkách – umýt okna musí zvládnout zavěšeni na lanech ve výšce více než 800 metrů a práci jim ztěžují silné poryvy větru. Za normálních podmínek trvá 36 zaměstnancům 3-4 měsíce, než všechna okna vyčistí.",
    },
    {
        "title":"Útoky z 11. září 2001",
        "text": "byly sérií koordinovaných teroristických útoků, které se uskutečnily 11. září 2001 ve Spojených státech amerických. Podle oficiálního vyšetřování 19 mužů spojených s militantní islámskou organizací al-Kájda uneslo 4 letadla letící na komerčních linkách společnosti American Airlines a United Airlines. Dvě z nich (Let American Airlines č. 11, Let United Airlines č. 175) narazila do Světového obchodního centra v New Yorku a způsobila jejich zničení. Třetí letadlo (Let American Airlines č. 77) narazilo do Pentagonu, sídla Ministerstva obrany Spojených států amerických v hlavním městě USA, Washingtonu. Čtvrté letadlo (Let United Airlines č. 93) se zřítilo v neobývané oblasti v Pensylvánii po souboji mezi teroristy a pasažéry o ovládnutí letadla. Letadlo letělo na Washington a spekuluje se, že mělo za cíl zasáhnout Bílý dům a nebo americký Kapitol. Při útocích zahynulo celkem asi 3000 lidí.",
    }
];