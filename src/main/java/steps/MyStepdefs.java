package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import pages.CartPage;
import pages.HomePage;
import pages.ProductPage;
import pages.SearchResultPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


public class MyStepdefs {
    WebDriver driver;
    HomePage homePage;
    SearchResultPage searchResultPage;
    ProductPage productPage;
    CartPage cartPage;


    @Given("Ouvrir amazon")
    public void ouvrirAmazon() {

        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://www.amazon.fr");
    }

    @When("Fermer cookies")
    public void fermerCookies() {
        homePage = new HomePage(driver);
        homePage.acceptCookie();
    }

    @And("Chercher: Apple iPhone - Vert Alpin")
    public void chercherAppleIPhoneVertAlpin() {
        homePage.searchWithButton();
    }

    @And("Ouvrir premier resultat")
    public void ouvrirPremierResultat() {
        searchResultPage = new SearchResultPage(driver);
        searchResultPage.openSearchResult();
    }

    @And("Ajouter au panier")
    public void ajouterAuPanier() {
        productPage = new ProductPage(driver);
        productPage.addToCart();
    }

    @And("Selectionner Non, Merci pour l'apple care")
    public void selectionnerNonMerciPourLAppleCare() {
        productPage.refuseApplecare();

    }

    @And("ouvrir panier")
    public void ouvrirPanier() {
        productPage.openCart();
    }

    @And("Changer quantite")
    public void changerQuantiteA() {
        cartPage = new CartPage(driver);
        cartPage.selectQuantity();
    }
    @Then("le panier de l'utilisateur contient iphone")
    public void lePanierDeLUtilisateurContientIphone() {

        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        driver.quit();
    }
    @After
    public void captureEcran(Scenario s){
        if(s.isFailed()){
            final byte[] screenshot =((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            s.embed(screenshot,"image/png");
        }
    }

}
