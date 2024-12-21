const menus = document.getElementsByClassName('dropdown-menu')

const mobileMenus = document.getElementsByClassName('mobile-dropdown-menu')
const closeSidebar = document.getElementById('close-sidebar-btn')

const menubtn = document.getElementById('menu-btn')


Array.from(menus).forEach(menu => {
    const dropdownItem = menu.querySelector('.dropdown-menu-item');
    const downArrow = menu.querySelector('.menu-down-arrow')
    const upArrow = menu.querySelector('.menu-up-arrow')
    
    menu.addEventListener('mouseover', () => {
        dropdownItem.classList.remove('hidden');
        dropdownItem.classList.add('flex');
        downArrow.classList.add('hidden')
        upArrow.classList.remove('hidden')
    });
    
    menu.addEventListener('mouseout', () => {
        dropdownItem.classList.add('hidden');
        dropdownItem.classList.remove('flex');
        downArrow.classList.remove('hidden')
        upArrow.classList.add('hidden')
    });
});

Array.from(mobileMenus).forEach(menu => {
    const dropdownItem = menu.querySelector('.mobile-dropdown-menu-list');
    const downArrow = menu.querySelector('.mobile-menu-down-arrow')
    const upArrow = menu.querySelector('.mobile-menu-up-arrow')
    
    menu.addEventListener('click', () => {
        dropdownItem.classList.toggle('hidden');
        dropdownItem.classList.add('flex');
        downArrow.classList.toggle('hidden')
        upArrow.classList.toggle('hidden')
    });

});

closeSidebar.addEventListener('click', () => {
    var sidebar = document.getElementById('sidebar')
    sidebar.classList.toggle('hidden');
    sidebar.style.transform = 'translateX(-100%)'; 
    document.getElementById('overlay').classList.toggle('hidden');
    document.getElementById('body-section-div').classList.toggle("overflow-hidden")
});


menubtn.addEventListener('click', () => {
    var sidebar = document.getElementById('sidebar')
    sidebar.classList.toggle('hidden');
    sidebar.style.transform = 'translateX(0)'; 
    document.getElementById('overlay').classList.toggle('hidden');
    document.getElementById('body-section-div').classList.toggle("overflow-hidden")
});


// const nav = document.getElementById('menu')

// btn.addEventListener('click', () => {
//     btn.classList.toggle('open')
//     nav.classList.toggle('flex')
//     nav.classList.toggle('hidden')
// })
