let songs = JSON.parse(localStorage.getItem("songs")) || [];
let editingId = null;

const titleInput = document.getElementById("title");
const artistInput = document.getElementById("artist");
const submitBtn = document.getElementById("submitBtn");
const formTitle = document.getElementById("formTitle");

const createId = () => {
    let id = 1;
    while (songs.find(song => song.id === id)) {
        id++;
    }
    return id;
};

const clearForm = () => {
    titleInput.value = "";
    artistInput.value = "";
    editingId = null;
    formTitle.textContent = "💀Thêm bài hát";
    submitBtn.textContent = "Thêm";
    titleInput.focus();
};

const addSong = () => {
    const titleValue = titleInput.value.trim();
    const artistValue = artistInput.value.trim();

    if (titleValue === "" || artistValue === "") {
        alert("Tên bài hát và ca sĩ không được để trống!");
        return;
    }

    const song = {
        id: createId(),
        name: titleValue,
        artist: artistValue
    };

    songs.push(song);
    clearForm();
    localStorage.setItem("songs", JSON.stringify(songs));
    renderSong();
};

const renderSong = (list = songs) => {
    const songTable = document.getElementById("songTable");

    const stringHTML = list.map(song => {
        return `
            <tr>
                <td>${song.id}</td>
                <td>${song.name}</td>
                <td>${song.artist}</td>
                <td>
                    <button onclick="editSong(${song.id})">Sửa</button>
                    <button onclick="deleteSong(${song.id})">Xóa</button>
                </td>
            </tr>
        `;
    }).join("");

    songTable.innerHTML = stringHTML;
};

const editSong = (id) => {
    const song = songs.find(song => song.id === id);

    titleInput.value = song.name;
    artistInput.value = song.artist;
    editingId = id;
    formTitle.textContent = "🥀Sửa bài hát";
    submitBtn.textContent = "Cập nhật";
    titleInput.focus();
};

const updateSong = () => {
    const titleValue = titleInput.value.trim();
    const artistValue = artistInput.value.trim();

    if (titleValue === "" || artistValue === "") {
        alert("Tên bài hát và ca sĩ không được để trống!");
        return;
    }

    const song = songs.find(song => song.id === editingId);
    song.name = titleValue;
    song.artist = artistValue;

    clearForm();
    localStorage.setItem("songs", JSON.stringify(songs));
    renderSong();
};

const handleSubmit = () => {
    if (editingId === null) {
        addSong();
    } else {
        updateSong();
    }
};

const deleteSong = (id) => {
    const song = songs.find(song => song.id === id);

    if (!confirm(`Bạn có chắc muốn xóa "${song.name}" không?`)) return;

    songs = songs.filter(song => song.id !== id);
    localStorage.setItem("songs", JSON.stringify(songs));
    renderSong();
};

const searchSong = () => {
    const keyword = document.getElementById("search").value.trim().toLowerCase();
    const filtered = songs.filter(song => song.name.toLowerCase().includes(keyword));
    renderSong(filtered);
};

renderSong();
