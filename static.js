

class Article {
  static count = 0;

  constructor(title, date) {
    this.title = title;
    this.date = date;
    Article.count++;
  }

  static compare (articleA, articleB) {
    return articleA.date - articleB.date;
  }

  static createToday(title) {
    return new Article(title, new Date());
  }
}

let articles = [
  new Article('a', new Date(2020, 4, 1)), // 1
  new Article('b', new Date(2020, 0, 1)), // 2
  new Article('c', new Date(2020, 11, 1)), // 3
];

articles.sort(Article.compare);
console.log(articles[0].title);


const article = new Article('linux', new Date()); // 4
// console.log(article.compare(article, articles[0])); // Error, static method are not callable via objects (instances)

const todayArticle = Article.createToday('.Net'); // 5

console.log(Article.count);

// this refers to the created object

/**
 * problem
 * 
 * 
* class Rabbit {
    constructor(name){
      this.name = name;
    }
  }

  const rabbit = new Rabbit('white rabbit')

  console.log(rabbit.hasOwnProperty('name'));

  By default Rabbit extends Object class
  So, you can use Object class methods such as 'hasOwnProperty'

  BUT if we do it explicitly it will cause error
  class Rabbit extends Object {
    constructor(name) {
      this.name = name;
    }
  }

  const rabbit = new Rabbit('white rabbit');
  console.log(Object.hasOwnProperty('name')); // Error
 */
class Rabbit extends Object{
  constructor(name){
    super();
    this.name = name;
  }
}

const rabbit = new Rabbit('white rabbit')

console.log(rabbit.hasOwnProperty('name'));


