# ExpressRCP - Web Application

A modern web application built with Express.js that demonstrates custom middleware for working hours restriction.

## Features

- **Three main pages**: Home, Our Services, and Contact Us
- **Custom middleware**: Restricts access to working hours (Monday-Friday, 9 AM - 5 PM)
- **Responsive design**: Mobile-first approach with modern CSS
- **Navigation**: Consistent navigation bar across all pages
- **Professional styling**: Beautiful gradient designs and animations

## Pages

### Home Page (`/`)
- Welcome message and company introduction
- Feature highlights with icons
- Call-to-action buttons

### Our Services (`/services`)
- Detailed service offerings
- Pricing plans
- Service features and benefits

### Contact Us (`/contact`)
- Contact information
- Contact form
- FAQ section

## Working Hours Middleware

The application includes a custom middleware that:
- Checks if the current time is within working hours (Monday-Friday, 9 AM - 5 PM)
- Shows a "Service Unavailable" page outside working hours
- Displays current time and working hours information

## Installation

1. Clone or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
ExpressRCP/
├── app.js                 # Main server file
├── package.json           # Project dependencies and scripts
├── README.md             # Project documentation
├── views/                # HTML templates
│   ├── home.html         # Home page
│   ├── services.html     # Services page
│   └── contact.html      # Contact page
└── public/               # Static files
    └── css/
        └── style.css     # Main stylesheet
```

## Technologies Used

- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **HTML5**: Markup language
- **CSS3**: Styling with modern features (Grid, Flexbox, Gradients)
- **JavaScript**: Server-side logic

## Custom Middleware

The working hours middleware (`workingHoursMiddleware`) checks:
- Day of the week (Monday = 1 to Friday = 5)
- Hour of the day (9 AM to 5 PM)
- Returns a 503 status with a styled "Service Unavailable" page if outside working hours

## Browser Compatibility

The application is compatible with all modern browsers and includes responsive design for mobile devices.

## License

ISC License

