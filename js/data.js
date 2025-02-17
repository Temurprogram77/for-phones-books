const booksData = [
  {
    author: "Chinua Achebe",
    country: "Nigeria",
    imageLink: "/assets/img/things-fall-apart.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Things_Fall_Apart",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958,
    uniqueId: "Things_Fall_Apart",
  },
  {
    author: "Hans Christian Andersen",
    country: "Denmark",
    imageLink: "/assets/img/fairy-tales.jpg",
    language: "Danish",
    link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.",
    pages: 784,
    title: "Fairy tales",
    year: 1836,
    uniqueId: "Fairy_Tales_Told_for_Children._First_Collection.",
  },
  {
    author: "Dante Alighieri",
    country: "Italy",
    imageLink: "/assets/img/the-divine-comedy.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/Divine_Comedy",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315,
    uniqueId: "Divine_Comedy",
  },
  {
    author: "Unknown",
    country: "Sumer and Akkadian Empire",
    imageLink: "/assets/img/the-epic-of-gilgamesh.jpg",
    language: "Akkadian",
    link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh",
    pages: 160,
    title: "The Epic Of Gilgamesh",
    year: -1700,
    uniqueId: "Epic_of_Gilgamesh",
  },
  {
    author: "Unknown",
    country: "Achaemenid Empire",
    imageLink: "/assets/img/the-book-of-job.jpg",
    language: "Hebrew",
    link: "https://en.wikipedia.org/wiki/Book_of_Job",
    pages: 176,
    title: "The Book Of Job",
    year: -600,
    uniqueId: "Book_of_Job",
  },
  {
    author: "Unknown",
    country: "India/Iran/Iraq/Egypt/Tajikistan",
    imageLink: "/assets/img/one-thousand-and-one-nights.jpg",
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights",
    pages: 288,
    title: "One Thousand and One Nights",
    year: 1200,
    uniqueId: "One_Thousand_and_One_Nights",
  },
  {
    author: "Unknown",
    country: "Iceland",
    imageLink: "/assets/img/njals-saga.jpg",
    language: "Old Norse",
    link: "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga",
    pages: 384,
    title: "Njál's Saga",
    year: 1350,
    uniqueId: "Nj%C3%A1ls_saga",
  },
  {
    author: "Jane Austen",
    country: "United Kingdom",
    imageLink: "/assets/img/pride-and-prejudice.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
    pages: 226,
    title: "Pride and Prejudice",
    year: 1813,
    uniqueId: "Pride_and_Prejudice",
  },
  {
    author: "Honoré de Balzac",
    country: "France",
    imageLink: "/assets/img/le-pere-goriot.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot",
    pages: 443,
    title: "Le Père Goriot",
    year: 1835,
    uniqueId: "Le_P%C3%A8re_Goriot",
  },
  {
    author: "Samuel Beckett",
    country: "Republic of Ireland",
    imageLink: "/assets/img/molloy-malone-dies-the-unnamable.jpg",
    language: "French, English",
    link: "https://en.wikipedia.org/wiki/Molloy_(novel)",
    pages: 256,
    title: "Molloy, Malone Dies, The Unnamable, the trilogy",
    year: 1952,
    uniqueId: "Molloy_(novel)",
  },
  {
    author: "Giovanni Boccaccio",
    country: "Italy",
    imageLink: "/assets/img/the-decameron.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/The_Decameron",
    pages: 1024,
    title: "The Decameron",
    year: 1351,
    uniqueId: "The_Decameron",
  },
  {
    author: "Jorge Luis Borges",
    country: "Argentina",
    imageLink: "/assets/img/ficciones.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Ficciones",
    pages: 224,
    title: "Ficciones",
    year: 1965,
    uniqueId: "Ficciones",
  },
  {
    author: "Emily Brontë",
    country: "United Kingdom",
    imageLink: "/assets/img/wuthering-heights.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Wuthering_Heights",
    pages: 342,
    title: "Wuthering Heights",
    year: 1847,
    uniqueId: "Wuthering_Heights",
  },
  {
    author: "Albert Camus",
    country: "Algeria, French Empire",
    imageLink: "/assets/img/l-etranger.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/The_Stranger_(novel)",
    pages: 185,
    title: "The Stranger",
    year: 1942,
    uniqueId: "The_Stranger_(novel)",
  },
  {
    author: "Paul Celan",
    country: "Romania, France",
    imageLink: "/assets/img/poems-paul-celan.jpg",
    language: "German",
    link: "",
    pages: 320,
    title: "Poems",
    year: 1952,
    uniqueId: "",
  },
  {
    author: "Louis-Ferdinand Céline",
    country: "France",
    imageLink: "/assets/img/voyage-au-bout-de-la-nuit.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night",
    pages: 505,
    title: "Journey to the End of the Night",
    year: 1932,
    uniqueId: "Journey_to_the_End_of_the_Night",
  },
  {
    author: "Miguel de Cervantes",
    country: "Spain",
    imageLink: "/assets/img/don-quijote-de-la-mancha.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Don_Quixote",
    pages: 1056,
    title: "Don Quijote De La Mancha",
    year: 1610,
    uniqueId: "Don_Quixote",
  },
  {
    author: "Geoffrey Chaucer",
    country: "England",
    imageLink: "/assets/img/the-canterbury-tales.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Canterbury_Tales",
    pages: 544,
    title: "The Canterbury Tales",
    year: 1450,
    uniqueId: "The_Canterbury_Tales",
  },
  {
    author: "Anton Chekhov",
    country: "Russia",
    imageLink: "/assets/img/stories-of-anton-chekhov.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov",
    pages: 194,
    title: "Stories",
    year: 1886,
    uniqueId: "List_of_short_stories_by_Anton_Chekhov",
  },
  {
    author: "Joseph Conrad",
    country: "United Kingdom",
    imageLink: "/assets/img/nostromo.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Nostromo",
    pages: 320,
    title: "Nostromo",
    year: 1904,
    uniqueId: "Nostromo",
  },
  {
    author: "Charles Dickens",
    country: "United Kingdom",
    imageLink: "/assets/img/great-expectations.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Great_Expectations",
    pages: 194,
    title: "Great Expectations",
    year: 1861,
    uniqueId: "Great_Expectations",
  },
  {
    author: "Denis Diderot",
    country: "France",
    imageLink: "/assets/img/jacques-the-fatalist.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Jacques_the_Fatalist",
    pages: 596,
    title: "Jacques the Fatalist",
    year: 1796,
    uniqueId: "Jacques_the_Fatalist",
  },
  {
    author: "Alfred Döblin",
    country: "Germany",
    imageLink: "/assets/img/berlin-alexanderplatz.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz",
    pages: 600,
    title: "Berlin Alexanderplatz",
    year: 1929,
    uniqueId: "Berlin_Alexanderplatz",
  },
  {
    author: "Fyodor Dostoevsky",
    country: "Russia",
    imageLink: "/assets/img/crime-and-punishment.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/Crime_and_Punishment",
    pages: 551,
    title: "Crime and Punishment",
    year: 1866,
    uniqueId: "Crime_and_Punishment",
  },
  {
    author: "Fyodor Dostoevsky",
    country: "Russia",
    imageLink: "/assets/img/the-idiot.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/The_Idiot",
    pages: 656,
    title: "The Idiot",
    year: 1869,
    uniqueId: "The_Idiot",
  },
  {
    author: "Fyodor Dostoevsky",
    country: "Russia",
    imageLink: "/assets/img/the-possessed.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)",
    pages: 768,
    title: "The Possessed",
    year: 1872,
    uniqueId: "Demons_(Dostoyevsky_novel)",
  },
  {
    author: "Fyodor Dostoevsky",
    country: "Russia",
    imageLink: "/assets/img/the-brothers-karamazov.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/The_Brothers_Karamazov",
    pages: 824,
    title: "The Brothers Karamazov",
    year: 1880,
    uniqueId: "The_Brothers_Karamazov",
  },
  {
    author: "George Eliot",
    country: "United Kingdom",
    imageLink: "/assets/img/middlemarch.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Middlemarch",
    pages: 800,
    title: "Middlemarch",
    year: 1871,
    uniqueId: "Middlemarch",
  },
  {
    author: "Ralph Ellison",
    country: "United States",
    imageLink: "/assets/img/invisible-man.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Invisible_Man",
    pages: 581,
    title: "Invisible Man",
    year: 1952,
    uniqueId: "Invisible_Man",
  },
  {
    author: "Euripides",
    country: "Greece",
    imageLink: "/assets/img/medea.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Medea_(play)",
    pages: 104,
    title: "Medea",
    year: -431,
    uniqueId: "Medea_(play)",
  },
  {
    author: "William Faulkner",
    country: "United States",
    imageLink: "/assets/img/absalom-absalom.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Absalom,_Absalom!",
    pages: 313,
    title: "Absalom, Absalom!",
    year: 1936,
    uniqueId: "Absalom,_Absalom!",
  },
  {
    author: "William Faulkner",
    country: "United States",
    imageLink: "/assets/img/the-sound-and-the-fury.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury",
    pages: 326,
    title: "The Sound and the Fury",
    year: 1929,
    uniqueId: "The_Sound_and_the_Fury",
  },
  {
    author: "Gustave Flaubert",
    country: "France",
    imageLink: "/assets/img/madame-bovary.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Madame_Bovary",
    pages: 528,
    title: "Madame Bovary",
    year: 1857,
    uniqueId: "Madame_Bovary",
  },
  {
    author: "Gustave Flaubert",
    country: "France",
    imageLink: "/assets/img/l-education-sentimentale.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Sentimental_Education",
    pages: 606,
    title: "Sentimental Education",
    year: 1869,
    uniqueId: "Sentimental_Education",
  },
  {
    author: "Federico García Lorca",
    country: "Spain",
    imageLink: "/assets/img/gypsy-ballads.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Gypsy_Ballads",
    pages: 218,
    title: "Gypsy Ballads",
    year: 1928,
    uniqueId: "Gypsy_Ballads",
  },
  {
    author: "Gabriel García Márquez",
    country: "Colombia",
    imageLink: "/assets/img/one-hundred-years-of-solitude.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude",
    pages: 417,
    title: "One Hundred Years of Solitude",
    year: 1967,
    uniqueId: "One_Hundred_Years_of_Solitude",
  },
  {
    author: "Gabriel García Márquez",
    country: "Colombia",
    imageLink: "/assets/img/love-in-the-time-of-cholera.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera",
    pages: 368,
    title: "Love in the Time of Cholera",
    year: 1985,
    uniqueId: "Love_in_the_Time_of_Cholera",
  },
  {
    author: "Johann Wolfgang von Goethe",
    country: "Saxe-Weimar",
    imageLink: "/assets/img/faust.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/Goethe%27s_Faust",
    pages: 158,
    title: "Faust",
    year: 1832,
    uniqueId: "Goethe%27s_Faust",
  },
  {
    author: "Nikolai Gogol",
    country: "Russia",
    imageLink: "/assets/img/dead-souls.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/Dead_Souls",
    pages: 432,
    title: "Dead Souls",
    year: 1842,
    uniqueId: "Dead_Souls",
  },
  {
    author: "Günter Grass",
    country: "Germany",
    imageLink: "/assets/img/the-tin-drum.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Tin_Drum",
    pages: 600,
    title: "The Tin Drum",
    year: 1959,
    uniqueId: "The_Tin_Drum",
  },
  {
    author: "João Guimarães Rosa",
    country: "Brazil",
    imageLink: "/assets/img/the-devil-to-pay-in-the-backlands.jpg",
    language: "Portuguese",
    link: "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands",
    pages: 494,
    title: "The Devil to Pay in the Backlands",
    year: 1956,
    uniqueId: "The_Devil_to_Pay_in_the_Backlands",
  },
  {
    author: "Knut Hamsun",
    country: "Norway",
    imageLink: "/assets/img/hunger.jpg",
    language: "Norwegian",
    link: "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)",
    pages: 176,
    title: "Hunger",
    year: 1890,
    uniqueId: "Hunger_(Hamsun_novel)",
  },
  {
    author: "Ernest Hemingway",
    country: "United States",
    imageLink: "/assets/img/the-old-man-and-the-sea.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea",
    pages: 128,
    title: "The Old Man and the Sea",
    year: 1952,
    uniqueId: "The_Old_Man_and_the_Sea",
  },
  {
    author: "Homer",
    country: "Greece",
    imageLink: "/assets/img/the-iliad-of-homer.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Iliad",
    pages: 608,
    title: "Iliad",
    year: -735,
    uniqueId: "Iliad",
  },
  {
    author: "Homer",
    country: "Greece",
    imageLink: "/assets/img/the-odyssey-of-homer.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Odyssey",
    pages: 374,
    title: "Odyssey",
    year: -800,
    uniqueId: "Odyssey",
  },
  {
    author: "Henrik Ibsen",
    country: "Norway",
    imageLink: "/assets/img/a-Dolls-house.jpg",
    language: "Norwegian",
    link: "https://en.wikipedia.org/wiki/A_Doll%27s_House",
    pages: 68,
    title: "A Doll's House",
    year: 1879,
    uniqueId: "A_Doll%27s_House",
  },
  {
    author: "James Joyce",
    country: "Irish Free State",
    imageLink: "/assets/img/ulysses.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Ulysses_(novel)",
    pages: 228,
    title: "Ulysses",
    year: 1922,
    uniqueId: "Ulysses_(novel)",
  },
  {
    author: "Franz Kafka",
    country: "Czechoslovakia",
    imageLink: "/assets/img/stories-of-franz-kafka.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories",
    pages: 488,
    title: "Stories",
    year: 1924,
    uniqueId: "Franz_Kafka_bibliography#Short_stories",
  },
  {
    author: "Franz Kafka",
    country: "Czechoslovakia",
    imageLink: "/assets/img/the-trial.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Trial",
    pages: 160,
    title: "The Trial",
    year: 1925,
    uniqueId: "The_Trial",
  },
  {
    author: "Franz Kafka",
    country: "Czechoslovakia",
    imageLink: "/assets/img/the-castle.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Castle_(novel)",
    pages: 352,
    title: "The Castle",
    year: 1926,
    uniqueId: "The_Castle_(novel)",
  },
  {
    author: "Kālidāsa",
    country: "India",
    imageLink: "/assets/img/the-recognition-of-shakuntala.jpg",
    language: "Sanskrit",
    link: "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam",
    pages: 147,
    title: "The recognition of Shakuntala",
    year: 150,
    uniqueId: "Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam",
  },
  {
    author: "Yasunari Kawabata",
    country: "Japan",
    imageLink: "/assets/img/the-sound-of-the-mountain.jpg",
    language: "Japanese",
    link: "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain",
    pages: 288,
    title: "The Sound of the Mountain",
    year: 1954,
    uniqueId: "The_Sound_of_the_Mountain",
  },
  {
    author: "Nikos Kazantzakis",
    country: "Greece",
    imageLink: "/assets/img/zorba-the-greek.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Zorba_the_Greek",
    pages: 368,
    title: "Zorba the Greek",
    year: 1946,
    uniqueId: "Zorba_the_Greek",
  },
  {
    author: "D. H. Lawrence",
    country: "United Kingdom",
    imageLink: "/assets/img/sons-and-lovers.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Sons_and_Lovers",
    pages: 432,
    title: "Sons and Lovers",
    year: 1913,
    uniqueId: "Sons_and_Lovers",
  },
  {
    author: "Halldór Laxness",
    country: "Iceland",
    imageLink: "/assets/img/independent-people.jpg",
    language: "Icelandic",
    link: "https://en.wikipedia.org/wiki/Independent_People",
    pages: 470,
    title: "Independent People",
    year: 1934,
    uniqueId: "Independent_People",
  },
  {
    author: "Giacomo Leopardi",
    country: "Italy",
    imageLink: "/assets/img/poems-giacomo-leopardi.jpg",
    language: "Italian",
    link: "",
    pages: 184,
    title: "Poems",
    year: 1818,
    uniqueId: "",
  },
  {
    author: "Doris Lessing",
    country: "United Kingdom",
    imageLink: "/assets/img/the-golden-notebook.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Golden_Notebook",
    pages: 688,
    title: "The Golden Notebook",
    year: 1962,
    uniqueId: "The_Golden_Notebook",
  },
  {
    author: "Astrid Lindgren",
    country: "Sweden",
    imageLink: "/assets/img/pippi-longstocking.jpg",
    language: "Swedish",
    link: "https://en.wikipedia.org/wiki/Pippi_Longstocking",
    pages: 160,
    title: "Pippi Longstocking",
    year: 1945,
    uniqueId: "Pippi_Longstocking",
  },
  {
    author: "Lu Xun",
    country: "China",
    imageLink: "/assets/img/diary-of-a-madman.jpg",
    language: "Chinese",
    link: "https://en.wikipedia.org/wiki/A_Madman%27s_Diary",
    pages: 389,
    title: "Diary of a Madman",
    year: 1918,
    uniqueId: "A_Madman%27s_Diary",
  },
  {
    author: "Naguib Mahfouz",
    country: "Egypt",
    imageLink: "/assets/img/children-of-gebelawi.jpg",
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/Children_of_Gebelawi",
    pages: 355,
    title: "Children of Gebelawi",
    year: 1959,
    uniqueId: "Children_of_Gebelawi",
  },
  {
    author: "Thomas Mann",
    country: "Germany",
    imageLink: "/assets/img/buddenbrooks.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/Buddenbrooks",
    pages: 736,
    title: "Buddenbrooks",
    year: 1901,
    uniqueId: "Buddenbrooks",
  },
  {
    author: "Thomas Mann",
    country: "Germany",
    imageLink: "/assets/img/the-magic-mountain.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Magic_Mountain",
    pages: 720,
    title: "The Magic Mountain",
    year: 1924,
    uniqueId: "The_Magic_Mountain",
  },
  {
    author: "Herman Melville",
    country: "United States",
    imageLink: "/assets/img/moby-dick.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Moby-Dick",
    pages: 378,
    title: "Moby Dick",
    year: 1851,
    uniqueId: "Moby-Dick",
  },
  {
    author: "Michel de Montaigne",
    country: "France",
    imageLink: "/assets/img/essais.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Essays_(Montaigne)",
    pages: 404,
    title: "Essays",
    year: 1595,
    uniqueId: "Essays_(Montaigne)",
  },
  {
    author: "Elsa Morante",
    country: "Italy",
    imageLink: "/assets/img/history.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/History_(novel)",
    pages: 600,
    title: "History",
    year: 1974,
    uniqueId: "History_(novel)",
  },
  {
    author: "Toni Morrison",
    country: "United States",
    imageLink: "/assets/img/beloved.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Beloved_(novel)",
    pages: 321,
    title: "Beloved",
    year: 1987,
    uniqueId: "Beloved_(novel)",
  },
  {
    author: "Murasaki Shikibu",
    country: "Japan",
    imageLink: "/assets/img/the-tale-of-genji.jpg",
    language: "Japanese",
    link: "https://en.wikipedia.org/wiki/The_Tale_of_Genji",
    pages: 1360,
    title: "The Tale of Genji",
    year: 1006,
    uniqueId: "The_Tale_of_Genji",
  },
  {
    author: "Robert Musil",
    country: "Austria",
    imageLink: "/assets/img/the-man-without-qualities.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Man_Without_Qualities",
    pages: 365,
    title: "The Man Without Qualities",
    year: 1931,
    uniqueId: "The_Man_Without_Qualities",
  },
  {
    author: "Vladimir Nabokov",
    country: "Russia/United States",
    imageLink: "/assets/img/lolita.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Lolita",
    pages: 317,
    title: "Lolita",
    year: 1955,
    uniqueId: "Lolita",
  },
  {
    author: "George Orwell",
    country: "United Kingdom",
    imageLink: "/assets/img/nineteen-eighty-four.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
    pages: 272,
    title: "Nineteen Eighty-Four",
    year: 1949,
    uniqueId: "Nineteen_Eighty-Four",
  },
  {
    author: "Ovid",
    country: "Roman Empire",
    imageLink: "/assets/img/the-metamorphoses-of-ovid.jpg",
    language: "Classical Latin",
    link: "https://en.wikipedia.org/wiki/Metamorphoses",
    pages: 576,
    title: "Metamorphoses",
    year: 100,
    uniqueId: "Metamorphoses",
  },
  {
    author: "Fernando Pessoa",
    country: "Portugal",
    imageLink: "/assets/img/the-book-of-disquiet.jpg",
    language: "Portuguese",
    link: "https://en.wikipedia.org/wiki/The_Book_of_Disquiet",
    pages: 272,
    title: "The Book of Disquiet",
    year: 1928,
    uniqueId: "The_Book_of_Disquiet",
  },
  {
    author: "Edgar Allan Poe",
    country: "United States",
    imageLink: "/assets/img/tales-and-poems-of-edgar-allan-poe.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales",
    pages: 842,
    title: "Tales",
    year: 1950,
    uniqueId: "Edgar_Allan_Poe_bibliography#Tales",
  },
  {
    author: "Marcel Proust",
    country: "France",
    imageLink: "/assets/img/a-la-recherche-du-temps-perdu.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time",
    pages: 2408,
    title: "In Search of Lost Time",
    year: 1920,
    uniqueId: "In_Search_of_Lost_Time",
  },
  {
    author: "François Rabelais",
    country: "France",
    imageLink: "/assets/img/gargantua-and-pantagruel.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel",
    pages: 623,
    title: "Gargantua and Pantagruel",
    year: 1533,
    uniqueId: "Gargantua_and_Pantagruel",
  },
  {
    author: "Juan Rulfo",
    country: "Mexico",
    imageLink: "/assets/img/pedro-paramo.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo",
    pages: 124,
    title: "Pedro Páramo",
    year: 1955,
    uniqueId: "Pedro_P%C3%A1ramo",
  },
  {
    author: "Rumi",
    country: "Sultanate of Rum",
    imageLink: "/assets/img/the-masnavi.jpg",
    language: "Persian",
    link: "https://en.wikipedia.org/wiki/Masnavi",
    pages: 438,
    title: "The Masnavi",
    year: 1236,
    uniqueId: "Masnavi",
  },
  {
    author: "Salman Rushdie",
    country: "United Kingdom, India",
    imageLink: "/assets/img/midnights-children.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Midnight%27s_Children",
    pages: 536,
    title: "Midnight's Children",
    year: 1981,
    uniqueId: "Midnight%27s_Children",
  },
  {
    author: "Saadi",
    country: "Persia, Persian Empire",
    imageLink: "/assets/img/bostan.jpg",
    language: "Persian",
    link: "https://en.wikipedia.org/wiki/Bustan_(book)",
    pages: 298,
    title: "Bostan",
    year: 1257,
    uniqueId: "Bustan_(book)",
  },
  {
    author: "Tayeb Salih",
    country: "Sudan",
    imageLink: "/assets/img/season-of-migration-to-the-north.jpg",
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North",
    pages: 139,
    title: "Season of Migration to the North",
    year: 1966,
    uniqueId: "Season_of_Migration_to_the_North",
  },
  {
    author: "José Saramago",
    country: "Portugal",
    imageLink: "/assets/img/blindness.jpg",
    language: "Portuguese",
    link: "https://en.wikipedia.org/wiki/Blindness_(novel)",
    pages: 352,
    title: "Blindness",
    year: 1995,
    uniqueId: "Blindness_(novel)",
  },
  {
    author: "William Shakespeare",
    country: "England",
    imageLink: "/assets/img/hamlet.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Hamlet",
    pages: 432,
    title: "Hamlet",
    year: 1603,
    uniqueId: "Hamlet",
  },
  {
    author: "William Shakespeare",
    country: "England",
    imageLink: "/assets/img/king-lear.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/King_Lear",
    pages: 384,
    title: "King Lear",
    year: 1608,
    uniqueId: "King_Lear",
  },
  {
    author: "William Shakespeare",
    country: "England",
    imageLink: "/assets/img/othello.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Othello",
    pages: 314,
    title: "Othello",
    year: 1609,
    uniqueId: "Othello",
  },
  {
    author: "Sophocles",
    country: "Greece",
    imageLink: "/assets/img/oedipus-the-king.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Oedipus_the_King",
    pages: 88,
    title: "Oedipus the King",
    year: -430,
    uniqueId: "Oedipus_the_King",
  },
  {
    author: "Stendhal",
    country: "France",
    imageLink: "/assets/img/le-rouge-et-le-noir.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/The_Red_and_the_Black",
    pages: 576,
    title: "The Red and the Black",
    year: 1830,
    uniqueId: "The_Red_and_the_Black",
  },
  {
    author: "Laurence Sterne",
    country: "England",
    imageLink: "/assets/img/the-life-and-opinions-of-tristram-shandy.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman",
    pages: 640,
    title: "The Life And Opinions of Tristram Shandy",
    year: 1760,
    uniqueId: "The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman",
  },
  {
    author: "Italo Svevo",
    country: "Italy",
    imageLink: "/assets/img/confessions-of-zeno.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/Zeno%27s_Conscience",
    pages: 412,
    title: "Confessions of Zeno",
    year: 1923,
    uniqueId: "Zeno%27s_Conscience",
  },
  {
    author: "Jonathan Swift",
    country: "Ireland",
    imageLink: "/assets/img/gullivers-travels.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Gulliver%27s_Travels",
    pages: 178,
    title: "Gulliver's Travels",
    year: 1726,
    uniqueId: "Gulliver%27s_Travels",
  },
  {
    author: "Leo Tolstoy",
    country: "Russia",
    imageLink: "/assets/img/war-and-peace.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/War_and_Peace",
    pages: 1296,
    title: "War and Peace",
    year: 1867,
    uniqueId: "War_and_Peace",
  },
  {
    author: "Leo Tolstoy",
    country: "Russia",
    imageLink: "/assets/img/anna-karenina.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/Anna_Karenina",
    pages: 864,
    title: "Anna Karenina",
    year: 1877,
    uniqueId: "Anna_Karenina",
  },
  {
    author: "Leo Tolstoy",
    country: "Russia",
    imageLink: "/assets/img/the-death-of-ivan-ilyich.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich",
    pages: 92,
    title: "The Death of Ivan Ilyich",
    year: 1886,
    uniqueId: "The_Death_of_Ivan_Ilyich",
  },
  {
    author: "Mark Twain",
    country: "United States",
    imageLink: "/assets/img/the-adventures-of-huckleberry-finn.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn",
    pages: 224,
    title: "The Adventures of Huckleberry Finn",
    year: 1884,
    uniqueId: "Adventures_of_Huckleberry_Finn",
  },
  {
    author: "Valmiki",
    country: "India",
    imageLink: "/assets/img/ramayana.jpg",
    language: "Sanskrit",
    link: "https://en.wikipedia.org/wiki/Ramayana",
    pages: 152,
    title: "Ramayana",
    year: -450,
    uniqueId: "Ramayana",
  },
  {
    author: "Virgil",
    country: "Roman Empire",
    imageLink: "/assets/img/the-aeneid.jpg",
    language: "Classical Latin",
    link: "https://en.wikipedia.org/wiki/Aeneid",
    pages: 442,
    title: "The Aeneid",
    year: -23,
    uniqueId: "Aeneid",
  },
  {
    author: "Vyasa",
    country: "India",
    imageLink: "/assets/img/the-mahab-harata.jpg",
    language: "Sanskrit",
    link: "https://en.wikipedia.org/wiki/Mahabharata",
    pages: 276,
    title: "Mahabharata",
    year: -700,
    uniqueId: "Mahabharata",
  },
  {
    author: "Walt Whitman",
    country: "United States",
    imageLink: "/assets/img/leaves-of-grass.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Leaves_of_Grass",
    pages: 152,
    title: "Leaves of Grass",
    year: 1855,
    uniqueId: "Leaves_of_Grass",
  },
  {
    author: "Virginia Woolf",
    country: "United Kingdom",
    imageLink: "/assets/img/mrs-dalloway.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Mrs_Dalloway",
    pages: 216,
    title: "Mrs Dalloway",
    year: 1925,
    uniqueId: "Mrs_Dalloway",
  },
  {
    author: "Virginia Woolf",
    country: "United Kingdom",
    imageLink: "/assets/img/to-the-lighthouse.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/To_the_Lighthouse",
    pages: 209,
    title: "To the Lighthouse",
    year: 1927,
    uniqueId: "To_the_Lighthouse",
  },
  {
    author: "Marguerite Yourcenar",
    country: "France/Belgium",
    imageLink: "/assets/img/memoirs-of-hadrian.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian",
    pages: 408,
    title: "Memoirs of Hadrian",
    year: 1951,
    uniqueId: "Memoirs_of_Hadrian",
  },
];
