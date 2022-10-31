import create from "zustand";

export const useBearStore = create((set) => ({
  bears: 'André',
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
