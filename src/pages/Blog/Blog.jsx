

const Blog = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    1. What is One way data binding?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} One-way data binding is a concept in web development that describes the process of binding data from the model (or source) to the view (or UI component) in such a way that changes in the model are reflected in the view, but not vice versa. In other words, the data flows in one direction, from the source to the UI, and any changes in the source are automatically propagated to the UI.

                        For example, in the context of front-end frameworks like AngularJS, one-way data binding means that if you update the model (data) in your application, the corresponding UI elements are automatically updated to reflect those changes. However, if the user interacts with the UI and makes changes, those changes do not automatically propagate back to the underlying data model.

                        One-way data binding simplifies the flow of data and helps maintain a clear separation between the data model and the user interface. It can make applications more predictable and easier to understand, especially in scenarios where complex UI updates are involved.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    2. What is NPM in node.js?
                </div>
                <div className="collapse-content">
                    <p>NPM stands for Node Package Manager, and it is the default package manager for Node.js. NPM is a command-line tool that allows developers to manage and install Node.js packages, which are reusable libraries or modules of code. These packages can include various functionalities, and NPM makes it easy for developers to integrate and use them in their Node.js applications.</p>
                    <br />
                    <p>Key features and functions of NPM include:</p>
                    <br />
                    <p>1. **Package Installation:** NPM simplifies the process of installing external packages into a Node.js project. Developers can specify dependencies in a file called `package.json`, and NPM can then install all the dependencies listed in that file with a single command.</p>
                    <br />
                    <p> 2. **Dependency Management:** NPM helps manage dependencies by maintaining a `node_modules` directory in your project, where it installs all the dependencies required by your application.</p>
                    <br />
                    <p> 3. **Version Management:** NPM allows developers to specify version ranges for their dependencies in the `package.json` file. This helps ensure that your project uses compatible versions of libraries.</p>
                    <br />
                    <p> 4. **Command-Line Interface (CLI):** NPM provides a command-line interface for various tasks such as installing packages, updating packages, running scripts, and more.</p>
                    <br />
                    <p> 5. **Scripts:** NPM allows you to define scripts in your `package.json` file. These scripts can be executed using the `npm run` command, providing a convenient way to define and run various tasks associated with your project.</p>
                    <br />
                    <p> To get started with NPM, you need to have Node.js installed on your system, as NPM is included with Node.js. Once installed, you can use the `npm` command to interact with the package manager and manage dependencies for your Node.js projects.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    3. Different between Mongodb database vs mySQL database.
                </div>
                <div className="collapse-content">
                    <p>MongoDB and MySQL are both popular database management systems, but they differ in their data models, query languages, and underlying architectures. Here are some key differences between MongoDB and MySQL:</p>
                    <br />
                    <p className="space-y-2">
                        <p className="font-medium">Data Model:</p>
                        <p>MongoDB: MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON (Binary JSON). It uses a document-oriented data model, where data is stored in collections of documents. Each document is a JSON-like object with key-value pairs.</p>
                        <p>MySQL: MySQL is a relational database management system (RDBMS) that uses a structured table-based data model. Data is organized into tables, and each table consists of rows and columns. Relationships between tables are defined throug</p>
                    </p>
                    <br />
                    <p className="space-y-2">
                        <p className="font-medium">Schema:</p>
                        <p>MongoDB: MongoDB is schema-less, meaning that documents within a collection can have different fields. New fields can be added to documents without affecting the entire collection.</p>
                        <p>MySQL: MySQL is schema-based, and a predefined schema is required before creating tables. Any changes to the schema may require altering the table structure.</p>
                    </p>
                    <br />
                    <p className="space-y-2">
                        <p className="font-medium">Query Language:</p>
                        <p>MongoDB: MongoDB uses a rich and flexible query language that is based on JavaScript. It supports a wide range of query operations, including nested queries and the ability to query on embedded fields within documents.</p>
                        <p>MySQL: MySQL uses SQL (Structured Query Language) for querying and managing the database. SQL is a standardized language for relational databases.</p>
                    </p>
                    <br />
                    <p className="space-y-2">
                        <p className="font-medium">Scalability:</p>
                        <p>MongoDB: MongoDB is designed to be horizontally scalable. It can distribute data across multiple servers and handle large amounts of data and traffic by sharding.</p>
                        <p>MySQL: MySQL traditionally relies on vertical scaling, where you increase the power of a single server. While there are methods for scaling MySQL horizontally, it may not be as straightforward as with MongoDB.</p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;