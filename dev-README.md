# Antidote Front End Test Solution

## Technologies & tools used:
* react
* react-router-dom
* redux
* styled-components
* bootstrap

## Development notes
### Structure of the 'src' folder
* React components are in the 'components' folder
* Styled components are in the 'elements' folder
* Theme for styled components is in the 'themes' folder
* The remaining files - index.js, App.js, redux.js and setupProxy.js are in the 'src' folder

### Workflow
The app is rendered by index.js where I added provider for redux. Redux code is located in src/redux.js. Normally I would split actions, store and reducers to separate files, but as this application is small, I decided to keep them together in one file. 

App.js fetches data from data.json, stores them in state and passes them over to routes via props. There are three routes, all render the same (Table) component, but use a different route and display different data. 

The Menu component displays clickable links that take the user to selected routes, with the current number of patients in each list. 

The Table component displays all the patient data and their status. The data is passed from App.js and mapped with the map method, using the patients location id as 'key', as I assumed this would always be a unique number. If a patient doesn't have selected status yet, user can click on the buttons to flag them as either 'randomized' or 'inactive'. Once selected, the buttons disappear and only the selected status is visible. Number of patients in menu links is updated with redux once a patient is flagged with a status. If the user clicks on the updated menu link, he or she will find the patient copied to the selected status list. Each patient can only be flagged once.

Props passed from parent components and redux are destructured and props validated with prop-types. 

Colour codes for styles are located in src/themes/theme.js for easier maintenance. All styled components use variables from this theme.

Open [http://localhost:3000] to view the app in the browser.