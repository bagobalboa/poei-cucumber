Feature: test cucumber Olivier

  @TEST_POEI22-748 @prod
  Scenario: un utilisateur voulant acheter un iphone 13 pro max sur amazon.fr
    Given Ouvrir amazon
    When Fermer cookies
    And Chercher: Apple iPhone - Vert Alpin
    And Ouvrir premier resultat
    And Ajouter au panier
    And Selectionner Non, Merci pour l'apple care
    And ouvrir panier
    And Changer quantite
    Then le panier de l'utilisateur contient iphone
  @pro
  Scenario: un utilisateur voulant acheter un iphone 13 pro max sur amazon.fr
    Given Ouvrir amazon
    When Fermer cookies
    Then le panier de l'utilisateur contient iphone