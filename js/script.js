$(function () {
  const animation = {
    statrtingPoint: function () {
      $($(".animatedText").get().reverse()).each(function (index) {
        let element = $(this);
        let effect = element.data("animation");
        setTimeout(function () {
          if (effect === "fallB") {
            element.addClass("fallB");
          } else if (effect === "fallC") {
            element.addClass("fallC");
          } else {
            element.addClass("fall");
          }
        }, index * 700);
      });
    },

    countToFunc: function () {
      $(".runCount")
        .last()
        .countTo({
          formatter: function (value, options) {
            return value.toFixed(options.decimals);
          },
        });
    },

    waypointFuncs: function () {
      $(".brief").waypoint(
        function (direction) {
          if (direction === "down") {
            $("nav.navbar-default").addClass("dark");
          } else if (direction === "up") {
            if ($("nav.navbar-default").hasClass("dark")) {
              $("nav.navbar-default").removeClass("dark");
            }
          }
        },
        { offset: "15%" }
      );

      let removeLine = function () {
        $(".navbar-default .navbar-nav>li>a").each(function () {
          if ($(this).hasClass("activeNav")) {
            $(this).removeClass("activeNav");
          }
        });
      };

      $("a[href='#']").addClass("activeNav");

      $(".currentSection").waypoint(
        function (direction) {
          if (direction === "down") {
            removeLine();
            $("#nav-list")
              .find(`a[href=${$(this.element).data("nav")}]`)
              .addClass("activeNav");
          }
        },
        { offset: "47%" }
      );

      $(".currentSection").waypoint(
        function (direction) {
          if (direction === "up") {
            removeLine();
            $("#nav-list")
              .find(`a[href=${$(this.element).data("nav")}]`)
              .addClass("activeNav");
          }
        },
        {
          offset: function () {
            return -$(this.element).height() + $(this.element).height() / 2;
          },
        }
      );

      $(".counter").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("runCount")) {
            $(this.element).addClass("runCount");
            animation.countToFunc();
          }
        },
        { offset: "85%" }
      );

      $(".animated").waypoint(
        function (direction) {
          if (direction === "down") {
            $(this.element).addClass("choosenItem");
            setTimeout(function () {
              $("body .animated.choosenItem").each(function (index) {
                let item = $(this);
                setTimeout(function () {
                  var effect = item.data("animation");
                  if (effect === "fadeInLeft") {
                    item.addClass("fadeInLeft");
                  } else if (effect === "fadeInDown") {
                    item.addClass("fadeInDown");
                  } else if (effect === "fadeInRight") {
                    item.addClass("fadeInRight");
                  } else if (effect === "fadeInRightLong") {
                    item.addClass("fadeInRightLong");
                  } else if (effect === "fadeInLeftLong") {
                    item.addClass("fadeInLeftLong");
                  } else if (effect === "fadeInUpLong") {
                    item.addClass("fadeInUpLong");
                  } else {
                    item.addClass("fadeInUp");
                  }

                  item.removeClass("choosenItem");
                }, index * 100);
              });
            }, 100);
          }
        },
        { offset: "85%" }
      );

      $("#about").waypoint(
        function (direction) {
          if (direction === "down") {
            if ($(".scrollUp").hasClass("scrollUpHidden")) {
              $(".scrollUp").removeClass("scrollUpHidden");
            }
            $(".scrollUp").addClass("scrollUpVisible");
          } else if (direction === "up") {
            $(".scrollUp").removeClass("scrollUpVisible");
            $(".scrollUp").addClass("scrollUpHidden");
          }
        },
        { offset: "70%" }
      );
    },
  };

  const model = {
    collection: [
      {
        title: "some title1",
        author: `Edgar Allan`,
        date: `2021-8-3`,
        genre: "action",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: `epc.jpg`,
        url: `https://epc.ae/en/home`,
        fadeIn: `fadeInLeft`,
      },
      {
        title: "some title2",
        author: `Fyodor Mikhailovich `,
        date: `2021-5-3`,
        genre: "horror",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: `rakex.jpg`,
        url: `https://rakexpoevents.ae/en/home`,
        fadeIn: `fadeInRight`,
      },
      {
        title: "some title3",
        author: `Dante Alighieri`,
        date: `2020-4-2`,
        genre: "drama",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: `rak.jpg`,
        url: `https://rakchamber-test.ae/home`,
        fadeIn: `fadeInLeft`,
      },
      {
        title: "some title4",
        author: `Lev Nikolaevich Tolstoy`,
        date: `2020-4-1`,
        genre: "westren",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: `netflix.jpg`,
        url: `https://danny-mousa.github.io/Netflix-Clone/`,
        fadeIn: `fadeInUp`,
      },
      {
        title: "some title5",
        author: `Victor Hugo`,
        date: `2020-1-2`,
        genre: "action",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: `to-do.jpg`,
        url: `https://danny-mousa.github.io/ToDoListCalendar/`,
        fadeIn: `fadeInUp`,
      },
      {
        title: "some title6",
        author: `William Shakespeare`,
        date: `2019-6-4`,
        genre: "action",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: `finalPortFolio.jpg`,
        url: `https://github.com/Danny-Mousa/myFinalPortfolio.git`,
        fadeIn: `fadeInUp`,
      },
      {
        title: "some title7",
        author: `Johann Wolfgang Goethe`,
        date: `2019-5-1`,
        genre: "action",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: `matching-game.jpg`,
        url: `https://github.com/Danny-Mousa/Memory-Game`,
        fadeIn: `fadeInLeft`,
      },

      {
        title: "some title8",
        author: `Italo Calvino`,
        date: `2018-8-8`,
        genre: "romance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: `gameBoard.jpg`,
        url: `https://github.com/Danny-Mousa/arcadeProject`,
        fadeIn: `fadeInRight`,
      },

      {
        title: "some title9",
        author: `Charles Baudelaire`,
        date: `2018-5-3`,
        genre: "romance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: `jasmine.jpg`,
        url: `https://github.com/Danny-Mousa/feed-reader-RSS`,
        fadeIn: `fadeInUp`,
      },

      {
        title: "some title",
        author: `Marcel Proust`,
        date: `2017-4-3`,
        genre: "thriller",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: `restMain.jpg`,
        url: `https://github.com/Danny-Mousa/rest-rev-stg1`,
        fadeIn: `fadeInRight`,
      },
    ],

    facts: [
      {
        to: 5,
        theFact: `<br><em>Stars</em>`,
      },
      {
        to: 500,
        theFact: `<span class="character">+</span><br><em>Downloads</em>`,
      },
      {
        to: 1000,
        theFact: `<span class="character">+</span><br><em>Readers<br>At our store</em>`,
      },
      {
        to: 100,
        theFact: `<span class="character">%</span><br><em>Of happy<br>Customers</em>`,
      },
    ],
  };

  const octopus = {
    init: function () {
      allBooksView.init();
      searchAuthors.init();
      cancelSearch.init();
      genreFilterView.init();
      factsView.init();
      copyRightYearView.init();
      animation.statrtingPoint();
      animation.waypointFuncs();
    },

    initWaypoint: function (showSearch, searchResultArr) {
      allBooksView.init(showSearch, searchResultArr);
      animation.waypointFuncs();
    },

    getCollection: function () {
      return model.collection;
    },

    getFacts: function () {
      return model.facts;
    },
  };

  const allBooksView = {
    init: function (showSearch, searchResultArr) {
      this.collection = showSearch ? searchResultArr : octopus.getCollection();
      this.length = this.collection.length;

      if (!showSearch) {
        this.collectionContainer = document.querySelector("section.collection");
        this.fragment = document.createDocumentFragment();
        this.books = document.createElement("div");
        this.books.classList.add("books");
      }

      let i;
      for (i = 0; i < this.length; i++) {
        let link = document.createElement("a");
        let book = document.createElement("div");

        book.classList.add("cardContainer");
        link.classList.add("book", "col-md-6", "animated");

        link.setAttribute("data-animation", this.collection[i].fadeIn);
        link.setAttribute(
          "href",
          `./details.html?book_title=${this.collection[i].title}`
        );
        link.setAttribute("target", "_blank");

        book.innerHTML = `
                    <div class="imgContainer">
                      <img src="img/${this.collection[i].img}" alt="${this.collection[i].name}" />
                    </div>
                    <div class="descip">
                      <h3 class="book-title">${this.collection[i].title}</h3>
                      <div class="auth-date">
                        <h4 class="auth">${this.collection[i].author}</h4>
                        <span class="date">${this.collection[i].date}</span>
                        </div>
                        <span class="genre"><span>Genre:</span> ${this.collection[i].genre}</span>
                      <p class="description">${this.collection[i].description}</p>
                    </div>`;

        link.appendChild(book);
        this.fragment.appendChild(link);
      }

      if (showSearch) {
        this.books.innerHTML = searchResultArr.length
          ? ""
          : `<p class="noResult">No Matched results</p>`;

        if (!searchResultArr.length) return;
      }

      this.books.appendChild(this.fragment);
      this.collectionContainer.appendChild(this.books);
    },
  };

  const searchAuthors = {
    init: function () {
      this.searchBtn = document.querySelector(".searchBtn");
      this.searchInput = document.querySelector(".search");

      this.render();
    },

    render: function () {
      const handleEvent = (e) => {
        this.value = this.searchInput.value;

        if (!this.value) return;

        const collection = octopus.getCollection();

        searchResultArr = collection.filter((obj) =>
          obj.author.toUpperCase().includes(this.value.toUpperCase())
        );

        octopus.initWaypoint(true, searchResultArr);
        searchResultArr = [];
      };

      const handleEnter = (e) => {
        if (e.key === "Enter") {
          console.log("inside", e.key);
          handleEvent();
        }
      };

      this.searchBtn.addEventListener("click", handleEvent);
      this.searchInput.addEventListener("keydown", handleEnter);
    },
  };

  const cancelSearch = {
    init: function () {
      this.cancelBtn = document.querySelector(".cancel");

      this.render();
    },

    render: function () {
      this.cancelBtn.addEventListener("click", (e) => {
        if (!searchAuthors.searchInput.value) return;

        searchAuthors.searchInput.value = "";

        const collection = octopus.getCollection();

        //to avoid unnecessary re-rendering when we want to clear the input before making a search
        if (allBooksView.collection.length === collection.length) return;

        octopus.initWaypoint(true, collection);
      });
    },
  };

  const genreFilterView = {
    init: function () {
      this.allGenreArr = [];

      const collection = octopus.getCollection();

      collection.forEach((ele) => {
        this.allGenreArr.push(ele);
      });

      this.select = document.querySelector("#genres");

      this.render();
    },

    render: function () {
      this.preValue = "all";
      this.select.addEventListener("click", (e) => {
        if (this.preValue === this.select.value) return;

        const value = this.select.value;
        const collection = octopus.getCollection();

        const getFilteredArr = () => {
          return collection.filter((movie) => movie.genre === value);
        };

        const filteredArr = value === "all" ? collection : getFilteredArr();

        octopus.initWaypoint(true, filteredArr);

        this.preValue = value;
      });
    },
  };

  const factsView = {
    init: function () {
      this.imgCounters = document.querySelector(".imgCounters");
      this.allFacts = octopus.getFacts();
      this.length = this.allFacts.length;
      this.fragment = document.createDocumentFragment();
      this.div = document.createElement("div");
      this.div.setAttribute("class", "fact");

      let fact;
      let i;
      for (i = 0; i < this.length; i++) {
        fact = this.div.cloneNode(false);
        fact.innerHTML = `<span class="counter" data-from="0" data-to="${this.allFacts[i].to}" data-speed="5000" data-refresh-interval="50">0</span>${this.allFacts[i].theFact}`;

        this.fragment.appendChild(fact);
      }

      this.imgCounters.appendChild(this.fragment);
    },
  };

  const copyRightYearView = {
    init: function () {
      this.copyElement = document.querySelector(".copyright");

      this.render();
    },

    render: function () {
      const fullDate = new Date();
      const year = fullDate.getFullYear();

      this.copyElement.innerHTML = `&copy; ${year} designed by me`;
    },
  };

  octopus.init();
});
