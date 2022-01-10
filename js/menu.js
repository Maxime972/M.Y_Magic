(function() {
    const btn_menu = document.querySelector('.btn-menu')
    const menu_content = document.querySelector('header .navbar')

    menuEventClickDisplay(btn_menu, menu_content, 'flex', 'active')

}())

function menuEventClickDisplay(btn_menu, menu_content, displayOption = 'flex', toggleOption = 'active')
{
    btn_menu.addEventListener('click', () => {
        btn_menu.classList.toggle(toggleOption)

        if (menu_content.style.display == displayOption) {
            menu_content.style.display = 'none'
        }else {
            menu_content.style.display = displayOption
        }

    })
}