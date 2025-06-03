Feature: Productivity Dashboard
  As a user
  I want to manage my tasks and track my productivity
  So that I can improve my weekly performance

  Background:
    Given the user accesses the productivity dashboard

  Scenario: View main metrics when accessing the dashboard
    Then the user should see their level and XP
    And the user should see the total number of tasks completed
    And the user should see the total focus time
    And the user should see the productivity percentage for the week

  Scenario: Add a new task from the task management section
    When the user fills in the new task and submits the form
      | title       | Test Task        |
      | priority    | High Priority    |
      | category    | Work             |
      | description | Test description |
    Then the new task should appear in the task list
      | title       | Test Task        |
      | priority    | high priority    |
      | category    | Work             |
      | description | Test description |


