import type { Lesson } from "../types/learning";

export const lessons: Lesson[] = [
  // ---------------------------------------------------------------------
  // Spanish — es-unit-1
  // ---------------------------------------------------------------------
  {
    id: "es-unit-1-lesson-1",
    unitId: "es-unit-1",
    order: 1,
    title: "Greetings & Introductions",
    xpReward: 10,
    goals: [
      "Greet someone in Spanish",
      "Introduce yourself with 'me llamo'",
      "Say goodbye",
    ],
    vocabulary: [
      { id: "es-v1", word: "hola", translation: "hello", partOfSpeech: "phrase" },
      { id: "es-v2", word: "adiós", translation: "goodbye", partOfSpeech: "phrase" },
      { id: "es-v3", word: "sí", translation: "yes", partOfSpeech: "other" },
      { id: "es-v4", word: "no", translation: "no", partOfSpeech: "other" },
      { id: "es-v5", word: "el hombre", translation: "the man", partOfSpeech: "noun" },
      { id: "es-v6", word: "la mujer", translation: "the woman", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "es-p1", text: "Hola, ¿cómo estás?", translation: "Hello, how are you?" },
      { id: "es-p2", text: "Me llamo Ana.", translation: "My name is Ana." },
      { id: "es-p3", text: "Mucho gusto.", translation: "Nice to meet you." },
    ],
    activities: [
      {
        id: "es-a1",
        type: "multiple-choice",
        prompt: "Which word means 'hello'?",
        options: [
          { id: "opt-1", text: "adiós" },
          { id: "opt-2", text: "hola" },
          { id: "opt-3", text: "no" },
        ],
        correctOptionId: "opt-2",
      },
      {
        id: "es-a2",
        type: "translate",
        prompt: "Translate: 'goodbye'",
        correctAnswer: "adiós",
      },
      {
        id: "es-a3",
        type: "fill-blank",
        prompt: "Me ___ Ana. (My name is Ana.)",
        correctAnswer: "llamo",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging Spanish teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers basic Spanish greetings: hola, adiós, sí, no, and the phrase 'me llamo' for introducing yourself. Guide the student through greeting you, introducing themselves, and saying goodbye.",
    },
  },
  {
    id: "es-unit-1-lesson-2",
    unitId: "es-unit-1",
    order: 2,
    title: "Daily Life",
    xpReward: 10,
    goals: [
      "Talk about your daily routine",
      "Use common daily-life verbs",
      "Describe when you go to work and sleep",
    ],
    vocabulary: [
      { id: "es-v7", word: "despertarse", translation: "to wake up", partOfSpeech: "verb" },
      { id: "es-v8", word: "desayunar", translation: "to have breakfast", partOfSpeech: "verb" },
      { id: "es-v9", word: "trabajar", translation: "to work", partOfSpeech: "verb" },
      { id: "es-v10", word: "el trabajo", translation: "the job / work", partOfSpeech: "noun" },
      { id: "es-v11", word: "la casa", translation: "the house", partOfSpeech: "noun" },
      { id: "es-v12", word: "dormir", translation: "to sleep", partOfSpeech: "verb" },
    ],
    phrases: [
      { id: "es-p4", text: "Me levanto a las siete.", translation: "I get up at seven." },
      { id: "es-p5", text: "Voy al trabajo.", translation: "I go to work." },
      { id: "es-p6", text: "Ceno a las ocho.", translation: "I have dinner at eight." },
    ],
    activities: [
      {
        id: "es-a4",
        type: "multiple-choice",
        prompt: "Which word means 'to work'?",
        options: [
          { id: "opt-1", text: "dormir" },
          { id: "opt-2", text: "trabajar" },
          { id: "opt-3", text: "desayunar" },
        ],
        correctOptionId: "opt-2",
      },
      {
        id: "es-a5",
        type: "translate",
        prompt: "Translate: 'the house'",
        correctAnswer: "la casa",
      },
      {
        id: "es-a6",
        type: "fill-blank",
        prompt: "Me ___ a las siete. (I wake up at seven.)",
        correctAnswer: "despierto",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging Spanish teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers daily-routine vocabulary in Spanish: despertarse, desayunar, trabajar, dormir. Guide the student through describing a simple daily schedule using these verbs.",
    },
  },
  {
    id: "es-unit-1-lesson-3",
    unitId: "es-unit-1",
    order: 3,
    title: "At the Café",
    xpReward: 10,
    goals: [
      "Order a drink at a café",
      "Ask for the bill",
      "Use polite expressions",
    ],
    vocabulary: [
      { id: "es-v13", word: "el café", translation: "coffee", partOfSpeech: "noun" },
      { id: "es-v14", word: "la taza", translation: "the cup", partOfSpeech: "noun" },
      { id: "es-v15", word: "por favor", translation: "please", partOfSpeech: "phrase" },
      { id: "es-v16", word: "la cuenta", translation: "the bill", partOfSpeech: "noun" },
      { id: "es-v17", word: "el camarero", translation: "the waiter", partOfSpeech: "noun" },
      { id: "es-v18", word: "quisiera", translation: "I would like", partOfSpeech: "phrase" },
    ],
    phrases: [
      { id: "es-p7", text: "Quisiera un café, por favor.", translation: "I would like a coffee, please." },
      { id: "es-p8", text: "¿Me trae la cuenta?", translation: "Can you bring me the bill?" },
      { id: "es-p9", text: "Un café con leche, gracias.", translation: "A coffee with milk, thanks." },
    ],
    activities: [
      {
        id: "es-a7",
        type: "multiple-choice",
        prompt: "Which word means 'the bill'?",
        options: [
          { id: "opt-1", text: "la taza" },
          { id: "opt-2", text: "la cuenta" },
          { id: "opt-3", text: "el café" },
        ],
        correctOptionId: "opt-2",
      },
      {
        id: "es-a8",
        type: "translate",
        prompt: "Translate: 'please'",
        correctAnswer: "por favor",
      },
      {
        id: "es-a9",
        type: "fill-blank",
        prompt: "___ un café. (I would like a coffee.)",
        correctAnswer: "Quisiera",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging Spanish teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers ordering at a café in Spanish: el café, la cuenta, quisiera, por favor. Roleplay as a waiter and guide the student through ordering a drink and asking for the bill.",
    },
  },
  {
    id: "es-unit-1-lesson-4",
    unitId: "es-unit-1",
    order: 4,
    title: "Travel & Directions",
    xpReward: 10,
    goals: [
      "Ask for directions",
      "Understand left, right, and straight ahead",
      "Talk about train stations and tickets",
    ],
    vocabulary: [
      { id: "es-v19", word: "la estación", translation: "the station", partOfSpeech: "noun" },
      { id: "es-v20", word: "el billete", translation: "the ticket", partOfSpeech: "noun" },
      { id: "es-v21", word: "a la izquierda", translation: "to the left", partOfSpeech: "phrase" },
      { id: "es-v22", word: "a la derecha", translation: "to the right", partOfSpeech: "phrase" },
      { id: "es-v23", word: "todo recto", translation: "straight ahead", partOfSpeech: "phrase" },
      { id: "es-v24", word: "¿Dónde está...?", translation: "Where is...?", partOfSpeech: "phrase" },
    ],
    phrases: [
      { id: "es-p10", text: "¿Dónde está la estación?", translation: "Where is the station?" },
      { id: "es-p11", text: "Gire a la derecha.", translation: "Turn right." },
      { id: "es-p12", text: "Está todo recto.", translation: "It's straight ahead." },
    ],
    activities: [
      {
        id: "es-a10",
        type: "multiple-choice",
        prompt: "Which word means 'the ticket'?",
        options: [
          { id: "opt-1", text: "el billete" },
          { id: "opt-2", text: "la estación" },
          { id: "opt-3", text: "todo recto" },
        ],
        correctOptionId: "opt-1",
      },
      {
        id: "es-a11",
        type: "translate",
        prompt: "Translate: 'to the left'",
        correctAnswer: "a la izquierda",
      },
      {
        id: "es-a12",
        type: "fill-blank",
        prompt: "¿Dónde ___ la estación?",
        correctAnswer: "está",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging Spanish teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers asking for directions in Spanish: la estación, el billete, a la izquierda/derecha, todo recto. Roleplay a stranger asking for directions to the train station.",
    },
  },
  {
    id: "es-unit-1-lesson-5",
    unitId: "es-unit-1",
    order: 5,
    title: "Shopping",
    xpReward: 10,
    goals: [
      "Ask about prices",
      "Describe things as cheap or expensive",
      "Ask for a different size",
    ],
    vocabulary: [
      { id: "es-v25", word: "la tienda", translation: "the shop", partOfSpeech: "noun" },
      { id: "es-v26", word: "el precio", translation: "the price", partOfSpeech: "noun" },
      { id: "es-v27", word: "barato", translation: "cheap", partOfSpeech: "adjective" },
      { id: "es-v28", word: "caro", translation: "expensive", partOfSpeech: "adjective" },
      { id: "es-v29", word: "¿Cuánto cuesta?", translation: "How much does it cost?", partOfSpeech: "phrase" },
      { id: "es-v30", word: "la talla", translation: "the size", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "es-p13", text: "¿Cuánto cuesta esto?", translation: "How much does this cost?" },
      { id: "es-p14", text: "Es muy caro.", translation: "It's very expensive." },
      { id: "es-p15", text: "¿Tiene otra talla?", translation: "Do you have another size?" },
    ],
    activities: [
      {
        id: "es-a13",
        type: "multiple-choice",
        prompt: "Which word means 'cheap'?",
        options: [
          { id: "opt-1", text: "caro" },
          { id: "opt-2", text: "barato" },
          { id: "opt-3", text: "la talla" },
        ],
        correctOptionId: "opt-2",
      },
      {
        id: "es-a14",
        type: "translate",
        prompt: "Translate: 'the price'",
        correctAnswer: "el precio",
      },
      {
        id: "es-a15",
        type: "fill-blank",
        prompt: "¿Cuánto ___ esto? (How much does this cost?)",
        correctAnswer: "cuesta",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging Spanish teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers shopping vocabulary in Spanish: la tienda, el precio, barato, caro, la talla. Roleplay a shop assistant and guide the student through asking about prices and sizes.",
    },
  },
  {
    id: "es-unit-1-lesson-6",
    unitId: "es-unit-1",
    order: 6,
    title: "Family & Friends",
    xpReward: 10,
    goals: [
      "Introduce your family",
      "Talk about your friends",
      "Use possessive words like 'mi'",
    ],
    vocabulary: [
      { id: "es-v31", word: "la familia", translation: "the family", partOfSpeech: "noun" },
      { id: "es-v32", word: "el hermano", translation: "the brother", partOfSpeech: "noun" },
      { id: "es-v33", word: "la hermana", translation: "the sister", partOfSpeech: "noun" },
      { id: "es-v34", word: "el amigo", translation: "the friend (male)", partOfSpeech: "noun" },
      { id: "es-v35", word: "la amiga", translation: "the friend (female)", partOfSpeech: "noun" },
      { id: "es-v36", word: "los padres", translation: "the parents", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "es-p16", text: "Esta es mi familia.", translation: "This is my family." },
      { id: "es-p17", text: "Él es mi hermano.", translation: "He is my brother." },
      { id: "es-p18", text: "Ella es mi mejor amiga.", translation: "She is my best friend." },
    ],
    activities: [
      {
        id: "es-a16",
        type: "multiple-choice",
        prompt: "Which word means 'sister'?",
        options: [
          { id: "opt-1", text: "hermano" },
          { id: "opt-2", text: "hermana" },
          { id: "opt-3", text: "amigo" },
        ],
        correctOptionId: "opt-2",
      },
      {
        id: "es-a17",
        type: "translate",
        prompt: "Translate: 'the friend (female)'",
        correctAnswer: "la amiga",
      },
      {
        id: "es-a18",
        type: "fill-blank",
        prompt: "Esta es mi ___. (This is my family.)",
        correctAnswer: "familia",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging Spanish teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers family and friends vocabulary in Spanish: la familia, el hermano, la hermana, el amigo, la amiga. Guide the student through introducing their family and friends.",
    },
  },

  // ---------------------------------------------------------------------
  // French — fr-unit-1
  // ---------------------------------------------------------------------
  {
    id: "fr-unit-1-lesson-1",
    unitId: "fr-unit-1",
    order: 1,
    title: "Greetings & Introductions",
    xpReward: 10,
    goals: [
      "Greet someone in French",
      "Introduce yourself with 'je m'appelle'",
      "Say goodbye",
    ],
    vocabulary: [
      { id: "fr-v1", word: "bonjour", translation: "hello", partOfSpeech: "phrase" },
      { id: "fr-v2", word: "au revoir", translation: "goodbye", partOfSpeech: "phrase" },
      { id: "fr-v3", word: "oui", translation: "yes", partOfSpeech: "other" },
      { id: "fr-v4", word: "non", translation: "no", partOfSpeech: "other" },
      { id: "fr-v5", word: "l'homme", translation: "the man", partOfSpeech: "noun" },
      { id: "fr-v6", word: "la femme", translation: "the woman", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "fr-p1", text: "Bonjour, comment ça va?", translation: "Hello, how are you?" },
      { id: "fr-p2", text: "Je m'appelle Léo.", translation: "My name is Léo." },
      { id: "fr-p3", text: "Enchanté.", translation: "Nice to meet you." },
    ],
    activities: [
      {
        id: "fr-a1",
        type: "multiple-choice",
        prompt: "Which word means 'hello'?",
        options: [
          { id: "opt-1", text: "au revoir" },
          { id: "opt-2", text: "non" },
          { id: "opt-3", text: "bonjour" },
        ],
        correctOptionId: "opt-3",
      },
      {
        id: "fr-a2",
        type: "translate",
        prompt: "Translate: 'goodbye'",
        correctAnswer: "au revoir",
      },
      {
        id: "fr-a3",
        type: "fill-blank",
        prompt: "Je m'___ Léo. (My name is Léo.)",
        correctAnswer: "appelle",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging French teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers basic French greetings: bonjour, au revoir, oui, non, and the phrase 'je m'appelle' for introducing yourself. Guide the student through greeting you, introducing themselves, and saying goodbye.",
    },
  },
  {
    id: "fr-unit-1-lesson-2",
    unitId: "fr-unit-1",
    order: 2,
    title: "Daily Life",
    xpReward: 10,
    goals: [
      "Talk about your daily routine",
      "Use common daily-life verbs",
      "Describe when you go to work and sleep",
    ],
    vocabulary: [
      { id: "fr-v7", word: "se réveiller", translation: "to wake up", partOfSpeech: "verb" },
      { id: "fr-v8", word: "le petit-déjeuner", translation: "breakfast", partOfSpeech: "noun" },
      { id: "fr-v9", word: "travailler", translation: "to work", partOfSpeech: "verb" },
      { id: "fr-v10", word: "le travail", translation: "the job / work", partOfSpeech: "noun" },
      { id: "fr-v11", word: "la maison", translation: "the house", partOfSpeech: "noun" },
      { id: "fr-v12", word: "dormir", translation: "to sleep", partOfSpeech: "verb" },
    ],
    phrases: [
      { id: "fr-p4", text: "Je me lève à sept heures.", translation: "I get up at seven." },
      { id: "fr-p5", text: "Je vais au travail.", translation: "I go to work." },
      { id: "fr-p6", text: "Je dîne à huit heures.", translation: "I have dinner at eight." },
    ],
    activities: [
      {
        id: "fr-a4",
        type: "multiple-choice",
        prompt: "Which word means 'to work'?",
        options: [
          { id: "opt-1", text: "dormir" },
          { id: "opt-2", text: "travailler" },
          { id: "opt-3", text: "dîner" },
        ],
        correctOptionId: "opt-2",
      },
      {
        id: "fr-a5",
        type: "translate",
        prompt: "Translate: 'the house'",
        correctAnswer: "la maison",
      },
      {
        id: "fr-a6",
        type: "fill-blank",
        prompt: "Je me ___ à sept heures. (I wake up at seven.)",
        correctAnswer: "réveille",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging French teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers daily-routine vocabulary in French: se réveiller, travailler, dormir, la maison. Guide the student through describing a simple daily schedule using these verbs.",
    },
  },
  {
    id: "fr-unit-1-lesson-3",
    unitId: "fr-unit-1",
    order: 3,
    title: "At the Café",
    xpReward: 10,
    goals: [
      "Order a drink at a café",
      "Ask for the bill",
      "Use polite expressions",
    ],
    vocabulary: [
      { id: "fr-v13", word: "le café", translation: "coffee", partOfSpeech: "noun" },
      { id: "fr-v14", word: "la tasse", translation: "the cup", partOfSpeech: "noun" },
      { id: "fr-v15", word: "s'il vous plaît", translation: "please", partOfSpeech: "phrase" },
      { id: "fr-v16", word: "l'addition", translation: "the bill", partOfSpeech: "noun" },
      { id: "fr-v17", word: "le serveur", translation: "the waiter", partOfSpeech: "noun" },
      { id: "fr-v18", word: "je voudrais", translation: "I would like", partOfSpeech: "phrase" },
    ],
    phrases: [
      { id: "fr-p7", text: "Je voudrais un café, s'il vous plaît.", translation: "I would like a coffee, please." },
      { id: "fr-p8", text: "L'addition, s'il vous plaît.", translation: "The bill, please." },
      { id: "fr-p9", text: "Un café au lait, merci.", translation: "A coffee with milk, thanks." },
    ],
    activities: [
      {
        id: "fr-a7",
        type: "multiple-choice",
        prompt: "Which word means 'the bill'?",
        options: [
          { id: "opt-1", text: "la tasse" },
          { id: "opt-2", text: "l'addition" },
          { id: "opt-3", text: "le café" },
        ],
        correctOptionId: "opt-2",
      },
      {
        id: "fr-a8",
        type: "translate",
        prompt: "Translate: 'please'",
        correctAnswer: "s'il vous plaît",
      },
      {
        id: "fr-a9",
        type: "fill-blank",
        prompt: "Je ___ un café. (I would like a coffee.)",
        correctAnswer: "voudrais",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging French teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers ordering at a café in French: le café, l'addition, je voudrais, s'il vous plaît. Roleplay as a waiter and guide the student through ordering a drink and asking for the bill.",
    },
  },
  {
    id: "fr-unit-1-lesson-4",
    unitId: "fr-unit-1",
    order: 4,
    title: "Travel & Directions",
    xpReward: 10,
    goals: [
      "Ask for directions",
      "Understand left, right, and straight ahead",
      "Talk about train stations and tickets",
    ],
    vocabulary: [
      { id: "fr-v19", word: "la gare", translation: "the station", partOfSpeech: "noun" },
      { id: "fr-v20", word: "le billet", translation: "the ticket", partOfSpeech: "noun" },
      { id: "fr-v21", word: "à gauche", translation: "to the left", partOfSpeech: "phrase" },
      { id: "fr-v22", word: "à droite", translation: "to the right", partOfSpeech: "phrase" },
      { id: "fr-v23", word: "tout droit", translation: "straight ahead", partOfSpeech: "phrase" },
      { id: "fr-v24", word: "Où est...?", translation: "Where is...?", partOfSpeech: "phrase" },
    ],
    phrases: [
      { id: "fr-p10", text: "Où est la gare?", translation: "Where is the station?" },
      { id: "fr-p11", text: "Tournez à droite.", translation: "Turn right." },
      { id: "fr-p12", text: "C'est tout droit.", translation: "It's straight ahead." },
    ],
    activities: [
      {
        id: "fr-a10",
        type: "multiple-choice",
        prompt: "Which word means 'the ticket'?",
        options: [
          { id: "opt-1", text: "le billet" },
          { id: "opt-2", text: "la gare" },
          { id: "opt-3", text: "tout droit" },
        ],
        correctOptionId: "opt-1",
      },
      {
        id: "fr-a11",
        type: "translate",
        prompt: "Translate: 'to the left'",
        correctAnswer: "à gauche",
      },
      {
        id: "fr-a12",
        type: "fill-blank",
        prompt: "Où ___ la gare?",
        correctAnswer: "est",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging French teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers asking for directions in French: la gare, le billet, à gauche/droite, tout droit. Roleplay a stranger asking for directions to the train station.",
    },
  },
  {
    id: "fr-unit-1-lesson-5",
    unitId: "fr-unit-1",
    order: 5,
    title: "Shopping",
    xpReward: 10,
    goals: [
      "Ask about prices",
      "Describe things as cheap or expensive",
      "Ask for a different size",
    ],
    vocabulary: [
      { id: "fr-v25", word: "le magasin", translation: "the shop", partOfSpeech: "noun" },
      { id: "fr-v26", word: "le prix", translation: "the price", partOfSpeech: "noun" },
      { id: "fr-v27", word: "bon marché", translation: "cheap", partOfSpeech: "adjective" },
      { id: "fr-v28", word: "cher", translation: "expensive", partOfSpeech: "adjective" },
      { id: "fr-v29", word: "Combien ça coûte?", translation: "How much does it cost?", partOfSpeech: "phrase" },
      { id: "fr-v30", word: "la taille", translation: "the size", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "fr-p13", text: "Combien coûte ceci?", translation: "How much does this cost?" },
      { id: "fr-p14", text: "C'est très cher.", translation: "It's very expensive." },
      { id: "fr-p15", text: "Avez-vous une autre taille?", translation: "Do you have another size?" },
    ],
    activities: [
      {
        id: "fr-a13",
        type: "multiple-choice",
        prompt: "Which word means 'cheap'?",
        options: [
          { id: "opt-1", text: "cher" },
          { id: "opt-2", text: "bon marché" },
          { id: "opt-3", text: "la taille" },
        ],
        correctOptionId: "opt-2",
      },
      {
        id: "fr-a14",
        type: "translate",
        prompt: "Translate: 'the price'",
        correctAnswer: "le prix",
      },
      {
        id: "fr-a15",
        type: "fill-blank",
        prompt: "Combien ça ___? (How much does this cost?)",
        correctAnswer: "coûte",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging French teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers shopping vocabulary in French: le magasin, le prix, bon marché, cher, la taille. Roleplay a shop assistant and guide the student through asking about prices and sizes.",
    },
  },
  {
    id: "fr-unit-1-lesson-6",
    unitId: "fr-unit-1",
    order: 6,
    title: "Family & Friends",
    xpReward: 10,
    goals: [
      "Introduce your family",
      "Talk about your friends",
      "Use possessive words like 'mon/ma'",
    ],
    vocabulary: [
      { id: "fr-v31", word: "la famille", translation: "the family", partOfSpeech: "noun" },
      { id: "fr-v32", word: "le frère", translation: "the brother", partOfSpeech: "noun" },
      { id: "fr-v33", word: "la soeur", translation: "the sister", partOfSpeech: "noun" },
      { id: "fr-v34", word: "l'ami", translation: "the friend (male)", partOfSpeech: "noun" },
      { id: "fr-v35", word: "l'amie", translation: "the friend (female)", partOfSpeech: "noun" },
      { id: "fr-v36", word: "les parents", translation: "the parents", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "fr-p16", text: "Voici ma famille.", translation: "This is my family." },
      { id: "fr-p17", text: "Il est mon frère.", translation: "He is my brother." },
      { id: "fr-p18", text: "Elle est ma meilleure amie.", translation: "She is my best friend." },
    ],
    activities: [
      {
        id: "fr-a16",
        type: "multiple-choice",
        prompt: "Which word means 'sister'?",
        options: [
          { id: "opt-1", text: "frère" },
          { id: "opt-2", text: "soeur" },
          { id: "opt-3", text: "ami" },
        ],
        correctOptionId: "opt-2",
      },
      {
        id: "fr-a17",
        type: "translate",
        prompt: "Translate: 'the friend (female)'",
        correctAnswer: "l'amie",
      },
      {
        id: "fr-a18",
        type: "fill-blank",
        prompt: "Voici ma ___. (This is my family.)",
        correctAnswer: "famille",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging French teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers family and friends vocabulary in French: la famille, le frère, la soeur, l'ami, l'amie. Guide the student through introducing their family and friends.",
    },
  },

  // ---------------------------------------------------------------------
  // Italian — it-unit-1
  // ---------------------------------------------------------------------
  {
    id: "it-unit-1-lesson-1",
    unitId: "it-unit-1",
    order: 1,
    title: "Greetings & Introductions",
    xpReward: 10,
    goals: [
      "Greet someone in Italian",
      "Introduce yourself with 'mi chiamo'",
      "Say goodbye",
    ],
    vocabulary: [
      { id: "it-v1", word: "ciao", translation: "hello", partOfSpeech: "phrase" },
      { id: "it-v2", word: "arrivederci", translation: "goodbye", partOfSpeech: "phrase" },
      { id: "it-v3", word: "sì", translation: "yes", partOfSpeech: "other" },
      { id: "it-v4", word: "no", translation: "no", partOfSpeech: "other" },
      { id: "it-v5", word: "l'uomo", translation: "the man", partOfSpeech: "noun" },
      { id: "it-v6", word: "la donna", translation: "the woman", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "it-p1", text: "Ciao, come stai?", translation: "Hello, how are you?" },
      { id: "it-p2", text: "Mi chiamo Marco.", translation: "My name is Marco." },
      { id: "it-p3", text: "Piacere.", translation: "Nice to meet you." },
    ],
    activities: [
      {
        id: "it-a1",
        type: "multiple-choice",
        prompt: "Which word means 'hello'?",
        options: [
          { id: "opt-1", text: "arrivederci" },
          { id: "opt-2", text: "no" },
          { id: "opt-3", text: "ciao" },
        ],
        correctOptionId: "opt-3",
      },
      {
        id: "it-a2",
        type: "translate",
        prompt: "Translate: 'goodbye'",
        correctAnswer: "arrivederci",
      },
      {
        id: "it-a3",
        type: "fill-blank",
        prompt: "Mi ___ Marco. (My name is Marco.)",
        correctAnswer: "chiamo",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging Italian teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers basic Italian greetings: ciao, arrivederci, sì, no, and the phrase 'mi chiamo' for introducing yourself. Guide the student through greeting you, introducing themselves, and saying goodbye.",
    },
  },
  {
    id: "it-unit-1-lesson-2",
    unitId: "it-unit-1",
    order: 2,
    title: "Daily Life",
    xpReward: 10,
    goals: [
      "Talk about your daily routine",
      "Use common daily-life verbs",
      "Describe when you go to work and sleep",
    ],
    vocabulary: [
      { id: "it-v7", word: "svegliarsi", translation: "to wake up", partOfSpeech: "verb" },
      { id: "it-v8", word: "la colazione", translation: "breakfast", partOfSpeech: "noun" },
      { id: "it-v9", word: "lavorare", translation: "to work", partOfSpeech: "verb" },
      { id: "it-v10", word: "il lavoro", translation: "the job / work", partOfSpeech: "noun" },
      { id: "it-v11", word: "la casa", translation: "the house", partOfSpeech: "noun" },
      { id: "it-v12", word: "dormire", translation: "to sleep", partOfSpeech: "verb" },
    ],
    phrases: [
      { id: "it-p4", text: "Mi sveglio alle sette.", translation: "I wake up at seven." },
      { id: "it-p5", text: "Vado al lavoro.", translation: "I go to work." },
      { id: "it-p6", text: "Ceno alle otto.", translation: "I have dinner at eight." },
    ],
    activities: [
      {
        id: "it-a4",
        type: "multiple-choice",
        prompt: "Which word means 'to work'?",
        options: [
          { id: "opt-1", text: "dormire" },
          { id: "opt-2", text: "lavorare" },
          { id: "opt-3", text: "cenare" },
        ],
        correctOptionId: "opt-2",
      },
      {
        id: "it-a5",
        type: "translate",
        prompt: "Translate: 'the house'",
        correctAnswer: "la casa",
      },
      {
        id: "it-a6",
        type: "fill-blank",
        prompt: "Mi ___ alle sette. (I wake up at seven.)",
        correctAnswer: "sveglio",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging Italian teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers daily-routine vocabulary in Italian: svegliarsi, lavorare, dormire, la casa. Guide the student through describing a simple daily schedule using these verbs.",
    },
  },
  {
    id: "it-unit-1-lesson-3",
    unitId: "it-unit-1",
    order: 3,
    title: "At the Café",
    xpReward: 10,
    goals: [
      "Order a drink at a café",
      "Ask for the bill",
      "Use polite expressions",
    ],
    vocabulary: [
      { id: "it-v13", word: "il caffè", translation: "coffee", partOfSpeech: "noun" },
      { id: "it-v14", word: "la tazza", translation: "the cup", partOfSpeech: "noun" },
      { id: "it-v15", word: "per favore", translation: "please", partOfSpeech: "phrase" },
      { id: "it-v16", word: "il conto", translation: "the bill", partOfSpeech: "noun" },
      { id: "it-v17", word: "il cameriere", translation: "the waiter", partOfSpeech: "noun" },
      { id: "it-v18", word: "vorrei", translation: "I would like", partOfSpeech: "phrase" },
    ],
    phrases: [
      { id: "it-p7", text: "Vorrei un caffè, per favore.", translation: "I would like a coffee, please." },
      { id: "it-p8", text: "Il conto, per favore.", translation: "The bill, please." },
      { id: "it-p9", text: "Un cappuccino, grazie.", translation: "A cappuccino, thanks." },
    ],
    activities: [
      {
        id: "it-a7",
        type: "multiple-choice",
        prompt: "Which word means 'the bill'?",
        options: [
          { id: "opt-1", text: "la tazza" },
          { id: "opt-2", text: "il conto" },
          { id: "opt-3", text: "il caffè" },
        ],
        correctOptionId: "opt-2",
      },
      {
        id: "it-a8",
        type: "translate",
        prompt: "Translate: 'please'",
        correctAnswer: "per favore",
      },
      {
        id: "it-a9",
        type: "fill-blank",
        prompt: "___ un caffè. (I would like a coffee.)",
        correctAnswer: "Vorrei",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging Italian teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers ordering at a café in Italian: il caffè, il conto, vorrei, per favore. Roleplay as a waiter and guide the student through ordering a drink and asking for the bill.",
    },
  },
  {
    id: "it-unit-1-lesson-4",
    unitId: "it-unit-1",
    order: 4,
    title: "Travel & Directions",
    xpReward: 10,
    goals: [
      "Ask for directions",
      "Understand left, right, and straight ahead",
      "Talk about train stations and tickets",
    ],
    vocabulary: [
      { id: "it-v19", word: "la stazione", translation: "the station", partOfSpeech: "noun" },
      { id: "it-v20", word: "il biglietto", translation: "the ticket", partOfSpeech: "noun" },
      { id: "it-v21", word: "a sinistra", translation: "to the left", partOfSpeech: "phrase" },
      { id: "it-v22", word: "a destra", translation: "to the right", partOfSpeech: "phrase" },
      { id: "it-v23", word: "sempre dritto", translation: "straight ahead", partOfSpeech: "phrase" },
      { id: "it-v24", word: "Dov'è...?", translation: "Where is...?", partOfSpeech: "phrase" },
    ],
    phrases: [
      { id: "it-p10", text: "Dov'è la stazione?", translation: "Where is the station?" },
      { id: "it-p11", text: "Giri a destra.", translation: "Turn right." },
      { id: "it-p12", text: "È sempre dritto.", translation: "It's straight ahead." },
    ],
    activities: [
      {
        id: "it-a10",
        type: "multiple-choice",
        prompt: "Which word means 'the ticket'?",
        options: [
          { id: "opt-1", text: "il biglietto" },
          { id: "opt-2", text: "la stazione" },
          { id: "opt-3", text: "sempre dritto" },
        ],
        correctOptionId: "opt-1",
      },
      {
        id: "it-a11",
        type: "translate",
        prompt: "Translate: 'to the left'",
        correctAnswer: "a sinistra",
      },
      {
        id: "it-a12",
        type: "fill-blank",
        prompt: "Dov'___ la stazione?",
        correctAnswer: "è",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging Italian teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers asking for directions in Italian: la stazione, il biglietto, a sinistra/destra, sempre dritto. Roleplay a stranger asking for directions to the train station.",
    },
  },
  {
    id: "it-unit-1-lesson-5",
    unitId: "it-unit-1",
    order: 5,
    title: "Shopping",
    xpReward: 10,
    goals: [
      "Ask about prices",
      "Describe things as cheap or expensive",
      "Ask for a different size",
    ],
    vocabulary: [
      { id: "it-v25", word: "il negozio", translation: "the shop", partOfSpeech: "noun" },
      { id: "it-v26", word: "il prezzo", translation: "the price", partOfSpeech: "noun" },
      { id: "it-v27", word: "economico", translation: "cheap", partOfSpeech: "adjective" },
      { id: "it-v28", word: "caro", translation: "expensive", partOfSpeech: "adjective" },
      { id: "it-v29", word: "Quanto costa?", translation: "How much does it cost?", partOfSpeech: "phrase" },
      { id: "it-v30", word: "la taglia", translation: "the size", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "it-p13", text: "Quanto costa questo?", translation: "How much does this cost?" },
      { id: "it-p14", text: "È molto caro.", translation: "It's very expensive." },
      { id: "it-p15", text: "Avete un'altra taglia?", translation: "Do you have another size?" },
    ],
    activities: [
      {
        id: "it-a13",
        type: "multiple-choice",
        prompt: "Which word means 'cheap'?",
        options: [
          { id: "opt-1", text: "caro" },
          { id: "opt-2", text: "economico" },
          { id: "opt-3", text: "la taglia" },
        ],
        correctOptionId: "opt-2",
      },
      {
        id: "it-a14",
        type: "translate",
        prompt: "Translate: 'the price'",
        correctAnswer: "il prezzo",
      },
      {
        id: "it-a15",
        type: "fill-blank",
        prompt: "Quanto ___ questo? (How much does this cost?)",
        correctAnswer: "costa",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging Italian teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers shopping vocabulary in Italian: il negozio, il prezzo, economico, caro, la taglia. Roleplay a shop assistant and guide the student through asking about prices and sizes.",
    },
  },
  {
    id: "it-unit-1-lesson-6",
    unitId: "it-unit-1",
    order: 6,
    title: "Family & Friends",
    xpReward: 10,
    goals: [
      "Introduce your family",
      "Talk about your friends",
      "Use possessive words like 'mio/mia'",
    ],
    vocabulary: [
      { id: "it-v31", word: "la famiglia", translation: "the family", partOfSpeech: "noun" },
      { id: "it-v32", word: "il fratello", translation: "the brother", partOfSpeech: "noun" },
      { id: "it-v33", word: "la sorella", translation: "the sister", partOfSpeech: "noun" },
      { id: "it-v34", word: "l'amico", translation: "the friend (male)", partOfSpeech: "noun" },
      { id: "it-v35", word: "l'amica", translation: "the friend (female)", partOfSpeech: "noun" },
      { id: "it-v36", word: "i genitori", translation: "the parents", partOfSpeech: "noun" },
    ],
    phrases: [
      { id: "it-p16", text: "Questa è la mia famiglia.", translation: "This is my family." },
      { id: "it-p17", text: "Lui è mio fratello.", translation: "He is my brother." },
      { id: "it-p18", text: "Lei è la mia migliore amica.", translation: "She is my best friend." },
    ],
    activities: [
      {
        id: "it-a16",
        type: "multiple-choice",
        prompt: "Which word means 'sister'?",
        options: [
          { id: "opt-1", text: "fratello" },
          { id: "opt-2", text: "sorella" },
          { id: "opt-3", text: "amico" },
        ],
        correctOptionId: "opt-2",
      },
      {
        id: "it-a17",
        type: "translate",
        prompt: "Translate: 'the friend (female)'",
        correctAnswer: "l'amica",
      },
      {
        id: "it-a18",
        type: "fill-blank",
        prompt: "Questa è la mia ___. (This is my family.)",
        correctAnswer: "famiglia",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a warm, encouraging Italian teacher speaking with a complete beginner. Speak slowly, use short sentences, and repeat key words. Praise effort and gently correct mistakes.",
      contextPrompt:
        "This lesson covers family and friends vocabulary in Italian: la famiglia, il fratello, la sorella, l'amico, l'amica. Guide the student through introducing their family and friends.",
    },
  },
];

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}
