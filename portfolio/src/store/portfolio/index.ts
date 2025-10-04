import { create } from 'zustand';
import { StoreSlice } from '../store';
import { PortfolioItemData } from 'src/utils/types';

export type PortfolioState = {
  roleFilter: string;
  activePortfolioItem: PortfolioItemData | null;

  setRoleFilter: (newRoleFilter: string) => void;
  setActivePortfolioItem: (newActiveItem: PortfolioItemData | null) => void;
}

export const createPortfolioSlice: StoreSlice<PortfolioState> = (set) => ({
  roleFilter: "",
  activePortfolioItem: null,

  setRoleFilter: (newRoleFilter: string) => set(() => ({roleFilter: newRoleFilter})),
  setActivePortfolioItem: (newActiveItem: PortfolioItemData | null) => set(() => ({activePortfolioItem: newActiveItem}))
});