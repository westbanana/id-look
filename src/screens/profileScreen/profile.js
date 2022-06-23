import React, {useEffect, useState} from 'react';
import s from './profile.module.scss';
import logo from "../../components/logo/logo";
import Avatar from "../../components/Avatar";

const Profile = () => {
  const [imageId, setImageId] = useState('')
  const [userName, setUserName] = useState('')
  const [userEmail, setuserEmail] = useState('')
  const [userSecondName, setuserSecondName] = useState('')
  const [userInfo, setUserInfo] = useState({
    firstName: 'Alexandr',
    secondName: 'Foo',
    email: 'westbanana4@gmail.com',
    image: `https://robohash.org/${imageId}`,
  })
  const [userData, setUserData] = useState({})
  const {firstName: firstName, secondName: secondName, email: email, image: image} = userInfo;

  const makeId = (length) => {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }
  useEffect(() => {
    setImageId(
      makeId(10)
    );
  }, []);

  const changeUserData = (e) => {
    e.preventDefault();
    console.log(userName);
  }

  return (
    <div className={s.main_container}>
      <div className={s.gradient_container}>
        <div className={s.info_container}>
          <Avatar id={imageId} link={image} changeAvatar={() => setImageId(makeId(10))}/>
          <div className={s.userName}>
            {userName && userSecondName ? `${userName} ${userSecondName}` : `${firstName} ${secondName}`}
          </div>
            <form>
              <div className={s.inputContainer}>
                <span>Ім'я</span>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type='name'
                  placeholder={firstName}
                />
              </div>
              <div className={s.inputContainer}>
                <span>Прізвище</span>
                <input
                  type='second-name'
                  placeholder={secondName}
                  onChange={(e) => setuserSecondName(e.target.value)}
                />
              </div>
              <div className={s.inputContainer}>
                <span>Email</span>
                <input
                  type='email'
                  placeholder={email}
                  onChange={(e) => setuserEmail(e.target.value)}
                />
              </div>
              <button type='submit' onClick={changeUserData}>Зберегти</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;