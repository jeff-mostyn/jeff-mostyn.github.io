import { create, StoreApi } from 'zustand';
import { createPortfolioSlice, PortfolioState } from './portfolio';

export type RootState = 
  PortfolioState;

export type StoreSlice<T> = (
  set: StoreApi<RootState>['setState'],
  get: StoreApi<RootState>['getState']
) => T;

export const useBoundStore = create<RootState>(
  (set: StoreApi<RootState>['setState'], get: StoreApi<RootState>['getState']) => ({
    ...createPortfolioSlice(set, get),
  })
);
