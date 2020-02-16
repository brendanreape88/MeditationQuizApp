//question database
const STORE = [
    {
      question: 'Meditation is generally considered to be which of the following?',
      answers: [
        '(A) A mental technique done sitting, with eyes closed.',
        '(B) A mental technique done while you’re out and about.',
        '(C) When one takes time to sit in silence.',
        '(D) When one tries hard to think of a solution to a problem.'
        
      ],
      correctAnswer:
        '(A) A mental technique done sitting, with eyes closed.',

      explanation:
        'Though meditative techniques can be practiced while going about your day, generally meditation is a mental technique done while sitting with closed eyes.',
    },
    {
      question:
        'In what year and region was the earliest recorded account of meditation?',
      answers: [
        '(A) 5000 BCE in India',
        '(B) 2500 BCE in China',
        '(C) 1500 BCE in India',
        '(D) 1200 BCE in Greece'
        
      ],
      correctAnswer:
        '(A) 5000 BCE in India',
    
      explanation:
        '(A) The earliest accounts of meditation are found in wall arts in the Indian subcontinent around 5000 BCE, depicting practitioners sitting in meditative postures with partially closed eyes.'
    },
    {
      question:
        'About how many people globally are estimated to be regular practitioners of meditation today?',
      answers: [
        '(A) 1 - 1.8 billion',
        '(B) 200 - 500 million',
        '(C) 60 - 80 million',
        '(D) 7 - 10 million'
        
      ],
      correctAnswer:
        '(B) 200 - 500 million',
    
      explanation:
        '(B) 200 - 500 million people globally are estimated to be regular practitioners of meditation, a number that has increased substantially in the last decade.'
    },
    {
      question: 'In the United States, the most common reason people learn to meditate is:',
      answers: [
        '(A) To impress people in their yoga class',
        '(B) To become enlightened',
        '(C) To improve their cognitive abilities',
        '(D) To reduce stress'
        
      ],
      correctAnswer:
        '(D) To reduce stress', 
      
      explanation:
      '(D) While people’s motivations for learning the practice of mediation are various, the majority of people living in the US pick it up to deal with stress.'
    },
    {
      question:
        'All of the various styles of meditation are generally placed into which two categories?',
      answers: [
        '(A) Focused attention, open monitoring',
        '(B) Mindfulness, breath-awareness',
        '(C) Transcendental, mindfulness',
        '(D) Mindfulness, open monitoring'
      ],
      correctAnswer:
        '(A) Focused attention, open monitoring',
    
      explanation:
        '(A) While there’s a seemingly endless amount of meditative styles, at their core they all take one of these two approaches: (1) Focused attention: where one focuses on an internal or external object of awareness (2) Open monitoring: where one allows the objects of their awareness to pass by without analysis or judgment.'
    },
    {
      question: 'Meditation capitalizes on and enhances the brain’s ability to constantly change. The brain’s ability is known as:',
      answers: [
        '(A) ventromediality',
        '(B) pluralmasticity',
        '(C) brainchanginess',
        '(D) neuroplasticity' 
      ],
      correctAnswer: 
      '(D) neuroplasticity',
      
      explanation:
      '(D) Neuroplasticity refers to the brain’s ability change due to experience. The brain is estimated to have over 100 trillion connections between neurons--1,000 times more connections than there are stars in the Milky Way Galaxy. Up to 70% of these connections can change in a single day!'
    },
    {
      question:
        'Research shows that regular meditation can yield which of the following benefits?',
      answers: [
        '(A) Improvement in heart health',
        '(B) Improvement in cognitive abilities',
        '(C) A slowing of the aging process',
        '(D) All of the above'
        
      ],
      correctAnswer:
        '(D) All of the above',

      explanation:
        '(D) Research shows that regular meditation is not only effective at reducing stress, but can improve physical health (including heart health), mental health (including psychological and cognitive states), and even slow down the aging process!'
    },
    {
      question: 'Research on in-school meditation programs has shown that participating students benefit in which of the following ways?',
      answers: [
        '(A) Increased graduation rates',
        '(B) Increased grades',
        '(C) Decrease in in-school infractions',
        '(D) All of the above'
        
      ],
      correctAnswer:
        '(D) All of the above',

      explanation:
        '(D) Meditation is effective and reducing students’ stress, which has been shown to lead to numerous beneficial academic outcomes.'
    },
    {
      question: 'A common misconception about meditation is that:',
      answers: [
        '(A) It’s only for hippies',
        '(B) It’s religious in nature',
        '(C) That it’s difficult to do',
        '(D) All of the above'

      ],
      correctAnswer: 
        '(D) All of the above',

      explanation:
        '(D) While all of these are common misconceptions about meditation, perhaps the most prevalent is that it’s a difficult skill to perform. Fortunately, this isn’t true at all. Anyone can begin the practice of meditation and make significant progress in their abilities to focus and maintain a non-judgmental state of awareness.'
    },
    {
      question:
        'Which autonomic bodily function is most frequently used as an aid for meditative practice?',
      answers: [
        '(A) Blinking',
        '(B) Breathing',
        '(C) Heart beating',
        '(D) Saliva swallowing',

      ],
      correctAnswer: 
        '(B) Breathing',
     
      explanation:
      '(B) One of the most popular methods of meditation has practitioners gently focus on their breath for extended periods of time.',
    },
    {
        question:
          'You can learn simple, effective meditation techniques from which of the following sources?',
        answers: [
            '(A) A Youtube video',
            '(B) A book',
            '(C) An app',
            '(D) All of the above',
            
  
        ],
        correctAnswer:
            '(D) All of the above',

      explanation:
        '(D) Thankfully it’s easier than ever for anyone to learn to meditate. There are thousands of effective resources available in the forms of books, apps, Youtube videos, and internet and magazine articles. However, some people greatly benefit from the traditional method of one-on-one instruction, which today is more accessible than ever.'
      }
  ];

//variables to store the quiz score and question number information
let score = 0;
let questionNumber = 0;

//template to generate each question
function generateQuestion() {
    if (questionNumber < STORE.length) {
      return createThing(questionNumber);
    } else {
      $('.questionBox').hide();
      finalScore();
      $('.questionNumber').text(10); /*Or should the .text be .text(11)?*/
    }
  }



//increments the number value of the "score" variable by one
//and updates the "score" number text in the quiz view
function updateScore() {
    score++;
    $('.score').text(score);
  }

//increments the number value of the "question number" variable by one
//and updates the "question number" text in the quiz view
function updateQuestionNumber() {
    questionNumber++;
    $('.questionNumber').text(questionNumber + 1);
  }

//resets the text value of the "question number" and "score" variables
//and updates their repective text in the quiz view
function resetStats() {
    score = 0;
    questionNumber = 0;
    $('.score').text(0);
    $('.questionNumber').text(0);
  }

//begins the quiz
function startQuiz() {
    $('.altBox').hide();
    $('.startQuiz').on('click', '.startButton', function (event) {
      $('.startQuiz').hide();
      $('.questionNumber').text(1);
      $('.questionBox').show();
      $('.questionBox').prepend(generateQuestion());
    });
  }

/*

//submits a selected answer and checks it against the correct answer
//runs answer functions accordingly
function submitAnswer() {
    $('.eternalBox').on('submit', function (event) {
      event.preventDefault();
      $('.altBox').hide();
      $('.response').show();
      let selected = $('input:checked');
      let answer = selected.val();
      let correct = STORE[questionNumber].correctAnswer;
      if (answer === correct) {
        correctAnswer();
      } else {
        wrongAnswer();
      }
    });
  }

//creates html for question form
function createThing(questionIndex) {
    let formMaker = $(`<form>
      <fieldset>
        <legend class="questionText">${STORE[questionIndex].question}</legend>
      </fieldset>
    </form>`)
  
    let fieldSelector = $(formMaker).find('fieldset');
  
    STORE[questionIndex].answers.forEach(function (answerValue, answerIndex) {
      $(`<label class="sizeMe" for="${answerIndex}">
          <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
          <span>${answerValue}</span>
        </label>
        `).appendTo(fieldSelector);
    });
    $(`<button type="submit" class="submitButton button"> Submit</button > `).appendTo(fieldSelector);
    return formMaker;
  }

//resulting feedback if a selected answer is correct
//increments user score by one
function correctAnswer() {
    $('.response').html(
      `<h3>Your answer is correct!</h3>
      <img src="images/correct.jpg" alt="monkey wearing glasses" class="images" width="200px">
        <p class="sizeMe">You're a smart monkey!</p>
        <button type="button" class="nextButton button">Next</button>`
    );
    updateScore();
  }
  
//resulting feedback if a selected answer is incorrect
function wrongAnswer() {
    $('.response').html(
      `<h3>That's the wrong answer...</h3>
      <img src="images/wrong.jpg" alt="dissapointed monkey face" class="images" width="200px">
      <p class="sizeMe">It's actually:</p>
      <p class="sizeMe">${STORE[questionNumber].correctAnswer}</p>
      <button type="button" class="nextButton button">Next</button>`
    );
  }
  
//generates the next question
  function nextQuestion() {
    $('.eternalBox').on('click', '.nextButton', function (event) {
      $('.altBox').hide();
      $('.questionBox').show();
      updateQuestionNumber();
      $('.questionBox form').replaceWith(generateQuestion());
    });
  }
  
//determines final score and feedback at the end of the quiz
  function finalScore() {
    $('.final').show();
  
    const great = [
      'Great job!',
      'images/win.jpg',
      'cheering monkey',
      'You sure know a lot about monkeys!'
    ];
  
    const good = [
      'Good, not great.',
      'images/read.jpg',
      'monkey reading a book',
      'You should keep studying about monkeys...'
    ];
  
    const bad = [
      'Do you even know what monkeys look like?',
      'images/end.png',
      'cat in a monkey costume',
      'Or are you more of a cat person?'
    ];
  
    if (score >= 8) {
      array = great;
    } else if (score < 8 && score >= 5) {
      array = good;
    } else {
      array = bad;
    }
    return $('.final').html(
      `<h3>${array[0]}</h3>
        <img src="${array[1]}" alt="${array[2]}" class="images">
          <h3>Your score is ${score} / 10</h3>
          <p class="sizeMe">${array[3]}</p>
          <button type="submit" class="restartButton button">Restart</button>`
    );
  }
  
//takes user back to the starting view to restart the quiz
  function restartQuiz() {
    $('.eternalBox').on('click', '.restartButton', function (event) {
      event.preventDefault();
      resetStats();
      $('.altBox').hide();
      $('.startQuiz').show();
    });
  }

*/

//runs the functions
  function makeQuiz() {
    startQuiz();
    generateQuestion();
    submitAnswer();
    nextQuestion();
    restartQuiz();
  }
  
  $(makeQuiz);  