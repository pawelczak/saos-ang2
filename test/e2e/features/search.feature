Feature: Search
  As a user
  I should be able to search judgments

  Scenario: Simple search
    Given I go to search page
    When I type simple search query
    Then I should see search results