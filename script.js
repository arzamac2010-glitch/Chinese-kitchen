const baseRecipes = [
    { id: 1, title: "🦆 Качка по-пекінськи", category: "main", categoryName: "Гаряче", emoji: "🦆", description: "Легендарна страва китайської кухні з тонкою хрусткою скоринкою.", ingredients: [{ name: "Качка (філе/частини)", amount: 250, unit: "г" }, { name: "Соєвий соус", amount: 25, unit: "мл" }, { name: "Мед", amount: 1, unit: "ст.л." }, { name: "Імбир свіжий", amount: 10, unit: "г" }, { name: "Суміш 5 спецій", amount: 0.5, unit: "ч.л." }], instructions: "Очистіть качку, ошпарте окропом, натріть спеціями та соєвим соусом. Запікайте при високій температурі до хрусткої скоринкою.", time: 120 },
    { id: 2, title: "🐔 Курка Гунбао", category: "main", categoryName: "Гаряче", emoji: "🐔", description: "Класична гостра страва провінції Сичуань із соковитим м'ясом та хрустким горіхом.", ingredients: [{ name: "Куряче філе", amount: 200, unit: "г" }, { name: "Очищений арахіс", amount: 30, unit: "г" }, { name: "Перець чилі (сухий)", amount: 1, unit: "шт" }, { name: "Соєвий соус", amount: 20, unit: "мл" }, { name: "Часник", amount: 2, unit: "зубчики" }], instructions: "Наріжте курку кубиками. Обсмажте на великому вогні в азійському воці арахіс, перець та імбир, додайте курку та соус.", time: 25 },
    { id: 3, title: "🥟 Димсами зі свининою", category: "snack", categoryName: "Закуска", emoji: "🥟", description: "Традиційні китайські пельмені, які готуються на парі у бамбукових кошиках.", ingredients: [{ name: "Борошно пшеничне", amount: 80, unit: "г" }, { name: "Свинячий фарш", amount: 120, unit: "г" }, { name: "Пекінська капуста", amount: 40, unit: "г" }, { name: "Кунжутна олія", amount: 5, unit: "мл" }], instructions: "Замісіть еластичне тісто на воді. Змішайте фарш із капустою. Зліпіть мініатюрні мішечки та готуйте на парі 10-12 хвилин.", time: 40 },
    { id: 4, title: "🍛 Смажений рис із овочами", category: "main", categoryName: "Гаряче", emoji: "🍛", description: "Проста, швидка та неймовірно популярна страва щоденної китайської кухні.", ingredients: [{ name: "Відварений рис (холодний)", amount: 200, unit: "г" }, { name: "Куряче яйце", amount: 1, unit: "шт" }, { name: "Овочева суміш", amount: 50, unit: "г" }, { name: "Соєвий соус", amount: 15, unit: "мл" }], instructions: "Швидко обсмажте яйця, потім додайте овочі та рис. Постійно помішуйте на maximal вогні, додавши соєвий соус в кінці.", time: 15 },
    { id: 5, title: "🔥 Мапо Тофу", category: "main", categoryName: "Гаряче", emoji: "🌶️", description: "Знаменитий гострий тофу з фаршем у насиченому чилі-соусі.", ingredients: [{ name: "Тофу", amount: 150, unit: "г" }, { name: "М'ясний фарш", amount: 70, unit: "г" }, { name: "Гостра паста доубань", amount: 1, unit: "ст.л." }, { name: "Сичуаньський перець", amount: 0.5, unit: "ч.л." }], instructions: "Наріжте тофу кубиками. Обсмажте фарш із часником, імбиром та пастою доубань. Додайте бульйон, тофу та тушкуйте 5 хвилин.", time: 20 },
    { id: 6, title: "🥣 Кисло-гострий суп", category: "soup", categoryName: "Суп", emoji: "🥣", description: "Зігріваючий суп із дивовижним балансом кислинки оцту та гостроти.", ingredients: [{ name: "Курячий бульйон", amount: 300, unit: "мл" }, { name: "Гриби шиїтаке", amount: 30, unit: "г" }, { name: "Тофу", amount: 45, unit: "г" }, { name: "Чорний рисовий оцет", amount: 1.5, unit: "ст.л." }], instructions: "Доведіть бульйон до кипіння, додайте гриби та тофу. Влийте рисовий оцет і соєвий соус. Загустіть крохмалем, влийте збите яйце.", time: 30 },
    { id: 7, title: "🫔 Хрусткі спрінг-роли", category: "snack", categoryName: "Закуска", emoji: "🫔", description: "Хрусткі обсмажені рулетики з соковитою начинкою.", ingredients: [{ name: "Тісто для спрінг-ролів", amount: 2, unit: "листи" }, { name: "Пекінська капуста та морква", amount: 80, unit: "г" }, { name: "Локшина фунчоза", amount: 20, unit: "г" }, { name: "Олія для фритюру", amount: 100, unit: "мл" }], instructions: "Тонко наріжте овочі, швидко обсмажте. Загорніть начинку в листи тіста. Обсмажуйте у великій кількості олії до золотистої скоринки.", time: 35 },
    { id: 8, title: "🍜 Локшина Дань-Дань", category: "main", categoryName: "Гаряче", emoji: "🍜", description: "Гостра сичуаньська локшина із насиченим горіхово-м'ясним соусом.", ingredients: [{ name: "Пшенична локшина", amount: 100, unit: "г" }, { name: "Свинячий фарш", amount: 60, unit: "г" }, { name: "Кунжутна паста (тахіні)", amount: 1, unit: "ст.л." }, { name: "Олія чилі", amount: 1, unit: "ч.л." }], instructions: "Обсмажте фарш до хрускоту. На дно тарілки викладіть соус із кунжутної пасти та олії чилі. Зваріть локшину та викладіть зверху разом із фаршем.", time: 25 },
    { id: 9, title: "🍅 Суп з томатами та яйцем", category: "soup", categoryName: "Суп", emoji: "🍅", description: "Надзвичайно популярний, легкий у приготуванні та ніжний домашній суп.", ingredients: [{ name: "Стиглі томати", amount: 1.5, unit: "шт" }, { name: "Курячі яйця", amount: 1, unit: "шт" }, { name: "Вода або бульйон", amount: 250, unit: "мл" }, { name: "Зелена цибуля", amount: 10, unit: "г" }], instructions: "Наріжте томати часточками та злегка обсмажте. Додайте гарячу воду, варіть 5 хвилин. Влийте збиті яйця круговими рухами.", time: 15 },
    { id: 10, title: "🥒 Биті огірки по-азійськи", category: "snack", categoryName: "Закуска", emoji: "🥒", description: "Освіжаюча та пікантна холодна закуска, яка готується за лічені хвилини.", ingredients: [{ name: "Свіжі огірки", amount: 2, unit: "шт" }, { name: "Часник", amount: 2, unit: "зубчики" }, { name: "Чорний оцет та соєвий соус", amount: 1, unit: "ст.л." }, { name: "Очищений арахіс", amount: 15, unit: "г" }], instructions: "Огірки злегка відбийте качалкою, щоб вони тріснули, потім наріжте. Посоліть, за 5 хв злийте сік. Заправте соусом, часником та арахісом.", time: 10 }
];

let customRecipes = JSON.parse(localStorage.getItem('china_custom_recipes')) || [];
let recipes = [...baseRecipes, ...customRecipes];
let favorites = JSON.parse(localStorage.getItem('china_favs')) || [];
let showOnlyFavorites = false;
let currentCategory = 'all';
let currentTimerInterval = null;

const recipeGrid = document.getElementById('recipeGrid');
const searchInput = document.getElementById('searchInput');
const favFilterBtn = document.getElementById('favFilterBtn');
const recipeModal = document.getElementById('recipeModal');
const addRecipeModal = document.getElementById('addRecipeModal');
const modalDetails = document.getElementById('modalDetails');

function renderRecipes() {
    if (!recipeGrid) return;
    recipeGrid.innerHTML = '';
    const query = searchInput ? searchInput.value.toLowerCase() : '';
    
    const filtered = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(query) || recipe.description.toLowerCase().includes(query);
        const matchesFav = !showOnlyFavorites || favorites.includes(recipe.id);
        const matchesCategory = currentCategory === 'all' || recipe.category === currentCategory;
        return matchesSearch && matchesFav && matchesCategory;
    });

    if (filtered.length === 0) {
        recipeGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888; font-size: 18px; margin-top: 30px;">Нічого не знайдено 🥢</p>`;
        return;
    }

    filtered.forEach(recipe => {
        const isFav = favorites.includes(recipe.id);
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.onclick = (e) => { 
            if (!e.target.classList.contains('fav-icon')) window.openRecipeModal(recipe); 
        };
        card.innerHTML = `
            <span class="fav-icon ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, ${recipe.id})">★</span>
            <div class="recipe-emoji-badge">
                ${recipe.emoji}
                <span class="recipe-tag" style="background-color: var(--tag-${recipe.category})">${recipe.categoryName}</span>
            </div>
            <div class="recipe-info">
                <div><h3>${recipe.title}</h3><p>${recipe.description}</p></div>
                <small style="color: #cc0000; font-weight: bold; display: block; margin-top: 10px;">🕒 ${recipe.time} хв.</small>
            </div>
        `;
        recipeGrid.appendChild(card);
    });
}

window.filterByCategory = function(category) {
    currentCategory = category;
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${category}'`));
    });
    renderRecipes();
};

window.toggleFavorite = function(event, id) {
    event.stopPropagation();
    const index = favorites.indexOf(id);
    index === -1 ? favorites.push(id) : favorites.splice(index, 1);
    localStorage.setItem('china_favs', JSON.stringify(favorites));
    renderRecipes();
};

window.toggleFavoriteFilter = function() {
    showOnlyFavorites = !showOnlyFavorites;
    if (favFilterBtn) {
        favFilterBtn.classList.toggle('active', showOnlyFavorites);
        favFilterBtn.innerText = showOnlyFavorites ? "⭐ Показати всі" : "⭐ Показати обране";
    }
    renderRecipes();
};

window.calculateIngredients = function(recipeId, factor) {
    const recipe = recipes.find(r => r.id === recipeId);
    const listElement = document.getElementById('ingredientsList');
    if (!listElement || !recipe) return;
    listElement.innerHTML = '';
    
    recipe.ingredients.forEach(ing => {
        const calculatedAmount = Math.round((ing.amount * factor) * 10) / 10;
        const li = document.createElement('li');
        li.innerHTML = `📌 <strong>${ing.name}</strong>: ${calculatedAmount} ${ing.unit}`;
        listElement.appendChild(li);
    });
};

window.openRecipeModal = function(recipe) {
    clearInterval(currentTimerInterval);
    if (!modalDetails || !recipeModal) return;
    
    modalDetails.innerHTML = `
        <div style="font-size: 70px; text-align: center; margin-bottom: 10px;">${recipe.emoji}</div>
