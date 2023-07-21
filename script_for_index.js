document.addEventListener("DOMContentLoaded", function () {
    const cardContent = document.querySelector(".card-content");

    fetch("https://panorbit.in/api/users.json")
        .then((response) => response.json())
        .then((data) => {
            const users = data.users;
            const table = createTable(users);
            cardContent.appendChild(table);
        })
        .catch((error) => {
            console.error("Error fetching user data:", error);
        });

    function createTable(users) {
        const table = document.createElement("table");
        table.classList.add("user-table");

        const headerRow = document.createElement("tr");
        headerRow.innerHTML = "<th>User</th><th>Name</th>";

        table.appendChild(headerRow);

        users.forEach((user) => {
            const row = document.createElement("tr");
            const userCell = document.createElement("td");
            const img = document.createElement("img");
            img.src = user.profilepicture;
            img.alt = user.name;
            img.classList.add("user-icon");
            userCell.appendChild(img);
            row.appendChild(userCell);

            const nameCell = document.createElement("td");
            nameCell.textContent = user.name;
            nameCell.classList.add("user-name"); // Add a class to identify the user names
            row.appendChild(nameCell);

            table.appendChild(row);
        });

        return table;
    }

    // Attach click event listener to each user name
    cardContent.addEventListener("click", function (event) {
        // Check if the clicked element is a user name
        if (event.target.classList.contains("user-name")) {
            // Get the name of the user
            const userName = event.target.textContent;

            // Open the profile home page with the user's name as a query parameter
            window.open(`profile.html?name=${encodeURIComponent(userName)}`, "_blank");
        }
    });
});
