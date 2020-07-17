const API_BASIS =
  "https://winc-lil-playlist-b1cd4.firebaseio.com/playlist.json";

const GetSongs = async () => {
  try {
    const dataAllSongs = await fetch(API_BASIS, {
      method: "GET",
    });
    const allSongs = await dataAllSongs.json();
    return allSongs;
  } catch {
    console.log("Sorry het ophalen van de data is niet gelukt!");
  }
};

export default GetSongs;

/* const postAPICallToAddTask = async (usedUrl, data) => {
  try {
    const resultPOST = await fetch(usedUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const todoTaskList = document.querySelector(".todo-task-list");
    todoTaskList.querySelectorAll("div").forEach((element) => element.remove());
    await loadingGatheredAPITasks();
  } catch {
    console.log("Sorry het versturen van de data is niet gelukt");
  }
};

const deleteAPICallToDeleteATask = async (usedUrl) => {
  try {
    const resultDELETE = await fetch(usedUrl, {
      method: "DELETE",
    });
  } catch {
    console.log("Sorry het versturen van de data is niet gelukt");
  }
};

const putAPICallToUpdateATask = async (usedUrl, data) => {
  try {
    const resultPOST = await fetch(usedUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch {
    console.log("Sorry het versturen van de data is niet gelukt");
  }
};
 */
