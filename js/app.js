const accordionContent = document.querySelectorAll('p').forEach(item => {
    item.style.maxHeight = 0;
})

const accordionButton = document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('visible');

        if(button.classList.contains('visible')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            button.textContent = '-'
            button.classList.add('accordion-button-active')
        }else {
            accordionContent.style.maxHeight = 0;
            button.textContent = '+'
            button.classList.remove('accordion-button-active')
        }
    })
})