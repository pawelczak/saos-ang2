Feature: Judgment Detail
  As a user
  I should be able to see single judgment page

  Scenario Outline:
    Given I go to judgment page specified by <id>
    Then I should see judgment with results <date>

    Examples:

    | id | date         | case_number |
    | 1  | 2012-09-14   | 123         |