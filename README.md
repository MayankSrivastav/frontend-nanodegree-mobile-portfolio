## Website Performance Optimization portfolio project

### Guidelines
- All the source code is in frontend-nanodegree-mobile-portfolio folder.
- Run index.html to start the application.

### Optimizations
- Moved critical css to index.html page.
- Fonts css loading asynchronously.
- All js files are loading asynchronously.
- For print.css, media="print" is added.
- Critical css made inline using grunt-critical.
- Moved Google Analytics script file to bottom of body.
- Optimized jpeg files img/profilepic.jpg and views/images/pizzeria.jpg.

## Optimizations done in views/js/main.js & views/css/style.css

### To achieve 60 fps
- Modified '.mover' class in css to accomodate will-change: transfrom property & backface-visibility: hidden.
- Made items & itemLen variable global.
- Used getElementsByClassName as opposed to querySelectorAll.
- According to the user screen height, background pizzas are created.
- Used requestFrameAnimations() to call updatePositions().

### To resize pizza withing 5 items
- Removed unnecessary determineDx() function.
- Calculating resize width inside changePizzaSizes() function.
- Calculating width directly in %age.
- Use getElementsByClassName as opposed to querySelectorAll.