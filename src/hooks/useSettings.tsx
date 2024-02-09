import { useContext } from "react";
import { StateContext } from "../contexts";

const useSettings = () => useContext(StateContext)
export default useSettings