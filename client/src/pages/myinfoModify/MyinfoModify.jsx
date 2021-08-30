import styles from "./MyinfoModify.module.css";
import React, { useRef, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import RealVote from "../../components/modals/RealVote";

const MyinfoModify = ({ info, setInfo }) => {
  const history = useHistory();
  const idRef = useRef();
  const nicknameRef = useRef();
  const mobileRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  const [modifyModal, setModifyModal] = useState(false);

  const onChange = (event) => {
    setInfo({
      ...info,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const doneModify = () => {
    setModifyModal(true);
    realModify();
  };
  //모달 네 클릭
  const realModify = () => {
    //axios.post 프로필수정.=> ok시
    setModifyModal(false);
    setInfo({
      ...info,
      password: "",
      password2: "",
    });
    history.push("/mypage");
  };
  const noModify = () => {
    history.push("/mypage");
  };
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.contain}>
          <div className={styles.infobox}>
            <div className={styles.imgbox}>
              <span className={styles.imgborder}>
                <img
                  src="../../../images/face.svg"
                  className={styles.faceimg}
                ></img>
              </span>
              <label for="profileEdit" className={styles.editbox}>
                프로필사진 수정
              </label>
              <input
                type="file"
                id="profileEdit"
                className={styles.editbtn}
              ></input>
            </div>
            <div className={styles.textbox}>
              <div className={styles.ulbox}>
                <span className={styles.list}>
                  아이디:
                  <input
                    type="text"
                    ref={idRef}
                    className={styles.input}
                    value={info.userid}
                    name="userid"
                    onChange={onChange}
                    autoComplete="off"
                  ></input>
                </span>
                <span className={styles.list}>
                  닉네임:
                  <input
                    type="text"
                    ref={nicknameRef}
                    className={styles.input}
                    value={info.nickname}
                    name="nickname"
                    onChange={onChange}
                    autoComplete="off"
                  ></input>
                </span>
                <span className={styles.list}>
                  모바일:
                  <input
                    type="text"
                    ref={mobileRef}
                    className={styles.input}
                    value={info.mobile}
                    name="mobile"
                    onChange={onChange}
                    autoComplete="off"
                  ></input>
                </span>
                <span className={styles.list}>
                  비밀번호:
                  <input
                    type="text"
                    ref={passwordRef}
                    className={styles.input}
                    value={info.password}
                    name="password"
                    onChange={onChange}
                    autoComplete="off"
                  ></input>
                </span>
                <span className={styles.list}>
                  비밀번호확인:
                  <input
                    type="text"
                    ref={password2Ref}
                    className={styles.input}
                    value={info.password2}
                    name="password2"
                    onChange={onChange}
                    autoComplete="off"
                  ></input>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.btns1}>
            <button className={styles.btn2} onClick={noModify}>
              취소?
            </button>
            <button className={styles.btn2} onClick={doneModify}>
              수정완료
            </button>
          </div>
        </div>
        {modifyModal ? (
          <div className={styles.backdrop}>
            <div className={styles.realVote}>
              <span className={styles.title}>정말로 수정하시겠습니까?</span>
              <span className={styles.btns}>
                <button className={styles.btn} onClick={noModify}>
                  아니오
                </button>
                <button className={styles.btn} onClick={realModify}>
                  네
                </button>
              </span>
            </div>
          </div>
        ) : null}
      </form>
    </>
  );
};

export default MyinfoModify;

//뒤로가기  버튼 막기
