import React from "react";
import { NavLink } from "react-router-dom";
import { useBoundStore } from "src/store/store";

type NavLinkWrapperProps = {
	route: string;
	label: string;
}

export const NavLinkWrapper = ({ route, label }: NavLinkWrapperProps) => {
	const setActivePortfolioItem = useBoundStore(state => state.setActivePortfolioItem);
	const setPortfolioItemOpen = useBoundStore(state => state.setPortfolioItemOpen);
	
	const handleBackClick = () => {
		setActivePortfolioItem(null);
		setPortfolioItemOpen(false);
		window.history.replaceState(null, "Portfolio Overview", "/");
	}

	return (
		<div className="flex transition-colors duration-300 text-gray-200 hover:text-theme1">
			<NavLink to={route} onClick={() => handleBackClick()}>{label}</NavLink>
		</div>
	)
}