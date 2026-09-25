# Digital Life & Character Academy

[![Live Demo](https://img.shields.io/badge/Live-Demo-4f46e5?style=for-the-badge)](https://cesarzemangi.github.io/Digital-Life-Character-Academy/)

A browser-based learning app focused on digital literacy, online safety, digital citizenship, office productivity, and personal growth. Learners can explore lessons by category, complete lesson-specific quizzes, track progress, and unlock completion based on quiz performance.

## Screenshot

![Digital Life & Character Academy preview](https://raw.githubusercontent.com/CesarZemangi/Digital-Life-Character-Academy/main/digital.png)

> The interface is designed to feel like a modern digital academy dashboard with clear category grouping, lesson cards, progress tracking, and motivational learning feedback.

## Features

- Category-based lesson library
- Lesson-specific quizzes
- 70% pass requirement before a lesson is marked complete
- Personalized dashboard with points, streaks, and progress tracking
- Content creation, digital safety, office skills, and wellbeing modules
- Responsive, single-page interface built with HTML, CSS, and JavaScript

## How it works

For learners:

1. Browse a category such as Digital Safety, Office Skills, or Content Creation.
2. Open a lesson and review the key learning points.
3. Complete the lesson quiz.
4. Earn progress, points, and unlock more learning milestones.

For recruiters or reviewers:

- This project demonstrates front-end UI design, interactive web logic, gamified learning flows, and structured educational content planning.
- It showcases how a practical digital product can combine user experience, data tracking, and motivation-driven learning design.

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
