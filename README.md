# web-scraping project 
Aplikacja skladajaca sie z API napisanego w Javascript z uzyciem takich bibliotek jak:  
-axios  
-cheerio  
-express  
-cors  


# Dostepne endpointy
API sciaga artykuly z blogu wordpress nastepnie udostepnia je przez endpointy:  
-'/articles/:year' zwraca liste artykulow z konkretnego roku  
-'/allArticles' zwraca liste wszystkich artykulow   
-'/article/:title' zwraca pojedynczy artykul o tytule ''  

Artykuly pobierane sa podczas staru serwera poniewaz mialo to miec charakter pokazowy

# Frontend 
Frontend zostal napisany w Angular v12 z uzyciem Materials Design oraz Bootstrap  
Aplikacja posiada paginacje ktora pomaga w przegladaniu artukulow. Zostal do tego wykorzystany komponent z Material Design (mat-paginator). Artykuly wyswietlane sa w postaci kart z uzyciem komponentu (mat-card).
