function myDropdown() {
  const dropdown = document.getElementById("myDropdown");
  const hamburgerIcon = document.querySelector(".hamburger img"); // grab the hamburger image

  dropdown.classList.toggle("show");

  if (dropdown.classList.contains("show")) {
    // When dropdown is open → swap to alternate icon
    hamburgerIcon.src = "Icons/cross-checkbox-svgrepo-com.svg";
    hamburgerIcon.alt ="Cross"
  } else {
    // When dropdown is closed → reset to hamburger
    hamburgerIcon.src = "Icons/quill_hamburger.svg";
    hamburgerIcon.alt = "Ham";
  }
}

// Close the dropdown if clicking outside
window.onclick = function(event) {
  if (!event.target.closest(".hamburger") & !event.target.closest("#myDropdown")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    const hamburgerIcon = document.querySelector(".hamburger img");

    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove("show");
    }

    // Reset icon when closing from outside click
    hamburgerIcon.src = "Icons/quill_hamburger.svg";
    hamburgerIcon.alt = "Menu Icon";
  }
};
