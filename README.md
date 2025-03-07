
## To start the project:

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

---

## How the webapp works:

Upload an image using the image uploader, and click "Classify image" to classify it. There is a folded added to the project in public/assets for examle images to use.
The app is using MobileNet pre-trained model and has not been trained further so far. There is some hard-coded sections to put the predictions in correct categories to show how the app is supposed to work. It doesn't do the best predictions at the moment, but in the future I hope I can train a model on a dataset to add. I also want to add a camera function, to scan objects in real-time.
