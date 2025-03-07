
## To start the project:

In the project directory, run:

### `npm install`

Installing the packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

---

## How the webapp works:

Upload an image using the image uploader, and click "Classify image" to classify it. There is a folded added to the project in public/assets for examle images to use.
The app is using MobileNet pre-trained model and has not been trained further so far. There is some hard-coded sections to put the predictions in correct categories to show how the app is supposed to work. It doesn't do the best predictions at the moment, but in the future I hope I can train a model on a dataset to add. I also want to add a camera function, to scan objects in real-time.
