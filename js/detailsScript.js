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

    animateHeader: function () {
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
  };

  const octopus = {
    init: function () {
      detailsView.init();
      copyRightYearView.init();
      animation.statrtingPoint();
      animation.animateHeader();
    },

    getCollection: function () {
      return model.collection;
    },
  };

  const detailsView = {
    init: function () {
      this.bookTitleElem = document.querySelector(".book-title");
      this.bookWriterElem = document.querySelector(".book-writer");
      this.bookDescription = document.querySelector(".book-description");
      this.genre = document.querySelector(".genre");
      this.imgContainer = document.querySelector(".imgContainer");
      this.img = document.createElement("img");

      this.render();
    },
    render: function () {
      const url_string = window.location.href;
      const url = new URL(url_string);
      const bookTitle = url.searchParams.get("book_title");
      const collection = octopus.getCollection();

      const book = collection.find((book) => book.title === bookTitle);

      this.img.setAttribute("src", `img/${book.img}`);
      this.imgContainer.appendChild(this.img);
      this.bookTitleElem.textContent = book.title;
      this.bookWriterElem.innerHTML = `<span>By:</span> ${book.author}`;
      this.genre.innerHTML = `<span>Genre:</span> ${book.genre}`;
      this.bookDescription.textContent = book.description;
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
