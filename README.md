# Digital Life & Character Academy

A browser-based learning app focused on digital literacy, online safety, digital citizenship, office productivity, and personal growth. Learners can explore lessons by category, complete lesson-specific quizzes, track progress, and unlock completion based on quiz performance.

## Features

- Category-based lesson library
- Lesson-specific quizzes
- 70% pass requirement before a lesson is marked complete
- Personalized dashboard with points, streaks, and progress tracking
- Content creation, digital safety, office skills, and wellbeing modules
- Responsive, single-page interface built with HTML, CSS, and JavaScript

## Project Structure

- `index.html` — app shell and UI
- `style.css` — visual styling and layout
- `app.js` — lesson data, quiz logic, dashboard logic, and interactivity
- `digital.png` — branding/logo asset

## How to run

Open `index.html` in a browser, or run a local static server from the project folder:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes

- Progress is saved in the browser using `localStorage`.
- The app is designed as a lightweight static web project, so no build step is required.

## License

This project is for educational and portfolio use.
