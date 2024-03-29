import React, { FC } from 'react';
import s from './Header.module.css'

type HeaderPropsType = {}

export const Header: FC<HeaderPropsType> = (props) => {
	return (
		<header className={s.header}>
			<img src="https://lh3.googleusercontent.com/3bXLbllNTRoiTCBdkybd1YzqVWWDRrRwJNkVRZ3mcf7rlydWfR13qJlCSxJRO8kPe304nw1jQ_B0niDo56gPgoGx6x_ZOjtVOK6UGIr3kshpmTq46pvFObfJ2K0wzoqk36MWWSnh0y9PzgE7PVSRz6Y" alt="logo" />
		</header>
	);
};