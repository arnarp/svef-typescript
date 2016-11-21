# Hvað er TypeScript
TypeScript er JavaScript sem skalar,
þ.e.a.s tól til að skrifa miðlungs til stór forrit í JavaScript.

JavaScript hefur á seinustu árum orðið vinsælasta forritunarmál heims.
Það var upphaflega smíðað af Brendan Eich á c.a. 3 vikum og var að mínu mati ekki hannað til að gera þá hluti sem við gerum með það í dag.
Það var hannað til að gera 100 - 1000 LOC skriftur.

Eftir sprengingu seinustu ára með tilkomu 
* betri JavaScript véla, V8 og Chakra
* ES2015 og sérstaklega nýs moduls kerfis
* Node.js
* frábærra frameworka eins og Angular og React
* npm packa managers
* margra build tóla

og mjög actívs opens source samfélags
er ekki óalgengt að það sé verið að skrifa 100K - 1M LOC forrit í JS.

Helsta vandamál stórra JS kóðabasa er að það er erfitt að viðhalda og refactora þá.
Það er vegna þess að það vantar statísk týpu kerfi í JS.

Þegar við vinnum t.a.m. í C# og Java þá höfum við mörg mjög góð tól til að hjálpa forritaranum.
T.a.m.
* autocomplete
* go to definition
* find all refrences
* refactorings

Þessi tól eru til vegna þess að þessi mál hafa statískt týpu kerfi sem er hægt að greina á build tíma.
Þ.e.a.s. að IDE'in geta skilið forritin og gefið alla þessa miklu hjálp.
JS hefur það ekki og því hefur toolingi í JS verið ábótavant.

TypeScript er s.s. statískt týpukerfi ofan á JavaScript. TS er ofurset af nýjasta specca af ES.
Þegar við skrifum TS þá einfaldlega skrifum við JS eftir nýjasta ES speccanum og bætum við týpum til að hjálpa þýðandanum að skilja forritið betur.
Síðan notum við TypeScript þýðandan til að þýða yfir í það version af JS sem við viljum, hvort það er ES3, ES5, ES2015 eða eitthvað nýrra.

Munum á næstu árum fá uppfærðan ES specca á hverju ári en munum áfram þurfa í nokkur á senda ES5 niður á browserinn.

## Demo ts
* rename to .ts
* add Person interface
```javascript
interface Person {
  name: string;
  age: number;
}
```
* fix broken code
* sýnum buildið
  * tsc -w sortByName.ts
  * sjáum að þýðandinn skilar fallegum kóða, aðeins búið að taka týpu upplýsingarnar út og breyta lambda segð í venjulegt function
  * bætum við Greeter klasa 
    ```javascript
    class Greeter {
      constructor(private name: string) {
      }
      sayHi() {
        console.log(`Hello ${this.name}`);
      }
    }
    ```
  * getum líka þýtt kóðan yfir í ES2015
    * smíðum stillingar skrá fyrir þýðandan tsconfig.json
    * tsc --init
    * breytum target í ES2015
    * núna þurfum við ekki að tilgreina hvaða skrá við viljum þýða út af stillingar skránni
    * tsc -w
  * rename'um Person.name í fullName og sjáum viðeigandi kóða breytast með
  * stór JS kóði á til að verða read-only, nema ef maður gerir unit test á allt sem er erfitt, því þegar maður breytir einhverju þá er svo erfitt að vita hvort eitthvað hafi brotnað.
  * þar sem TS hefur statískar týpu upplýsingar þá getur maður renamað symbol í einnig aðgerð yfir allan src kóðann
  * Hvernig fáum við týpur af 3party librarys
    * Prófum að nota t.d. moment
    * npm i -S moment
    * Týpur í TS2 er installað með npm. Var flóknara -> þurfti sérstök tól
    * npm i -D @types/moment
    * 
    ```javascript
      import * as _ from 'lodash';
      const people: Person[] = [
        {fullName: 'arnar', age: 29},
        {fullName: 'joe', age: 45}
      ];

      const m = moment().startOf('day').fromNow();
      ```
    * tökum eftir string literal type inní startOf methodunni
## Demo JS
Það er hægt að njóta góðs af TS án þess að skipta yfir í TypeScript
* cd ../js
* bæta við jsdoc í person.js Ctrl+Alt+D x 2
*
  ```javascript
    /**
    * Constructs a person object
    * @constructor
    * @param {string} name
    * @param {number} age
    */
    ...
    var p = new Person('arnar', 29);
  ```
* Segjum svo að ég vilji nota jQuery hérna
  * Ég skrifa $. og svo hvað. Höfum hingað til þurft að hafa skjölunina við hendina
  * TS getur hjálpað okkur. Það er þegar búið að gera type definition skrár fyrir jQuery
  * tsc --init
  * "allowJs": true
  * npm i -D @types/jquery
  * $.ajax({method: 'GET', url: 'foobar'});
  * npm i -D @types/lodash
  * _.filter([1,2,3], x => x.)
* Getum blandað sama JS og TS
  * Bætum við utils.ts skrá
  * Smíðum factory aðferðina makePerson
  ```javascript
  function makePerson() {
    return new Person('arnar', 34);
  }
  ```
  ## Nullable týpur
  Það er mikið til trafala að null og undefined sé assignable á allar týpur.
  Oft er JS allur út í null/undefined tékkum.
  Sennilega algengast villur í forritun almennt og í JS er vandamálið nánast tvöfalt verra því það eru tvær týpur fyrir null.
  Í TS 2.0 kom frábær fídus StrictNullChecks
  * Förum í nullChecks&controlFlow folder
  * Sýnum countLines.ts
  * Kveikjum á StrictNullChecks "strictNullChecks": true
  * Reload window
  * Skoðum villurnar
  * Lögum 'Variable 'count' is used before being assigned.
    * let count = 0; -> : number er óþarfi, tvítekning
  * Lögum text -> Object is possible 'undefined'
    * Wröppum func body í if(text)
    * Fáum þá villu varðandi skilagildi 
    * Setjum í staðinn if (!text) { return count }
  * Lögum Type 'null' is not assignable to type 'string'
    * (string | null)[]
