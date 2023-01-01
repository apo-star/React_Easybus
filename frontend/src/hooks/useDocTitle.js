import { useEffect } from "react";

const useDocTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | EasyBus` || "EasyBus";
  }, []);
};

export default useDocTitle;
