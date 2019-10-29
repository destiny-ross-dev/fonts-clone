# Google Fonts Clone

**VIEW THE LIVE SITE: [➡️ GO! ➡️](https://boiling-headland-54213.herokuapp.com)**

This project was completed as a pre-work assignment for [Chingu](https://www.chingu.io/), a remote 6-week program for web developers, which accelerates growth in technical and soft skill required in a professional software engineering position.

## Requirements

This project was completed as part of the Tier 3 (Fullstack) option, aimed at developers with frontend and backend experience.

Using a stack of the developer's choice, this project requires a backend that caches the Google Fonts Developer API, and then displays the information on a clean and modern interface. Options to change sample text, sample text font-size, and to reset the application to a default state were required, as was the ability to search the list of fonts for a particular font family. A light-dark mode toggle, grid-list mode toggle, and auth system were optional requirements. The project also has to be hosted, as per the requirements.

A full list of requirements can be viewed on Chingu Voyages' [github](https://github.com/chingu-voyages/voyage-prework-tier3-favfonts).

## Implementation

The backend Node application was built with Express. I decided to use a mono-repo solution for hosting the application on Heroku's free tier.

I created the modern interface using React, Styled-Components, FontAwesome's svg library, and React-Select. Application state was set and modified using React Hooks.

## Future Improvements

- Transition from React Hooks to either Context or Redux-based state management.
- While I have included a functional Sign-In with Google button on the page, I am not currently saving use information in a database. Next steps include the integration of a relational postgresql database, which will save user information as well as their favorited fonts (and saved settings?) to dynamically load this information at the time of sign in.
