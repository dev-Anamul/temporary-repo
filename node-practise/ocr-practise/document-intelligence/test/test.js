const DocumentIntelligence = require("../index");

const options = {
  key: "2146ce1717ab483e9c22cb4ac529652b",
  endpoint: "https://pix-doc.cognitiveservices.azure.com",
};

const documentIntelligence = new DocumentIntelligence(options);

const formUrl = [
  "https://raw.githubusercontent.com/Azure-Samples/cognitive-services-REST-api-samples/master/curl/form-recognizer/sample-layout.pdf",
];

async function runTest() {
  try {
    const result = await documentIntelligence.analyzeDocuments(formUrl);
    console.log("Analysis Result:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

runTest();
