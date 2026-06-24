using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using old_portfolio.Models;

namespace old_portfolio.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index() => View();

    [HttpGet("/about")]
    public IActionResult about() => View();

    [HttpGet("/skills")]
    public IActionResult skills() => View();

    [HttpGet("/work")]
    public IActionResult work() => View();

    [HttpGet("/Contact_Me")]
    public IActionResult Contact_Me() => View();

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}