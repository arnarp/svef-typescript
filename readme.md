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

