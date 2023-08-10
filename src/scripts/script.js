
const toggleButton = document.querySelector('#toggle');
const menu = document.querySelector('#menu');
const menuItems = document.querySelectorAll('#menu li a');
const isActiveClass = 'is-active';

toggleButton.addEventListener('click', function() {
  const isActive = menu.classList.contains(isActiveClass);

  if (isActive) {
    // Deactivate the menu
    this.setAttribute('aria-expanded', 'false');
    menu.classList.remove(isActiveClass);
  } else {
    // Activate the menu
    menu.classList.add(isActiveClass);
    this.setAttribute('aria-expanded', 'true');
    // menuItems[0].focus(); // Uncomment this line if you want to focus on the first menu item
  }
});
