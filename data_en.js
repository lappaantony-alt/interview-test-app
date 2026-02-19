window.QUIZ_DATA_EN = [
    {
        "id": 1,
        "topic": "Git",
        "question": "What is Git?",
        "answer": "Git is a distributed version control system that allows you to track changes in code and coordinate work among developers.",
        "wrongAnswers": [
            "Git is a centralized version control system where all files are stored on a single server that users must always be connected to.",
            "Git is a cloud-based development environment used exclusively for writing and compiling Java applications."
        ]
    },
    {
        "id": 2,
        "topic": "Git",
        "question": "Which main Git commands do you know?",
        "answer": "The most common commands are git init, git clone, git add, git commit, git push, git pull, git branch, git merge, git status, and git log.",
        "wrongAnswers": [
            "Common commands include git start, git upload, git download, git finish, git save, git share, and git connect.",
            "Key commands are git create, git ship, git receive, git join, git state, git history, and git undo."
        ]
    },
    {
        "id": 3,
        "topic": "Git",
        "question": "What is a commit?",
        "answer": "A commit is saving the current state of changes to the local repository, along with a message that describes the changes made.",
        "wrongAnswers": [
            "A commit is a command used to permanently delete the history of a branch to save space on the local machine.",
            "A commit is a temporary cache that holds files in memory until they are pushed to a remote server, after which it is deleted."
        ]
    },
    {
        "id": 4,
        "topic": "Git",
        "question": "How do you revert to a previous commit?",
        "answer": "You can use the git revert command (which creates a new commit that undoes the changes) or git reset (which changes history locally and can be risky).",
        "wrongAnswers": [
            "You use the git back command to automatically delete all commits made in the last 24 hours.",
            "You must manually delete the .git folder and clone the repository again from the point you want to restore."
        ]
    },
    {
        "id": 5,
        "topic": "Git",
        "question": "What is a branch in Git?",
        "answer": "A branch is a separate line of development that allows you to isolate new features or fixes from the main branch.",
        "wrongAnswers": [
            "A branch is a physically separate folder on your hard drive created to store a backup of the source code.",
            "A branch is a specific version of the Git software installed on the developer's machine to handle different file types."
        ]
    },
    {
        "id": 6,
        "topic": "Git",
        "question": "How do you merge branches?",
        "answer": "Branch merging is done with the git merge command, which integrates changes from one branch into another.",
        "wrongAnswers": [
            "Merge is performed by dragging the folder of one branch into the folder of another branch in the file explorer.",
            "Merging happens automatically every time you switch between branches using the git checkout command."
        ]
    },
    {
        "id": 7,
        "topic": "Git",
        "question": "What is a merge conflict?",
        "answer": "A merge conflict occurs when two branches contain conflicting changes in the same line of a file. Resolving the conflict requires manual intervention.",
        "wrongAnswers": [
            "A merge conflict is a network error that occurs when two developers try to push code to the server at the exact same millisecond.",
            "A merge conflict is a security warning that appears when you try to merge code that contains potential syntax errors."
        ]
    },
    {
        "id": 8,
        "topic": "Git",
        "question": "What is the difference between Git fetch and Git pull?",
        "answer": "git fetch downloads the latest changes from the remote repository but does not merge them into the local branch, while git pull downloads and merges them simultaneously.",
        "wrongAnswers": [
            "git fetch is used to upload local changes to the server, while git pull is used to retrieve others' changes from the server.",
            "git fetch is a premium feature used for large repositories, while git pull is the standard command for smaller projects."
        ]
    },
    {
        "id": 9,
        "topic": "Git",
        "question": "What is git rebase?",
        "answer": "Rebase is an operation that allows you to “rewrite” the commit history by re-basing the current branch on another, resulting in a more linear commit history.",
        "wrongAnswers": [
            "Rebase is a command that resets the database schema of a project to match the initial commit's configuration.",
            "Rebase is a utility used to compress image assets and other binary files within the repository to reduce its total size."
        ]
    },
    {
        "id": 10,
        "topic": "Git",
        "question": "What are the advantages and disadvantages of using rebase?",
        "answer": "Advantages: A cleaner commit history, easier to track changes; Disadvantages: It modifies history, which can complicate collaboration if commits have already been published.",
        "wrongAnswers": [
            "Advantages: It makes the application's runtime performance significantly faster; Disadvantages: It can only be used on Linux systems.",
            "Advantages: It automatically fixes common coding errors like null pointers; Disadvantages: It requires a paid license for commercial use."
        ]
    },
    {
        "id": 11,
        "topic": "Maven",
        "question": "What is Maven?",
        "answer": "Maven is a project management tool that automates the build process, dependency management, and deployment of Java applications.",
        "wrongAnswers": [
            "Maven is a lightweight Java-based web server used for deploying microservices in a production environment.",
            "Maven is a static analysis tool used to identify security vulnerabilities and code smells in Java projects."
        ]
    },
    {
        "id": 12,
        "topic": "Maven",
        "question": "What are the main components of Maven?",
        "answer": "The main components are the POM (Project Object Model), repositories, lifecycle phases, and plugins.",
        "wrongAnswers": [
            "The main components are the JVM, JRE, Compiler, and the Java standard library classes.",
            "The main components are the source folder, the target folder, the bin folder, and the external libraries folder."
        ]
    },
    {
        "id": 13,
        "topic": "Maven",
        "question": "What is a POM?",
        "answer": "A POM is an XML file (pom.xml) that describes the project configuration, dependencies, plugins, and other settings.",
        "wrongAnswers": [
            "A POM is a Java interface used to define the entry point and main execution logic of a Maven project.",
            "A POM is a binary file stored in the local repository that contains the compiled bytecode of the entire project."
        ]
    },
    {
        "id": 14,
        "topic": "Maven",
        "question": "How does the dependency system work in Maven?",
        "answer": "Maven automatically downloads the required libraries from remote repositories according to what’s specified in the POM, and also resolves their transitive dependencies.",
        "wrongAnswers": [
            "Maven requires developers to manually download JAR files and place them in a specific 'lib' folder within the project directory.",
            "Maven uses a browser-based interface where developers must click and approve every library before it is added to the project."
        ]
    },
    {
        "id": 15,
        "topic": "Maven",
        "question": "What is the Maven lifecycle?",
        "answer": "The lifecycle is a set of phases (e.g., validate, compile, test, package, install, deploy) that a project goes through during a build.",
        "wrongAnswers": [
            "The lifecycle is a monitoring tool that tracks the CPU and memory performance of an application while it is running.",
            "The lifecycle is the timeline from when a project is initialized to when it is permanently deleted from the repository."
        ]
    },
    {
        "id": 16,
        "topic": "Maven",
        "question": "How do you add a dependency in Maven?",
        "answer": "A dependency is added to the <dependencies> section of the pom.xml file, specifying the groupId, artifactId, and version.",
        "wrongAnswers": [
            "A dependency is added by using the 'import' keyword followed by the library URL at the top of a Java class.",
            "A dependency is added by registering the library name in the Windows Registry or the macOS System Preferences."
        ]
    },
    {
        "id": 17,
        "topic": "Maven",
        "question": "What is a plugin in Maven?",
        "answer": "A plugin is a set of tools that extends Maven’s functionality (for compilation, testing, creating archives, etc.).",
        "wrongAnswers": [
            "A plugin is a small Java application that runs inside the user's web browser to manage Maven builds.",
            "A plugin is a library that can only be used if the project is being built for a mobile operating system like Android."
        ]
    },
    {
        "id": 18,
        "topic": "Maven",
        "question": "How do you run a Maven build?",
        "answer": "You run a Maven build via the command line using commands like mvn clean install or another appropriate phase command.",
        "wrongAnswers": [
            "You run a Maven build by right-clicking on any Java file in the project and selecting 'Execute with Maven'.",
            "You run a Maven build by calling the static Maven.build() method from within the main method of your application."
        ]
    },
    {
        "id": 19,
        "topic": "Maven",
        "question": "What is dependency management in Maven?",
        "answer": "Dependency management allows you to centrally manage dependency versions by defining them in a parent POM for use in submodules.",
        "wrongAnswers": [
            "Dependency management is a security feature that prevents the application from loading unauthorized external libraries.",
            "Dependency management is an automated process that modifies your source code to use newer versions of Java APIs."
        ]
    },
    {
        "id": 20,
        "topic": "Maven",
        "question": "What is the Maven Repository and what types of repositories exist?",
        "answer": "A repository is a storage location for artifacts. Main types are local (on the developer’s machine), remote (e.g., Maven Central), and corporate.",
        "wrongAnswers": [
            "A repository is a type of SQL database. Types include relational, document-based, and key-value repositories.",
            "A repository is a hosting service for source code. Types include Git, SVN, Mercurial, and CVS."
        ]
    },
    {
        "id": 21,
        "topic": "Maven",
        "question": "Which Maven commands are used for project testing?",
        "answer": "The main command for running tests is mvn test. There is also mvn verify, which includes additional checks.",
        "wrongAnswers": [
            "The main command is mvn run-checks. There is also mvn debug-mode for more detailed test output.",
            "Testing in Maven is performed using the mvn junit command, which only works if JUnit is the only dependency."
        ]
    },
    {
        "id": 22,
        "topic": "Maven",
        "question": "What Maven equivalents do you know?",
        "answer": "Gradle, Ant, SBT.",
        "wrongAnswers": [
            "Jenkins, Docker, Kubernetes.",
            "JUnit, TestNG, Mockito."
        ]
    },
    {
        "id": 23,
        "topic": "Java Basics",
        "question": "What is the JVM?",
        "answer": "The JVM (Java Virtual Machine) is a virtual machine that executes Java bytecode and provides cross-platform capabilities.",
        "wrongAnswers": [
            "JVM is the Java Visual Modeler which is used to design user interfaces in a drag-and-drop manner.",
            "JVM is the Java Variable Manager that handles the scopes and lifecycles of local variables in a thread."
        ]
    },
    {
        "id": 24,
        "topic": "Java Basics",
        "question": "What are the JRE and JDK?",
        "answer": "JRE (Java Runtime Environment): Contains the JVM and libraries for running programs; JDK (Java Development Kit): Includes the JRE plus development tools (compiler, debugger, etc.).",
        "wrongAnswers": [
            "JRE is the environment for web-based Java apps, while JDK is the environment for desktop Java apps.",
            "JRE is the Java Registry Encoder, and JDK is the Java Deployment Kernel used for server-side configurations."
        ]
    },
    {
        "id": 25,
        "topic": "Java Basics",
        "question": "What is bytecode?",
        "answer": "Bytecode is the intermediate code generated by the Java compiler, which is executed by the JVM.",
        "wrongAnswers": [
            "Bytecode is a low-level binary format where each bit corresponds to a specific hardware instruction on the CPU.",
            "Bytecode is the source code of a Java program after it has been encrypted to prevent reverse-engineering."
        ]
    },
    {
        "id": 26,
        "topic": "Java Basics",
        "question": "What is a class?",
        "answer": "A class is a blueprint that describes the properties (fields) and behavior (methods) of objects.",
        "wrongAnswers": [
            "A class is a static collection of data that cannot be modified once the program has started execution.",
            "A class is a single instance of a data structure that is created when a program is loaded into memory."
        ]
    },
    {
        "id": 27,
        "topic": "Java Basics",
        "question": "What is an object?",
        "answer": "An object is an instance of a class, which has a specific state (field values) and can execute the class’s methods.",
        "wrongAnswers": [
            "An object is a primitive data type used for storing high-precision floating-point numbers.",
            "An object is a special file on the disk that contains the compiled bytecode of a specific Java package."
        ]
    },
    {
        "id": 28,
        "topic": "Java Basics",
        "question": "What is a variable?",
        "answer": "A variable is a named memory location that stores a value of a certain data type.",
        "wrongAnswers": [
            "A variable is a fixed constant that is defined at compile time and can never be changed during execution.",
            "A variable is a block of code that is executed repeatedly until a specific condition is met."
        ]
    },
    {
        "id": 29,
        "topic": "Java Basics",
        "question": "What are the main data types in Java?",
        "answer": "Primitive types: byte, short, int, long, float, double, char, boolean; Object types (e.g., String, Integer).",
        "wrongAnswers": [
            "The main types are Numeric, Alpha-numeric, Boolean, and Collection types like List and Map.",
            "Java only has two data types: Objects and Arrays; all other types are subtypes of these two."
        ]
    },
    {
        "id": 30,
        "topic": "Java Basics",
        "question": "What are operators in Java?",
        "answer": "Operators are symbols or combinations of symbols that perform operations on data (arithmetic, logical, comparison, etc.).",
        "wrongAnswers": [
            "Operators are special classes that manage the flow of data between the user interface and the database.",
            "Operators are users who have administrative permissions to execute Java programs on a server."
        ]
    },
    {
        "id": 31,
        "topic": "Java Basics",
        "question": "What is a method?",
        "answer": "A method is a block of code that performs a specific function, can take parameters, and may return a value.",
        "wrongAnswers": [
            "A method is a structural component of a class that defines its name and package location.",
            "A method is a special keyword used to instantiate a new object from a class definition."
        ]
    },
    {
        "id": 32,
        "topic": "Java Basics",
        "question": "How do you create a method in Java?",
        "answer": "You declare it with an access modifier, return type, method name, and parameter list, for example: public int sum(int a, int b) { return a + b; }",
        "wrongAnswers": [
            "Methods are created using the 'function' keyword, for example: function sum(a, b) { return a + b; }",
            "Methods are defined using the 'def' keyword followed by the method name and colon, for example: def sum(a, b):"
        ]
    },
    {
        "id": 33,
        "topic": "Java Basics",
        "question": "What is encapsulation?",
        "answer": "Encapsulation is the OOP principle of hiding a class’s internal implementation and exposing data through methods.",
        "wrongAnswers": [
            "Encapsulation is the process of compressing Java class files into a JAR format for easier distribution.",
            "Encapsulation is a technique for running multiple threads simultaneously to improve application responsiveness."
        ]
    },
    {
        "id": 34,
        "topic": "Java Basics",
        "question": "What is a package in Java?",
        "answer": "A package is a grouping of related classes that organizes a project’s structure and helps avoid naming conflicts.",
        "wrongAnswers": [
            "A package is a compressed archive containing all libraries and resources required to run an application.",
            "A package is a cryptographic signature applied to a class to ensure it hasn't been tampered with."
        ]
    },
    {
        "id": 35,
        "topic": "Java Basics",
        "question": "How do access modifiers work?",
        "answer": "Access modifiers (public, protected, private, and package-private) define the visibility of classes, fields, and methods.",
        "wrongAnswers": [
            "Access modifiers are used to control the memory allocation priority for different parts of the code.",
            "Access modifiers define whether a variable is stored in the Stack or the Heap during execution."
        ]
    },
    {
        "id": 36,
        "topic": "Java Basics",
        "question": "What is a static method and field?",
        "answer": "A static method or field belongs to the class itself rather than an instance and is accessible without creating an object.",
        "wrongAnswers": [
            "A static method is a method that can only be called once during the entire execution of the program.",
            "A static field is a temporary variable that is deleted by the garbage collector immediately after being used."
        ]
    },
    {
        "id": 37,
        "topic": "Java Basics",
        "question": "What is a constructor?",
        "answer": "A constructor is a special method called when creating a new object, which initializes its fields.",
        "wrongAnswers": [
            "A constructor is a tool used by the IDE to automatically generate Java code from a database schema.",
            "A constructor is a method that is automatically called just before an object is removed from memory."
        ]
    },
    {
        "id": 38,
        "topic": "Java Basics",
        "question": "What is method overloading?",
        "answer": "Method overloading is defining multiple methods with the same name but different parameter lists.",
        "wrongAnswers": [
            "Method overloading is the practice of having two classes with the exact same name in the same package.",
            "Method overloading occurs when a single method tries to process more data than the available memory can hold."
        ]
    },
    {
        "id": 39,
        "topic": "Java Basics",
        "question": "What is recursion?",
        "answer": "Recursion is a process where a method calls itself to solve a subproblem until a base condition is met.",
        "wrongAnswers": [
            "Recursion is a type of infinite loop that occurs when the 'while' condition is never set to false.",
            "Recursion is a way to gain access to private methods of a parent class without using the 'super' keyword."
        ]
    },
    {
        "id": 40,
        "topic": "Java Basics",
        "question": "What are exceptions in Java?",
        "answer": "Exceptions are a mechanism for error handling that allows you to pass error information and handle it using try-catch blocks.",
        "wrongAnswers": [
            "Exceptions are sections of code that the compiler skips over to speed up the build process.",
            "Exceptions are special classes used to define global constants and configuration settings for an app."
        ]
    },
    {
        "id": 41,
        "topic": "Java Basics",
        "question": "What is the difference between checked and unchecked exceptions?",
        "answer": "Checked exceptions: Verified at compile time and must be handled or declared in the method signature; Unchecked exceptions (RuntimeException): Not verified at compile time.",
        "wrongAnswers": [
            "Checked exceptions are thrown by the developer, while unchecked exceptions are thrown automatically by the OS.",
            "Checked exceptions are faster to process, while unchecked exceptions require a separate try-finally block to execute."
        ]
    },
    {
        "id": 42,
        "topic": "Java Basics",
        "question": "What are generics in Java?",
        "answer": "Generics allow classes and methods to be parameterized by type, ensuring type safety at compile time and reducing the need for type casting.",
        "wrongAnswers": [
            "Generics are universal variables that can hold any data type and perform automatic type conversion at runtime.",
            "Generics are a feature used to allow Java code to be executed on non-JVM platforms, like browsers or iOS."
        ]
    },
    {
        "id": 43,
        "topic": "Java Basics",
        "question": "How does autoboxing work?",
        "answer": "Autoboxing automatically converts primitive types to their corresponding object wrappers (e.g., int to Integer) and vice versa.",
        "wrongAnswers": [
            "Autoboxing is an IDE feature that automatically wraps your code into a JAR file for deployment.",
            "Autoboxing is a memory-saving technique where small objects are placed inside larger objects to reduce fragmentation."
        ]
    },
    {
        "id": 44,
        "topic": "Java Basics",
        "question": "What is an enum in Java?",
        "answer": "An enum is a special class type that defines a set of constants, often used for representing a limited set of values.",
        "wrongAnswers": [
            "An enum is a temporary counter variable used only within 'for' and 'foreach' loops.",
            "An enum is a specific type of interface that is strictly prohibited from containing any field declarations."
        ]
    },
    {
        "id": 45,
        "topic": "Java Basics",
        "question": "How does the class loader system work?",
        "answer": "Class loaders are responsible for dynamically loading classes at runtime, keeping separate namespaces to avoid conflicts.",
        "wrongAnswers": [
            "Class loaders download Java code from the internet and execute it directly in the JVM without verification.",
            "Class loaders are responsible for converting source code directly into machine language for high-speed execution."
        ]
    },
    {
        "id": 46,
        "topic": "Java Basics",
        "question": "What is a package declaration and why is it important?",
        "answer": "A package declaration indicates which namespace a class belongs to, helping organize code and avoid naming conflicts.",
        "wrongAnswers": [
            "The package declaration specifies the hardware requirements for the class to run successfully.",
            "A package declaration is used to register the class with a global license server to prevent piracy."
        ]
    },
    {
        "id": 47,
        "topic": "Java Basics",
        "question": "What are annotations in Java?",
        "answer": "Annotations are special metadata added to classes, methods, or fields, used by the compiler or frameworks.",
        "wrongAnswers": [
            "Annotations are comments that are automatically read by the system to generate documentation in PDF format.",
            "Annotations are a way to declare graphical elements like buttons and labels within the source code."
        ]
    },
    {
        "id": 48,
        "topic": "Java Basics",
        "question": "How do you declare and use a custom annotation?",
        "answer": "You declare a custom annotation with @interface, and then apply it over classes, methods, or fields.",
        "wrongAnswers": [
            "You declare a custom annotation using the 'annotation' keyword and apply it using the 'attach' keyword.",
            "Custom annotations are declared as normal interfaces and must be implemented by the class they annotate."
        ]
    },
    {
        "id": 49,
        "topic": "Java Basics",
        "question": "What is object-oriented programming (OOP)?",
        "answer": "OOP is a programming paradigm based on classes and objects, allowing modeling of real-world concepts.",
        "wrongAnswers": [
            "OOP is a programming style that forbids the use of primitive types like integers and booleans.",
            "OOP is a specific set of libraries provided by Oracle to extend the functionality of the Java language."
        ]
    },
    {
        "id": 50,
        "topic": "Java Basics",
        "question": "What are the main principles of OOP?",
        "answer": "The main principles are encapsulation, inheritance, polymorphism, and abstraction.",
        "wrongAnswers": [
            "The main principles are classes, objects, variables, and methods.",
            "The main principles are compile-time safety, runtime efficiency, garbage collection, and multithreading."
        ]
    },
    {
        "id": 51,
        "topic": "Java OOP",
        "question": "What is inheritance?",
        "answer": "Inheritance allows one class (a subclass) to acquire the properties and methods of another (a superclass), promoting code reuse.",
        "wrongAnswers": [
            "Inheritance is a way to protect data by making all fields private and only accessible through getters.",
            "Inheritance is the process of creating multiple methods with the same name but different parameters in the same class."
        ]
    },
    {
        "id": 52,
        "topic": "Java OOP",
        "question": "What is polymorphism?",
        "answer": "Polymorphism allows objects of different classes to respond to the same interface, enabling the same code to handle different types.",
        "wrongAnswers": [
            "Polymorphism is the ability of a class to have multiple constructors with different arguments.",
            "Polymorphism is a mechanism by which a class can only have one instance throughout the application."
        ]
    },
    {
        "id": 53,
        "topic": "Java OOP",
        "question": "What is abstraction?",
        "answer": "Abstraction is the principle of highlighting the essential characteristics of an object while hiding implementation details.",
        "wrongAnswers": [
            "Abstraction is the process of breaking down a large project into smaller, manageable modules or packages.",
            "Abstraction is a feature that allows a variable to hold different types of data at different times."
        ]
    },
    {
        "id": 54,
        "topic": "Java OOP",
        "question": "What is an interface?",
        "answer": "An interface is a contract that declares a set of methods a class must implement, without detailing their implementation.",
        "wrongAnswers": [
            "An interface is a special type of class that can contain only private static final variables.",
            "An interface is a tool used to generate documentation from comments in the source code."
        ]
    },
    {
        "id": 55,
        "topic": "Java OOP",
        "question": "How do you use abstract classes?",
        "answer": "Abstract classes are used to define base logic inherited by subclasses; they can contain both abstract and non-abstract methods.",
        "wrongAnswers": [
            "Abstract classes are primarily used to store global constants that are shared across all classes in a package.",
            "Abstract classes are used to create objects that do not have any state or behavior."
        ]
    },
    {
        "id": 56,
        "topic": "Java OOP",
        "question": "How is an interface different from an abstract class?",
        "answer": "Before Java 8, an interface contains no method implementations, while an abstract class can have both implemented and abstract methods. A class can implement multiple interfaces but can extend only one abstract class.",
        "wrongAnswers": [
            "An interface can be instantiated directly, whereas an abstract class requires a subclass to be instantiated.",
            "An interface can have constructors, while an abstract class cannot have any constructors."
        ]
    },
    {
        "id": 57,
        "topic": "Java OOP",
        "question": "What is a marker interface and why is it used?",
        "answer": "A marker interface has no methods but marks a class as having certain properties (e.g., Serializable).",
        "wrongAnswers": [
            "A marker interface is used to define the visual layout of a graphical user interface in Java Swing.",
            "A marker interface is a special interface that automatically logs every method call in the implementing class."
        ]
    },
    {
        "id": 58,
        "topic": "Java OOP",
        "question": "What are default methods in interfaces?",
        "answer": "Default methods are interface methods with an implementation, allowing interface extensions without breaking existing implementations.",
        "wrongAnswers": [
            "Default methods are methods that are automatically called by the JVM when an object is garbage collected.",
            "Default methods are methods that cannot be overridden by any class that implements the interface."
        ]
    },
    {
        "id": 59,
        "topic": "Java OOP",
        "question": "How do static methods in interfaces work?",
        "answer": "Static methods in interfaces can be called without creating an interface instance, providing helper functions.",
        "wrongAnswers": [
            "Static methods in interfaces are automatically inherited by all classes that implement the interface.",
            "Static methods in interfaces are used to initialize the state of the implementing class when it is loaded."
        ]
    },
    {
        "id": 60,
        "topic": "Java OOP",
        "question": "What is composition?",
        "answer": "Composition is when an object contains other objects as its fields to achieve more complex behavior.",
        "wrongAnswers": [
            "Composition is a way of inheriting multiple classes at once to combine their functionalities.",
            "Composition is the process of converting a high-level language into machine-readable bytecode."
        ]
    },
    {
        "id": 61,
        "topic": "Java OOP",
        "question": "How is composition different from inheritance?",
        "answer": "Inheritance extends a class’s behavior by inheriting it, while composition builds new functionality by including other objects.",
        "wrongAnswers": [
            "Inheritance represents a 'has-a' relationship, while composition represents an 'is-a' relationship.",
            "Inheritance is always preferred over composition because it is faster and uses less memory."
        ]
    },
    {
        "id": 62,
        "topic": "Java OOP",
        "question": "What is aggregation?",
        "answer": "Aggregation is a relationship where one object is part of another but can exist independently.",
        "wrongAnswers": [
            "Aggregation is a type of inheritance where the child class is destroyed if the parent class is deleted.",
            "Aggregation is the process of collecting garbage objects to free up memory in the JVM."
        ]
    },
    {
        "id": 63,
        "topic": "Java OOP",
        "question": "How does method overloading work?",
        "answer": "Method overloading allows multiple methods with the same name but different parameter types or counts.",
        "wrongAnswers": [
            "Method overloading is replacing a superclass method with a new version in the subclass using @Override.",
            "Method overloading is the ability to call a method from a different class without importing it."
        ]
    },
    {
        "id": 64,
        "topic": "Java OOP",
        "question": "What is method overriding?",
        "answer": "Overriding is when a subclass provides its own implementation of a method that exists in the superclass.",
        "wrongAnswers": [
            "Overriding is defining multiple methods in the same class with different return types but the same name.",
            "Overriding is a technique to hide a variable in the subclass that has the same name as one in the superclass."
        ]
    },
    {
        "id": 65,
        "topic": "Java OOP",
        "question": "Which access modifiers are commonly used in OOP?",
        "answer": "Commonly used are public, protected, private, and package-private (no explicit modifier).",
        "wrongAnswers": [
            "Commonly used are internal, external, global, and local modifiers.",
            "Commonly used are static, final, abstract, and synchronized modifiers."
        ]
    },
    {
        "id": 66,
        "topic": "Java OOP",
        "question": "What is a final class?",
        "answer": "A final class cannot be inherited, meaning other classes cannot extend it.",
        "wrongAnswers": [
            "A final class is a class that cannot contain any methods, only data fields.",
            "A final class is a class that is automatically deleted once the main method finishes execution."
        ]
    },
    {
        "id": 67,
        "topic": "Java OOP",
        "question": "What is static?",
        "answer": "Static fields and methods belong to the class itself, not to its instances, enabling access without creating an object.",
        "wrongAnswers": [
            "Static is a keyword used to create variables that can only be modified once inside a constructor.",
            "Static is a modifier that makes a class thread-safe by locking all its methods automatically."
        ]
    },
    {
        "id": 68,
        "topic": "Java OOP",
        "question": "How do you call a superclass constructor?",
        "answer": "Use the super keyword in the subclass constructor to call the superclass constructor.",
        "wrongAnswers": [
            "Call the superclass name directly as a method inside the subclass constructor.",
            "Use the this() keyword with the superclass name as an argument."
        ]
    },
    {
        "id": 69,
        "topic": "Java OOP",
        "question": "What is encapsulation and why is it important?",
        "answer": "Encapsulation hides the internal logic of a class, exposing data only through public methods, which enhances safety and controlled access to data.",
        "wrongAnswers": [
            "Encapsulation is the practice of splitting a class into multiple small files to improve readability.",
            "Encapsulation is a method for optimizing code execution speed by inlining all method calls."
        ]
    },
    {
        "id": 70,
        "topic": "Java OOP",
        "question": "What are the SOLID principles in OOP?",
        "answer": "SOLID is a set of design principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) that help create clear, maintainable, and scalable code.",
        "wrongAnswers": [
            "SOLID is a library for handling database transactions and file I/O in a secure manner.",
            "SOLID is a set of rules for naming variables and classes to ensure consistent coding style."
        ]
    },
    {
        "id": 71,
        "topic": "Java OOP",
        "question": "How do you ensure an object is immutable in Java?",
        "answer": "By declaring the class as final, using private final fields, and providing no setter methods.",
        "wrongAnswers": [
            "By using the transient keyword for all fields and making the class abstract.",
            "By implementing the Cloneable interface and overriding the clone() method to return null."
        ]
    },
    {
        "id": 72,
        "topic": "Java Collections",
        "question": "What is the Java Collections Framework?",
        "answer": "It is a set of interfaces and classes providing data structures (lists, sets, maps, etc.) and algorithms for working with them.",
        "wrongAnswers": [
            "It is a set of tools for managing memory and performing garbage collection in Java.",
            "It is a framework for building web applications using Java Servlets and JSP."
        ]
    },
    {
        "id": 73,
        "topic": "Java Collections",
        "question": "Which main interfaces are part of the Collections Framework?",
        "answer": "The main interfaces are Collection, List, Set, Queue, and Map.",
        "wrongAnswers": [
            "The main interfaces are Array, String, Integer, and Boolean.",
            "The main interfaces are File, Directory, Path, and Stream."
        ]
    },
    {
        "id": 74,
        "topic": "Java Collections",
        "question": "What is a List?",
        "answer": "A List is a collection that stores elements in a defined order and allows duplicates.",
        "wrongAnswers": [
            "A List is a collection that stores only unique elements in alphabetical order.",
            "A List is a key-value storage where each element must have a unique identifier."
        ]
    },
    {
        "id": 75,
        "topic": "Java Collections",
        "question": "What is a Set?",
        "answer": "A Set is a collection that stores only unique elements, with no defined order.",
        "wrongAnswers": [
            "A Set is a collection that stores elements based on their insertion time.",
            "A Set is a collection that allows multiple duplicate elements as long as they are of the same type."
        ]
    },
    {
        "id": 76,
        "topic": "Java Collections",
        "question": "What is a Map?",
        "answer": "A Map is a collection that stores key-value pairs, where each key is unique.",
        "wrongAnswers": [
            "A Map is a collection that stores elements in a circular queue structure.",
            "A Map is an interface used to visualize data in a geographical representation."
        ]
    },
    {
        "id": 77,
        "topic": "Java Collections",
        "question": "What are the characteristics of ArrayList?",
        "answer": "ArrayList provides a dynamic array with fast random access by index, but insertion/deletion can be slow.",
        "wrongAnswers": [
            "ArrayList is a fixed-size array that does not allow adding new elements after creation.",
            "ArrayList stores elements in a sorted manner using a linked list internally."
        ]
    },
    {
        "id": 78,
        "topic": "Java Collections",
        "question": "How does LinkedList differ from ArrayList?",
        "answer": "LinkedList is based on a linked list structure, allowing fast insertions/deletions, while ArrayList provides faster access by index.",
        "wrongAnswers": [
            "LinkedList consumes less memory than ArrayList because it does not store pointers.",
            "LinkedList is thread-safe by default, whereas ArrayList requires manual synchronization."
        ]
    },
    {
        "id": 79,
        "topic": "Java Collections",
        "question": "What is a HashSet?",
        "answer": "HashSet is a Set implementation that uses a hash table to ensure element uniqueness and fast lookups.",
        "wrongAnswers": [
            "HashSet is a collection that keeps elements in the order they were added.",
            "HashSet is a map that associates each element with a numeric ID starting from zero."
        ]
    },
    {
        "id": 80,
        "topic": "Java Collections",
        "question": "How does TreeSet work?",
        "answer": "TreeSet stores elements in a sorted order using a red-black tree, enabling fast lookups and navigation.",
        "wrongAnswers": [
            "TreeSet uses a simple array and sorts it every time a new element is added.",
            "TreeSet stores elements in a hierarchical parent-child relationship for fast searching."
        ]
    },
    {
        "id": 81,
        "topic": "Java Collections",
        "question": "What is a HashMap?",
        "answer": "HashMap is a Map implementation that stores data as key-value pairs, using hashing for fast access.",
        "wrongAnswers": [
            "HashMap is a collection that automatically sorts its keys in descending order.",
            "HashMap stores all values in a plain text file for persistence."
        ]
    },
    {
        "id": 82,
        "topic": "Java Collections",
        "question": "How does TreeMap differ from HashMap?",
        "answer": "TreeMap stores entries in sorted order by keys, while HashMap stores them in no particular order but usually offers better performance for large datasets.",
        "wrongAnswers": [
            "TreeMap allows null keys, while HashMap throws a NullPointerException if a key is null.",
            "TreeMap uses less memory than HashMap because it doesn't use hashes."
        ]
    },
    {
        "id": 83,
        "topic": "Functional Interfaces",
        "question": "What are lambda expressions in Java?",
        "answer": "Lambda expressions are short syntax for implementing functional interfaces (anonymous functions).",
        "wrongAnswers": [
            "Lambda expressions are mathematical functions for high-speed arithmetic operations.",
            "Lambda expressions are a way to declare multiple variables in a single line."
        ]
    },
    {
        "id": 84,
        "topic": "Functional Interfaces",
        "question": "What are functional interfaces?",
        "answer": "Functional interfaces are interfaces that have exactly one abstract method, optionally marked with @FunctionalInterface.",
        "wrongAnswers": [
            "Functional interfaces are interfaces that contain only static methods for utility purposes.",
            "Functional interfaces are special classes used to define the entry point of an application."
        ]
    },
    {
        "id": 85,
        "topic": "Functional Interfaces",
        "question": "What built-in functional interfaces do you know?",
        "answer": "Predicate, Function, Supplier, Consumer, UnaryOperator, BinaryOperator.",
        "wrongAnswers": [
            "Iterator, Comparator, Comparable, Cloneable, Serializable.",
            "Runnable, Thread, Executor, Future, Callable."
        ]
    },
    {
        "id": 86,
        "topic": "Functional Interfaces",
        "question": "What is Predicate?",
        "answer": "Predicate<T> – takes an argument and returns a boolean (used for filtering).",
        "wrongAnswers": [
            "Predicate is a tool for predicting the execution time of a method.",
            "Predicate is a special type of boolean variable that can hold three states: true, false, and null."
        ]
    },
    {
        "id": 87,
        "topic": "Functional Interfaces",
        "question": "What is Function?",
        "answer": "Function<T, R> – takes one type and returns another (for conversion).",
        "wrongAnswers": [
            "Function is a reserved keyword used to define all methods in Java.",
            "Function is a utility class for performing mathematical transformations on integers."
        ]
    },
    {
        "id": 88,
        "topic": "Functional Interfaces",
        "question": "What is Consumer?",
        "answer": "Consumer<T> – takes an argument, performs an action, and returns nothing.",
        "wrongAnswers": [
            "Consumer is an interface used to read data from a database or flat file.",
            "Consumer is a class that manages the power consumption of a running Java app."
        ]
    },
    {
        "id": 89,
        "topic": "Functional Interfaces",
        "question": "What is Supplier?",
        "answer": "Supplier<T> – takes no arguments and returns an object.",
        "wrongAnswers": [
            "Supplier is a tool for delivering localized strings to the user interface.",
            "Supplier is a pattern used to provide mocked data for unit tests."
        ]
    },
    {
        "id": 90,
        "topic": "Functional Interfaces",
        "question": "What are UnaryOperator and BinaryOperator?",
        "answer": "UnaryOperator<T> – takes and returns one type of data; BinaryOperator<T> – works with two arguments of the same type.",
        "wrongAnswers": [
            "They are arithmetic operators used to perform calculations on binary data.",
            "They are logical operators that combine multiple boolean expressions in an 'if' statement."
        ]
    },
    {
        "id": 91,
        "topic": "Functional Interfaces",
        "question": "How do you use method references?",
        "answer": "Method references (::) are an even shorter form of lambda expressions for calling existing methods (e.g., System.out::println).",
        "wrongAnswers": [
            "Method references are used to find the memory address of a specific function.",
            "Method references are a way to import methods from other packages without using the 'import' keyword."
        ]
    },
    {
        "id": 92,
        "topic": "Streams",
        "question": "What is Stream API in Java?",
        "answer": "Stream API is a powerful tool for processing collections of data in a functional style, allowing filtering, transformation, and aggregation.",
        "wrongAnswers": [
            "Stream API is a library for streaming music and video content within a Java application.",
            "Stream API is a type of high-speed network connection used for database synchronization."
        ]
    },
    {
        "id": 93,
        "topic": "Streams",
        "question": "How do you create a Stream object?",
        "answer": "A Stream can be created from a collection (list.stream()), an array (Arrays.stream()), or specific values (Stream.of()).",
        "wrongAnswers": [
            "A Stream is created by using the 'new Stream()' constructor provided by the java.util package.",
            "A Stream object is automatically created every time you declare a new variable of type List."
        ]
    },
    {
        "id": 94,
        "topic": "Streams",
        "question": "What is the difference between intermediate and terminal operations?",
        "answer": "Intermediate operations return a new Stream and are lazy; Terminal operations trigger the processing and return a final result (or void).",
        "wrongAnswers": [
            "Intermediate operations are synchronized, while terminal operations are always asynchronous.",
            "Intermediate operations are only used for logging, while terminal operations perform the actual data extraction."
        ]
    },
    {
        "id": 95,
        "topic": "Streams",
        "question": "Give examples of intermediate operations.",
        "answer": "filter(), map(), sorted(), distinct(), limit(), skip().",
        "wrongAnswers": [
            "forEach(), collect(), reduce(), count(), min().",
            "start(), stop(), pause(), resume(), finish()."
        ]
    },
    {
        "id": 96,
        "topic": "Streams",
        "question": "Give examples of terminal operations.",
        "answer": "forEach(), collect(), reduce(), count(), min(), max(), findFirst(), anyMatch().",
        "wrongAnswers": [
            "filter(), map(), sorted(), flatMap(), peek().",
            "open(), read(), write(), close(), flush()."
        ]
    },
    {
        "id": 97,
        "topic": "Streams",
        "question": "How does filtering work in Streams?",
        "answer": "The filter() operation takes a Predicate and creates a new stream containing only elements that match the condition.",
        "wrongAnswers": [
            "Filtering is used to remove syntax errors from the source code before it is compiled.",
            "Filtering automatically deletes all null values from a collection to prevent errors."
        ]
    },
    {
        "id": 98,
        "topic": "Streams",
        "question": "What is map() in Streams?",
        "answer": "The map() operation applies a function to each element of the stream, transforming it into a new value or type.",
        "wrongAnswers": [
            "map() is used to associate each element with a unique key for storage in a database.",
            "map() is a visualization tool that shows the data flow of a stream on a geographical map."
        ]
    },
    {
        "id": 99,
        "topic": "Streams",
        "question": "How does reduce() work?",
        "answer": "reduce() aggregates stream elements into a single value by sequentially applying a binary operation (e.g., sum of numbers).",
        "wrongAnswers": [
            "reduce() is a command that compresses the total size of a collection to save memory.",
            "reduce() is used to identify and remove all duplicate elements from a stream."
        ]
    },
    {
        "id": 100,
        "topic": "Streams",
        "question": "How do you use parallel streams?",
        "answer": "Parallel streams (parallelStream()) allow operations to be executed concurrently on multiple CPU cores, which can speed up processing for large datasets.",
        "wrongAnswers": [
            "Parallel streams are used to run two different Java applications at the exact same time.",
            "Parallel streams require a specialized license and can only be used on server-grade hardware."
        ]
    },
    {
        "id": 101,
        "topic": "Streams",
        "question": "What are the benefits of using Stream API?",
        "answer": "Readability, maintainability, lazy execution, and easy parallelization.",
        "wrongAnswers": [
            "Bypasses JVM security, reduces binary size, and compiles to machine code.",
            "Automatic memory management and real-time UI updates."
        ]
    },
    {
        "id": 102,
        "topic": "Streams",
        "question": "How do you collect Stream results into a List?",
        "answer": "Using .collect(Collectors.toList()) or .toList() in newer Java versions.",
        "wrongAnswers": [
            "By calling the .toList() method on the List interface directly.",
            "Using the 'extract' keyword followed by the target collection name."
        ]
    },
    {
        "id": 103,
        "topic": "Streams",
        "question": "What is flatMap()?",
        "answer": "flatMap() is used to transform each element of a stream into another stream and then flatten all these streams into a single one.",
        "wrongAnswers": [
            "flatMap() is a tool for removing nested folders from a file system path.",
            "flatMap() is used to convert a 2D array into a simple string representation."
        ]
    },
    {
        "id": 104,
        "topic": "Streams",
        "question": "How does findFirst() work?",
        "answer": "Returns an Optional containing the first element of the stream, or empty if the stream is empty.",
        "wrongAnswers": [
            "Immediately stops the program once the first element is processed.",
            "Deletes all elements except the first one from the original collection."
        ]
    },
    {
        "id": 105,
        "topic": "Streams",
        "question": "What is the difference between findFirst() and findAny()?",
        "answer": "findFirst() returns the first element (important for ordered streams), while findAny() returns any element (more efficient for parallel streams).",
        "wrongAnswers": [
            "findFirst() is for strings, findAny() is for numeric values.",
            "findFirst() requires a predicate, while findAny() does not."
        ]
    },
    {
        "id": 106,
        "topic": "Streams",
        "question": "How do you handle primitive streams (IntStream, etc.)?",
        "answer": "Using specialized streams like IntStream, LongStream, or DoubleStream to avoid boxing/unboxing overhead.",
        "wrongAnswers": [
            "By converting all primitives to objects before creating the stream.",
            "Using the 'primitive' keyword when declaring the stream variable."
        ]
    },
    {
        "id": 107,
        "topic": "Optional",
        "question": "What is Optional in Java?",
        "answer": "Optional is a container object that may or may not contain a non-null value, used to prevent NullPointerException.",
        "wrongAnswers": [
            "Optional is a keyword used to declare variables that are not required for the program to run.",
            "Optional is a developer-only feature that is removed from the production version of the code."
        ]
    },
    {
        "id": 108,
        "topic": "Optional",
        "question": "How do you create an Optional object?",
        "answer": "Using Optional.of(value), Optional.ofNullable(value), or Optional.empty().",
        "wrongAnswers": [
            "By calling the static method 'Optional.create()'.",
            "Using the 'maybe' keyword followed by the variable name."
        ]
    },
    {
        "id": 109,
        "topic": "Optional",
        "question": "How do you check if a value is present in Optional?",
        "answer": "Using isPresent() or ifPresent(Consumer).",
        "wrongAnswers": [
            "By comparing the Optional object directly to 'null'.",
            "Using the 'check' command in a try-catch block."
        ]
    },
    {
        "id": 110,
        "topic": "Optional",
        "question": "What is the difference between orElse() and orElseGet()?",
        "answer": "orElse() evaluates the default value even if the Optional is not empty; orElseGet() takes a Supplier and is called only if the Optional is empty.",
        "wrongAnswers": [
            "orElse() returns a boolean, while orElseGet() returns the actual object.",
            "orElse() is used for strings, while orElseGet() is used for numeric types."
        ]
    },
    {
        "id": 111,
        "topic": "Optional",
        "question": "How do you transform an Optional value?",
        "answer": "Using map() or flatMap() methods of the Optional class.",
        "wrongAnswers": [
            "By extracting the value, modifying it, and putting it back in a new Optional.",
            "Using the 'cast' operator followed by the desired target type."
        ]
    },
    {
        "id": 112,
        "topic": "Databases",
        "question": "What is a relational database?",
        "answer": "A database based on the relational model, where data is organized into tables with rows and columns, and relationships between tables are established.",
        "wrongAnswers": [
            "A database where all data is stored in a single giant text file.",
            "A database that can only store numeric values and boolean flags."
        ]
    },
    {
        "id": 113,
        "topic": "Databases",
        "question": "What is a primary key?",
        "answer": "A unique identifier for each record in a database table.",
        "wrongAnswers": [
            "The password used to log in to the database server.",
            "The first column in every table, regardless of its content."
        ]
    },
    {
        "id": 114,
        "topic": "Databases",
        "question": "What is a foreign key?",
        "answer": "A field in one table that uniquely identifies a row in another table, used to establish a relationship.",
        "wrongAnswers": [
            "A key used to encrypt the database to prevent unauthorized access.",
            "A special type of index that speeds up searching for strings."
        ]
    },
    {
        "id": 115,
        "topic": "Databases",
        "question": "What is indexing in databases?",
        "answer": "A technique used to speed up data retrieval operations on a database table.",
        "wrongAnswers": [
            "The process of assigning a numeric position to every record in the database.",
            "A way to organize tables in alphabetical order."
        ]
    },
    {
        "id": 116,
        "topic": "Databases",
        "question": "What are transactions in databases?",
        "answer": "A unit of work that is treated as a single, atomic operation (all or nothing).",
        "wrongAnswers": [
            "The logs of every SQL query ever executed on the server.",
            "The process of moving a database from one server to another."
        ]
    },
    {
        "id": 117,
        "topic": "Databases",
        "question": "What are the ACID properties?",
        "answer": "Atomicity, Consistency, Isolation, Durability.",
        "wrongAnswers": [
            "Accuracy, Complexity, Integrity, Dependency.",
            "Availability, Capability, Interoperability, Density."
        ]
    },
    {
        "id": 118,
        "topic": "Databases",
        "question": "What is the difference between SQL and NoSQL?",
        "answer": "SQL is relational and uses structured tables; NoSQL is non-relational and can be document-based, key-value, etc.",
        "wrongAnswers": [
            "SQL is for web apps, NoSQL is only for desktop apps.",
            "SQL is free to use, while NoSQL always requires a paid subscription."
        ]
    },
    {
        "id": 119,
        "topic": "Databases",
        "question": "What is normalization?",
        "answer": "The process of organizing data to reduce redundancy and improve data integrity.",
        "wrongAnswers": [
            "The process of converting all data into a standard XML format.",
            "A security technique used to hide sensitive data from users."
        ]
    },
    {
        "id": 120,
        "topic": "SQL",
        "question": "What is SQL?",
        "answer": "Structured Query Language used for managing and manipulating relational databases.",
        "wrongAnswers": [
            "A programming language used for building operating systems.",
            "A type of high-speed server hardware for data processing."
        ]
    },
    {
        "id": 121,
        "topic": "SQL",
        "question": "What are basic SQL commands?",
        "answer": "SELECT, INSERT, UPDATE, DELETE, CREATE, DROP.",
        "wrongAnswers": [
            "GET, POST, PUT, DELETE, PATCH, HEAD.",
            "RUN, EXEC, START, STOP, RESTART, RESET."
        ]
    },
    {
        "id": 122,
        "topic": "SQL",
        "question": "What is the WHERE clause used for?",
        "answer": "Used to filter records based on specified conditions.",
        "wrongAnswers": [
            "Used to specify which database server to connect to.",
            "Used to define the name of a new table."
        ]
    },
    {
        "id": 123,
        "topic": "SQL",
        "question": "How do you join tables in SQL?",
        "answer": "Using the JOIN keyword (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN).",
        "wrongAnswers": [
            "By using the '+' operator between two table names.",
            "Using the 'merge' command followed by the table names."
        ]
    },
    {
        "id": 124,
        "topic": "SQL",
        "question": "What is the GROUP BY clause?",
        "answer": "Used with aggregate functions (COUNT, MAX, MIN, SUM, AVG) to group the result-set by one or more columns.",
        "wrongAnswers": [
            "Used to sort the result-set in descending order.",
            "Used to group different SQL queries into a single batch file."
        ]
    },
    {
        "id": 125,
        "topic": "SQL",
        "question": "What is a subquery in SQL?",
        "answer": "A query nested inside another SQL query.",
        "wrongAnswers": [
            "A query that is executed after the main program has finished.",
            "A type of query that only returns a single boolean value."
        ]
    },
    {
        "id": 126,
        "topic": "Spring Boot",
        "question": "What is Spring Boot?",
        "answer": "An extension of the Spring framework that simplifies the initial setup and development of new Spring applications.",
        "wrongAnswers": [
            "A tool for creating bootable USB drives with Linux distributions.",
            "A Java-based operating system designed for running microservices."
        ]
    },
    {
        "id": 127,
        "topic": "Spring Boot",
        "question": "What are the advantages of Spring Boot?",
        "answer": "Auto-configuration, embedded servers (Tomcat, Jetty), and 'starter' dependencies.",
        "wrongAnswers": [
            "Requires no Java installation and runs directly on any hardware.",
            "Automatically writes the frontend code based on the backend logic."
        ]
    },
    {
        "id": 128,
        "topic": "Spring Boot",
        "question": "What is @SpringBootApplication?",
        "answer": "A convenience annotation that combines @Configuration, @EnableAutoConfiguration, and @ComponentScan.",
        "wrongAnswers": [
            "An annotation that makes the application run twice as fast.",
            "A required tag at the top of every single Java file in a Spring project."
        ]
    },
    {
        "id": 129,
        "topic": "Spring Boot",
        "question": "What is auto-configuration in Spring Boot?",
        "answer": "Spring Boot automatically configures your application based on the dependencies you have added to the classpath.",
        "wrongAnswers": [
            "The system automatically updates the application to the latest version of Java.",
            "It automatically configures the user's IDE with the correct keyboard shortcuts."
        ]
    },
    {
        "id": 130,
        "topic": "Spring Boot",
        "question": "How does Spring Initializr work?",
        "answer": "Spring Initializr is a web service that generates a Spring Boot project template with chosen dependencies and settings.",
        "wrongAnswers": [
            "It is a compiler that converts Spring code into native binaries.",
            "It is a training simulator for new Java developers."
        ]
    },
    {
        "id": 131,
        "topic": "Spring Boot",
        "question": "What is a starter dependency?",
        "answer": "A set of convenient dependency descriptors that simplify including specific technologies (e.g., spring-boot-starter-web).",
        "wrongAnswers": [
            "A library that must be imported at the very beginning of the project history.",
            "A small piece of code used to start the JVM from a command line."
        ]
    },
    {
        "id": 132,
        "topic": "Spring Boot",
        "question": "How do you configure application properties in Spring Boot?",
        "answer": "In application.properties or application.yml files.",
        "wrongAnswers": [
            "By modifying the environment variables of the operating system directly.",
            "Using a private database table called 'SPRING_CONFIG'."
        ]
    },
    {
        "id": 133,
        "topic": "Spring Boot",
        "question": "What is Spring Boot Actuator?",
        "answer": "Provides production-ready features like health checks, metrics, and application info endpoints.",
        "wrongAnswers": [
            "A tool for simulating user interactions with the application's UI.",
            "The component responsible for shutting down the application safely."
        ]
    },
    {
        "id": 134,
        "topic": "Spring Boot",
        "question": "How do you use profiles in Spring Boot?",
        "answer": "Profiles allow you to segregate parts of your application configuration and make it only available in certain environments (e.g., @Profile('dev')).",
        "wrongAnswers": [
            "Profiles are used to manage user login information and permissions.",
            "Profiles are avatars displayed in the application's admin dashboard."
        ]
    },
    {
        "id": 135,
        "topic": "HTTP",
        "question": "What is HTTP?",
        "answer": "Hypertext Transfer Protocol – the protocol used for transmitting data over the web.",
        "wrongAnswers": [
            "A high-speed transport protocol for local hardware components.",
            "A programming language used for creating interactive web pages."
        ]
    },
    {
        "id": 136,
        "topic": "HTTP",
        "question": "What are the main HTTP methods?",
        "answer": "GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS.",
        "wrongAnswers": [
            "READ, WRITE, APPEND, TRUNCATE, REPLACE.",
            "SEND, RECEIVE, CONNECT, DISCONNECT, AUTH."
        ]
    },
    {
        "id": 137,
        "topic": "HTTP",
        "question": "What is a RESTful API?",
        "answer": "An architectural style for web services that uses HTTP methods and identifies resources by URL.",
        "wrongAnswers": [
            "An API that requires the user to stay 'rested' by limiting requests per hour.",
            "A set of rules for building applications that run exclusively on Windows."
        ]
    },
    {
        "id": 138,
        "topic": "HTTP",
        "question": "What are HTTP status codes?",
        "answer": "Numeric codes returned by a server to indicate the result of a request (e.g., 200 OK, 404 Not Found, 500 Internal Server Error).",
        "wrongAnswers": [
            "Security tokens used to authorize user access to a website.",
            "The priority level of different web pages in a search engine."
        ]
    },
    {
        "id": 139,
        "topic": "HTTP",
        "question": "How does HTTPS work?",
        "answer": "HTTPS is a secure version of HTTP that uses SSL/TLS to encrypt the data transmitted between the client and server.",
        "wrongAnswers": [
            "HTTPS uses a separate, physical cable to transmit data securely.",
            "HTTPS is a version of HTTP that can only be accessed with a paid key."
        ]
    },
    {
        "id": 140,
        "topic": "HTTP",
        "question": "What are cookies and how are they used?",
        "answer": "Small pieces of data stored on the client side, used for session management, user identification, and tracking.",
        "wrongAnswers": [
            "Small image files used as icons for different website features.",
            "The temporary cache files used by the browser to speed up loading."
        ]
    },
    {
        "id": 141,
        "topic": "Spring Data",
        "question": "What is Spring Data?",
        "answer": "A part of the Spring framework that simplifies database access by abstracting common CRUD and query operations.",
        "wrongAnswers": [
            "A tool for analyzing large datasets in a cloud environment.",
            "A set of Java standard library classes for file I/O operations."
        ]
    },
    {
        "id": 142,
        "topic": "Spring Data",
        "question": "What are the key components of Spring Data?",
        "answer": "Repositories, templates (JdbcTemplate, MongoTemplate), and automatic CRUD implementation.",
        "wrongAnswers": [
            "Controllers, Services, Models, and Views.",
            "Drivers, Connections, Statements, and ResultSets."
        ]
    },
    {
        "id": 143,
        "topic": "Spring Data",
        "question": "How does a Repository work in Spring Data?",
        "answer": "An interface that Spring Data automatically implements at runtime to provide common database operations for an entity.",
        "wrongAnswers": [
            "It is a physical folder on the server where database backups are stored.",
            "It is a class that must be manually coded for every single SQL query."
        ]
    },
    {
        "id": 144,
        "topic": "Spring Data",
        "question": "What are CRUD operations in Spring Data?",
        "answer": "Create, Read, Update, Delete operations facilitated by Repository interfaces.",
        "wrongAnswers": [
            "A type of data compression used for large database tables.",
            "The four main types of database drivers supported by Spring."
        ]
    },
    {
        "id": 145,
        "topic": "Spring Data",
        "question": "What is Inversion of Control (IoC) in Spring?",
        "answer": "Delegating the creation and management of objects to the Spring Container.",
        "wrongAnswers": [
            "A technique for reversing the order of columns in a database table.",
            "A security feature that prevents users from taking control of the server."
        ]
    },
    {
        "id": 146,
        "topic": "Spring Data",
        "question": "What is Dependency Injection (DI) in Spring?",
        "answer": "A mechanism for automatically providing the required objects (dependencies) to a bean, via constructor, setter, or field injection.",
        "wrongAnswers": [
            "A way to inject SQL queries directly into the application's source code.",
            "The process of virus injection into a running Java application."
        ]
    },
    {
        "id": 147,
        "topic": "Spring Data",
        "question": "What are bean scopes in Spring?",
        "answer": "Standard scopes include singleton (default), prototype, request, session, and application.",
        "wrongAnswers": [
            "The physical size of the bean objects in the computer's memory.",
            "The target audience that the bean is designed to serve."
        ]
    },
    {
        "id": 148,
        "topic": "Spring Data",
        "question": "How does Spring Security handle authentication and authorization?",
        "answer": "Using a chain of filters and comprehensive configuration to manage secure access to resources (JWT, OAuth2, Basic Auth).",
        "wrongAnswers": [
            "By encrypting the entire application source code with a master password.",
            "By requiring the developer to manually verify every single user request."
        ]
    }
];
