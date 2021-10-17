import React from "react";
import s from './Profile.module.scss'
import {Logout} from "../../common/components/logout/logout";

export const Profile: React.FC = () => {
    return (
        <div className={s.page}>
            <div className={s.pageTitle}>Profile page</div>
            <Logout/>
        </div>
    )
}
