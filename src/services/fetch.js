//Metodo POST
export const postData = async (apiUrl, newData) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

//Metodo GET
export const getData = async (apiUrl, id = "") => {
  try {
    const response = await fetch(apiUrl + id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

//Metodo PUT
export const putData = async (apiUrl, id, newData) => {
  try {
    const response = await fetch(apiUrl + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

//Metodo DELETE
export const deleteData = async (apiUrl, id) => {
  try {
    const response = await fetch(apiUrl + id, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
