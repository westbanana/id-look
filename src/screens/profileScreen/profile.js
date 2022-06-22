import React, {useEffect, useState} from 'react';
import s from './profile.module.scss';
import logo from "../../components/logo/logo";
import Avatar from "../../components/Avatar";

const Profile = () => {
  const [imageId, setImageId] = useState('')
  const [userInfo, setUserInfo] = useState({
    firstName: 'Alexandr',
    secondName: 'Foo',
    email: 'qweqwewqeq',
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

  return (
    <div className={s.main_container}>
      <div className={s.gradient_container}>
        <div className={s.info_container}>
          <Avatar id={imageId} link={image} changeAvatar={() => setImageId(makeId(10))}/>
          <div className={s.userName}>
            {`${firstName} ${secondName}`}
          </div>
            <form>
              <div className={s.inputContainer}>
                <span>Ім'я</span>
                <input type='name' placeholder={firstName}></input>
              </div>
              <div className={s.inputContainer}>
                <span>Прізвище</span>
                <input type='secon-name' placeholder={secondName}></input>
              </div>
              <div className={s.inputContainer}>
                <span>Email</span>
                <input type='email' placeholder={email}></input>
              </div>
              <button>Зберегти</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;