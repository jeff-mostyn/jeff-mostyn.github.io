import React from "react";
import { NavLink } from "react-router-dom";

type NavLinkWrapperProps = {
	route: string;
	label: string;
}

export const NavLinkWrapper = ({ route, label }: NavLinkWrapperProps) => {
	return (
		<div className="flex transition-colors duration-300 text-gray-200 hover:text-theme1">
			<NavLink to={route}>{label}</NavLink>
		</div>
	)
}