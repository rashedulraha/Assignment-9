import axios from "axios";
import { useEffect, useState } from "react";

const useProductFetch = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios("/BabyBuzz.json")
      .then((response) => setProduct(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { product, loading, error };
};

export default useProductFetch;
