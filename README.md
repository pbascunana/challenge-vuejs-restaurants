# Challenge VueJS Frontend Developer

## Context

You've just started to work with _Company Inc._, an italian restaurant franchise that want to have 
presence on Internet and bring some customers to their large network of restaurants trying to create
a viral campaign of marketing.

At this point, they have an unfinished Single Page Application without the main feature to the campaign:
a `Pasta Carbonara meal calculator`.
They have a "secret" formula with all the required ingredients, and you should introduce the quantity you own. Then,
it will give you the number of meals you can cook at home. Once the calculator gives you the number of meals you can cook,
the site will navigate to a landing page with the "secret" formula exposed, and the exact quantities of each ingredient
you have to use.

You should create two landing pages for marketing campaigns that should have a different Look'n'feel for each one,
but keeping the same content and components for all them. You could have different urls for each lading page so we can
track them. Also, the order of the components on it, could be different.
For example: landing page 1 have an introduction text, multiple images of the restaurants, and a presentation video;
landing page 2 have the presentation video as first component, following of the images of the restaurants, and will not
have introduction text.

Also, the site has a `Our Stores` section where the company list all the country restaurants. The boss is very funny
and asked the previous developer to add a _Joke of the Day_ for each restaurant, so the user could spend some time 
laughing in the section.

## What you have to do

Currently, you should focus to complete the missing parts:
- The RecipeForm component has the form where the user must introduce the ingredients and calculate the meals. You must
add the logic for the submit button click. In the Carbonara view component's data method, you will find the "secret" 
  formula. (As an example, if the user introduce: pasta 1040, bacon 410, eggs 3, milk 405, butter 1010, oil 300, the
  calculation should output "2 meals").
- Create the landing page that should be redirected when the user submits the ingredients, showing the restaurants' info,
  using the Banner component to show the content.
- Create the campaign landing pages with the different look'n'feels. Use only the Banner component to show the content too.
- Add an input filter in Stores where the user can search for a specific Store name. Also, in Desktop devices, the list
should have 4 columns instead of 1.

## What we will consider

### Maintainability

The application has a low effort on changes or evolutions, so you will make changes in long periods of time and you
should remember easily how the code is structured to make them fast.
Keep in mind also that you are not the only one developer in the company and other teammates could have to add
code on it. Avoid duplicated code.

### Performance

As a Single Page Application the speed of navigation in the site should be really fast. But we have a lot of users
that have old mobile devices, so they are continuously complaining about the Stores page.
Also, you can refactor the code in components where you think it can be a performance gain.

### Optimization

The production build size is almost 1mb. You should optimize it to not exceed the recommended size (244kb).

### Quality Assurance

The application should be fully usable in all browsers (except Internet Explorer) and with the most used devices.

Keep in mind that the code will not change so frequently in time, but changes could be made from different developers,
so you must ensure that the main features of the application are always working, and behave as intended.

### For an A++

- Use Cypress as e2e testing tool
- Migrate app to TypeScript
- Animate the transitions between pages
- Make the application could switch between Light and Dark mode
