import axios from "axios";
import Swal from "sweetalert2";
import Types from "../types/Types";
// Async Actions
export const loadBussinesList = () => {
  return async (dispatch, getState) => {
    const state = getState();

    const {
      auth: { token },
    } = state;

    const resp = await axios.get(process.env.REACT_APP_BUSSINES, {
      headers: {
        token,
      },
    });
    const negocios = resp.data.negocios;

    dispatch(setBussines(negocios));
    dispatch(setDasboardLoading(false));
  };
};
export const insertBussinesDB = (name) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;

    Swal.fire({
      title: "Loading...",
      text: "Please Wait...",
      allowOutsideClick: false,
      willOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });

    try {
      const resp = await axios.post(
        process.env.REACT_APP_BUSSINES,
        {
          name,
        },
        {
          headers: {
            token,
          },
        }
      );

      if (resp.data.negocio) {
        dispatch(addBussines(resp.data.negocio));
        Swal.close();
        Swal.fire({
          title: "Saved !",
          text: "New bussines Inserted",
          icon: "success",
        });
      } else {
        throw new Error("Error al insertar el producto");
      }
    } catch (error) {
      Swal.close();
      Swal.fire({
        title: "Error",
        text: "Error al insertar el producto",
        icon: "error",
      });
    }
  };
};

export const deleteBussinesDB = (bussinesId) => {
  return async (dispatch) => {
    // TODO: Delete from the DB

    try {
      dispatch(deleteBussines(bussinesId));
    } catch (error) {
      console.log(error);
    }
  };
};
export const loadBussinesData = ({ id, name }) => {
  return async (dispatch, getState) => {
    const {
      auth: { token },
    } = getState();

    Swal.fire({
      title: "Loading...",
      text: "Please Wait...",
      allowOutsideClick: false,
      willOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });

    try {
      const resp = await axios.get(`${process.env.REACT_APP_BUSSINES}/${id}`, {
        headers: {
          token,
        },
      });

      if (resp.data.categorias) {
        dispatch(setCategories(resp.data.categorias));
        dispatch(setActiveBussines({ id, name }));
        Swal.close();
      } else {
        alert("Error!!!");
      }
    } catch (error) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Error",
        text: " Error loading bussines data",
      });
    }
  };
};

export const addCategoryBD = (newCategory) => {
  return async (dispatch, getState) => {
    // Start Loading
    Swal.fire({
      title: "Loading...",
      text: "Please Wait...",
      allowOutsideClick: false,
      willOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });

    const { auth, dashboard } = getState();
    const { token } = auth;
    const { id } = dashboard.activeBussines;
    console.log(token, id, newCategory);

    try {
      const resp = await axios.post(
        process.env.REACT_APP_CATEGORY,
        { ...newCategory, negocio: id, icon: "new" },
        {
          headers: {
            token,
          },
        }
      );

      if (resp.data.categoria) {
        const cat = resp.data.categoria;
        dispatch(addCategory({ ...cat }));
        Swal.close();
        Swal.fire({
          title: "Saved !",
          text: "New category inserted",
          icon: "success",
        });
      } else {
        throw new Error("Error al insertar la categoria");
      }
    } catch (error) {
      Swal.close();
      Swal.fire({
        title: "Error",
        text: "Error al insertar el producto",
        icon: "error",
      });
    }
  };
};

// Sync Actions
export const setBussines = (bussines) => {
  return {
    type: Types.setBussines,
    payload: [...bussines],
  };
};

export const setActiveBussines = (bussines) => {
  return {
    type: Types.setActiveBussines,
    payload: { ...bussines },
  };
};

export const setActiveSubcategory = (subcategoryName) => {
  console.log(subcategoryName);
  return {
    type: Types.setActiveSubcategory,
    payload: subcategoryName,
  };
};

export const addBussines = (bussinesData) => {
  return {
    type: Types.addBussines,
    payload: bussinesData,
  };
};
export const deleteBussines = (bussinesId) => {
  return {
    type: Types.setActiveBussines,
    payload: bussinesId,
  };
};

export const setDasboardLoading = (value) => {
  return {
    type: value ? Types.startDashboardLoading : Types.stopDashboardLoading,
  };
};

export const setCategories = (data) => {
  return {
    type: Types.setCategories,
    payload: [...data],
  };
};

export const addCategory = (newCategory) => {
  return {
    type: Types.addCategory,
    payload: { ...newCategory, subcategorias: [] },
  };
};
