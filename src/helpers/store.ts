import create from 'zustand'
import { devtools, persist } from "zustand/middleware"

export interface AppState {
  router: any;
  dom: any;
}

export const useStore = create<AppState>()(
  devtools(
    persist((set) => ({
      router: null,
      dom: null,
    }))
  )
)


export default useStore
