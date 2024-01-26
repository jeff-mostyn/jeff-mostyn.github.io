import React from "react";
import { NavLink } from "react-router-dom";

type NavLinkWrapperProps = {
	route: string;
	label: string;
}

export const NavLinkWrapper = ({ route, label }: NavLinkWrapperProps) => {
	return (
		<div className="flex px-4">
			<NavLink to={route}>{label}</NavLink>
		</div>
	)
}