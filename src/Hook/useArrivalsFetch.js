import axios from "axios";
import { useEffect, useState } from "react";

const useArrivalsFetch = () => {
  const [Arrivals, setArrivals] = useState([]);
  const [ArrivalsLoading, setArrivalsLoading] = useState(true);
  const [ArrivalsError, setArrivalsError] = useState(null);

  useEffect(() => {
    setArrivalsLoading(true);

    axios("/Arrivals.json")
      .then((response) => setArrivals(response))
      .catch((error) => setArrivalsError(error))
      .finally(() => setArrivalsLoading(false));
  }, []);

  return { Arrivals, ArrivalsLoading, ArrivalsError };
};

export default useArrivalsFetch;
