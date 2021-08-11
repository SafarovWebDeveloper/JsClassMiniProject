window.addEventListener('DOMContentLoaded', ()=>{

    class MenuCard{
        constructor(src, alt, title, desc, price, perentSelector, ...classes){
            this.src = src;
            this.alt = alt;
            this.title = title ;
            this.desc = desc;
            this.price = price;
            this.perentSelector = perentSelector;
            this.classes = classes;
            this.parent = document.querySelector(perentSelector);
        }
        
        render(){
            const element = document.createElement('div')

            if(this.classes.length === 0){
                this.classes = 'menu__item'
                element.classList.add(this.classes);

            }else{
                this.classes.forEach(className => element.classList.add(className))
            }



            element.innerHTML = `
                <div class="menu__item">
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.desc}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> $</div>
                </div>
                </div>
            `
            this.parent.append(element);
        }
        
    }


    new MenuCard(
        './img/tabs/iphone.jpg',
        '11 PRO MAX',
        'Iphone 11 PRO MAX',
        'iPhone X 256GB — невероятно мощный смартфон с фирменным дизайном Apple. Корпус и экран изготовлены из ударопрочного стекла, на 50% более толстого, чем у предыдущих моделей. Специальное покрытие предотвращает появление на поверхности отпечатков.  ',
        999,
        '.menu .container'
    ).render();

    new MenuCard(
        './img/tabs/rog.jpg',
        'Rog Phone 5',
        'Rog Phone 5',
        'Смартфон ASUS ROG Phone 5 ZS673KS 16 Высококачественный AMOLED 6.78" дисплей с разрешением 2448х1080; Qualcomm Snapdragon 888 5G; 256 Гб внутренней памяти; 16 Гб оперативной памяти прочного стеклянного корпуса и аккумулятора на целый день работы полностью оправдывает его название — ROG.',
        1100,
        '.menu .container'
    ).render();

    new MenuCard(
        './img/tabs/note21.JPG',
        'NOTE 21S',
        'Samsung Galaxy NOTE 21S',
        'Представляем новый Galaxy S21 Ultra 5G. Его камеры — это киностудия у вас в руках. С ее помощью вы сможете снимать видео 8К и превращать каждый его кадр в яркий снимок — просто «на ходу». А сочетание сверхбыстрого 5-нм процессора Exynos, 128 mpixel front camera прочного стеклянного корпуса и аккумулятора на целый день работы полностью оправдывает его название — Ultra.',
        900,
        '.menu .container'
    ).render();

})