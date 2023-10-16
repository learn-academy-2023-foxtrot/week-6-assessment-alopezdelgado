# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: DLD 

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: i honestly dont know without looking up

Researched answer: generate a migration to add the key to Student research says I should call it AddCohortReferenceToStudents and then pass it cohort:references. then db:migrate to save the changes. And now i can add the has_many to cohort and belongs_to to student. the foreign key name is cohort:id and the foreign key will be in the Student model.

2. Which RESTful routes must always be passed params?

Your answer: show, edit, update and delete, because you have to pass params and an id so that the restful route knows which id to show, edit, update or delete. 

Researched answer: show, edit, update and delete, but the research is weird, i cant find anything, but those 4 are the ones that always had params with it. 

3. Name three rails generator commands. What is created by each?

Your answer: rails g model, rails g resource, rails g controller. In order, it generates a model, a resource and a controller. 

Researched answer:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students index

action: "POST" location: /students create

action: "GET" location: /students/new new 

action: "GET" location: /students/2 show

action: "GET" location: /students/2/edit  edit

action: "PATCH" location: /students/2 update

action: "DELETE" location: /students/2 destroy

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

1- As a user, I want to be able to create a new to-do item so that I can add tasks I need to complete.

2- As a user, I want to be able to set a due date for each to-do item so that I can prioritize my tasks.

3- As a user, I want to be able to categorize my to-do items into different lists or categories (e.g., work, personal, shopping) for better organization.

4- As a user, I want to mark to-do items as completed so that I can track my progress.

5- As a user, I want to edit the details of a to-do item (e.g., title, description, due date) in case I need to make changes.

6- As a user, I want to be able to delete to-do items that are no longer relevant or necessary.

7- As a user, I want to set reminders or notifications for important to-do items to help me stay on track.

8- As a user, I want to be able to prioritize to-do items by assigning them a level of importance or urgency.

9- As a user, I want to view all my to-do items in a list format so I can quickly see what tasks I need to complete.

10- As a user, I want to search and filter my to-do items based on different criteria, such as due date, category, or priority, to find specific tasks easily.