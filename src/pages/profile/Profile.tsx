import React from "react";
import s from './Profile.module.scss'
import unknown from '../../common/assets/images/unknown.png'
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {Logout} from "../../common/components/logout/logout";

export const Profile: React.FC = () => {
    const name = useSelector((state: AppStateType) => state.login.name)
    const email = useSelector((state: AppStateType) => state.login.email)
    const avatar = useSelector((state: AppStateType) => state.login.avatar)

    return (
        <div className={s.page}>
            <div className={s.pageTitle}>Profile</div>
            <div className={s.logout}>
                <Logout/>
            </div>
            <div className={s.profile}>
                <img className={s.img} src={avatar || unknown} alt="avatar"/>

                <div className={s.description}>
                    <div><h3>Name: </h3><p>{name}</p></div>
                    <div><h3>Email: </h3><p>{email}</p></div>
                </div>
            </div>
        </div>
    )
}
