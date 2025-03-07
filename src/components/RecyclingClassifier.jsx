import React, { useState, useEffect, useRef } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

const RecyclingClassifier = () => {
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  // Load the MobileNet model from TensorFlow.js
  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await mobilenet.load();
      setModel(loadedModel);
    };
    loadModel();
  }, []);

  // Fetch and prepare the image for classification
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Classifying the object with the model and returning the result depending on the category
  const classifyObject = async (image) => {
    const predictions = await model.classify(image);
    let result = predictions[0]?.className || "Okänt objekt";

    const resultList = result.toLowerCase().split(", ");

    if (
      resultList.some((item) =>
        ["cucumber", "strawberry", "food", "fruit", "bagel"].includes(item)
      )
    ) {
      result = "Edable (compostable)";
    } else if (
      resultList.some((item) =>
        ["plastic", "plastic bag", "bucket", "rubber", "soda bottle"].includes(
          item
        )
      )
    ) {
      result = "Plastic (recyclable)";
    } else if (
      resultList.some((item) =>
        ["glass", "beaker", "jar", "water bottle"].includes(item)
      )
    ) {
      result = "Glass (recyclable)";
    } else if (
      resultList.some((item) => ["paper", "carton", "envelope"].includes(item))
    ) {
      result = "Paper (recyclable)";
    } else if (resultList.some((item) => ["wood", "crate"].includes(item))) {
      result = "Wood (compostable)";
    }

    return result;
  };

  // Uploading the image and classifying it
  const classifyImage = async () => {
    if (model && image) {
      const imgElement = document.createElement("img");
      imgElement.src = image;
      imgElement.onload = async () => {
        const result = await classifyObject(imgElement);
        setPrediction(result);
      };
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={fileInputRef}
      />
      <button onClick={classifyImage}>Classify image</button>

      <div>{image && <img src={image} alt="Recycling Item" width="200" />}</div>

      {prediction && (
        <div>
          <h2>Recycle as:</h2>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default RecyclingClassifier;
