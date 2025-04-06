[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/dZI7lhjO)
# Web Technologien // begleitendes Projekt Sommersemester 2021

Zum Modul Web Technologien gibt es ein begleitendes Projekt. Im Rahmen dieses Projekts werden wir von Veranstaltung zu Veranstaltung ein Projekt sukzessive weiter entwickeln und uns im Rahmen der Veranstaltung den Fortschritt anschauen, Code Reviews machen und Entwicklungsschritte vorstellen und diskutieren.

Als organisatorischen Rahmen für das Projekt nutzen wir GitHub Classroom. Inhaltlich befassen wir uns mit der Entwicklung einer kleinen Web-Anwendung für die Bearbeitung von Bildern. Hierbei steht weniger ein professioneller Konzeptions-, Entwurfs- und Entwicklungsprozess im Vordergrund, sondern vielmehr die sukzessive Weiterentwicklung einer Anwendung, das Ausprobieren, Vergleichen, Refactoren und die Freude an lauffähigem Code.


### Setup with Docker 

1. clone this repository.
2. navigate the repository root directory.
3. to start Run :
```
make start
```

### Hint
A makefile was created to avoid writing long commands, it is possible to start, stop, restart containers and clean infrastructure using the makefile command to see all available commands documented run 
```
make help
```

### Setup without Docker
To setup the project without docker you will need npm or yarn installed 
1. change directory to client and server folder
2. run (on both directories):
```
npm install or yarn install 
```
3. then run :
```
npm start or yarn start 
```
