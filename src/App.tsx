import './App.css';
import './assets/blue-stationery-table.jpg';


function App() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hello! My name is <s><i>Vinuk.</i></s> I am a student learning 
        <b><i>web development</i></b>. I enjoy creating websites and            
        exploring <u>new technologies</u>. In my free time, I like to 
        <mark>read books</mark>, <b>play video games</b>, and
        <i>hang out with friends</i>.
      </p>

      <hr />
      <h2>My Hobbies and My favourite foods</h2>

      <table border={5} cellPadding={5}>
        <thead>
          <tr>
            <th>Hobbies</th>
            <th>Favourite Foods</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reading</td>
            <td>Cake</td>
          </tr>
          <tr>
            <td>Video Games</td>
            <td>Orange</td>
          </tr>
          <tr>
            <td>Coding</td>
            <td>Pizza</td>
          </tr>
          <tr>
            <td>Traveling</td>
            <td>Magic Corn</td>
          </tr>
        </tbody>
      </table>
      <br />
      <hr />
      <h2>Contact Me</h2>
      <div className="form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" /><br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" /><br /><br />

        <label htmlFor="message">Message:</label>
        <input type="message" id="message" name="message" /><br /><br />

        <input type="submit" value="Submit" />
      </div>
    </div>
  );
};

export default App;