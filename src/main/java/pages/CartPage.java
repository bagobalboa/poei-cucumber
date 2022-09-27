package pages;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class CartPage {

    private WebDriver driver;
    private By dropdownSelector = By.cssSelector("#quantity");
    private By getCapacitySelector = By.cssSelector(".sc-product-variation .a-text-bold + span");
    final int quantity = 2;
    private static final Logger Log = LogManager.getLogger(CartPage.class);

    // constructeur
    public CartPage(WebDriver driver) {
        this.driver = driver;
    }


    public CartPage selectQuantity() {

        Log.info("Je choisi ma quantité");

        WebElement dropdown = driver.findElement(dropdownSelector);
        Select categoriesSelect = new Select(dropdown);
        categoriesSelect.selectByIndex(quantity);
        return this;
    }

    public void getFirstProductName() {

    }

    public CartPage getFirstProductCapacity() {

        List<WebElement> informations = driver.findElements(getCapacitySelector);
        WebElement capacity = informations.get(1);
        return this;
    }


}

