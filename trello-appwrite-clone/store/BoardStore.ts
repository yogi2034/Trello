import { create } from 'zustand'

interface BoardStore {
    board: Board;
    getBoard: () => void;
}
const useBoardStore = create((set) => ({
  board: null,
  getBoard: () => {
  }
}))