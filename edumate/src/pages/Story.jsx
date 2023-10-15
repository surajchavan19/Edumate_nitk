import React, { useState } from "react";
import add from "../assets/add.png";
import { generateStory } from "../services/stories";
import { useNavigate } from "react-router-dom";

const Story = () => {
  const [textInput, setTextInput] = useState("");
  const [loading, setLoading] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (e) => {};

  const handleGenerateStory = () => {
    if (textInput.length === 0) {
      alert("Please enter a topic for the story!");
      return;
    }
    setLoading(true);
    generateStory(textInput).then((res) => {
      console.log(res);
      setLoading(false);
      navigate("/story/" + res.id);
    });
  };

  return (
    <>
      {loading ? (
        <div className="cover">
          <div className="loader">
            <div className="lds-ripple">
              <div>
                <h1>Loading..</h1>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[80vh] overflow-hidden group bg-[#9E9D9D ]">
          <div className="flex flex-col" onClick={handleCloseModal}>
            <h1 className="text-black block m-10 text-4xl font-bold text-center">
              Let's Get Creative:{" "}
              <span className="text-[#4D3EFF]">
                Make Your Own Amazing Stories!
              </span>
            </h1>
            <div className="p-4">
              <textarea
                value={textInput}
                className="p-2 text-2xl text-black w-full shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                placeholder="Enter the topic for the story..."
              />
              <div className="flex flex-row w-full">
                <div
                  className="mt-4 px-4 py-1.5 btn btn-primary text-4xl m-auto"
                  onClick={handleGenerateStory}
                >
                  <div className="text-2xl">Generate Story</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Story;
