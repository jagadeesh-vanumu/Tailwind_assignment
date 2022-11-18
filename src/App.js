import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
const App = () => {
  return (
    <div className="flex flex-row justify-center p-5 h-screen bg-lime-400">
      <div className="flex flex-col justify-evenly p-6 w-1/4 border rounded-lg bg-slate-50">
        <div className="flex flex-row mb-3">
          <img
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="owner"
            className="w-14 rounded-full h-14 mr-5"
          />
          <div>
            <div className="font-bold text-lg">Wade Warren</div>
            <div className="text-slate-500">July 17, 2018</div>
          </div>
        </div>
        <div>
          <div className="font-bold text-3xl mb-2">
            Web Design templates Selection
          </div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <img
              src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="lake"
              className="rounded-tl-2xl"
            />
            <img
              src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="museum"
            />
            <img
              src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="night"
              className="rounded-tr-2xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <img
              src="https://images.pexels.com/photos/5137664/pexels-photo-5137664.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="retro"
              className="rounded-bl-2xl"
            />
            <img
              src="https://images.pexels.com/photos/5366526/pexels-photo-5366526.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="city"
              className="rounded-br-2xl"
            />
          </div>
          <div className="mb-3 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-red-600"
            />
            <div className="ml-2 font-bold">31</div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full bg-sky-100 p-2 rounded-lg mb-2">
          <input
            type="text"
            className="bg-sky-100 focus:outline-none placeholder-slate-800"
            placeholder="write a comment"
          />
          <div>
            <FontAwesomeIcon icon={faFaceSmile} />
            <FontAwesomeIcon icon="fa-solid fa-paper-plane" className="text-sky-500 ml-4"/>
          </div>
        </div>
        <div className="flex mb-2">
          <img
            src="https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="profile-pic"
            className="w-12 rounded-full h-12 mr-5"
          />
          <div>
            <div className="flex">
              <div className="mr-5 font-bold">Tina Mills</div>
              <div className="text-slate-400">25 minutes ago</div>
            </div>
            <div className="font-semibold mb-2">Lorem ipsum dolor sit amet, consectetetur.</div>
            <div className="flex">
            <div className="flex items-center mb-2">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-red-600"
            />
            <div className="ml-2 font-bold">13</div>
          </div>
              <div className="ml-6 font-bold">Reply</div>
            </div>
          </div>
        </div>
        <div className="flex mb-2">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="profile-pic"
            className="w-12 rounded-full h-12 mr-5"
          />
          <div>
            <div className="flex">
              <div className="mr-5 font-bold">Leslie Alexander</div>
              <div className="text-slate-400">3 minutes ago</div>
            </div>
            <div className="font-semibold mb-2">Dolor sit ameutiseued  consectetetur eiusmod ilile.</div>
            <div className="flex">
            <div className="flex items-center mb-2">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-red-600"
            />
            <div className="ml-2 font-bold">2</div>
          </div>
              <div className="ml-6 font-bold">Reply</div>
            </div>
          </div>
        </div>
        <div className="font-bold bg-sky-100 text-center p-2 rounded-lg">
          Show more comments
        </div>
      </div>
    </div>
  );
};

export default App;
