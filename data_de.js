window.QUIZ_DATA_DE = [
    {
        "id": 1,
        "topic": "Git",
        "question": "Was ist Git?",
        "answer": "Ein verteiltes Versionskontrollsystem zur Verfolgung von Codeänderungen.",
        "wrongAnswers": [
            "Eine Cloud-Plattform zum Hosten von Websites.",
            "Ein Java-Compiler."
        ]
    },
    {
        "id": 2,
        "topic": "Git",
        "question": "Welche Git-Befehle kennen Sie?",
        "answer": "init, clone, add, commit, push, pull, branch, merge, status, log.",
        "wrongAnswers": [
            "start, download, save, share.",
            "compile, run, debug, deploy."
        ]
    },
    {
        "id": 3,
        "topic": "Git",
        "question": "Was ist ein Commit?",
        "answer": "Ein Snapshot der Änderungen im lokalen Repository mit einer Beschreibung.",
        "wrongAnswers": [
            "Das Hochladen von Code auf den Server.",
            "Das Löschen von Dateien aus der Historie."
        ]
    },
    {
        "id": 4,
        "topic": "Git",
        "question": "Wie kehrt man zu einem vorherigen Commit zurück?",
        "answer": "Mit git revert (erstellt neuen Commit) oder git reset (ändert Historie).",
        "wrongAnswers": [
            "Durch Löschen des .git Ordners.",
            "Mit der Tastenkombination Strg+Z."
        ]
    },
    {
        "id": 5,
        "topic": "Git",
        "question": "Was ist ein Branch?",
        "answer": "Ein separater Entwicklungspfad zur Isolierung von Features oder Fixes.",
        "wrongAnswers": [
            "Eine Kopie des Projekts auf Google Drive.",
            "Ein Backup der Datenbank."
        ]
    },
    {
        "id": 6,
        "topic": "Git",
        "question": "Wie führt man Branches zusammen?",
        "answer": "Mit dem Befehl git merge.",
        "wrongAnswers": [
            "Mit git join oder git combine.",
            "Durch manuelles Kopieren der Dateien."
        ]
    },
    {
        "id": 7,
        "topic": "Git",
        "question": "Was ist ein Merge-Konflikt?",
        "answer": "Widersprüchliche Änderungen in derselben Zeile, die manuell gelöst werden müssen.",
        "wrongAnswers": [
            "Ein Netzwerkfehler beim Hochladen.",
            "Wenn die Datei zu groß für Git ist."
        ]
    },
    {
        "id": 8,
        "topic": "Git",
        "question": "Unterschied zwischen git fetch und git pull?",
        "answer": "fetch lädt Änderungen nur herunter; pull lädt sie herunter und führt sie sofort zusammen.",
        "wrongAnswers": [
            "fetch ist für Java, pull für JavaScript.",
            "pull ist nur für den Master-Branch."
        ]
    },
    {
        "id": 9,
        "topic": "Git",
        "question": "Was ist git rebase?",
        "answer": "Verschieben oder Kombinieren von Commits auf einen neuen Basis-Commit.",
        "wrongAnswers": [
            "Ein Befehl zum Komprimieren von Bildern.",
            "Eine Technik zum Löschen der gesamten Historie."
        ]
    },
    {
        "id": 10,
        "topic": "Git",
        "question": "Vor- und Nachteile von Rebase?",
        "answer": "Vorteil: Saubere, lineare Historie. Nachteil: Verändert die Historie (Gefahr bei geteilten Branches).",
        "wrongAnswers": [
            "Vorteil: Automatisches Bugfitting. Nachteil: Langsamer als Merge.",
            "Keine Nachteile, es wird immer empfohlen."
        ]
    },
    {
        "id": 11,
        "topic": "Maven",
        "question": "Was ist Maven?",
        "answer": "Build-Management-Tool für Java-Projekte zur Verwaltung von Abhängigkeiten und Lifecycle.",
        "wrongAnswers": [
            "Ein Framework für Web-Oberflächen.",
            "Ein Code-Editor von Microsoft."
        ]
    },
    {
        "id": 12,
        "topic": "Maven",
        "question": "Was sind die Hauptbestandteile von Maven?",
        "answer": "POM-Datei, Repositories, Lifecycle-Phasen und Plugins.",
        "wrongAnswers": [
            "HTML, CSS und JavaScript-Dateien.",
            "Die JVM und der JIT-Compiler."
        ]
    },
    {
        "id": 13,
        "topic": "Maven",
        "question": "Was ist eine POM-Datei?",
        "answer": "Project Object Model (pom.xml) mit Konfigurationen und Abhängigkeiten.",
        "wrongAnswers": [
            "Eine Datei zum Speichern von Passwörtern.",
            "Ein Protokoll für die Netzwerkübertragung."
        ]
    },
    {
        "id": 14,
        "topic": "Maven",
        "question": "Was ist Dependency Management?",
        "answer": "Automatisiertes Herunterladen und Verwalten von Bibliotheken und deren Versionen.",
        "wrongAnswers": [
            "Manuelle Installation von JAR-Dateien in den System-Ordner.",
            "Ein Security-Feature gegen Viren."
        ]
    },
    {
        "id": 15,
        "topic": "Maven",
        "question": "Was ist der Maven Lifecycle?",
        "answer": "Ein definierter Prozess für den Build (validate, compile, test, package, install, deploy).",
        "wrongAnswers": [
            "Die Zeitspanne bis zum Release einer App.",
            "Der Pfad einer Anfrage im Servlet-Container."
        ]
    },
    {
        "id": 16,
        "topic": "Maven",
        "question": "Wie addiert man Abhängigkeiten in Maven?",
        "answer": "Durch Hinzufügen von <dependency> Einträgen in der pom.xml.",
        "wrongAnswers": [
            "Mit 'import' im Java-Quellcode.",
            "Durch Herunterladen von der Website des Herstellers."
        ]
    },
    {
        "id": 17,
        "topic": "Maven",
        "question": "Was ist ein Maven Plugin?",
        "answer": "Eine Erweiterung, die Aufgaben während der Lifecycle-Phasen ausführt.",
        "wrongAnswers": [
            "Ein Theme für die Entwicklungsumgebung.",
            "Ein Browser-Addon für Java-Entwickler."
        ]
    },
    {
        "id": 18,
        "topic": "Maven",
        "question": "Wie startet man einen Maven Build?",
        "answer": "Über die Kommandozeile mit Befehlen wie 'mvn clean install'.",
        "wrongAnswers": [
            "Durch Klicken auf 'Datei -> Speichern'.",
            "Indem man die pom.xml im Browser öffnet."
        ]
    },
    {
        "id": 19,
        "topic": "Maven",
        "question": "Was ist das Maven Repository-System?",
        "answer": "Speicherorte für Artefakte: lokal (PC), zentral (Maven Central) und remote (Firmen-Repos).",
        "wrongAnswers": [
            "Eine SQL-Datenbank für Nutzerdaten.",
            "Ein System zum Speichern von Git-Commits."
        ]
    },
    {
        "id": 20,
        "topic": "Maven",
        "question": "Was ist ein Snapshot in Maven?",
        "answer": "Eine Version, die sich noch in der Entwicklung befindet (z.B. 1.0-SNAPSHOT).",
        "wrongAnswers": [
            "Ein Screenshot der Benutzeroberfläche.",
            "Ein Backup der kompletten Festplatte."
        ]
    },
    {
        "id": 21,
        "topic": "Maven",
        "question": "Was ist ein transitiver Dependency?",
        "answer": "Eine Abhängigkeit einer Bibliothek, die Maven automatisch mit einlädt.",
        "wrongAnswers": [
            "Eine Abhängigkeit, die nur temporär existiert.",
            "Ein Virus, der sich über Maven verbreitet."
        ]
    },
    {
        "id": 22,
        "topic": "Maven",
        "question": "Alternativen zu Maven?",
        "answer": "Gradle, Ant, SBT.",
        "wrongAnswers": [
            "Spring, Hibernate, JPA.",
            "Git, SVN, Mercurial."
        ]
    },
    {
        "id": 23,
        "topic": "Java Basics",
        "question": "Was ist Java?",
        "answer": "Eine objektorientierte, plattformunabhängige Hochsprache.",
        "wrongAnswers": [
            "Ein Browser-Plugin von Adobe.",
            "Ein Betriebssystem für Kühlschränke."
        ]
    },
    {
        "id": 24,
        "topic": "Java Basics",
        "question": "Was ist die JVM?",
        "answer": "Java Virtual Machine – führt Bytecode auf dem Zielsystem aus.",
        "wrongAnswers": [
            "Ein Programm zum Zeichnen von Diagrammen.",
            "Die Hardware, auf der Java läuft."
        ]
    },
    {
        "id": 25,
        "topic": "Java Basics",
        "question": "Unterschied JRE vs JDK?",
        "answer": "JRE ist zum Ausführen; JDK enthält JRE plus Entwicklungstools (javac etc.).",
        "wrongAnswers": [
            "JRE ist kostenlos, JDK ist kostenpflichtig.",
            "JDK ist nur für Windows verfügbar."
        ]
    },
    {
        "id": 26,
        "topic": "Java Basics",
        "question": "Was ist Bytecode?",
        "answer": "Plattformunabhängiger Zwischencode (.class), erzeugt durch den Compiler.",
        "wrongAnswers": [
            "Der Code, den der Entwickler schreibt.",
            "Maschinencode für Intel-Prozessoren."
        ]
    },
    {
        "id": 27,
        "topic": "Java Basics",
        "question": "Was sind primitive Datentypen?",
        "answer": "Einfache Typen: byte, short, int, long, float, double, char, boolean.",
        "wrongAnswers": [
            "String, Integer, List, Map.",
            "Objekte und Klassen."
        ]
    },
    {
        "id": 28,
        "topic": "Java Basics",
        "question": "Unterschied == vs equals()?",
        "answer": "== vergleicht Referenzen; equals() den Inhalt von Objekten.",
        "wrongAnswers": [
            "Es gibt keinen Unterschied.",
            "equals() ist nur für Zahlen gedacht."
        ]
    },
    {
        "id": 29,
        "topic": "Java Basics",
        "question": "Was ist Autoboxing?",
        "answer": "Automatische Umwandlung von Primitivtypen in Wrapper-Klassen (z.B. int zu Integer).",
        "wrongAnswers": [
            "Automatisches Packen von ZIP-Dateien.",
            "Ein Feature zur Autovervollständigung in der IDE."
        ]
    },
    {
        "id": 30,
        "topic": "Java Basics",
        "question": "Was ist das Schlüsselwort static?",
        "answer": "Gehört zur Klasse selbst, nicht zu einer Instanz der Klasse.",
        "wrongAnswers": [
            "Verhindert, dass eine Variable geändert wird.",
            "Markiert eine Methode als veraltet."
        ]
    },
    {
        "id": 31,
        "topic": "Java Basics",
        "question": "Was ist final?",
        "answer": "Variable (Konstante), Methode (nicht überschreibbar), Klasse (nicht vererbbar).",
        "wrongAnswers": [
            "Die letzte Methode in einer Klasse.",
            "Schließt das Programm nach Ausführung."
        ]
    },
    {
        "id": 32,
        "topic": "Java Basics",
        "question": "Was ist die Main-Methode?",
        "answer": "public static void main(String[] args) – Einstiegspunkt des Programms.",
        "wrongAnswers": [
            "Eine Methode zum Senden von E-Mails.",
            "Die einzige Methode, die in Java erlaubt ist."
        ]
    },
    {
        "id": 33,
        "topic": "Java Basics",
        "question": "Was ist ein Konstruktor?",
        "answer": "Spezielle Methode zur Initialisierung neuer Objekte.",
        "wrongAnswers": [
            "Ein Programm zum Erstellen von Datenbank-Tabellen.",
            "Eine Person, die Gebäude plant."
        ]
    },
    {
        "id": 34,
        "topic": "Java Basics",
        "question": "Unterschied Überladen vs Überschreiben?",
        "answer": "Überladen: Gleicher Name, andere Parameter. Überschreiben: Gleiche Signatur in Unterklasse.",
        "wrongAnswers": [
            "Überladen löscht die Methode, Überschreiben kopiert sie.",
            "Methoden können in Java nicht überladen werden."
        ]
    },
    {
        "id": 35,
        "topic": "Java Basics",
        "question": "Was ist der String Pool?",
        "answer": "Speicherbereich zur effizienten Wiederverwendung identischer String-Literale.",
        "wrongAnswers": [
            "Eine Liste aller erlaubten Strings in Java.",
            "Ein Freibad für Java-Entwickler."
        ]
    },
    {
        "id": 36,
        "topic": "Java Basics",
        "question": "Unterschied String vs StringBuilder?",
        "answer": "String ist unveränderlich (immutable); StringBuilder ist veränderlich und effizienter bei vielen Änderungen.",
        "wrongAnswers": [
            "StringBuilder ist nur für Web-Entwicklung.",
            "String kann keine Leerzeichen enthalten."
        ]
    },
    {
        "id": 37,
        "topic": "Java Basics",
        "question": "Was ist der Garbage Collector?",
        "answer": "Automatisches System zur Freigabe von Speicher nicht mehr genutzter Objekte.",
        "wrongAnswers": [
            "Ein Tool zum Löschen von Browser-Cookies.",
            "Eine Person, die alte Computer einsammelt."
        ]
    },
    {
        "id": 38,
        "topic": "Java Basics",
        "question": "Was sind Packages?",
        "answer": "Namensräume zur Organisation von Klassen und Vermeidung von Namenskonflikten.",
        "wrongAnswers": [
            "Pakete, die man per Post verschickt.",
            "ZIP-Archive mit Programmen."
        ]
    },
    {
        "id": 39,
        "topic": "Java Basics",
        "question": "Was ist Exception Handling?",
        "answer": "Mechanismus zur Behandlung von Laufzeitfehlern mit try, catch, finally.",
        "wrongAnswers": [
            "Automatisches Reparieren von Bugs im Code.",
            "Löschen aller Fehler-Logs."
        ]
    },
    {
        "id": 40,
        "topic": "Java Basics",
        "question": "Unterschied checked vs unchecked Exceptions?",
        "answer": "Checked müssen behandelt oder deklariert werden; Unchecked (Runtime) nicht.",
        "wrongAnswers": [
            "Checked sind für Hardware, Unchecked für Software.",
            "Unchecked Exceptions führen nie zum Absturz."
        ]
    },
    {
        "id": 41,
        "topic": "Java Basics",
        "question": "Was ist das finally-Block?",
        "answer": "Codeblock, der nach try/catch immer ausgeführt wird (z.B. zum Schließen von Ressourcen).",
        "wrongAnswers": [
            "Wird nur ausgeführt, wenn kein Fehler auftritt.",
            "Beendet die gesamte JVM."
        ]
    },
    {
        "id": 42,
        "topic": "Java Basics",
        "question": "Was ist Java Generics?",
        "answer": "Ermöglicht Typsicherheit durch Typparameter (z.B. List<String>).",
        "wrongAnswers": [
            "Allgemeine Einstellungen für Java-Apps.",
            "Automatisch generierter Code."
        ]
    },
    {
        "id": 43,
        "topic": "Java Basics",
        "question": "Was ist das 'this' Schlüsselwort?",
        "answer": "Referenz auf die aktuelle Instanz der Klasse.",
        "wrongAnswers": [
            "Referenz auf die Datei auf der Festplatte.",
            "Zeiger auf das Betriebssystem."
        ]
    },
    {
        "id": 44,
        "topic": "Java Basics",
        "question": "Was ist 'super'?",
        "answer": "Referenz auf die Oberklasse (Konstruktoren oder Methoden).",
        "wrongAnswers": [
            "Gibt dem Programmierer Admin-Rechte.",
            "Macht den Code schneller."
        ]
    },
    {
        "id": 45,
        "topic": "Java Basics",
        "question": "Was ist ein Enum?",
        "answer": "Ein spezieller Datentyp für eine feste Menge von Konstanten.",
        "wrongAnswers": [
            "Ein Zähler für die Anzahl der Zeilen.",
            "Eine Abkürzung für 'Email Enumeration'."
        ]
    },
    {
        "id": 46,
        "topic": "Java Basics",
        "question": "Was sind Wrapper-Klassen?",
        "answer": "Objekt-Repräsentationen von Primitivtypen (z.B. Integer für int).",
        "wrongAnswers": [
            "Verpackungen für CD-ROMs.",
            "Klassen, die den Netzwerk-Traffic umhüllen."
        ]
    },
    {
        "id": 47,
        "topic": "Java Basics",
        "question": "Was ist Casting in Java?",
        "answer": "Explizite oder implizite Umwandlung eines Datentyps in einen anderen.",
        "wrongAnswers": [
            "Die Auswahl von Schauspielern für einen Film.",
            "Das Sichern von Daten auf einen Server."
        ]
    },
    {
        "id": 48,
        "topic": "Java Basics",
        "question": "Was ist das Schlüsselwort volatile?",
        "answer": "Garantie, dass Variablenänderungen für alle Threads sofort sichtbar sind.",
        "wrongAnswers": [
            "Variable wird nach 5 Minuten gelöscht.",
            "Markiert den Code als experimentell."
        ]
    },
    {
        "id": 49,
        "topic": "Java Basics",
        "question": "Was ist die Aufgabe der JVM?",
        "answer": "Laden, Verifizieren und Ausführen von Bytecode.",
        "wrongAnswers": [
            "Kompilieren von Java-Dateien zu Bytecode.",
            "Designen der grafischen Oberfläche."
        ]
    },
    {
        "id": 50,
        "topic": "Java OOP",
        "question": "Was sind die 4 Säulen von OOP?",
        "answer": "Abstraktion, Kapselung, Vererbung, Polymorphismus.",
        "wrongAnswers": [
            "Variablen, Methoden, Klassen, Objekte.",
            "Input, Output, Processing, Storage."
        ]
    },
    {
        "id": 51,
        "topic": "Java OOP",
        "question": "Was ist Abstraktion?",
        "answer": "Fokus auf wesentliche Merkmale eines Objekts unter Ausblendung von Details.",
        "wrongAnswers": [
            "Verschlüsseln von Quellcode.",
            "Entfernen aller Kommentare aus dem Code."
        ]
    },
    {
        "id": 52,
        "topic": "Java OOP",
        "question": "Was ist Kapselung (Encapsulation)?",
        "answer": "Schutz von Daten durch private Felder und Zugriff via Getter/Setter.",
        "wrongAnswers": [
            "Speichern von Daten in einer ZIP-Datei.",
            "Isolation der App vom Internet."
        ]
    },
    {
        "id": 53,
        "topic": "Java OOP",
        "question": "Was ist Vererbung (Inheritance)?",
        "answer": "Weitergabe von Merkmalen und Methoden einer Oberklasse an Unterklassen.",
        "wrongAnswers": [
            "Kopieren von Code per Copy-Paste.",
            "Sichern von Projekten auf GitHub."
        ]
    },
    {
        "id": 54,
        "topic": "Java OOP",
        "question": "Was ist Polymorphismus?",
        "answer": "Fähigkeit eines Objekts, mehrere Formen anzunehmen (z.B. eine Methode, viele Implementierungen).",
        "wrongAnswers": [
            "Umwandlung von Bytecode in Maschinencode.",
            "Gleichzeitiges Ausführen von zwei Programmen."
        ]
    },
    {
        "id": 55,
        "topic": "Java OOP",
        "question": "Unterschied Klasse vs Objekt?",
        "answer": "Klasse ist der Bauplan; Objekt ist die konkrete Instanz dieses Bauplans.",
        "wrongAnswers": [
            "Objekt ist der Bauplan für die Klasse.",
            "Es gibt keinen Unterschied."
        ]
    },
    {
        "id": 56,
        "topic": "Java OOP",
        "question": "Was ist eine abstrakte Klasse?",
        "answer": "Kann nicht instanziiert werden und dient als Vorlage für andere Klassen.",
        "wrongAnswers": [
            "Eine Klasse ohne Methoden.",
            "Eine Klasse, die im RAM nicht existiert."
        ]
    },
    {
        "id": 57,
        "topic": "Java OOP",
        "question": "Was ist ein Interface?",
        "answer": "Ein Vertrag, der Methoden definiert, die eine Klasse implementieren muss.",
        "wrongAnswers": [
            "Die grafische Benutzeroberfläche.",
            "Eine Verbindungsklasse zur Datenbank."
        ]
    },
    {
        "id": 58,
        "topic": "Java OOP",
        "question": "Abstrakte Klasse vs Interface?",
        "answer": "Interfaces für Verhalten (Verträge); Abstrakte Klassen für Basiszustände und Logik.",
        "wrongAnswers": [
            "Interfaces sind nur für private Methoden.",
            "Abstrakte Klassen dürfen keine Variablen enthalten."
        ]
    },
    {
        "id": 59,
        "topic": "Java OOP",
        "question": "Was ist Aggregation?",
        "answer": "Eine 'hat ein' Beziehung, bei der Teile unabhängig vom Ganzen existieren können.",
        "wrongAnswers": [
            "Zusammenfassen von Fehlermeldungen.",
            "Datenbankabfrage mit SUM() oder COUNT()."
        ]
    },
    {
        "id": 60,
        "topic": "Java OOP",
        "question": "Was ist Komposition?",
        "answer": "Starke 'hat ein' Beziehung, bei der Teile nicht ohne das Ganze existieren können.",
        "wrongAnswers": [
            "Zusammensetzen von Musik in Java.",
            "Schreiben von Code in einer IDE."
        ]
    },
    {
        "id": 61,
        "topic": "Java OOP",
        "question": "Was bedeutet 'Is-A'?",
        "answer": "Beschreibt Vererbung (z.B. Ein Hund IST-EIN Tier).",
        "wrongAnswers": [
            "Prüfung, ob eine Variable existiert.",
            "Vergleich von zwei Strings."
        ]
    },
    {
        "id": 62,
        "topic": "Java OOP",
        "question": "Was bedeutet 'Has-A'?",
        "answer": "Beschreibt Assoziation/Aggregation (z.B. Ein Auto HAT-EINEN Motor).",
        "wrongAnswers": [
            "Prüfung, ob die Festplatte voll ist.",
            "Überprüfung von Nutzerrechten."
        ]
    },
    {
        "id": 63,
        "topic": "Java OOP",
        "question": "Was ist eine innere Klasse?",
        "answer": "Eine Klasse, die innerhalb einer anderen Klasse definiert ist.",
        "wrongAnswers": [
            "Geheime Klassen der Java-Library.",
            "Klassen, die nur lokal auf dem PC liegen."
        ]
    },
    {
        "id": 64,
        "topic": "Java OOP",
        "question": "Was sind Zugriffsmodifikatoren?",
        "answer": "public, protected, default (package-private), private.",
        "wrongAnswers": [
            "start, stop, pause, resume.",
            "read, write, execute."
        ]
    },
    {
        "id": 65,
        "topic": "Java OOP",
        "question": "Unterschied private vs protected?",
        "answer": "private nur in eigener Klasse; protected auch für Unterklassen und im selben Package sichtbar.",
        "wrongAnswers": [
            "private ist für Variablen, protected für Methoden.",
            "Kein Unterschied in Java."
        ]
    },
    {
        "id": 66,
        "topic": "Java OOP",
        "question": "Was ist statischer Polymorphismus?",
        "answer": "Methodenüberladung (Entscheidung zur Compile-Zeit).",
        "wrongAnswers": [
            "Vererbung von static Variablen.",
            "Ändern von Code während der App läuft."
        ]
    },
    {
        "id": 67,
        "topic": "Java Collections",
        "question": "Was ist das Java Collections Framework?",
        "answer": "Interfaces und Klassen zur Speicherung und Manipulation von Datengruppen.",
        "wrongAnswers": [
            "Eine Sammlung von Hintergrundbildern.",
            "Ein Framework für wissenschaftliche Berechnungen."
        ]
    },
    {
        "id": 68,
        "topic": "Java Collections",
        "question": "Was sind die Hauptinterfaces der Collections?",
        "answer": "List, Set, Map, Queue.",
        "wrongAnswers": [
            "String, Integer, Double, Boolean.",
            "File, Socket, Thread, Stream."
        ]
    },
    {
        "id": 69,
        "topic": "Java Collections",
        "question": "Unterschied ArrayList vs LinkedList?",
        "answer": "ArrayList nutzt intern ein Array (schneller Zugriff); LinkedList eine verkettete Liste (schnelles Einfügen).",
        "wrongAnswers": [
            "LinkedList ist nur für Links im Browser.",
            "ArrayList kann keine Zahlen speichern."
        ]
    },
    {
        "id": 70,
        "topic": "Java Collections",
        "question": "Was ist ein Set?",
        "answer": "Eine Kollektion, die keine Duplikate enthält.",
        "wrongAnswers": [
            "Eine Einstellung im Menü.",
            "Eine Liste, die immer sortiert bleibt."
        ]
    },
    {
        "id": 71,
        "topic": "Java Collections",
        "question": "Unterschied HashSet vs TreeSet?",
        "answer": "HashSet ist unsortiert/schneller; TreeSet ist sortiert/langsamer.",
        "wrongAnswers": [
            "HashSet für Zahlen, TreeSet für Bäume.",
            "HashSet ist veraltet."
        ]
    },
    {
        "id": 72,
        "topic": "Java Collections",
        "question": "Was ist eine Map?",
        "answer": "Speicherung von Schlüssel-Wert-Paaren (Key-Value Pairs).",
        "wrongAnswers": [
            "Eine geografische Karte.",
            "Eine Liste von SQL-Dateien."
        ]
    },
    {
        "id": 73,
        "topic": "Java Collections",
        "question": "Unterschied HashMap vs TreeMap?",
        "answer": "HashMap erlaubt schnellen Zugriff; TreeMap sortiert nach Keys.",
        "wrongAnswers": [
            "TreeMap ist nur für String-Keys.",
            "HashMap ist thread-sicher."
        ]
    },
    {
        "id": 74,
        "topic": "Java Collections",
        "question": "Was ist eine Queue?",
        "answer": "Arbeitet nach dem FIFO-Prinzip (First-In-First-Out).",
        "wrongAnswers": [
            "Eine Liste für Fragen (Questions).",
            "Ein Stapel Papier."
        ]
    },
    {
        "id": 75,
        "topic": "Java Collections",
        "question": "Was ist eine Deque?",
        "answer": "Double-Ended Queue – Einfügen/Entfernen an beiden Enden möglich.",
        "wrongAnswers": [
            "Eine Liste für Zehner-Zahlen.",
            "Eine gelöschte (deleted) Queue."
        ]
    },
    {
        "id": 76,
        "topic": "Java Collections",
        "question": "Was ist der Iterator?",
        "answer": "Objekt zum Durchlaufen von Collections.",
        "wrongAnswers": [
            "Ein Zähler für Schleifen.",
            "Ein Befehl zur Wiederholung von Code."
        ]
    },
    {
        "id": 77,
        "topic": "Java Collections",
        "question": "HashMap vs Hashtable?",
        "answer": "HashMap ist nicht thread-sicher/schneller; Hashtable ist thread-sicher/langsamer.",
        "wrongAnswers": [
            "Hashtable ist moderner.",
            "HashMap erlaubt keine null-Werte."
        ]
    },
    {
        "id": 78,
        "topic": "Java Collections",
        "question": "Was ist Fail-Fast?",
        "answer": "Iterator wirft ConcurrentModificationException bei Änderungen während des Durchlaufs.",
        "wrongAnswers": [
            "Programm stürzt bei Fehlern sofort ab.",
            "Schnelles Löschen von Dateien."
        ]
    },
    {
        "id": 79,
        "topic": "Java Collections",
        "question": "Was ist Comparable?",
        "answer": "Interface für natürliche Sortierung (Methode compareTo).",
        "wrongAnswers": [
            "Dienst zum Vergleichen von Dateigrößen.",
            "Tool für Benchmark-Tests."
        ]
    },
    {
        "id": 80,
        "topic": "Java Collections",
        "question": "Was ist Comparator?",
        "answer": "Interface für benutzerdefinierte Sortierregeln (Methode compare).",
        "wrongAnswers": [
            "Hardware-Teil zum Vergleich von Spannungen.",
            "Ein Plugin für IntelliJ."
        ]
    },
    {
        "id": 81,
        "topic": "Java Collections",
        "question": "Vector vs ArrayList?",
        "answer": "Vector ist thread-sicher (synchronisiert); ArrayList nicht.",
        "wrongAnswers": [
            "Vector ist nur für 3D-Grafik.",
            "ArrayList ist viel älter."
        ]
    },
    {
        "id": 82,
        "topic": "Java Collections",
        "question": "Was ist die Collections-Klasse?",
        "answer": "Utility-Klasse mit Hilfsmethoden für Collections (sort, reverse, swap etc.).",
        "wrongAnswers": [
            "Die Mutterklasse aller Listen.",
            "Ein Tool zum Sammeln von Metadaten."
        ]
    },
    {
        "id": 83,
        "topic": "Functional Interfaces",
        "question": "Was sind Lambda-Ausdrücke?",
        "answer": "Kurze Syntax zur Implementierung funktionaler Interfaces.",
        "wrongAnswers": [
            "SQL-Befehle für Datenbanken.",
            "Griechische Buchstaben im Code."
        ]
    },
    {
        "id": 84,
        "topic": "Functional Interfaces",
        "question": "Was ist ein funktionales Interface?",
        "answer": "Interface mit genau einer abstrakten Methode.",
        "wrongAnswers": [
            "Interface, das alle mathematischen Funktionen enthält.",
            "Interface ohne jegliche Methoden."
        ]
    },
    {
        "id": 85,
        "topic": "Functional Interfaces",
        "question": "Was macht das Predicate-Interface?",
        "answer": "Nimmt ein Argument und gibt einen boolean-Wert zurück.",
        "wrongAnswers": [
            "Löscht Daten aus einer Liste.",
            "Wandelt Strings in Zahlen um."
        ]
    },
    {
        "id": 86,
        "topic": "Functional Interfaces",
        "question": "Consumer vs Supplier?",
        "answer": "Consumer nimmt ein Argument ohne Rückgabe; Supplier gibt ein Ergebnis ohne Argument.",
        "wrongAnswers": [
            "Consumer kauft Daten, Supplier liefert sie.",
            "Es gibt keinen Unterschied."
        ]
    },
    {
        "id": 87,
        "topic": "Functional Interfaces",
        "question": "Was ist Function<T, R>?",
        "answer": "Nimmt Typ T und gibt Typ R zurück.",
        "wrongAnswers": [
            "Eine Klasse für mathematische Formeln.",
            "Ein Befehl zum Starten einer App."
        ]
    },
    {
        "id": 88,
        "topic": "Functional Interfaces",
        "question": "Was sind Methodenreferenzen?",
        "answer": "Noch kürzere Schreibweise für Lambdas (Syntax ::).",
        "wrongAnswers": [
            "Links in der Java-Dokumentation.",
            "Aufrufe von JavaScript aus Java heraus."
        ]
    },
    {
        "id": 89,
        "topic": "Functional Interfaces",
        "question": "Was ist @FunctionalInterface?",
        "answer": "Annotation zur Kennzeichnung (verhindert zweite abstrakte Methode).",
        "wrongAnswers": [
            "Annotation, die Methoden schneller macht.",
            "Markiert den Code als privat."
        ]
    },
    {
        "id": 90,
        "topic": "Functional Interfaces",
        "question": "Was ist UnaryOperator?",
        "answer": "Spezialisierte Funktion, bei der Input und Output den gleichen Typ haben.",
        "wrongAnswers": [
            "Ein Operator für Bit-Operationen.",
            "Logisches UND Verknüpfung."
        ]
    },
    {
        "id": 91,
        "topic": "Functional Interfaces",
        "question": "Vorteil funktionaler Interfaces?",
        "answer": "Bessere Lesbarkeit, deklarativer Stil und Parallelisierung.",
        "wrongAnswers": [
            "Weniger RAM-Verbrauch.",
            "Keine Java-Lizenz nötig."
        ]
    },
    {
        "id": 92,
        "topic": "Streams",
        "question": "Was ist die Stream API?",
        "answer": "Werkzeug zur funktionalen Verarbeitung von Datenkollektionen.",
        "wrongAnswers": [
            "API zum Streamen von Filmen.",
            "Dienst zum Herunterladen von Musik."
        ]
    },
    {
        "id": 93,
        "topic": "Streams",
        "question": "Intermediäre vs terminale Operationen?",
        "answer": "Intermediäre geben einen Stream zurück (lazy); terminale liefern das Resultat.",
        "wrongAnswers": [
            "Es gibt keinen Unterschied.",
            "Terminale Operationen sind immer kostenlos."
        ]
    },
    {
        "id": 94,
        "topic": "Streams",
        "question": "Beispiele für intermediäre Operationen?",
        "answer": "filter, map, sorted, distinct, limit.",
        "wrongAnswers": [
            "forEach, collect, count.",
            "start, stop, resume."
        ]
    },
    {
        "id": 95,
        "topic": "Streams",
        "question": "Beispiele für terminale Operationen?",
        "answer": "forEach, collect, reduce, count, anyMatch.",
        "wrongAnswers": [
            "filter, map, flatMap.",
            "open, close, flush."
        ]
    },
    {
        "id": 96,
        "topic": "Streams",
        "question": "Was macht filter()?",
        "answer": "Wählt Elemente basierend auf einem Predicate aus.",
        "wrongAnswers": [
            "Säubert den Bildschirm.",
            "Löscht alle null-Variablen."
        ]
    },
    {
        "id": 97,
        "topic": "Streams",
        "question": "Was macht map()?",
        "answer": "Transformiert jedes Element in ein neues Objekt.",
        "wrongAnswers": [
            "Zeigt eine Weltkarte.",
            "Sortiert die Elemente alphabetisch."
        ]
    },
    {
        "id": 98,
        "topic": "Streams",
        "question": "Was ist flatMap()?",
        "answer": "Flacht verschachtelte Streams zu einem einzigen Stream ab.",
        "wrongAnswers": [
            "Komprimiert eine Liste auf eine Zeile.",
            "Löscht alle Ordnerstrukturen."
        ]
    },
    {
        "id": 99,
        "topic": "Streams",
        "question": "Was macht collect()?",
        "answer": "Fasst Stream-Elemente in eine neue Kollektion (z.B. List) zusammen.",
        "wrongAnswers": [
            "Sammelt Spenden für den Entwickler.",
            "Beendet alle Hintergrundprozesse."
        ]
    },
    {
        "id": 100,
        "topic": "Streams",
        "question": "Was macht reduce()?",
        "answer": "Kombiniert Elemente zu einem Einzelwert (z.B. Summe).",
        "wrongAnswers": [
            "Verkleinert die Dateigröße.",
            "Entfernt ungenutzte Klassen."
        ]
    },
    {
        "id": 101,
        "topic": "Streams",
        "question": "Was ist Lazy Evaluation?",
        "answer": "Berechnungen erfolgen erst bei Aufruf einer terminalen Operation.",
        "wrongAnswers": [
            "Programm reagiert langsam.",
            "Entwickler schreibt weniger Code."
        ]
    },
    {
        "id": 102,
        "topic": "Streams",
        "question": "Was ist ein paralleler Stream?",
        "answer": "Nutzung mehrerer Threads für die Verarbeitung.",
        "wrongAnswers": [
            "Zwei Musik-Streams gleichzeitig.",
            "Ein Stream, der rückwärts läuft."
        ]
    },
    {
        "id": 103,
        "topic": "Streams",
        "question": "Was ist distinct()?",
        "answer": "Entfernt Duplikate basierend auf equals().",
        "wrongAnswers": [
            "Markiert wichtige Daten.",
            "Verschlüsselt Strings."
        ]
    },
    {
        "id": 104,
        "topic": "Streams",
        "question": "Was macht peek()?",
        "answer": "Ermöglicht Aktionen (z.B. Logging) ohne den Stream zu verändern.",
        "wrongAnswers": [
            "Schaut in die Kamera des Nutzers.",
            "Löscht das nächste Element."
        ]
    },
    {
        "id": 105,
        "topic": "Streams",
        "question": "Was macht findFirst()?",
        "answer": "Gibt das erste Element als Optional zurück.",
        "wrongAnswers": [
            "Sucht das erste Wort im Lexikon.",
            "Beendet das Programm sofort."
        ]
    },
    {
        "id": 106,
        "topic": "Streams",
        "question": "Was ist IntStream?",
        "answer": "Spezialisierter Stream für primitive int-Werte ohne Autoboxing.",
        "wrongAnswers": [
            "Ein Stream für das Internet.",
            "Ein Interface zur Tastatursteuerung."
        ]
    },
    {
        "id": 107,
        "topic": "Optional",
        "question": "Was ist Optional?",
        "answer": "Container zur Vermeidung von NullPointerExceptions.",
        "wrongAnswers": [
            "Ein Einstellungswert in Java.",
            "Eine Variable, die man weglassen kann."
        ]
    },
    {
        "id": 108,
        "topic": "Optional",
        "question": "Wie erstellt man ein Optional?",
        "answer": "Optional.of(), Optional.ofNullable(), Optional.empty().",
        "wrongAnswers": [
            "Optional.create().",
            "new Optional()."
        ]
    },
    {
        "id": 109,
        "topic": "Optional",
        "question": "Was macht isPresent()?",
        "answer": "Prüft, ob ein Wert im Container vorhanden ist.",
        "wrongAnswers": [
            "Sendet die aktuelle Position.",
            "Gibt die Uhrzeit zurück."
        ]
    },
    {
        "id": 110,
        "topic": "Optional",
        "question": "orElse vs orElseGet?",
        "answer": "orElse nimmt festen Wert; orElseGet nutzt einen Supplier (lazy).",
        "wrongAnswers": [
            "Kein Unterschied.",
            "orElse ist nur für Fehlermeldungen."
        ]
    },
    {
        "id": 111,
        "topic": "Optional",
        "question": "Was macht map() bei Optional?",
        "answer": "Transformiert den enthaltenen Wert, falls vorhanden.",
        "wrongAnswers": [
            "Öffnet Google Maps.",
            "Löscht den Wert."
        ]
    },
    {
        "id": 112,
        "topic": "Databases",
        "question": "Was ist eine relationale DB?",
        "answer": "Datenorganisation in Tabellen mit Beziehungen.",
        "wrongAnswers": [
            "Eine DB nur für Dateien.",
            "Eine DB ohne Tabellen."
        ]
    },
    {
        "id": 113,
        "topic": "Databases",
        "question": "Was ist der Primärschlüssel?",
        "answer": "Eindeutige Kennung für einen Datensatz.",
        "wrongAnswers": [
            "Das Login-Passwort.",
            "Der Name der Tabelle."
        ]
    },
    {
        "id": 114,
        "topic": "Databases",
        "question": "Was ist ein Fremdschlüssel?",
        "answer": "Referenz auf einen Primärschlüssel einer anderen Tabelle.",
        "wrongAnswers": [
            "Key für Verschlüsselung.",
            "Ein Admin-Account."
        ]
    },
    {
        "id": 115,
        "topic": "Databases",
        "question": "Was ist ein Index?",
        "answer": "Struktur zur Beschleunigung von Suchanfragen.",
        "wrongAnswers": [
            "Die erste Seite eines Buchs.",
            "Ein Zähler für Zeilen."
        ]
    },
    {
        "id": 116,
        "topic": "Databases",
        "question": "Was ist eine Transaktion?",
        "answer": "Abfolge von Operationen nach dem Alles-oder-Nichts-Prinzip.",
        "wrongAnswers": [
            "Überweisung von Geld bei PayPal.",
            "Kopieren der DB auf USB."
        ]
    },
    {
        "id": 117,
        "topic": "Databases",
        "question": "Was bedeutet ACID?",
        "answer": "Atomicity, Consistency, Isolation, Durability.",
        "wrongAnswers": [
            "Accuracy, Complexity, Intensity, Data.",
            "Access, Control, Internal, Drive."
        ]
    },
    {
        "id": 118,
        "topic": "Databases",
        "question": "SQL vs NoSQL?",
        "answer": "SQL (strukturiert/relational); NoSQL (flexibel/nicht-relational).",
        "wrongAnswers": [
            "SQL ist für Experten, NoSQL für Anfänger.",
            "SQL ist immer langsamer."
        ]
    },
    {
        "id": 119,
        "topic": "Databases",
        "question": "Was ist Normalisierung?",
        "answer": "Prozess zur Reduzierung von Redundanz und Anomalien.",
        "wrongAnswers": [
            "Konvertieren von Text in Großschrift.",
            "Löschen von Testdaten."
        ]
    },
    {
        "id": 120,
        "topic": "SQL",
        "question": "Was ist SQL?",
        "answer": "Sprache zur Abfrage und Steuerung relationaler Datenbanken.",
        "wrongAnswers": [
            "Ein Grafikprogramm.",
            "Ein Browser von Google."
        ]
    },
    {
        "id": 121,
        "topic": "SQL",
        "question": "Welche SQL-Befehle gibt es?",
        "answer": "SELECT, INSERT, UPDATE, DELETE, CREATE, DROP.",
        "wrongAnswers": [
            "FETCH, PUSH, POP, SHIFT.",
            "RUN, EXE, START."
        ]
    },
    {
        "id": 122,
        "topic": "SQL",
        "question": "Was macht WHERE?",
        "answer": "Filtert Datensätze basierend auf Bedingungen.",
        "wrongAnswers": [
            "Gibt an, wo die Datei liegt.",
            "Definiert den Namen der DB."
        ]
    },
    {
        "id": 123,
        "topic": "SQL",
        "question": "Was macht JOIN?",
        "answer": "Verknüpft Zeilen aus zwei oder mehr Tabellen.",
        "wrongAnswers": [
            "Kombiniert zwei Strings.",
            "Fügt zwei Benutzerkonten zusammen."
        ]
    },
    {
        "id": 124,
        "topic": "SQL",
        "question": "Was macht GROUP BY?",
        "answer": "Gruppiert Zeilen mit gleichen Werten für Aggregatfunktionen.",
        "wrongAnswers": [
            "Sortiert alphabetisch.",
            "Verschiebt Daten in einen anderen Ordner."
        ]
    },
    {
        "id": 125,
        "topic": "SQL",
        "question": "Was ist ein Subquery?",
        "answer": "Eine Abfrage innerhalb einer anderen Abfrage.",
        "wrongAnswers": [
            "Eine Support-Anfrage bei Oracle.",
            "Ein Bug in der SQL-Syntax."
        ]
    },
    {
        "id": 126,
        "topic": "Spring Boot",
        "question": "Was ist Spring Boot?",
        "answer": "Framework zur schnellen Erstellung von produktionsreifen Spring-Apps.",
        "wrongAnswers": [
            "Ein Boot-Manager für Linux.",
            "Ein Java-Compiler von IntelliJ."
        ]
    },
    {
        "id": 127,
        "topic": "Spring Boot",
        "question": "Vorteile von Spring Boot?",
        "answer": "Auto-Konfiguration, eingebetteter Server, Starter-Abhängigkeiten.",
        "wrongAnswers": [
            "Macht den PC schneller.",
            "Keine Java-Kenntnisse nötig."
        ]
    },
    {
        "id": 128,
        "topic": "Spring Boot",
        "question": "Was macht @SpringBootApplication?",
        "answer": "Aktiviert Auto-Konfiguration, Component Scanning und Konfiguration.",
        "wrongAnswers": [
            "Beendet die Anwendung automatisch.",
            "Markiert die UI-Klassen."
        ]
    },
    {
        "id": 129,
        "topic": "Spring Boot",
        "question": "Was ist Auto-Konfiguration?",
        "answer": "Automatisches Erstellen von Beans basierend auf Klassen im Classpath.",
        "wrongAnswers": [
            "Automatisches Update von Windows.",
            "Selbstständiges Design der Website."
        ]
    },
    {
        "id": 130,
        "topic": "Spring Boot",
        "question": "Was ist Spring Initializr?",
        "answer": "Web-Interface zum Generieren von Projekten.",
        "wrongAnswers": [
            "Ein Tool zum Starten der CPU.",
            "Ein Name für den Garbage Collector."
        ]
    },
    {
        "id": 131,
        "topic": "Spring Boot",
        "question": "Was ist ein Starter?",
        "answer": "Zusammenfassung von Abhängigkeiten für bestimmte Zwecke (z.B. web, data-jpa).",
        "wrongAnswers": [
            "Die erste Zeile im Code.",
            "Ein Button zum Run des Programms."
        ]
    },
    {
        "id": 132,
        "topic": "Spring Boot",
        "question": "application.properties vs .yml?",
        "answer": "Beides dient der Konfiguration; .yml ist hierarchisch strukturiert.",
        "wrongAnswers": [
            "properties ist für Windows, yml für Mac.",
            "yml ist viel langsamer."
        ]
    },
    {
        "id": 133,
        "topic": "Spring Boot",
        "question": "Was ist Actuator?",
        "answer": "Tool zum Monitoring und Management der Anwendung.",
        "wrongAnswers": [
            "Ein Ersatz für den Tastaturtreiber.",
            "Ein Programm zum Deinstallieren von Java."
        ]
    },
    {
        "id": 134,
        "topic": "Spring Boot",
        "question": "Was sind Profiles?",
        "answer": "Ermöglicht umgebungsspezifische Konfigurationen (dev, prod etc.).",
        "wrongAnswers": [
            "Benutzerprofile für Social Media.",
            "Logos für das Admin-Interface."
        ]
    },
    {
        "id": 135,
        "topic": "HTTP",
        "question": "Was ist HTTP?",
        "answer": "Protokoll zur Übertragung von Daten im Web.",
        "wrongAnswers": [
            "Ein Grafikformat.",
            "Eine Programmiersprache."
        ]
    },
    {
        "id": 136,
        "topic": "HTTP",
        "question": "HTTP-Methoden?",
        "answer": "GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD.",
        "wrongAnswers": [
            "START, STOP, WAIT, RUN.",
            "READ, WRITE, APPEND."
        ]
    },
    {
        "id": 137,
        "topic": "HTTP",
        "question": "Was ist REST?",
        "answer": "Architekturstil für verteilte Systeme unter Nutzung von HTTP.",
        "wrongAnswers": [
            "Ein Befehl für den Ruhezustand.",
            "Ein Tool zur Code-Formatierung."
        ]
    },
    {
        "id": 138,
        "topic": "HTTP",
        "question": "Was sind Statuscodes?",
        "answer": "Numerische Antworten des Servers (200, 404, 500 etc.).",
        "wrongAnswers": [
            "Die Hausnummer des Servers.",
            "Einträge im Adressbuch."
        ]
    },
    {
        "id": 139,
        "topic": "HTTP",
        "question": "Unterschied HTTP vs HTTPS?",
        "answer": "HTTPS ist verschlüsselt (SSL/TLS).",
        "wrongAnswers": [
            "HTTPS ist nur für Fotos.",
            "HTTP ist viel schneller."
        ]
    },
    {
        "id": 140,
        "topic": "HTTP",
        "question": "Was sind Cookies?",
        "answer": "Kleine Textdateien zur Speicherung von Nutzerdaten beim Client.",
        "wrongAnswers": [
            "Süßigkeiten für Entwickler.",
            "Fehlermeldungen im Browser."
        ]
    },
    {
        "id": 141,
        "topic": "Spring Data",
        "question": "Was ist Spring Data?",
        "answer": "Vereinfacht den Datenbankzugriff durch Abstraktion (Repositories).",
        "wrongAnswers": [
            "Ein Tool zur Datenrettung.",
            "Eine Cloud-Datenbank von Spring."
        ]
    },
    {
        "id": 142,
        "topic": "Spring Data",
        "question": "Was ist Hibernate?",
        "answer": "Ein ORM-Framework (Object-Relational Mapping).",
        "wrongAnswers": [
            "Ein Tool zum Schlafenlegen des PCs.",
            "Eine Library für Animationen."
        ]
    },
    {
        "id": 143,
        "topic": "Spring Data",
        "question": "Was ist JPA?",
        "answer": "Java Persistence API – Standard für ORM in Java.",
        "wrongAnswers": [
            "Ein Java-Plugin für Android.",
            "Ein Sicherheitsprotokoll."
        ]
    },
    {
        "id": 144,
        "topic": "Spring Data",
        "question": "Was macht @Repository?",
        "answer": "Kennzeichnet eine Klasse als Data Access Object (DAO).",
        "wrongAnswers": [
            "Speichert Dateien in der Cloud.",
            "Initialisiert die Git-Historie."
        ]
    },
    {
        "id": 145,
        "topic": "Spring Data",
        "question": "Was ist IoC?",
        "answer": "Inversion of Control – Container übernimmt Objekterzeugung.",
        "wrongAnswers": [
            "Internet of Classes.",
            "Interner Optimizer-Code."
        ]
    },
    {
        "id": 146,
        "topic": "Spring Data",
        "question": "Was ist Dependency Injection?",
        "answer": "Abhängigkeiten werden von außen 'eingespritzt' (statt selbst erzeugt).",
        "wrongAnswers": [
            "Infektion des Codes mit Viren.",
            "Hinzufügen von SQL-Spritzen."
        ]
    },
    {
        "id": 147,
        "topic": "Spring Data",
        "question": "Was sind Bean Scopes?",
        "answer": "Lebensdauer von Beans (singleton, prototype, request etc.).",
        "wrongAnswers": [
            "Die Größe einer Kaffeebohne.",
            "Zielgruppen einer App."
        ]
    },
    {
        "id": 148,
        "topic": "Spring Data",
        "question": "Was macht Spring Security?",
        "answer": "Framework für Authentifizierung und Autorisierung.",
        "wrongAnswers": [
            "Anti-Virus für Java-Apps.",
            "Verschlüsselung der Festplatte."
        ]
    }
];
