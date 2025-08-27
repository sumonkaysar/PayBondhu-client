import { useEffect, useState } from "react";

const useGuideTour = () => {
  const [run, setRun] = useState(false);

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("hasSeenTour");
    if (!hasSeenTour) {
      setRun(true);
      localStorage.setItem("hasSeenTour", "true");
    }
  }, []);

  const restartTour = () => {
    localStorage.removeItem("hasSeenTour");
    setRun(true);
  };

  return { run, setRun, restartTour };
};

export default useGuideTour;
