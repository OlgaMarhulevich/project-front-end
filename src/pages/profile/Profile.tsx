import React, {useState} from "react";
import s from './Profile.module.scss'
import unknown from '../../common/assets/images/unknown.png'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {Redirect} from "react-router-dom";
import {ROUTES} from "../../app/routes/Routes";
import {Button} from "../../common/components/button/Button";
import {logoutTC, updateMe} from "../../bll/reducers/profileReducer";
import {Preloader} from "../../common/components/preloader/Preloader";
import {EditableSpan} from "../../common/components/editableSpan/EditableSpan";

export const Profile: React.FC = () => {
    const nameFromProp = useSelector((state: AppStateType) => state.profile.name)
    const email = useSelector((state: AppStateType) => state.profile.email)
    const avatar = useSelector((state: AppStateType) => state.profile.avatar)

    const isLoggedIn = useSelector((state: AppStateType) => state.login.isLoggedIn)
    const isLoading = useSelector((state: AppStateType) => state.login.isLoading)

    const dispatch = useDispatch()

    const [name, setName] = useState<string>(nameFromProp)

    if (!isLoggedIn) {
        return <Redirect to={ROUTES.LOGIN}/>
    }

    return (
        <div className={s.page}>
            <div className={s.pageTitle}>Profile</div>
            <div className={s.logout}>
                {isLoggedIn && <Button red value={'logout'} onClick={() => dispatch(logoutTC())}/>}
            </div>
            <div className={s.profile}>
                <img className={s.img} src={avatar || unknown} alt="avatar"/>

                <div className={s.description}>
                    <div><h3>Name: </h3>
                        <EditableSpan
                            value={name}
                            onChangeText={setName}
                            onBlur={() => dispatch(updateMe(name, avatar))}
                            onEnter={() => dispatch(updateMe(name, avatar))}/>
                    </div>
                    <div><h3>Email: </h3><p>{email}</p></div>
                </div>
            </div>

            {isLoading && <Preloader/>}
        </div>
    )
}
