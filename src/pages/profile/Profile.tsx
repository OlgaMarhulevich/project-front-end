import React from "react";
import s from './Profile.module.scss'
import unknown from '../../common/assets/images/unknown.png'

type ProfilePropsType = {
    name?: string
    email?: string
    avatar?: string
}

export const Profile: React.FC<ProfilePropsType> = ({name, email, avatar}) => {
    return (
        <div className={s.page}>
            <div className={s.pageTitle}>Profile</div>
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
