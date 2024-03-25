// Function to save data to local storage
export const saveDataToLocalStorage = (data) => {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      localStorage.setItem(key, JSON.stringify(data[key]));
    }
  }
};

// Function to retrieve data from local storage
export const getDataFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

// Function to delete data from local storage
export const deleteDataFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
