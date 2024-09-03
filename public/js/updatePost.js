const updateFormHandler = async function (event) {
    event.preventDefault();
    const titleEL = document
        .querySelector("#title-input")
        .value.trim();
    const descriptionEl = document
        .querySelector("#description-input")
        .value.trim();
    const idArray = window.location.pathname.split('/');
    const id = idArray[idArray.length -1];
    console.log(id);
    const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            title: titleEL,
            message: descriptionEl,
        }),
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace("/");
    } else {
        alert("Failed to update");
    }
};

document
    .querySelector("#update-form")
    .addEventListener("submit", updateFormHandler);