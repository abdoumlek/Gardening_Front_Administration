import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CategoryList: FC<any> = ({ token }) => {
  const [categories, setCategories] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);

  useEffect(() => {
    const getGalleries = () => {
      setLoading(true);
      axios
        .get(process.env.REACT_APP_BACKEND_URL + "/categories", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setCategories(response.data);
          setLoading(false);
        })
        .catch((e) => {
          console.error(e);
          setLoading(false);
        });
    };
    if (token && !deleteLoading) getGalleries();
  }, [token, deleteLoading]);

  const removeCategory = (id) => {
    setDeleteLoading(true);
    axios
      .delete(
        process.env.REACT_APP_BACKEND_URL + "/categories/" + id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Categorie supprimée avec Succés");
      })
      .catch((e) =>
        toast.error("une erreur c'est produite lors de la suppression")
      )
      .finally(() => setDeleteLoading(false));
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="p-2">
      <h1 className="text-center mb-5">Catégroies</h1>
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <Link to="/add-category" className="btn btn-success float-right">
              <span>+ ajouter une categorie</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="categories-list">
        {categories.map((c) => {
          return (
            <div className="row" key={c.id}>
              <div className="col">
                <h3>{c.name}</h3>
                <p>{c.description}</p>
              </div>
              <div className="col">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    removeCategory(c.id);
                  }}
                >
                  Supprimer
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
