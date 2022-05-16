JULIA HARDING | FINAL PROJECT | PAW AND PURR

Paw and Purr is a social media application for pets to have social time.

------------------------------------------------------------------------------------------

TABLE OF CONTENTS

What was my motivation? ................ 20
Why did I build the project? ........... 43
What problem does it solve? ............ 53
What did I learn? ...................... 75

Installation Instructions .............. 93
Development notes ...................... 111
User Documentation ..................... 135

------------------------------------------------------------------------------------------

WHAT WAS MY MOTIVATION

Paw and Purr makes it easier to organize social time for your pets.

Socializing your dog or cat is very important to helping them be well adjusted and happy. 
'Found Animals' explains that there are a number of dangers to not socializing your dog 
or cat, such as discomfort around other animals, and humans. Socialization with a wide 
variety of other animals encourages your pet to learn communications skills, good manners.

Socializing your pet to a wide variety of people (such as people of different age groups, 
and ethnicities, people with beards, or hats, or wheelchairs) is also important. Pets 
that do not have experience socializing around different types of people can experience 
fear of those uncommon visual characteristics.

In animals fear can often result in aggression. A reactive pet that seems angry or 
dangerous, is probably just scared, and under-socialized. They are not equipped with the 
skills to handle what they consider to be stressful situations.

To read more about the risks of not socializing your pet you can check out
https://www.foundanimals.org/the-dangers-of-not-socializing-your-dog-or-cat/

------------------------------------------------------------------------------------------

WHY DID I BUILD THIS PROJECT

Most common household pets are social animals, but not everyone lives in pet friendly 
areas, or can afford to have more than one pet. It can be difficult to socialize your pet.

Paw and Purr allows owners to find other pets nearby, sorted by characteristics like age, 
temperament, and species so that you can organize social time for your fur baby.

------------------------------------------------------------------------------------------

WHAT PROBLEM DOES IT SOLVE?

My dog, Sir Paddington Bear, is fortunate to live in a very dog friendly state. Across 
the street from our apartment there's a park, in the evenings lots of people stop by after 
work to bring their pets out for socialization.

Except for snack time, Paddington in his brightest mood when we're hanging out all his 
other puppy friends.

Not all pets have the privilege of living in a pet friendly neighborhood. Socialization 
can be challenging to organize. Paw and Purr makes it easier, designed similarly to 
dating apps, you can find other pets in your area for your pet to socialize with.

Profiles include helpful details such as age, sex, species, and eventually details like 
temperament so that you can find other animals that would be a good fit for your baby.

If this project would be fully developed, you would be able to create chats, or chat 
groups with mutually matched pets, so you can organize meet ups with more than one animal 
in group settings.

------------------------------------------------------------------------------------------

WHAT DID I LEARN?

In this project I learned how to code effective semantic html. I learned how to use divs, 
and CSS properties such as position, and left, right etc. values to organize content on 
my webpage in specific non-vertical layouts. My major in graphic design, supplemented my 
lack of experience in computer science, allowing me to create a professional looking 
index page, with little understanding of comprehensive programming.

I learned how to implement a font from Google fonts, and use routes to include images 
from Unsplash. I learned how marquees work, and how to replicate the function using CSS, 
so that I could create a scrolling carousel of animal images.

I understood conceptually what I learned in class, but it was very difficult to translate 
that to actual programming. In the section DEVELOPMENT notes, I'll detail what works, and 
what needs improvement.

------------------------------------------------------------------------------------------

INSTALLATION INSTRUCTIONS

The project uses node, to create and fetch API's, and run the server side javascript.
It uses postgres to organize the database.

After installing node, you can use the following commands...

npm install body-parser
npm install pg
npm install (drag and drop the folder from your folder organizer for the correct route)

node server/app.js

This will update in the console that Marist Chatter is listening on port 1337!
I will also show in the console that the correct server side files are initialized.

------------------------------------------------------------------------------------------

DEVELOPMENT NOTES

The index page, and the css work. The carousel loops an empty space at the end of each 
cycle, I was not able to deduct why that happens. The body parser works correctly, you 
can POST and display new users, or the users as a list. The fetch API should work.

The pg node-module is causing an error that terminates the connection the server 1337.
It is located in the module at /node_modules/pg/lib/client.js:132:73
I could not find an effective solution online, and can no longer maintain the connection 
to the port. This prevents me from being able to properly view the client side html.

I was not able to test the user's fetch API on the sign in page, due to the connectivity 
error. Notes on the database work, and remaining parts of the project after building the 
sign in page are limited, they are not debugged because I could not connect to 1337.

In regards to future plans, if this project were fully developed, matched profiles could 
be saved, and indexed by characteristics. You could create chats with matched pets, or 
group chats with mutually matched pets to organize social time. There would be an 
additional page of the application that would include upcoming events for socialization, 
that are open for all users. This page could be updated by area specific representatives 
that would track upcoming local events.

------------------------------------------------------------------------------------------

USER DOCUMENTATION

I do not have screenshots, because I cannot run my program. Refer to the DEVELOPMENT 
NOTES 117, on the connectivity error.

You are currently able to sign up for an account, or sign into an existing account. 
Signing in can show you your profile, and other users pet profiles.

Eventually you would be able to match with other users pet's and start chats with them 
local to the app.

In more future development...

Breeders, fake profiles, or experiences with dangerous users could be submitted as 
reports to remove users that are not responsibly using Paw and Purr.

To be noted as a secure or trusted user, you could approve options for background checks, 
and submit vaccination cards of your pets.

An additional page could show upcoming events organized by Paw and Purr that are open to 
all local users, or by your community that are pet friendly, or pet oriented. Regular 
users cannot post to this page, only verified representatives of your area. This decision 
protects users and pets from dangerous environments that might not be safe or honest.