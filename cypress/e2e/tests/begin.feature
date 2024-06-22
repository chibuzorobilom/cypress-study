Feature: SignUp Journey on Mima web app
        As a user, I should be able to sign up
        And have access to the web app

    Background: User is on the site
        Given User is on trymima page

    Scenario Outline: User should be able to sign up with <source> as info source
        When User clicks the "Sign up" button
        And User inserts the "fullname"
        And User inserts the "business name"
        And User inserts the "business email"
        And User inserts the "business phone number"
        And User inserts the "business registration number"
        And User clicks the "Next" button
        And User inserts the "website"
        And User inserts the "instagram handle"
        And User inserts the "twitter handle"
        And User selects "<source>" as info source
        And User inserts the "password"
        And User clicks the "Sign Up" button
        Then User sees the OTP page
        When User inserts OTP code
        Then User sees the Dashboard
        And The following on the sidebar of the dashboard
            | side_item            |
            | Customer             |
            | Invoice & Accounting |
            | Orders               |
            | Payment Link         |
            | Booking              |
            | Paybills             |
            | Stock                |
            | Split Payments       |
            | Employees            |

        Examples:
            | source          |
            | Webinar/Seminar |
            | Instagram       |
            | Facebook        |
            | Twitter         |
            | Google Search   |



#  Scenario Outline: User should be able to sign up with <source> as info source
#     # Given User is on Mima Home Page
#     When User clicks the "Sign up" button on the Home Page
#     And User inputs their Full Name into the "Full Name" field
#     And User inputs their Business Name into the "Business Name" field
#     And User inputs their Business Email into the "Business Email" field
#     And User inputs their Business Phone Number into the "Business Phone Number" field
#     And User inputs their Business Registration Number into the "Business Registration Number" field
#     And User clicks on the "Next" button
#     When User selects "<source>" as information source
#     And User inputs their Password into the "Password" field
#     And User clicks on the "Sign Up" Button
#     Then User sees the OTP Page
#     When User inputs the OTP they receive in the OTP field
#     Then User sees the Dashboard
#     And User sees the following on the Dashboard's side bar

# Scenario: User should be able to sign up with only the Business Registration Number
#     # Given User is on Mima Home Page
#     When User clicks the "Sign up" button on the Home Page
#     And User inputs their Full Name into the "Full Name" field
#     And User inputs their Business Name into the "Business Name" field
#     And User inputs their Business Email into the "Business Email" field
#     And User inputs their Business Phone Number into the "Business Phone Number" field
#     And User inputs their Business Registration Number into the "Business Registration Number" field
#     And User clicks on the "Next" button
#     And User inputs their Website into the "Website" field
#     And User inputs their Instagram Handle into the "Instagram" field
#     And User inputs their Twitter Handle into the "Twitter" field
#     And User selects an information source
#     And User inputs their Password into the "Password" field
#     And User clicks on the "Sign Up" Button
#     Then User sees the OTP Page
#     When User inputs the OTP they receive in the OTP field
#     Then User sees the Dashboard
#     And User sees the following on the Dashboard's side bar


# Scenario Outline: User should be able to sign up with only the <option> as optional field
#     When User clicks the "Sign up" button on the Home Page
#     And User inputs their Full Name into the "Full Name" field
#     And User inputs their Business Name into the "Business Name" field
#     And User inputs their Business Email into the "Business Email" field
#     And User inputs their Business Phone Number into the "Business Phone Number" field
#     And User clicks on the "Next" button
#     And User inputs their Website into the "Website" field
#     And User selects an information source
#     And User inputs their Password into the "Password" field
#     And User clicks on the "Sign Up" Button
#     Then User sees the OTP Page
#     When User inputs the OTP they receive in the OTP field
#     Then User sees the Dashboard
#     And User sees the following on the Dashboard's side bar