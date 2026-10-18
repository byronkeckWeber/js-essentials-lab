import useLocalStorage from "./hooks/useLocalStorage";

const operatingSystemOptions = ["Windows", "macOS", "Linux", "ChromeOS"];

function App() {
  // Name preference
  const [name, setName] = useLocalStorage("studentName", "");


  // Favorite language preference
  const [language, setLanguage] = useLocalStorage("favoriteLanguage", "JavaScript");


  // Dark mode preference
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);


  // Favorite operating system preference (stored as an object)
  // Version can be blank since I don't expect everyone to know their perfered version
  const [operatingSystem, setOperatingSystem] = useLocalStorage("favoriteOperatingSystem", {
    name: "Windows",
    version: "",
  });

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Saved Preferences:", {
      name,
      language,
      darkMode,
      operatingSystem,
    });

    alert("Preferences saved!");
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>Student Preferences</h1>

      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="language">Favorite Programming Language</label>
          <select
            id="language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
            <option value="C#">C#</option>
          </select>
        </div>

        <div className="form-control checkbox-control">
          <label htmlFor="darkMode">Dark Mode</label>
          <input
            type="checkbox"
            id="darkMode"
            checked={darkMode}
            onChange={(event) => setDarkMode(event.target.checked)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="operatingSystem">Favorite Operating System</label>
          <select
            id="operatingSystem"
            value={operatingSystem.name}
            onChange={(event) => setOperatingSystem({ ...operatingSystem, name: event.target.value })}
          >
            {operatingSystemOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="operatingSystemVersion">Operating System Version</label>
          <input
            type="text"
            id="operatingSystemVersion"
            value={operatingSystem.version}
            onChange={(event) => setOperatingSystem({ ...operatingSystem, version: event.target.value })}
          />
        </div>

        <button type="submit">Save Preferences</button>
      </form>

      <div className="preferences">
        <h2>Current Preferences</h2>
        <p>
          <strong>Name:</strong> {name || "Not set"}
        </p>
        <p>
          <strong>Favorite Language:</strong> {language}
        </p>
        <p>
          <strong>Dark Mode:</strong> {darkMode ? "On" : "Off"}
        </p>
        <p>
          <strong>Favorite Operating System:</strong> {operatingSystem.name} {operatingSystem.version}
        </p>
      </div>
    </div>
  );
}

export default App;