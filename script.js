const recipes = [
    { id: 1, title: "🦆 Качка по-пекінськи", category: "main", categoryName: "Гаряче", emoji: "🦆", description: "Легендарна страва китайської кухні з тонкою хрусткою скоринкою.", ingredients: "качка, маринад з спецій, мед, соєвий соус, імбир", instructions: "Очистіть качку, натріть спеціями та соєвим соусом. Запікайте при високій температурі до хрусткої скоринки.", time: 120 },
    { id: 2, title: "🐔 Курка Гунбао", category: "main", categoryName: "Гаряче", emoji: "🐔", description: "Класична гостра страва провінції Сичуань із соковитим м'ясом та хрустким горіхом.", ingredients: "куряче філе, арахіс, гострий перець чилі, соєвий соус", instructions: "Наріжте курку кубиками. Обсмажте на великому вогні в азійському воці арахіс, перець та імбир, додайте курку та соус.", time: 25 },
    { id: 3, title: "🥟 Димсами зі свининою", category: "snack", categoryName: "Закуска", emoji: "🥟", description: "Традиційні китайські пельмені, які готуються на парі у бамбукових кошиках.", ingredients: "борошно, вода, свинячий фарш, пекінська капуста", instructions: "Замісіть тісто на воді. Змішайте фарш із капустою. Зліпіть мініатюрні мішечки та готуйте на парі 10-12 хвилин.", time: 40 },
    { id: 4, title: "🍛 Смажений рис із овочами", category: "main", categoryName: "Гаряче", emoji: "🍛", description: "Проста, швидка та популярна страва щоденної китайської кухні.", ingredients: "рис, куряче яйце, овочева суміш, соєвий соус", instructions: "Швидко обсмажте яйця, потім додайте овочі та рис. Постійно помішуйте на великому вогні, додавши соєвий соус.", time: 15 },
    { id: 5, title: "🔥 Мапо Тофу", category: "main", categoryName: "Гаряче", emoji: "🌶️", description: "Знаменитий гострий тофу з фаршем у насиченому чилі-соусі.", ingredients: "тофу, м'ясний фарш, гостра паста доубань, перець", instructions: "Наріжте тофу кубиками. Обсмажте фарш із часником, імбиром та пастою доубань. Додайте бульйон, тофу та тушкуйте 5 хвилин.", time: 20 },
    { id: 6, title: "🥣 Кисло-гострий суп", category: "soup", categoryName: "Суп", emoji: "🥣", description: "Зігріваючий суп із дивовижним балансом кислинки оцту та гостроти.", ingredients: "курячий бульйон, гриби, тофу, чорний рисовий оцет", instructions: "Доведіть бульйон до кипіння, додайте гриби та тофу. Влийте рисовий оцет і соєвий соус. Загустіть крохмалем, влийте збите яйце.", time: 30 },
    { id: 7, title: "🫔 Хрусткі спрінг-роли", category: "snack", categoryName: "Закуска", emoji: "🫔", description: "Хрусткі обсмажені рулетики з соковитою начинкою.", ingredients: "тісто для спрінг-ролів, капуста, морква, фунчоза", instructions: "Тонко наріжте овочі, швидко обсмажте. Загорніть начинку в листи тіста. Обсмажуйте в олії до золотистої скоринки.", time: 35 },
    { id: 8, title: "🍜 Локшина Дань-Дань", category: "main", categoryName: "Гаряче", emoji: "🍜", description: "Гостра сичуаньська локшина із насиченим горіхово-м'ясним соусом.", ingredients: "пшенична локшина, свинячий фарш, кунжутна паста, олія чилі", instructions: "Обсмажте фарш до хрускоту. На дно тарілки викладіть соус із кунжутної пасти та олії чилі. Зваріть локшину та викладіть зверху.", time: 25 },
    { id: 9, title: "🍅 Суп з томатами та яйцем", category: "soup", categoryName: "Суп", emoji: "🍅", description: "Надзвичайно популярний, легкий у приготуванні та ніжний домашній суп.", ingredients: "томати, курячі яйця, вода або бульйон, зелена цибуля", instructions: "Наріжте томати часточками та злегка обсмажте. Додайте гарячу воду, варіть 5 хвилин. Влийте збиті яйця круговими рухами.", time: 15 },
    { id: 10, title: "🥒 Биті огірки по-азійськи", category: "snack", categoryName: "Закуска", emoji: "🥒", description: "Освіжаюча та пікантна холодна закуска, яка готується за лічені хвилини.", ingredients: "свіжі огірки, часник, соєвий соус, рисовий оцет, арахіс", instructions: "Огірки злегка відбийте качалкою, щоб вони тріснули, потім наріжте. Посоліть, за 5 хв злийте сік. Заправте соусом та часником.", time: 10 }
];

let favorites = JSON.parse(localStorage.getItem('china_favs')) || [];
let showOnlyFavorites = false;
let currentCategory = 'all';
let currentTimerInterval = null;

const recipeGrid = document.getElementById('recipeGrid');
const searchInput = document.getElementById('searchInput');
const favFilterBtn = document.getElementById('favFilterBtn');
const recipeModal = document.getElementById('recipeModal');
const modalDetails = document.getElementById('modalDetails');

function renderRecipes() {
    if (!recipeGrid) return;
    recipeGrid.innerHTML = '';
    const query = searchInput ? searchInput.value.toLowerCase() : '';
    
    const filtered = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(query) || recipe.ingredients.toLowerCase().includes(query);
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

window.openRecipeModal = function(recipe) {
    clearInterval(currentTimerInterval);
    if (!modalDetails || !recipeModal) return;
    
    modalDetails.innerHTML = `
        <div style="font-size: 70px; text-align: center; margin-bottom: 10px;">${recipe.emoji}</div>
        <h2 style="text-align: center; color: #990000; margin-top: 0;">${recipe.title}</h2>
        
        <div class="timer-box">
            <h3>⏱️ Кухонний таймер</h3>
            <div class="timer-controls">
                <button onclick="startKitchenTimer(${recipe.time})">Старт (${recipe.time} хв)</button>
                <button class="stop-btn" onclick="stopKitchenTimer()">Стоп</button>
            </div>
            <div id="countdownDisplay" class="countdown-display">---</div>
        </div>

        <p style="font-size: 1.05rem; margin-bottom: 5px;"><strong>Інгредієнти:</strong> ${recipe.ingredients}</p>
        <p style="font-size: 1.05rem; margin-top: 15px; margin-bottom: 8px;"><strong>Спосіб приготування:</strong></p>
        <p style="white-space: pre-line; background: #fffaf5; padding: 18px; border-left: 5px solid #cc0000; border-radius: 6px; color: #333; line-height: 1.6; box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);">${recipe.instructions}</p>
    `;
    recipeModal.style.display = 'block';
};

window.closeRecipeModal = function(event) {
    if (event && event.target.closest('.modal-content') && !event.target.classList.contains('close-btn')) return;
    if (recipeModal) recipeModal.style.display = 'none';
    clearInterval(currentTimerInterval);
};

window.startKitchenTimer = function(minutes) {
    clearInterval(currentTimerInterval);
    let sLeft = minutes * 60;
    const display = document.getElementById('countdownDisplay');
    if (!display) return;
    const update = () => {
        const m = Math.floor(sLeft / 60), s = sLeft % 60;
        display.innerText = `${m}:${s.toString().padStart(2, '0')}`;
    };
    update();
    currentTimerInterval = setInterval(() => {
        sLeft--;
        if (sLeft <= 0) {
            clearInterval(currentTimerInterval);
            display.innerText = "🔔 Готово!";
            alert("Страва готова! Час вийшов!");
        } else update();
    }, 1000);
};

window.stopKitchenTimer = () => { 
    clearInterval(currentTimerInterval); 
    const d = document.getElementById('countdownDisplay');
    if (d) d.innerText = "Стоп"; 
};

if (searchInput) searchInput.addEventListener('input', renderRecipes);
renderRecipes();
