import React, {useEffect, useState} from 'react';
import s from "../../screens/profileScreen/profile.module.scss";

const Avatar = ({ link, changeAvatar, id}) => {
//State with gradient value
  const [renderedGrad, setRenderedGrad] = useState(``)
//State with random number for get random characters
  const [number, setNumber] = useState(0);

//String with value for set color
  const hexString = "0123456789abcdef";

//Get random number from 0 to 3
  const getRandomArbitrary = (min, max) => {
    setNumber(parseInt(Math.random() * (max - min) + min));
  }

//Function which generate random color
  const randomColor = () => {
    let hexCode = '#';
    for( let i = 0; i < 6; i++){
      hexCode += hexString[Math.floor(Math.random() * hexString.length)]
    }
    return hexCode;
  }

//Function wich generate random gradient from 3 colors
  const generateGrad = () => {
    let colorOne = randomColor();
    let colorTwo = randomColor();
    let colorThree = randomColor();
    let angle = Math.floor(Math.random() * 360);
    return `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}, ${colorThree})`
  }

//Set random gradient when site open
  useEffect(() => {
    setRenderedGrad(
      generateGrad()
    )
  }, [])

//Function which change avatar and bg when you click on it
  const getNewImage = () => {
    changeAvatar();
    getRandomArbitrary(0, 4)
    setRenderedGrad(
      generateGrad()
    )
  }

  return (
    <div className={s.userAvatar} style={{background: `${renderedGrad}`}}>
      <div className={s.changeAvatarContainer}>
        <div className={s.refreshContainer} onClick={() => getNewImage()}>
          <svg width="30" height="30" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.6337 2.35292C12.0037 0.722922 9.69366 -0.217078 7.15366 0.0429219C3.48366 0.412922 0.463664 3.39292 0.0536639 7.06292C-0.496336 11.9129 3.25366 16.0029 7.98366 16.0029C11.1737 16.0029 13.9137 14.1329 15.1937 11.4429C15.5137 10.7729 15.0337 10.0029 14.2937 10.0029C13.9237 10.0029 13.5737 10.2029 13.4137 10.5329C12.2837 12.9629 9.57366 14.5029 6.61366 13.8429C4.39366 13.3529 2.60366 11.5429 2.13366 9.32292C1.29366 5.44292 4.24366 2.00292 7.98366 2.00292C9.64366 2.00292 11.1237 2.69292 12.2037 3.78292L10.6937 5.29292C10.0637 5.92292 10.5037 7.00292 11.3937 7.00292H14.9837C15.5337 7.00292 15.9837 6.55292 15.9837 6.00292V2.41292C15.9837 1.52292 14.9037 1.07292 14.2737 1.70292L13.6337 2.35292Z" fill="#1D1D1D"/>
          </svg>
        </div>
      </div>
      <img src={`https://robohash.org/${id}?set=set${number}`}/>
    </div>
  );
};

export default Avatar;
