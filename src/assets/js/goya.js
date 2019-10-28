(() => {
  function getRandomNumberBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  const latinoipsum = new Vue({
    // Need to use this delimiter because it clashes w/ Nunjucks/11ty
    delimiters: ['${', '}'],
    el: ".latinoipsum",
    data: {
      initialPageLoad: true,
      paragraphCount: 1,
      minSentenceLength: 5,
      maxSentenceLength: 15,
      sentencesInParagraph: 5,
      output: [],
      placeholder: "Tus palabras estarán aquí.",
      punctuation: ['.', '.', '.', '!', '?'], // More periods to have less ! and ?. Hackiness = 100
      palabras: [
        {
          "id": "-1",
          "content": "hola",
          "category": ["puertorriqueno", "dominicano"]
        },
        {
          "id": "-2",
          "content": "goya",
          "category": ["puertorriqueno", "dominicano"]
        },
        {
          "id": "-3",
          "content": "adobo",
          "category": ["puertorriqueno", "dominicano"]
        },
        {
          "id": "-4",
          "content": "arroz con gandules",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-5",
          "content": "plátano",
          "category": ["puertorriqueno", "dominicano"]
        },
        {
          "id": "-6",
          "content": "tostones",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-7",
          "content": "sazón",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-8",
          "content": "tacos",
          "category": ["mexicano"]
        },
        {
          "id": "-9",
          "content": " ¿que lo que? ",
          "category": ["dominicano"]
        },
        {
          "id": "-10",
          "content": "mofongo",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-11",
          "content": "Presidente",
          "category": ["dominicano"]
        },
        {
          "id": "-12",
          "content": "Malta Goya",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-13",
          "content": "El Morro",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-14",
          "content": "Boricua",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-15",
          "content": "brutal",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-16",
          "content": "nene",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-17",
          "content": "nena",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-18",
          "content": " ¡Wepa! ",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-19",
          "content": " ¡Ay bendito! ",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-20",
          "content": "vaina",
          "category": ["dominicano"]
        },
        {
          "id": "-21",
          "content": "yala",
          "category": ["dominicano"]
        },
        {
          "id": "-22",
          "content": "guagua",
          "category": ["puertorriqueno", "dominicano"]
        },
        {
          "id": "-23",
          "content": "salsa",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-24",
          "content": "merengue",
          "category": ["puertorriqueno", "dominicano"]
        },
        {
          "id": "-25",
          "content": "mi gente",
          "category": ["puertorriqueno", "dominicano"]
        },
        {
          "id": "-26",
          "content": "tigre",
          "category": ["dominicano"]
        },
        {
          "id": "-27",
          "content": " ¿que lo wha? ",
          "category": ["dominicano"]
        },
        {
          "id": "-28",
          "content": "dimelo, tigre",
          "category": ["dominicano"]
        },
        {
          "id": "-29",
          "content": "jevi",
          "category": ["dominicano"]
        },
        {
          "id": "-30",
          "content": "sancocho",
          "category": ["puertorriqueno", "dominicano"]
        },
        {
          "id": "-31",
          "content": "bachata",
          "category": ["dominicano"]
        },
        {
          "id": "-32",
          "content": "mangu",
          "category": ["dominicano"]
        },
        {
          "id": "-33",
          "content": "tranqui",
          "category": ["dominicano"]
        },
        {
          "id": "-34",
          "content": "chevere",
          "category": ["puertorriqueno", "dominicano"]
        },
        {
          "id": "-35",
          "content": "dame un chin",
          "category": ["dominicano"]
        },
        {
          "id": "-36",
          "content": "bacalaitos",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-37",
          "content": "alcapurrias",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-38",
          "content": "de lo mio",
          "category": ["dominicano"]
        },
        {
          "id": "-39",
          "content": "pernil",
          "category": ["puertorriqueno", "dominicano"]
        },
        {
          "id": "-40",
          "content": "mayoketchup",
          "category": ["puertorriqueno", "dominicano"]
        },
        {
          "id": "-41",
          "content": "vamos",
          "category": ["puertorriqueno", "dominicano", "colombiano"]
        },
        {
          "id": "-42",
          "content": "mariachi",
          "category": ["mexicano"]
        },
        {
          "id": "-43",
          "content": "que Dios lo bendiga",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-44",
          "content": "cómo estás",
          "category": [""]
        },
        {
          "id": "-45",
          "content": "dale",
          "category": [""]
        },
        {
          "id": "-46",
          "content": "tu sabes",
          "category": [""]
        },
        {
          "id": "-47",
          "content": "pasteles",
          "category": ["puertorriqueno"]
        },
        {
          "id": "-48",
          "content": "que hiciste abusadora",
          "category": [""]
        },
        {
          "id": "-49",
          "content": "piña colada",
          "category": [""]
        },
        {
          "id": "-50",
          "content": "coco frío",
          "category": [""]
        },
      ],
      siteCopy: {
        paragraphsLabel: {
          es: "Párrafos",
          en: "Paragraphs"
        },
        languageLabel: {
          es: 'Idioma',
          en: 'Language'
        },
        buttonLabel: {
          es: 'Dámelo!',
          en: 'Give it to me!'
        },
        copyButtonLabel: {
          es: 'Copiar',
          en: 'Copy'
        },
        copyNotificationLabel: {
          es: 'Copiado!',
          en: 'Copied!'
        },
        flavorLabel: {
          es: 'Eligió tu sabor',
          en: 'Choose your flavor'
        },
      },
      flavorOptions: [
        {
          label: {
            es: 'Dominicano',
            en: 'Dominican'
          },
          value: 'dominicano'
        },
        {
          label: {
            es: 'Puertorriqueño',
            en: 'Puerto Rican'
          },
          value: 'puertorriqueno'
        },
        {
          label: {
            es: 'Colombiano',
            en: 'Colombian'
          },
          value: 'colombiano'
        },
        {
          label: {
            es: 'Mexicano',
            en: 'Mexican'
          },
          value: 'mexicano'
        },
      ],
      selectedFlavors: [],

      // State
      copyNotification: false,
      idioma: 'es', // english or espanol
      isMounted: false
    },
    methods: {
      generateWords: function() {
        this.initialPageLoad = false;
        console.log('Generating words...');
        const paragraphArray = [];
        // Build Paragraphs
        for(let i=0; i<this.paragraphCount; i++) {
          let paragraph = [];
          let sentence = [];
          
          for(let sc=0; sc<this.sentencesInParagraph; sc++) {
            let sentenceLength = getRandomNumberBetween(this.minSentenceLength, this.maxSentenceLength);
            for(let sl=0; sl<sentenceLength; sl++) {
              let wordObj = this.palabras[getRandomNumberBetween(0, this.palabras.length - 1)];
              let word = wordObj.content;
              // console.log(wordObj.id); // Checking randomness
              if(sl == 0) word = word.charAt(0).toUpperCase() + word.slice(1);
              sentence.push(word);
            }
            // console.log(`adding ${sentence} to paragraph`);
            // Add punctuation
            let punctuation = this.punctuation[getRandomNumberBetween(0, this.punctuation.length - 1)];
            sentence[sentence.length - 1] += punctuation;
            paragraph.push(sentence.join(' '));
            
            // reset sentence
            sentence = [];
          }

          // Add paragraph
          paragraphArray.push(paragraph.join(' '));
        }
        
        this.output = paragraphArray;
      },
      incrementParagraphCount: function() {
        this.paragraphCount++;
        if(!this.initialPageLoad) this.generateWords();
      },
      decrementParagraphCount: function() {
        if(this.paragraphCount == 1) return;
        this.paragraphCount--;
        if(!this.initialPageLoad) this.generateWords();
      },
      activateCopyNotification: function() {
        this.copyNotification = true;
        setTimeout(() => {
          this.copyNotification = false;
        }, 1500);
      }
    },
    created() {
      // Fetch data and assign to this.palabras
    },
    mounted() {
      this.isMounted = true;
      var clipboard = new ClipboardJS('.clippy');
      const vue = this;

      clipboard.on('success', function (e) {
        vue.activateCopyNotification();
        e.clearSelection();
      });

      // clipboard.on('error', function (e) {
        // console.error('Action:', e.action);
        // console.error('Trigger:', e.trigger);
      // });
    }
  });
})();