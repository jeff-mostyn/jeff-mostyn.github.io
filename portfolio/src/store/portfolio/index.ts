import { create } from 'zustand';
import { StoreSlice } from '../store';
import { PortfolioItemData } from 'src/utils/portfolioSegmentTypes';

export type PortfolioState = {
  roleFilter: string;
  activePortfolioItem: PortfolioItemData | null;
  portfolioItemOpen: boolean;

  setRoleFilter: (newRoleFilter: string) => void;
  setActivePortfolioItem: (newActiveItem: PortfolioItemData | null) => void;
  setPortfolioItemOpen: (isOpen: boolean) => void;
}

export const createPortfolioSlice: StoreSlice<PortfolioState> = (set) => ({
  roleFilter: "",
  activePortfolioItem: null,
  portfolioItemOpen: false,

  setRoleFilter: (newRoleFilter: string) => set(() => ({roleFilter: newRoleFilter})),
  setActivePortfolioItem: (newActiveItem: PortfolioItemData | null) => set(() => ({activePortfolioItem: newActiveItem})),
  setPortfolioItemOpen: (isOpen: boolean) => set(() => ({portfolioItemOpen: isOpen}))
});