$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/recherche_Amazon.feature");
formatter.feature({
  "name": "test cucumber Olivier",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "un utilisateur voulant acheter un iphone 13 pro max sur amazon.fr",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TEST_POEI22-748"
    },
    {
      "name": "@prod"
    }
  ]
});
formatter.step({
  "name": "Ouvrir amazon",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.ouvrirAmazon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fermer cookies",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.fermerCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Chercher: Apple iPhone - Vert Alpin",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.chercherAppleIPhoneVertAlpin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ouvrir premier resultat",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.ouvrirPremierResultat()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ajouter au panier",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.ajouterAuPanier()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Selectionner Non, Merci pour l\u0027apple care",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.selectionnerNonMerciPourLAppleCare()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ouvrir panier",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.ouvrirPanier()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Changer quantite",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.changerQuantiteA()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#quantit\"}\n  (Session info: chrome\u003d105.0.5195.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.4.0\u0027, revision: \u0027e5c75ed026a\u0027\nSystem info: host: \u0027DESKTOP-5L7N2A8\u0027, ip: \u0027192.168.121.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.4.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3001b338417f629dabb5ee72e8238c99, findElement {using\u003dcss selector, value\u003d#quantit}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\ib\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:65081}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:65081/devtoo..., se:cdpVersion: 105.0.5195.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3001b338417f629dabb5ee72e8238c99\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:547)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat pages.CartPage.selectQuantity(CartPage.java:30)\r\n\tat steps.MyStepdefs.changerQuantiteA(MyStepdefs.java:74)\r\n\tat ✽.Changer quantite(file:src/test/resources/features/recherche_Amazon.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "le panier de l\u0027utilisateur contient iphone",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.lePanierDeLUtilisateurContientIphone()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "un utilisateur voulant acheter un iphone 13 pro max sur amazon.fr",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pro"
    }
  ]
});
formatter.step({
  "name": "Ouvrir amazon",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.ouvrirAmazon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fermer cookies",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.fermerCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le panier de l\u0027utilisateur contient iphone",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.lePanierDeLUtilisateurContientIphone()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});