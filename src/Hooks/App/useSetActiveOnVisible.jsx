import { useEffect } from "react";
import { useGlobalContext } from "src/Context/GlobalContext";
import useOnScreen from "../Helper/useOnScreen";

const useSetActiveOnVisible = (elementRef, sectionName, options) => {
  const { setActiveSection } = useGlobalContext();
  const isVisible = useOnScreen(elementRef, options);

  useEffect(() => {
    if (isVisible) setActiveSection(sectionName);
  }, [isVisible, setActiveSection, sectionName]);
};

export default useSetActiveOnVisible;
