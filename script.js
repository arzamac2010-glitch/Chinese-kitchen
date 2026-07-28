// 1. Розширена база даних: 10 рецептів з категоріями
const recipes = [
    {
        id: 1,
        title: "🦆 Качка по-пекінськи",
        category: "main",
        image: "https://unsplash.com",
        ingredients: "качка, маринад з п'яти спецій, мед, соєвий соус, імбир, часник, рисове вино",
        description: "Легендарна страва китайської кухні з тонкою хрусткою скоринкою та ніжним м'ясом.",
        instructions: "Очистіть качку, ошпарте окропом, натріть спеціями та сушіть 24 години. Потім запікайте при високій температурі, змащуючи медовим сиропом.",
        time: 120
    },
    {
        id: 2,
        title: "🐔 Курка Гунбао",
        category: "main",
        image: "https://unsplash.com",
        ingredients: "куряче філе, арахіс, гострий перець чилі, сичуаньський перець, зелена цибуля, імбир",
        description: "Класична гостра страва провінції Сичуань із соковитим м'ясом та хрустким горіхом.",
        instructions: "Наріжте курку кубиками та замаринуйте. Обсмажте на великому вогні в азійському воці арахіс, перець та імбир, додайте курку та соус.",
        time: 25
    },
    {
        id: 3,
        title: "🥟 Димсами зі свининою",
        category: "snack",
        image: "https://unsplash.com",
        ingredients: "борошно, вода, свинячий фарш, пекінська капуста, соєвий соус, кунжутна олія",
        description: "Традиційні китайські пельмені, які готуються на парі у бамбукових кошиках.",
        instructions: "Замісіть еластичне тісто. Змішайте фарш із дрібно нарізаною капустою та спеціями. Зліпіть мініатюрні мішечки та готуйте на парі 10-12 хвилин.",
        time: 40
    },
    {
        id: 4,
        title: "🍛 Смажений рис із овочами",
        category: "main",
        image: "https://unsplash.com",
        ingredients: "відварений рис, яйця, зелений горошок, кукурудза, морква, соєвий соус, зелена цибуля",
        description: "Проста, швидка та неймовірно популярна страва щоденної китайської кухні.",
        instructions: "Використовуйте вчорашній сухий рис. Швидко обсмажте яйця, потім додайте овочі та рис. Постійно помішуйте, додавши соєвий соус в кінці.",
        time: 15
    },
    {
        id: 5,
        title: "🔥 Мапо Тофу",
        category: "main",
        image: "https://unsplash.com",
        ingredients: "тофу, свинячий фарш, паста доубань, перець чилі, сичуаньський перець, часник",
        description: "Знаменитий гострий тофу з фаршем у насиченому чилі-соусі.",
        instructions: "Наріжте тофу кубиками. Обсмажте фарш із часником, імбиром та пастою доубань. Додайте бульйон, тофу, тушкуйте 5 хвилин і посипте сичуаньським перцем.",
        time: 20
    },
    {
        id: 6,
        title: "🥣 Кисло-гострий суп",
        category: "soup",
        image: "https://unsplash.com",
        ingredients: "курячий бульйон, гриби шиїтаке, тофу, пагони бамбука, яйце, чорний рисовий оцет, білий перець",
        description: "Зігріваючий суп із дивовижним балансом кислинки оцту та гостроти білого перцю.",
        instructions: "Доведіть бульйон до кипіння, додайте нарізані гриби, тофу та бамбук. Влийте рисовий оцет і соєвий соус. Загустіть крохмалем, повільно влийте збите яйце тонкою цівкою.",
        time: 30
    },
    {
        id: 7,
        title: "🫔 Хрусткі спрінг-роли",
        category: "snack",
        image: "https://unsplash.com",
        ingredients: "тісто для спрінг-ролів, свинячий фарш, пекінська капуста, морква, скляна локшина фунчоза",
        description: "Хрусткі обсмажені рулетики з соковитою м'ясною чи овочевою начинкою.",
        instructions: "Тонко наріжте овочі, швидко обсмажте з фаршем. Загорніть начинку в тонкі листи тіста. Обсмажуйте у великій кількості олії до золотистої скоринки.",
        time: 35
    },
    {
        id: 8,
        title: "🍜 Локшина Дань-Дань",
        category: "main",
        image: "https://unsplash.com",
        ingredients: "пшенична локшина, свинячий фарш, паста з кунжуту (або арахісова), олія чилі, сичуаньський перець",
        description: "Гостра сичуаньська локшина із насиченим горіхово-м'ясним соусом.",
        instructions: "Обсмажте фарш зі спеціями до хрускоту. На дно тарілки викладіть соус із кунжутної пасти та олії чилі. Зваріть локшину, викладіть у тарілку, зверху додайте фарш і зелень.",
        time: 25
    },
    {
        id: 9,
        title: "🍅 Суп з томатами та яйцем",
        category: "soup",
        image: "https://unsplash.com",
        ingredients: "стиглі томати, яйця, курячий бульйон або вода, зелена цибуля, кунжутна олія",
        description: "Надзвичайно популярний, легкий у приготуванні та ніжний домашній китайський суп.",
        instructions: "Наріжте томати часточками та злегка обсмажте. Додайте гарячу воду або бульйон, варіть 5 хвилин. Зменшіть вогонь, влийте збиті яйця круговими рухами, посипте цибулею.",
        time: 15
    },
    {
        id: 10,
        title: "🥒 Биті огірки по-азійськи",
        category: "snack",
        image: "https://unsplash.com",
        ingredients: "свіжі огірки, часник, соєвий соус, чорний рисовий оцет, олія чилі, кінза, арахіс",
        description: "Освіжаюча та пікантна холодна закуска, яка готується за лічені хвилини.",
        instructions: "Огірки злегка відбийте качалкою або плоскою стороною ножа, щоб вони тріснули, потім наріжте шматочками. Посоліть, залиште на 5 хв, злийте сік. Заправте соусом, часником та олією.",
        time: 10
    }
];

// 2. Змінні стану
let favorites = JSON.parse(localStorage.getItem('china_favs')) || [];
let showOnlyFavorites = false;
let currentCategory = 'all'; // Поточна категорія
let currentTimerInterval = null;

const recipeGrid = document.getElementById('recipeGrid');
const searchInput = document.getElementById('searchInput');
const favFilterBtn = document.getElementById('favFilterBtn');
const recipeModal = document.getElementById('recipeModal');
const modalDetails = document.getElementById('modalDetails');
const closeModal = document.getElementById('closeModal');

// 3. Функція відображення карток
function renderRecipes() {
    recipeGrid.innerHTML = '';
    const query = searchInput.value.toLowerCase();

    const filtered = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(query) || 
                              recipe.ingredients.toLowerCase().includes(query);
        const matchesFav = !showOnlyFavorites || favorites.includes(recipe.id);
        const matchesCategory = currentCategory === 'all' || recipe.category === currentCategory;
        
        return matchesSearch && matchesFav && matchesCategory;
    });

    if (filtered.length === 0) {
        recipeGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888;">Нічого не знайдено за вашим запитом.</p>`;
        return;
    }

    filtered.forEach(recipe => {
        const isFav = favorites.includes(recipe.id);
        const card = document.createElement('div');
        card.className = 'recipe-card';
        
        card.onclick = (e) => {
            if (!e.target.classList.contains('fav-icon')) {
                openRecipeModal(recipe);
            }
        };

        card.innerHTML = `
            <span class="fav-icon ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, ${recipe.id})">★</span>
            <img src="${recipe.image}" alt="${recipe.title}" style="width: 100%; height: 180px; object-fit: cover;">
            <div class="recipe-info">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <small style="color: #666; display: block; margin-top: 10px;">🕒 Час: ${recipe.time} хв.</small>
            </div>
        `;
        recipeGrid.appendChild(card);
    });
}

// 4. Функція фільтрації за категоріями
window.filterByCategory = function(category) {
    currentCategory = category;
    
    // Оновлення активного класу для кнопок
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes(`'${category}'`)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderRecipes();
};

// 5. Керування списком "Обране"
window.toggleFavorite = function(event, id) {
    event.stopPropagation();
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('china_favs', JSON.stringify(favorites));
    renderRecipes();
};

window.toggleFavoriteFilter = function() {
    showOnlyFavorites = !showOnlyFavorites;
    favFilterBtn.classList.toggle('active', showOnlyFavorites);
    favFilterBtn.innerText = showOnlyFavorites ? "⭐ Показати всі" : "⭐ Показати обране";
    renderRecipes();
};

// 6. Події для живого пошуку
searchInput.addEventListener('input', renderRecipes);

// 7. Робота з модальним вікном та Таймером
function openRecipeModal(recipe) {
    clearInterval(currentTimerInterval);
    
    modalDetails.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">
        
