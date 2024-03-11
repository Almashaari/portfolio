import {
  TelegramChat,
  car,
  keeper,
  tictactoe,
  weather
} from '../assets';
  
  export const projects = [
    {
      title: 'Tic Tac Toe',
      image: tictactoe,
      description: ` 
      This is a simple Tic Tac Toe game implemented in React. Player can reset the game and and it shows the winner`,
      techstack: 'React, CSS',
      previewLink: 'https://tic-tac-toe-seven-sooty.vercel.app/',
      githubLink: 'https://github.com/Almashaari/tic-tac-toe',
    },
    {
      title: 'Keeper ',
      image: keeper,
      description: ` This is a Note App website where users can add, view, and delete notes. 
      The app is built using React for the frontend, Node.js and Express.js for the backend, and PostgreSQL for the database.`,
      techstack: 'React, Express.js, Node.js, PostgreSQL',
      previewLink: 'https://note-app-hazel-nine.vercel.app/',
      githubLink: 'https://github.com/Almashaari/Note_App',
    },
    {
      title: 'Weather app',
      image: weather,
      description: `Weather App is a web application that provides weather information for various locations by using Weather API. Users can view current weather conditions, forecasts, and other related information.`,
      techstack: 'Node.js, EJS, CSS, REST API',
      previewLink: 'https://weather-website-lime-iota.vercel.app/',
      githubLink: 'https://github.com/Almashaari/Weather_website',
    },
    {
      title: 'Travel Tracker',
      image: TelegramChat,
      description: `Travel Tracker is a web-based application that allows users to track countries they have been to. `,
      techstack: ' Express js, Node.js, EJS, CSS, PostgreSQL',
      previewLink: 'https://travel-tracker-indol.vercel.app/',
      githubLink: 'https://github.com/Almashaari/Travel_Tracker',
    },
    {
      title: 'Car Rental System',
      image: car,
      description:
        'Car Rental System is a web application that allows users to rent cars online. It provides a platform for car rental companies to list their vehicles and for users to browse and book cars based on their preferences.',
      techstack: 'HTML, CSS, Laravel, PHP, xampp',
      githubLink: 'https://github.com/Almashaari/Car_Rental_System',
    },
  ];
  