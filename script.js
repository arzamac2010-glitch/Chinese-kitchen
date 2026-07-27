const recipes = [
    {
        id: 1,
        title: "Курка Гунбао",
        description: "Класична гостра страва з кубиками курки, арахісом та перцем чилі.",
        ingredients: ["Куряче філе — 400г", "Смажений арахіс — 50г", "Перець чилі — 2 шт.", "Зелена цибуля", "Соєвий соус — 2 ст.л.", "Часник та імбир"],
        steps: "1. Наріжте курку кубиками та замаринуйте в ложці соєвого соусу.\n2. Обсмажте на розігрітій пательні (вок) часник, імбир та чилі.\n3. Додайте курку, смажте до готовності.\n4. Всипте арахіс, зелену цибулю та залишками соусу. Смажте ще 1 хвилину."
    },
    {
        id: 2,
        title: "Свинина в кисло-солодкому соусі",
        description: "Традиційна страва кантонської кухні (Гулаожоу), популярна в усьому світі.",
        ingredients: ["Свинина — 400г", "Болгарський перець — 1 шт.", "Ананаси консервовані — 100г", "Томатна паста — 2 ст.л.", "Оцет — 1 ст.л.", "Цукор — 2 ст.л.", "Крохмаль"],
        steps: "1. Наріжте м'ясо кубиками, обваляйте в крохмалі та обсмажте до золотої скоринки.\n2. Окремо обсмажте перець та ананаси.\n3. Змішайте томатна пасту, оцет і цукор для соусу.\n4. З'єднайте все на пательні та тушкуйте 3 хвилини до загустіння соусу."
    },
    {
        id: 3,
        title: "Мапо Тофу",
        description: "Легендарна та надзвичайно гостра страва з провінції Сичуань.",
        ingredients: ["Тофу — 400г", "М'ясний фарш (свинина або яловичина) — 150г", "Гостра паста з бобів (Тобіндзян) — 2 ст.л.", "Часник — 3 зубчики", "Сичуаньський перець", "Зелена цибуля"],
        steps: "1. Наріжте тофу кубиками і проваріть у підсоленій воді 2 хвилини.\n2. Обсмажте фарш до золотистого кольору, додайте подрібнений часник та пасту з бобів.\n3. Додайте трохи води або бульйону, викладіть тофу і тушкуйте на повільному вогні 5 хвилин.\n4. Посипте меленим сичуаньським перцем та зеленою цибулею перед подачею."
    },
    {
        id: 4,
        title: "Смажений рис по-янчжоуськи",
        description: "Універсальна, ситна та дуже швидка у приготуванні китайська страва.",
        ingredients: ["Готовий холодний рис — 3 склянки", "Яйця — 2 шт.", "Шинка або креветки — 100г", "Зелений горошок — 50г", "Соєвий соус — 1 ст.л.", "Кунжутна олія"],
        steps: "1. Розігрійте вок, збийте яйця і швидко обсмажте їх, постійно помішуючи, потім перекладіть на тарілку.\n2. Обсмажте нарізану шинку (або креветки) з горошком протягом 2 хвилин.\n3. Додайте рис, ретельно розминаючи грудки. Смажте 3-4 хвилини.\n4. Поверніть яйця у вок, додайте соєвий соус та кунжутну олію, перемішайте та прогрійте 1 хвилину."
    },
    {
        id: 5,
        title: "Пекінська капуста у воці",
        description: "Легкий та хрусткий традиційний гарнір з легким часниковим ароматом.",
        ingredients: ["Пекінська капуста — 1 качан", "Часник — 4 зубчики", "Сушений чилі — 2 шт.", "Соєвий соус — 1.5 ст.л.", "Оцет рисовий — 1 ч.л."],
        steps: "1. Наріжте білу частину капусти великими шматочками, а зелену — ширше.\n2. Розігрійте олію, киньте нарізаний пластинками часник та чилі на 10 секунд.\n3. Спочатку додайте білу (тверду) частину капусти, смажте 2 хвилини на сильному вогні.\n4. Додайте зелене листя, соєвий соус та оцет. Швидко перемішуйте ще 1 хвилину, щоб капуста залишилася хрусткою."
    }
];

let favorites = JSON.parse(localStorage.getItem('chinese_favs')) || [];
let showOnlyFavorites = false;
let timerInterval;

const grid = document.getElementById('recipeGrid');
const modal = document.getElementById('recipeModal');
const modalDetails = document.getElementById('modalDetails');
const closeModal = document.getElementById('closeModal');
const searchInput = document.getElementById('searchInput');
const favFilterBtn = document.getElementById('favFilterBtn');

function displayRecipes() {
    const query = searchInput.value.toLowerCase();
    
    const filtered = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(query) || 
                              recipe.ingredients.some(ing => ing.toLowerCase().includes(query));
        const matchesFavorite = !showOnlyFavorites || favorites.includes(recipe.id);
        
        return matchesSearch && matchesFavorite;
    });

    if(filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666;">Нічого не знайдено 😕</p>`;
        return;
    }

    grid.innerHTML = filtered.map(recipe => {
        const isFav = favorites.includes(recipe.id) ? 'active' : '';
        return `
            <div class="recipe-card" onclick="openRecipe(${recipe.id}, event)">
                <div class="recipe-info">
                    <span class="fav-icon ${isFav}" onclick="toggleFavorite(${recipe.id}, event)">⭐</span>
                    <h3>${recipe.title}</h3>
                    <p>${recipe.description}</p>
                </div>
            </div>
        `;
    }).join('');
}

function toggleFavorite(id, event) {
    event.stopPropagation();
    
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    
    localStorage.setItem('chinese_favs', JSON.stringify(favorites));
    displayRecipes();
}

function toggleFavoriteFilter() {
    showOnlyFavorites = !showOnlyFavorites;
    favFilterBtn.classList.toggle('active', showOnlyFavorites);
    displayRecipes();
}

function openRecipe(id, event) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    clearInterval(timerInterval);

    modalDetails.innerHTML = `
        <h2>${recipe.title}</h2>
        
        <div class="timer-box">
            <h3>⏱️ Кухонний таймер</h3>
            <div class="timer-controls">
                <button onclick="startKitchenTimer(1)">1 хв</button>
                <button onclick="startKitchenTimer(3)">3 хв</button>
                <button onclick="startKitchenTimer(5)">5 хв</button>
                <button onclick="stopKitchenTimer()" class="stop-btn">Скинути</button>
            </div>
            <div id="countdownDisplay" class="countdown-display">Таймер не запущено</div>
        </div>

        <p><strong>Інгредієнти:</strong></p>
        <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
        <p><strong>Інструкція приготування:</strong></p>
        <p style="white-space: pre-line; line-height: 1.6;">${recipe.steps}</p>
    `;
    modal.style.display = "block";
}

function startKitchenTimer(minutes) {
    clearInterval(timerInterval);
    let timeRemaining = minutes * 60;
    const display = document.getElementById('countdownDisplay');
    
    function updateDisplay() {
        const mins = Math.floor(timeRemaining / 60);
        const secs = timeRemaining % 60;
        display.textContent = `Залишилось: ${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
    
    updateDisplay();
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            display.textContent = "🎉 Час вийшов! Страва готова!";
            display.style.color = "var(--primary-color)";
            
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            oscillator.connect(audioCtx.destination);
            oscillator.start();
            setTimeout(() => oscillator.stop(), 800); 
        } else {
            updateDisplay();
        }
    }, 1000);
}

function stopKitchenTimer() {
    clearInterval(timerInterval);
    const display = document.getElementById('countdownDisplay');
    if (display) {
        display.textContent = "Таймер не запущено";
        display.style.color = "#666";
    }
}

searchInput.addEventListener('input', displayRecipes);

closeModal.onclick = () => {
    modal.style.display = "none";
    clearInterval(timerInterval);
}
window.onclick = (e) => { 
    if (e.target === modal) {
        modal.style.display = "none";
        clearInterval(timerInterval);
    } 
}

displayRecipes(); 
