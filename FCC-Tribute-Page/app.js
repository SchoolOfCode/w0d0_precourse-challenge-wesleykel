const createPage = () => {
  const container = document.createElement("div");
  container.id = "main";
  document.body.appendChild(container);

  const heading = document.createElement("header");
  heading.id = "head-section";

  const title = document.createElement("h1");
  title.id = "title";
  title.innerText = "Chadwick Boseman";

  const foreword = document.createElement("span");
  foreword.id = "foreword";
  foreword.innerText = "An American actor and playwright";

  container.appendChild(heading);
  heading.appendChild(title);
  title.insertAdjacentElement("afterend", foreword);

  const picContainer = document.createElement("div");
  picContainer.id = "img-div";
  heading.insertAdjacentElement("afterend", picContainer);

  const mainPicture = document.createElement("img");
  mainPicture.id = "image";
  picContainer.appendChild(mainPicture);
  mainPicture.src = "./chadwick.jpeg";
  mainPicture.alt = "picture of Actor Chadwick Boseman";

  const picTitle = document.createElement("div");
  picTitle.id = "caption";
  picTitle.innerText =
    "Chadwick Aaron Boseman (November 29, 1976–August 28, 2020)";
  mainPicture.insertAdjacentElement("afterend", picTitle);

  const informationSection = document.createElement("main");
  informationSection.id = "tribute-info";

  picContainer.insertAdjacentElement("afterend", informationSection);

  const mainTitle = document.createElement("h3");
  mainTitle.id = "main-title";
  mainTitle.innerText = "Here's a time line of Chadwick's life and career";

  informationSection.appendChild(mainTitle);

  const infoListContainer = document.createElement("ul");
  infoListContainer.className = "information";

  informationSection.appendChild(infoListContainer);

  const yearOne = document.createElement("li");
  yearOne.className = "list-info";
  yearOne.innerHTML =
    "<b>1976</b> - Chadwick Aaron Boseman was born and raised in Anderson, South Carolina, the son of Carolyn and Leroy Boseman, both African-American. His mother was a nurse, and his father worked at a textile factory and managed an upholstery busines";

  infoListContainer.appendChild(yearOne);

  const yearTwo = document.createElement("li");
  yearTwo.className = "list-info";
  yearTwo.innerHTML =
    "<b>1995</b> - Boseman graduated from T. L. Hanna High School in 1995 where he played on the basketball team. In his junior year, he wrote his first play, Crossroads, and staged it at the school after a classmate was shot and killed. He competed in Speech and Debate in the National Speech and Debate Association at T. L. Hanna. He placed eighth in Original Oratory at the 1995 National Tournament.He was recruited to play basketball at college but chose the arts instead, attending college at Howard University in Washington, D.C. and graduating in 2000 with a Bachelor of Fine Arts in directing";

  yearOne.insertAdjacentElement("afterend", yearTwo);

  const yearThree = document.createElement("li");
  yearThree.className = "list-info";
  yearThree.innerHTML =
    "<b>2000</b> - Boseman lived in Brooklyn, New York City, at the start of his career. He was named a Drama League Directing Fellow. He directed productions including George C. Wolfe's The Colored Museum (Wolfe would later direct Boseman in his final role) and a staging of Amiri Baraka's Dutchman. He worked as the drama instructor in the Schomburg Junior Scholars Program, housed at the Schomburg Center for Research in Black Culture in Harlem between 2002 and 2009.";

  yearTwo.insertAdjacentElement("afterend", yearThree);

  const yearFour = document.createElement("li");
  yearFour.className = "list-info";
  yearFour.innerHTML =
    "<b>2003</b> - In 2003, Boseman was cast in his first television role, an episode of Third Watch, and began playing Reggie Montgomery in the daytime soap opera All My Children. He was fired from All My Children after voicing concerns to producers about racist stereotypes in the script; the role was subsequently re-cast, with Boseman's future Black Panther co-star Michael B. Jordan taking the part.";
  yearThree.insertAdjacentElement("afterend", yearFour);

  const yearFive = document.createElement("li");
  yearFive.className = "list-info";
  yearFive.innerHTML =
    "<b>2008</b> - In 2008, Boseman moved to Los Angeles to pursue his film and acting career.He was cast in a recurring role on the television series Lincoln Heights as Nathaniel Ray Taylor, an army veteran with PTSD who was later revealed to be the son of the main character before re-enlisting";

  yearFour.insertAdjacentElement("afterend", yearFive);

  const yearSix = document.createElement("li");
  yearSix.className = "list-info";
  yearSix.innerHTML =
    "<b>2013</b> - Boseman's breakthrough role came in 2013 with the film 42, in which he portrayed the lead role of baseball legend Jackie Robinson. Boseman had been directing an off-Broadway play in the East Village when he auditioned for the role, and was considering giving up acting to pursue directing full-time.";
  yearFive.insertAdjacentElement("afterend", yearSix);

  const yearSeven = document.createElement("li");
  yearSeven.className = "list-info";
  yearSeven.innerHTML =
    "<b>2016</b> - In 2016, Boseman began portraying the Marvel Comics character T'Challa / Black Panther in the Marvel Cinematic Universe. Captain America: Civil War was his first film in a five-picture deal with Marvel Entertainment.He did not audition for the role, instead having a discussion about what [Marvel] wanted to do and how [he] saw it and what [he] wanted to do. While working on Civil War Boseman learned some Xhosa from John Kani, who played his father, and insisted on using the language for the character.Boseman also developed a Wakandan accent himself, and used it during the entire production whether he was on camera or not";

  yearSix.insertAdjacentElement("afterend", yearSeven);

  const yearEight = document.createElement("li");
  yearEight.className = "list-info";
  yearEight.innerHTML =
    "<b>2018</b> - Boseman returned as the Black Panther in 2018, in the Black Panther movie, which focused on the character and his home country of Wakanda in Africa. The film opened to great anticipation, becoming one of the highest-grossing films. The role earned Boseman a spot on the 2018 Time 100 as one of the world's most influential people, with Sean Combs writing his entry. It is seen as a landmark in being the first mega-budget movie to have a predominantly black cast and director, as well as the first superhero film to be nominated for an Academy Award for Best Picture.";

  yearSeven.insertAdjacentElement("afterend", yearEight);

  const yearNine = document.createElement("li");
  yearNine.className = "list-info";
  yearNine.innerHTML =
    "<b>2019</b> - Boseman began dating singer Taylor Simone Ledward in 2015. The two reportedly got engaged by October 2019, and they later married in secret,";

  yearEight.insertAdjacentElement("afterend", yearNine);

  const yearTen = document.createElement("li");
  yearTen.className = "list-info";
  yearTen.innerHTML =
    "<b>2020</b> - Chadwick Boseman died at his home as a result of complications related to cancer on August 28, 2020, with his wife and family by his side.";

  yearNine.insertAdjacentElement("afterend", yearTen);

  const link = document.createElement("span");
  link.id = "link-container";

  const wikiLink = document.createElement("a");
  wikiLink.id = "tribute-link";
  wikiLink.setAttribute("target", "_blank");
  wikiLink.href = "https://www.imdb.com/name/nm1569276/";
  wikiLink.innerText =
    " For further information about Chadwick Boseman please click here";

  informationSection.insertAdjacentElement("afterend", link);
  link.appendChild(wikiLink);

  let me = document.createElement("footer");
  me.id = "about-me";
  me.innerText = "WK2021";
  link.insertAdjacentElement("afterend", me);
};
createPage();
