import React, {Component} from 'react';
import './css/App.css';

const events = [
  {
    id: 1, 
    title: "VK Fest 2020", 
    slug: "kontsert-vk-fest-2020", 
    description: "Один из крупнейших опэн-эйров страны снова в Петербурге! В середине лета пользователи «ВКонтакте» по традиции выйдут из онлайна в офлайн и зажгут не по-детски.",
    image: "",
    body: "Каждый год VK Fest ставит очередные рекорды: в масштабном событии участвует всё больше артистов и звёздных спикеров, появляются новые стенды и развлекательные площадки, приходят тысячи гостей. Останавливаться на достигнутом команда не собирается и зовёт всех на шестой фестиваль 18 и 19 июля в Парке 300-летия. Подробной программы пока нет, но уже известно, что расширится зона лектория. В 2019 году она пользовалась спросом, и интерес подогреют новые артисты и блогеры. Сейчас подписчики паблика рассказывают, с кем хотели бы встретиться на VK Fest. Билеты уже в продаже. Для детей до 7 лет вход бесплатный.",
    age_restriction: 0,
    date: new Date(2020, 6, 18, 12, 0, 0),
    location: "Парка 300-летия Санкт-Петербурга",
    close_subways: ["Беговая"],
    price: 7300,
    is_free: false,
    website: "vk.com/fest",
    type: "festival"
  },
  {
    id: 2, 
    title: "Выставка «Дополнённая реальность»", 
    slug: "vystavka-dopolnennaya-realnost", 
    description: "Зулькарнайн Исмаил — известный фотоманипулятор. Сочетая несочетаемое, он играет со зрительским воображением, увлекает в мир иллюзий.",
    image: "",
    body: "Эрарта приглашает на выставку малайзийского художника Зулькарнайна Исмаила, известного своими сюрреалистическими фотоколлажами. Соединяя в одном изображении полярные образы, он рассказывает фантастические истории о зебрах-пружинах, горных хребтах в ящике стола и поездах, в мгновение ока перемещающихся из зимы в лето. Природа для него — главный источник вдохновения. Картинки мастер обрабатывает в графических редакторах и делает это настолько виртуозно, что даже опытный глаз не замечает склеек. Исмаил затягивает зрителя в фантастический мир грёз, в котором возможно всё. Готовьтесь оказаться в ловушке смыслов!",
    age_restriction: 16,
    date: new Date(2020, 1, 10, 10, 0, 0),
    location: "Музея современного искусства Эрарта",
    close_subways: ["Василеостровская", "Приморская", "Спортивная"],
    price: 600,
    is_free: false,
    website: "www.erarta.com",
    type: "exhibition"
  },
  {
    id: 3, 
    title: "Интерактивное мультимедийное путешествие «Тайны мироздания» в цифровом арт-пространстве Hyper Port",
    slug: "interactivnoe-multimediyinoe-puteshestvie",
    description: "На территории «Ленэкспо» на Васильевском острове открылось новое интерактивное пространство. Это масштабная площадка с мультимедийными технологиями, перформансами и арт-объектами — гиперпорт, через который посетители перемещаются между мирами.",
    image: "",
    body: "Две тысячи квадратных метров визуальных технологий, современного искусства, света и цвета ждут первых посетителей: новое пространство подарит яркие и необычные впечатления, ведь здесь создаётся полное ощущение путешествия между мирами, в другие галактики и даже в чёрную дыру. Гуляя по 9 залам с цифровыми технологиями, зрители словно попадут в будущее. А помощником в этом приключении станет добрый персонаж, искусственный интеллект по имени Шари. В Hyper Port представлены проекции LED-экранов, мэппинг, интерактивные и световые инсталляции. Это буйство фантазии и интеллекта, результаты экспериментов с цифровыми технологиями, реализованные на одной площадке. До 8 января в цифровом арт-пространстве Hyper Port проводятся новогодние ёлки.",
    age_restriction: 0,
    date: new Date(2020, 4, 7, 22, 0, 0),
    location: "Цифровое арт-пространство Hyper Port",
    close_subways: ["Приморская"],
    price: 1000,
    is_free: false,
    website: null,
    type: "interactive multimedia"
  },
  {
    id: 4, 
    title: "Спектакль «Аустерлиц» на Второй сцене БДТ (Каменноостровский театр)",
    slug: "spektakl-austerlitz",
    description: "Впервые на российской сцене воплощён роман немецкого писателя Винфрида Георга Зебальда, написанный в 2001 году.",
    image: "",
    body: "Создатели спектакля размышляют о том, как человек может обрести себя, если вся его судьба — не личная история, а мировая. Жак Аустерлиц — выходец из еврейской семьи, которого в детстве эвакуировали в Англию вместе с тысячами других детей, спасая от нацистского террора. И только спустя много лет, будучи взрослым человеком, он узнаёт, что всё это время жил под заново придуманным именем в приёмной семье. Пытаясь восстановить своё утерянное прошлое, он изучает архивные газеты и фотоснимки, расспрашивает очевидцев тех событий, разыскивает дом, где могла бы жить его семья. Издание «Нью-Йорк таймс» назвало книгу Зебальда первым великим романом XXI века. По словам режиссёра, она постаралась сохранить текст и атмосферу романа, исследовать загадки человеческой памяти и то, почему самые страшные трагедии так часто забываются.",
    age_restriction: 16,
    date: new Date(2020, 2, 6, 19, 0, 0),
    location: "Каменноостровского театра",
    close_subways: ["Крестовский Остров"],
    price: 1500,
    is_free: false,
    website: null,
    type: "performance"
  },
  {
    id: 5, 
    title: "Спектакль «Летов. Дурачок» в Большом театре кукол",
    slug: "spektakl-letov-durachok",
    description: "Спектакль-концерт для солнценеспящих в двух действиях Создатели спектакля входят в резонанс с текстами Егора Летова, продолжая держать оборону...",
    image: "",
    body: "Творчество Егора Летова родилось во время очередного краха нашего государства. Его песни произвели огромное впечатление на новое потерянное поколение, чья юность пришлась на очередное безвременье. А любое безвременье, когда бы оно ни случилось, — это обесценивание жизни, утрата человеческих ценностей, дегуманизация. Против этого и направил свои усилия Летов, заняв прочную оборону, и не только гражданскую. Молодые артисты театра, студенты Руслана Кудашова, соприкасаются с текстами Летова и продолжают его дело.",
    age_restriction: 18,
    date: new Date(2020, 2, 16, 19, 0, 0),
    location: "Большого театра кукол",
    close_subways: ["Чернышевская"],
    price: 800,
    is_free: false,
    website: null,
    type: "performance"
  },
  {
    id: 6, 
    title: "Выставка «Илья Репин. К 175-летию со дня рождения»",
    slug: "spektakl-austerlitz",
    description: "«Бурлаки на Волге», «Садко», «Не ждали», «Запорожцы пишут письмо турецкому султану» — на грандиозной выставке Русского музея можно увидеть как канонические произведения Ильи Репина, так и малоизвестные работы.",
    image: "",
    body: "По случаю 175-летия со дня рождения Ильи Репина Русский музей представляет масштабную выставку, иллюстрирующую разные периоды творчества выдающегося отечественного художника, имя которого связано с расцветом реализма в русском искусстве. В экспозицию входят более 250 картин и рисунков из музеев и частных коллекций, среди которых есть как хрестоматийные произведения, так и малоизвестные работы. Зрители увидят полотна «Садко», «Бурлаки на Волге», «Не ждали», «Запорожцы пишут письмо турецкому султану», «Царевна Софья Алексеевна через год после заключения её в Новодевичьем монастыре», а также замечательные портреты, виртуозно выполненные этюды и многое другое. Вернисаж — 3 октября в 16:00 в корпусе Бенуа Русского музея.",
    age_restriction: 0,
    date: new Date(2020, 2, 2, 10, 0, 0),
    location: "Корпуса Бенуа (Русский музей)",
    close_subways: ["Гостиный Двор", "Невский Проспект"],
    price: 500,
    is_free: false,
    website: null,
    type: "exhibition"
  }
];

var event_types = [];

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      effected_events: [...events], // Это события, которые будут изменены в ходе сортировки и прочих фильтрации 
      used_events: [...events], // Эти события понадобятся при фильтрации событии, и там же будет использован effected_events на линии 147, поэтому я и использовал 2 разных массива с событиями
      favourites: [],
      favouritesAreShown: false
    };
    this.returnByFilters = this.returnByFilters.bind(this);
  }

  // Возвращает содержание в порядок по умолчанию
  returnToDefaults() {
    this.setState({
      effected_events: [...events],
      used_events: [...events]
    });
  }

  // Сортирует содержание по цене
  sortByPrice() {
    const sortedEvents = this.state.used_events.sort((a, b) => {
      return a.price - b.price;
    });
    this.setState({
      effected_events: [...sortedEvents],
      used_events: [...sortedEvents]
    });
  }

  // Возвращает события по фильтру
  returnByFilters() {
    if(event_types.length) {
      const filtered_events = this.state.effected_events.filter(event => event_types.indexOf(event.type) > -1);
      if(filtered_events && filtered_events.length && event_types.length > 0) {
        this.setState({
          used_events: [...filtered_events],
        });
      }
    } else {
      this.setState({ // возвращает содержание к исходному положению без фильтров
        used_events: [...this.state.effected_events],
      });
    }
  }

  // Удалить добавленный фильтр
  deleteFilter(index) {
    if(event_types.length) {
      var filters = document.getElementById('filters');
      filters.removeChild(filters.childNodes[index]);
      if(event_types.length > 1) { // Это когда количество добавленных фильтров превышает 1
        event_types.splice(index, 1);
      } else { // Это когда остался только единственный добавленный фильтр
        event_types = [];
      }
      this.returnByFilters();
    }
  }

  // Кострукция настроек фильтра
  searchFilterConstruction() {
    var filter_options = document.getElementById('Search-Filter-Dropdown').getElementsByTagName('option');
    for(var i = 0; i < filter_options.length; i++) {
      if(filter_options[i].selected && event_types.indexOf(filter_options[i].value) === -1) {
        event_types.push(filter_options[i].value);
        break;
      }
    }

    var filters = document.getElementById('filters');
    while(filters.hasChildNodes()) {
      filters.removeChild(filters.childNodes[0]);
    }

    for(var z = 0; z < event_types.length; z++) {
      var div_wrapper = document.createElement('div');
      div_wrapper.setAttribute('id', 'filter_div_wrapper_'+z);

      var para = document.createElement('p');
      var text = document.createTextNode(event_types[z]);
      para.appendChild(text);

      var delete_btn = document.createElement('button');
      delete_btn.innerHTML = "Удалить";
      if (delete_btn.addEventListener) {
          // DOM2 standard
          delete_btn.addEventListener('click', this.deleteFilter.bind(this, z), false);
      }
      else if (delete_btn.attachEvent) {
          // IE (IE9 finally supports the above, though)
          delete_btn.attachEvent('onclick', this.deleteFilter.bind(this, z));
      }
      else {
          // Really old or non-standard browser, try DOM0
          delete_btn.onclick = this.deleteFilter.bind(this, z);
      }

      div_wrapper.appendChild(para); // filter text
      div_wrapper.appendChild(delete_btn); // delete button
      filters = document.getElementById('filters');
      filters.appendChild(div_wrapper);
    }
    this.returnByFilters();
  }

  // Избранные
  showFavourites() {
    this.setState({
      favouritesAreShown: true
    });
    var events = document.getElementsByClassName('Events')[0].childNodes;
    events.forEach(event => {
      event.style.display = "none";
    });
    for(var i=1;i<=events.length;i++) {
      if(this.state.favourites.indexOf(i) > -1) {
        var index = i - 1;
        events[index].style.display = "block";
        events[index].childNodes[7].innerHTML = "Удалить из избранных";
      }
    }
  }

  showAll() {
    this.setState({
      favouritesAreShown: false
    });
    var events = document.getElementsByClassName('Events')[0].childNodes;
    events.forEach(event => {
      event.style.display = "block";
      event.childNodes[7].innerHTML = "Добавить в избранные";
    });
  }

  optionsForFavourites(id) {
    if(this.state.favourites.indexOf(id) === -1) { // Убедиться что все добавляемые данные уникальные
      if(!this.state.favouritesAreShown) { // Добавление в избранные
        this.setState(prevFavourites=> ({
          favourites: [...this.state.favourites, id]
        }));
        alert('Событие добавлено в избранное');
      }
    }
    if(this.state.favouritesAreShown) { // Удаление из избранных
      var array = [...this.state.favourites];
      var index = array.indexOf(id);
      if(index !== -1) {
        array.splice(index, 1);
        this.setState({
          favourites: array
        });
        var events = document.getElementsByClassName('Events')[0].childNodes;
        events[index].style.display = "none";
      }
    }
  }

  // Поиск
  search(e) {
    var text = e.target.value;
    var events = document.getElementsByClassName('Events')[0].childNodes;
    if(text && text.length) {
      events.forEach(event => {
        event.style.display = "none";
      });
      const events_array = [...this.state.used_events];
      var results = [];
      events_array.forEach(event => {
        var title = event.title.toLowerCase();
        var desc = event.description.toLowerCase();
        if(title.includes(text) || desc.includes(text)) {
          results.push(event.id);
        }
      });
      for(var i=1;i<=events.length;i++) {
        if(results.indexOf(i) > -1) {
          events[i-1].style.display = "block";
        }
      }
    } else {
      events.forEach(event => {
        event.style.display = "block";
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">События в городе</h1>
        </header>
        <div className="App-intro">
          <div className="Configurations">
            <div className="Tabs">
              <button onClick={this.showAll.bind(this)}>Показать всё</button>
              <button onClick={this.showFavourites.bind(this)}>Показать избранные</button>
              <button onClick={this.returnToDefaults.bind(this)}>Значения по умолчанию</button>
              <button onClick={this.sortByPrice.bind(this)}>Сортировать по цене</button>
            </div>
            <div className="Filter-Configurations">
              <select id="Search-Filter-Dropdown">
                <option value="festival" defaultValue>Фестиваль</option>
                <option value="exhibition">Выставка</option>
                <option value="interactive multimedia">Интерактивное мультимедиа</option>
                <option value="performance">Спектакль</option>
              </select>
              <div id="filters">
              </div>
              <button onClick={this.searchFilterConstruction.bind(this)}>
                Добавить тип
              </button>
            </div>
            <input type="text" placeholder="Поиск.." onChange={this.search.bind(this)}></input>
          </div>
          {/* Отображение событии */}
          <div className="Events">
            {this.state.used_events.map((event) =>
              <div key={event.id}>
                <h2>{event.title}</h2>
                <h4>{event.description}</h4>
                <p>Возрастное ограничение: {event.age_restriction}+</p>
                <p>{event.body}</p>
                <p>Дата проведения: {
                  new Intl.DateTimeFormat("ru", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit"
                  }).format(event.date)
                }</p>
                <p>Место проведения: {event.location}</p>
                <p>Цена: {event.price}</p>
                <button onClick={this.optionsForFavourites.bind(this, event.id)}>Добавить в избранное</button>
                <hr/>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
