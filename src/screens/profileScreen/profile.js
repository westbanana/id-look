import React, {useEffect, useState} from 'react';
import s from './profile.module.scss';
import logo from "../../components/logo/logo";
import Avatar from "../../components/Avatar";

const Profile = () => {
//State with random id for received image
  const [imageId, setImageId] = useState('')

//State with user information name, surname, email, avatar
  const [userInfo, setUserInfo] = useState({
    firstName: 'Alexandr',
    surname: 'Foo',
    email: 'westbanana4@gmail.com',
    image: `https://robohash.org/${imageId}`,
  })

//Destruction object userInfo
  const {firstName: firstName, surname:surName ,email: email, image: image} = userInfo;

//Function which generate random id for image
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

//Function which generate random id for image and this value push in imageId, when was site open
  useEffect(() => {
    setImageId(
      makeId(10)
    );
  }, []);


  const [newUserInfo, setNewUserInfo] = useState({
    name: '',
    surname: '',
    email: '',
  })

  const changeUserData = (e) => {
    e.preventDefault();
  }

  return (
    <div className={s.main_container}>
      <div className={s.gradient_container}>
        <div className={s.info_container}>
          <Avatar id={imageId} link={image} changeAvatar={() => setImageId(makeId(10))}/>
          <div className={s.userName}>
            <span>{firstName} {surName}</span>
          </div>
            <form>
              <div className={s.inputContainer}>
                <span>Ім'я</span>
                <input
                  type='name'
                  placeholder={firstName}
                  onChange={(e) => newUserInfo.name = e.target.value}
                />
              </div>
              <div className={s.inputContainer}>
                <span>Прізвище</span>
                <input
                  type='second-name'
                  placeholder={surName}
                  onChange={(e) => newUserInfo.surname = e.target.value}
                />
              </div>
              <div className={s.inputContainer}>
                <span>Email</span>
                <input
                  type='email'
                  placeholder={email}
                  onChange={(e) => newUserInfo.email = e.target.value}
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