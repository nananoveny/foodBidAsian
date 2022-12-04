import React, { useState } from "react";
import { storage } from "../../../config/firebaseConfig.js";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import useAuthenticate from "../../../stores/authenticate.js";
import axios from "axios";
const CreatePost = () => {
  const { profile } = useAuthenticate((state) => state);

  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [content, setContent] = useState("");
  const [post, setPost] = useState([]);
  const uploadPost = async (content, imgUrl, accessToken) => {
    try {
      await axios.post(
        "https://freelance-job-be-production.up.railway.app/post-request",
        {
          title: "123",
          content,
          postpicture: imgUrl,
        },
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const approvePost = () => {};
  async function handleUpload(event) {
    event.preventDefault();
    if (!file) {
      alert("Please choose a file first!");
    }
    const storageRef = ref(storage, `${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImgUrl(url);
          
        });
        uploadPost(content, imgUrl, profile?.access_token);
      }
    );
    // await uploadPost(content, imgUrl, profile?.access_token);
    await window.location.reload();
  }
  console.log(post);
  return (
    <>
      <div className='rounded overflow-hidden border w-[800px]  bg-white mx-3 md:mx-0 lg:mx-0 flex flex-col justify-start items-center p-4 space-y-6 p'>
        <p className='font-bold text-center'>Create post</p>
        <textarea
          type='text'
          className='p-3 bg-[#e8f1ea] rounded-md w-full focus: outline-none h-48'
          placeholder='Write here...'
          onChange={(e) => setContent(e.target.value)}
        />
        {/* <p>{percent} "% done"</p> */}
        <div className='flex space-x-5 justify-between '>
          <input
            type='file'
            onChange={(e) => setFile(e.target.files[0])}
            accept='/image/*'
          />
          {/* <button className='bg-[#d4d1d1] px-4 py-2 rounded'>Cancel</button> */}
          <button
            className='bg-blue-700 text-white px-4 py-2 rounded'
            onClick={handleUpload}
          >
            Publish
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
