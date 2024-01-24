import { useState } from "react";
import "./App.css";
import Tree from "./Tree";
import Tree2 from "./Tree2";
import Tree3 from "./Tree3";
import axios from "axios";
import fileDownload from "js-file-download";
const filePath =
  "https://github.com/excel-azmin/IHM-Tuso-RDP/blob/main/Tuso-Installer.sh";

function DownloadButton() {
  const [downloadLink, setDownloadLink] = useState(null);

  // Replace these variables with your GitHub repository information
  const owner = "excel-azmin";
  const repo = "IHM-Tuso-RDP";
  const pathToFile = "blob/main/Tuso-Installer.sh"; // Relative path to the executable file

  const fetchDownloadLink = async () => {
    try {
      // const response = await axios.get(
      //   // `https://api.github.com/repos/${owner}/${repo}/contents/${pathToFile}`
      //   filePath
      // );

      const response = await fetch(filePath);

      const downloadUrl = response.data.download_url;

      // Create a temporary anchor element to trigger the download
      const link = document.createElement("a");
      link.href = "/Tuso-Installer.sh";
      link.download = pathToFile.split("/").pop(); // Set the filename

      // Trigger a click event to start the download
      link.click();

      // Clean up the anchor element
      link.remove();

      // Optionally, you can update the state to show a success message or change the button text
      setDownloadLink("Download Complete");
    } catch (error) {
      console.error("Error fetching the file:", error);
      // Handle any error or show an error message to the user
    }
  };

  return (
    <div>
      {downloadLink ? (
        <p>{downloadLink}</p>
      ) : (
        <button onClick={fetchDownloadLink}>Download Executable</button>
      )}
    </div>
  );
}

function App() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "Tuso-Installer.sh";
    link.download = "script.sh"; // Specify the desired download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div>
        <button onClick={handleDownload}>Download .sh</button>
      </div>
      <DownloadButton />
      <Tree2 />
    </>
  );
}

export default App;
