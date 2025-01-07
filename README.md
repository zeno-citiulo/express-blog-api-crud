Esercizio express-blog-api-crud
===
## Information
**Milestone 1**<br>
Come prima cosa, creiamo un controller per i nostri post, in una cartella `controllers.`<br>
All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).<br>
Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.<br>
Testiamo su postman/thunder-client se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.<br>
Se tutto funziona, passiamo alla prossima milestone<br>
**Milestone 2**<br>
Per iniziare, creiamo una cartella `data`  in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato.  Importiamo questo file in cima al controller.<br>
Ora passiamo ad implementare le logiche delle nostre CRUD:<br>
- Index dovrà restituire la lista dei post in formato JSON
- Show dovrà restituire un singolo post in formato JSON
- Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (`console.log`) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.