  // function to generate HTML
  function generateHTML(data) {
    return `
    ${data[0].name}
    ${data[1].name}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="assets/css/style.css" />
    <title>Team Profile</title>
  </head>

  <body>
    <h1>My Team</h1>

    <main>
    <section>
        <h2>
        <p class = name>Jared</p>
        <p>Manager</p>
        </h2>

        <div class = properties>
        <p>ID: 1</p>
        <p>Email: <a href="mailto: jared@fakemail.com">jared@fakemail.com</a></p>
        <p>Office Number: 5</p>
        </div>
    </section>

    <section>
        <h2>
            <p class = name>Alec</p>
            <p>Engineer</p>
            </h2>
    
            <div class = properties>
            <p>ID: 2</p>
            <p>Email: <a href="mailto: alec@fakemail.com">alec@fakemail.com</a></p>
            <p>GitHub: <a href="https://github.com/alec">alec</a></p>
            </div>
    </section>

    <section>
        <h2>
            <p class = name>Grace</p>
            <p>Engineer</p>
            </h2>
    
            <div class = properties>
            <p>ID: 3</p>
            <p>Email: <a href="mailto: grace@fakemail.com">grace@fakemail.com</a></p>
            <p>GitHub: <a href="https://github.com/grace">grace</a></p>
            </div>
    </section>

    <section>
        <h2>
            <p class = name>Tammer</p>
            <p>Engineer</p>
            </h2>
    
            <div class = properties>
            <p>ID: 4</p>
            <p>Email: <a href="mailto: tammer@fakemail.com">tammer@fakemail.com</a></p>
            <p>GitHub: <a href="https://github.com/tammer">tammer</a></p>
            </div>
    </section>

    <section>
        <h2>
            <p class = name>John</p>
            <p>Intern</p>
            </h2>
    
            <div class = properties>
            <p>ID: 5</p>
            <p>Email: <a href="mailto: john@fakemail.com">john@fakemail.com</a></p>
            <p>School: ZUniversity</p>
            </div>
    </section>
    </main>

</body>
</html>
  `;
  }
  
  module.exports = generateHTML;