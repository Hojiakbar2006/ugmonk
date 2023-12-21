import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acProduct } from "../Redux/Product";
import { acLoading } from "../Redux/Loading";
import axios from "axios";
import { acCatalog } from "../Redux/Catalog";

export function Config() {
  const dispatch = useDispatch();

  const CurrentCatalog = useSelector((state) => state.currentCatalog);

  useEffect(() => {
    localStorage.setItem("current_catalog", JSON.stringify(CurrentCatalog));
  }, [CurrentCatalog]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/categories/", {
        header: {
          token: "token",
        },
      })
      .then((res) => {
        dispatch(acCatalog(res.data));
        dispatch(acLoading(false));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        dispatch(acLoading(false));
      });
  }, [dispatch]);

  // http://127.0.0.1:8000/api/v1/products/most_viewed/
  useEffect(() => {
    dispatch(acLoading(true));
    axios
      .get("http://127.0.0.1:8000/api/v1/products/", {
        header: {
          token: "token",
        },
      })
      .then((res) => {
        dispatch(acProduct(res.data));
        dispatch(acLoading(false));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        dispatch(acLoading(false));
      });
  }, [dispatch]);

  return null;
}
