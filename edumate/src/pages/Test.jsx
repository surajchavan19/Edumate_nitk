import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import tree from "../assets/tree.png";
import periodic from "../assets/periodic.png";
import Button from "react-bootstrap/esm/Button";

function saveVideoToDB(videoBlob, db) {
  const transaction = db.transaction("videos", "readwrite");
  const store = transaction.objectStore("videos");
  const id = new Date().getTime(); // Unique ID for each video
  const videoData = { id, video: videoBlob };
  const addRequest = store.add(videoData);

  addRequest.onsuccess = () => {
    console.log(`Video with ID ${id} has been saved to IndexedDB.`);
  };

  addRequest.onerror = (error) => {
    console.error("Error saving video to IndexedDB:", error);
  };
}

function Test() {
  const isMobile = window.innerWidth <= 767;
  const [videoPlayer, setVideoPlayer] = useState(null);
  const [videoSource, setVideoSource] = useState(
    "https://firebasestorage.googleapis.com/v0/b/edumate-5e68f.appspot.com/o/video2.mp4?alt=media&token=40d80d71-d36d-428b-bdb5-9643f8ac4716"
  );

  useEffect(() => {
    // Check if IndexedDB is supported by the browser
    if (!window.indexedDB) {
      console.log("Your browser doesn't support IndexedDB.");
    } else {
      initializeIndexedDB();
    }
  }, []);

  const initializeIndexedDB = () => {
    // Open or create an IndexedDB database
    const dbName = "videoDB";
    const request = indexedDB.open(dbName, 1);

    // Define the database schema
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore("videos", { autoIncrement: true });
    };

    // Handle errors when opening the database
    request.onerror = (event) => {
      console.error("IndexedDB error:", event.target.error);
    };

    // Handle success when opening the database
    request.onsuccess = (event) => {
      const db = event.target.result;

      // Load and play the video from IndexedDB when the component mounts
      const videoId = 1; // Replace with the video ID you want to load
      const transaction = db.transaction("videos", "readonly");
      const store = transaction.objectStore("videos");
      const getRequest = store.get(videoId);

      getRequest.onsuccess = (event) => {
        const videoData = event.target.result;
        if (videoData) {
          // Set the video source to the loaded blob data from IndexedDB
          setVideoSource(URL.createObjectURL(videoData.video));
        } else {
          // If video not found in IndexedDB, use the Firebase URL as a fallback
          setVideoSource(
            "https://firebasestorage.googleapis.com/v0/b/edumate-5e68f.appspot.com/o/video2.mp4?alt=media&token=40d80d71-d36d-428b-bdb5-9643f8ac4716"
          );
        }
      };

      getRequest.onerror = (error) => {
        console.error("Error loading video from IndexedDB:", error);
      };
    };
  };

  useEffect(() => {
    if (videoPlayer) {
      // When the video source changes, update the video element
      videoPlayer.src = videoSource;
    }
  }, [videoSource, videoPlayer]);

  const handleSaveVideo = async () => {
    // Get the video file from the Firebase URL
    const response = await fetch(videoSource);
    const blob = await response.blob();

    // Access the IndexedDB instance created during initialization
    const dbName = "videoDB";
    const openRequest = indexedDB.open(dbName, 1);

    openRequest.onsuccess = (event) => {
      const db = event.target.result;
      // Call the saveVideoToDB function to save the video to IndexedDB
      saveVideoToDB(blob, db);
    };

    openRequest.onerror = (event) => {
      console.error("Error opening IndexedDB:", event.target.error);
    };
  };

  return (
    <div>
      {isMobile ? (
        <Container style={{ padding: "8% 6% 10% 4%" }}>
          <h1 style={{ padding: "0% 0% 0% 4%", fontWeight: "700" }}>Science</h1>
          <br />
          <Container>
            <Row>
              <Col>
                {" "}
                <video
                  id="videoPlayer"
                  width="100%"
                  controls
                  ref={(video) => setVideoPlayer(video)}
                  poster={tree}
                  style={{ borderRadius: "30px" }}
                >
                  {/* Initial video source (will be replaced) */}
                  <source id="videoSource" src={videoSource} type="video/mp4" />
                </video>
              </Col>
              <Col style={{ padding: "5% 0% 0% 2%" }}>
                <h6 style={{ fontWeight: "700" }}>
                  Chap 12. Introduction to Photosynthesis
                </h6>
                <br />
                <h6 style={{ color: "#9E9D9D" }}>By Ms. Aarti Rao</h6>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                {" "}
                <video
                  id="videoPlayer"
                  width="100%"
                  controls
                  ref={(video) => setVideoPlayer(video)}
                  poster={periodic}
                  style={{ borderRadius: "30px" }}
                >
                  {/* Initial video source (will be replaced) */}
                  <source id="videoSource" src={videoSource} type="video/mp4" />
                </video>
              </Col>
              <Col style={{ padding: "5% 0% 0% 2%" }}>
                <h5 style={{ fontWeight: "700" }}>
                  Chap 10. Modern Periodic Table
                </h5>
                <br />
                <h6 style={{ color: "#9E9D9D" }}>By Mr. Narayan Sharma</h6>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                {" "}
                <video
                  id="videoPlayer"
                  width="100%"
                  controls
                  ref={(video) => setVideoPlayer(video)}
                  poster={periodic}
                  style={{ borderRadius: "30px" }}
                >
                  {/* Initial video source (will be replaced) */}
                  <source id="videoSource" src={videoSource} type="video/mp4" />
                </video>
              </Col>
              <Col style={{ padding: "5% 0% 0% 2%" }}>
                <h5 style={{ fontWeight: "700" }}>Chap 9. Atoms & Elements</h5>
                <br />
                <h6 style={{ color: "#9E9D9D" }}>By Mr. Jay Kadam</h6>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                {" "}
                <video
                  id="videoPlayer"
                  width="100%"
                  controls
                  ref={(video) => setVideoPlayer(video)}
                  poster={periodic}
                  style={{ borderRadius: "30px" }}
                >
                  {/* Initial video source (will be replaced) */}
                  <source id="videoSource" src={videoSource} type="video/mp4" />
                </video>
              </Col>
              <Col style={{ padding: "5% 0% 0% 2%" }}>
                <h5 style={{ fontWeight: "700" }}>
                  Chap 10. Modern Periodic Table
                </h5>
                <br />
                <h6 style={{ color: "#9E9D9D" }}>By Mr. Narayan Sharma</h6>
              </Col>
            </Row>
          </Container>
          {/* Firebase Video Player */}

          {/* Button to Save Video to IndexedDB */}
          <div style={{ textAlign: "center" }}>
            <Button
              onClick={handleSaveVideo}
              // disabled={!audioBlob}
              style={{
                padding: "5% 10% 5% 10%",
                color: "white",
                background: "blue",
                borderRadius: "30px",
                fontWeight: "800",
                marginTop: "5%",
                fontSize: "18px",
              }}
            >
              Save Video to IndexedDB
            </Button>
          </div>
          {/* <button onClick={handleSaveVideo}>Save Video to IndexedDB</button> */}
        </Container>
      ) : (
        <div>
          <h1>Laptop</h1>
        </div>
      )}
    </div>
  );
}

export default Test;
