
function jawabAI(pesan) {
    let teks = pesan.toLowerCase();

    if (teks.includes("halo") || teks.includes("hai")) {
        return "Halo! Aku JUDO AI. Ada yang bisa kubantu?";
    }

    if (teks.includes("nama")) {
        return "Namaku JUDO AI, asisten virtual website ini!";
    }

    if (teks.includes("kabar")) {
        return "Aku baik! Bagaimana kabarmu?";
    }

    if (teks.includes("siapa pembuatmu")) {
        return "Aku dibuat oleh Judo!";
    }

    if (teks.includes("terima kasih")) {
        return "Sama-sama! Senang bisa membantu.";
    }

    return "Maaf, aku belum memahami pertanyaanmu. Coba tanyakan hal lain!";
}

function kirimPesan() {
    let input = document.getElementById("pesan");
    let chat = document.getElementById("chat");

    let pesan = input.value.trim();

    if (pesan === "") return;

    chat.innerHTML += `<p><b>Kaka:</b> ${pesan}</p>`;

    let jawaban = jawabAI(pesan);

    chat.innerHTML += `<p><b>JUDO AI:</b> ${jawaban}</p>`;

    input.value = "";
}
