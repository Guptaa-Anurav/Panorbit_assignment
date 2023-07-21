document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get("name");

  // // Dropdown Menu Functionality
  // const dropdownButton = document.getElementById("dropdownButton");
  // const dropdownList = document.getElementById("dropdownList");

  fetch("https://panorbit.in/api/users.json")
    .then((response) => response.json())
    .then((data) => {
      const user = data.users.find((user) => user.name === userName);
      if (user) {
        displayUserProfile(user);
      } else {
        console.error("User not found.");
      }
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });

  function displayUserProfile(user) {
    const userImage = document.getElementById("user-image");
    userImage.src = user.profilepicture; // Set user image
    userImage.onerror = function () {
      userImage.src = "image_not_found.jpg"; // Replace with a URL to a placeholder image
      userImage.alt = "Image Not Found";
    };

    document.getElementById("name").textContent = user.name;
    document.getElementById("username").textContent = user.username;
    document.getElementById("email").textContent = user.email;
    document.getElementById("phone").textContent = user.phone;
    document.getElementById("website").textContent = user.website;
    document.getElementById("company-name").textContent = user.company.name;
    document.getElementById("company-catchphrase").textContent = user.company.catchPhrase;
    document.getElementById("company-bs").textContent = user.company.bs;
    document.getElementById("address-street").textContent = user.address.street;
    document.getElementById("address-suite").textContent = user.address.suite;
    document.getElementById("address-city").textContent = user.address.city;
    document.getElementById("address-zipcode").textContent = user.address.zipcode;
    document.getElementById("address-geo-lat").textContent = user.address.geo.lat;
    document.getElementById("address-geo-lng").textContent = user.address.geo.lng;
    document.getElementById("dropdownButton").textContent = user.name;
    document.getElementById("item1").textContent = user.name;
    document.getElementById("item2").textContent = user.email;


    // Display the map with the user's location
    const mapContainer = document.getElementById("map");

    // Initialize the map
    const mapOptions = {
      center: { lat: parseFloat(user.address.geo.lat), lng: parseFloat(user.address.geo.lng) },
      zoom: 10, // Adjust the zoom level as needed
    };
    const map = new google.maps.Map(mapContainer, mapOptions);

    // Add a marker for the user's location
    const marker = new google.maps.Marker({
      position: { lat: parseFloat(user.address.geo.lat), lng: parseFloat(user.address.geo.lng) },
      map: map,
      title: "User Location",
    });
  }

  // Tab switching functionality
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  function showTab(tabId) {
    tabContents.forEach(content => {
      content.style.display = "none";
    });

    const tabContent = document.getElementById(tabId);
    if (tabContent) {
      tabContent.style.display = "block";
    }
  }

  tabButtons.forEach(button => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");
      tabButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");
      showTab(tabId);
    });
  });

  // Show the default tab on page load
  showTab("profile-tab");
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("dropdownButton");
  const dropdownContent = document.getElementById("dropdownContent");

  button.addEventListener("click", function () {
    dropdownContent.style.display = dropdownContent.style.display === "none" ? "block" : "none";
  });

  document.addEventListener("click", function (event) {
    if (!dropdownContent.contains(event.target) && event.target !== button) {
      dropdownContent.style.display = "none";
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("signout-button").addEventListener("click", function () {
    window.close(); // Close the current window
  });
});