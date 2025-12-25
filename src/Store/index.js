import { create } from "zustand";

const useMacbookstore =create((set) => ({
    color:'#2e2c2e',
    setcolor:(color)=>set({color}),

    Scale:0.08,
    setScale:(Scale)=>set({Scale}),

    reset:()=>set({color:'2e2c3e' , Scale:0.08}),
}))

export default useMacbookstore;