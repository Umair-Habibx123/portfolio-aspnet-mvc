# Umair's Portfolio — ASP.NET Core MVC

A responsive, modern personal portfolio website built with **ASP.NET Core MVC (.NET 9)**.
It showcases skills, projects, and achievements with a clean, interactive UI. No database
is required — making it lightweight, fast, and easy to deploy.

---

## Features

- 🎨 **Modern UI** — gradient navbar, Poppins typography, smooth hover/scroll animations.
- 🛠️ **Static Project Showcase** — customize project details directly in the Razor views.
- 📬 **Contact Section** — simple contact + WhatsApp call-to-action.
- ♿ **Accessible** — focus-visible outlines and reduced-motion support.
- 📱 **Responsive** — built on Bootstrap 5, works across all major browsers and devices.

---

## Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | ASP.NET Core MVC (.NET 9)           |
| Language     | C#                                  |
| Views        | Razor (`.cshtml`)                   |
| Styling      | Bootstrap 5, custom CSS, Poppins    |
| Icons        | Font Awesome 5                      |

---

## Project Structure

```
PortfolioASP_MVC/
│
├── .vscode/                 # VS Code launch / build tasks / recommended extensions
├── Controllers/             # MVC controllers (routing + static data)
│   └── HomeController.cs
├── Models/                  # View models
├── Views/                   # Razor views
│   ├── Home/                # Index, About, Skills, Work, Contact
│   └── Shared/              # _Layout, Error, partials
├── wwwroot/                 # Static assets served to the browser
│   ├── css/site.css         # Custom site styles
│   ├── js/                  # Page scripts
│   ├── images/              # Images & icons (also used as favicon)
│   └── lib/                 # Client libraries (Bootstrap, jQuery)
├── Program.cs               # App entry point & middleware pipeline
├── appsettings.json         # App configuration
├── old_portfolio.csproj     # Project file
├── old_portfolio.sln        # Solution file
├── .gitignore
├── LICENSE
└── README.md
```

---

## Getting Started

### Prerequisites

- [.NET 9.0 SDK](https://dotnet.microsoft.com/download/dotnet/9.0) or later
- An editor — **Visual Studio Code** or **Visual Studio 2022**

Verify the SDK is installed:

```bash
dotnet --version   # should print 9.x.x
```

### Clone the repository

```bash
git clone https://github.com/Umair-Habibx123/PortfolioASP_MVC.git
cd PortfolioASP_MVC
```

---

## ▶️ Running in VS Code (full guide)

### 1. Install the tooling

- Install the [.NET 9.0 SDK](https://dotnet.microsoft.com/download/dotnet/9.0).
- Install the [**C# Dev Kit**](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit)
  extension (bundles the C# language support and debugger). When you open the folder, VS Code
  will recommend it automatically via `.vscode/extensions.json`.

### 2. Open the project

```bash
code .
```

### 3. Restore dependencies & build

Open the integrated terminal (`` Ctrl+` ``) and run:

```bash
dotnet restore
dotnet build
```

### 4. Run the app

```bash
dotnet run
```

Then open one of the URLs printed in the terminal:

- **HTTPS:** <https://localhost:7203>
- **HTTP:** <http://localhost:5265>

> 💡 For automatic rebuild + reload while editing, use **`dotnet watch run`**
> (also available as the **"watch"** task in VS Code).

### 5. Debug with breakpoints (optional)

Press **F5** (or **Run → Start Debugging**). The included `.vscode/launch.json` and
`.vscode/tasks.json` build the project, launch it under the debugger, and open your browser
automatically. Set breakpoints in any `.cs` file and they'll be hit on request.

### 6. Stop the app

Press **Ctrl+C** in the terminal (or the red stop button when debugging).

---

## Running in Visual Studio 2022

1. Open `old_portfolio.sln`.
2. Press **F5** to build and run with IIS Express / Kestrel.

---

## Customization

1. Edit your personal details and projects in the Razor views under `Views/Home/`.
2. Adjust colors, fonts, and effects in [`wwwroot/css/site.css`](wwwroot/css/site.css)
   (theme variables live at the top under `:root`).
3. Swap images in `wwwroot/images/` — the navbar logo (`OIP.jpg`) is also used as the favicon.

---

## Deployment

Publish a production build and deploy the output to any ASP.NET Core host
(Azure App Service, IIS, Docker, etc.):

```bash
dotnet publish -c Release -o ./publish
```

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request
for improvements or bug fixes.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

- **Email:** umairhabibabc@gmail.com
- **GitHub:** [Umair-Habibx123](https://github.com/Umair-Habibx123/)
