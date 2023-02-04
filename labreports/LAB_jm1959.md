# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2023  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Joseph McGillen  
**GitHub Handle:** jm1959  
**Repository:** https://github.com/jm1959/cis411_lab1_CI
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/jm1959/cis411_lab1_CI
- The accompanying diagram of what my fork precisely and conceptually represents...
![Use Case Diagram](/assets/Forked_Repositroy.svg)

# Step 2: Clone your forked repository from the command line  
- My local file directory is "C:\Users\mcgil\Documents\GitHub\cis411_lab1_CI"
- The command to navigate to the directory when I open up the command line is 
  ```
  cd "C:\Users\mcgil\Documents\GitHub\cis411_lab1_CI"
  ```

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "177b884c-95e6-4474-af53-555fb63cc8a6",
      "name": "Joseph McGillen",
      "email": "jm1959@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
10ef6ac (HEAD -> labreport, origin/labreport) Update config.yml
70e8361 first lab commit
fa4fc85 (origin/purelab, origin/HEAD, purelab) Update Instructions
f8513e0 Update Node links to Instructions
d4f22eb Update repo branch names
0e3ae4c Reset purelab
050b420 Merge pull request #2 from trevordbunch/main
1fe415c Merge pull request #1 from trevordbunch/labreport
13e571f Update Lab readme, instructions and templates
eafe253 Adjust submitting instructions
47e83cd Add images to LabReport
ec18770 Add Images
dbf826a Answer Step 4
a9c1de6 Complete Step 1, 2 and 3 of LAB_TREVORDBUNCH
1ead543 remove LAB.md
8c38613 Initial commit of labreport with @tangollama
dabceca Merge pull request #24 from tangollama/circleci
a4096db Create README.md
2f01bf4 Update LAB_INSTRUCTIONS.md
347bd50 Update LAB_INSTRUCTIONS.md
7aaa9f3 Update LAB_INSTRUCTIONS.md
37393ae Bug fixed
1949d2a Update LAB_INSTRUCTIONS.md
d36ad90 Update LAB.md
59ef18a Update LAB_INSTRUCTIONS.md
37be3c8 Update LAB_INSTRUCTIONS.md
97da547 Update LAB.md
0bd6244 updated Step 0 title
4562cd8 added npm and node install repreq
```
- The accompanying diagram of what my feature branch precisely and conceptually represents...
  ![Feature Branch Diagram](/assets/Branch_Repository.svg)

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  
  - It is reducing context switching for developers between the web app and VS code through a set of helpful features

- What do the various sections on the config file do?  
  - **Orbs:** Are reusable packages of CircleCI config that can be shared between multiple projects
  - **workflows:** Where you can define and evoke the jobs you want to run
  - **Jobs:** Is a collection of steps that will be executed in a single unit 

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
  - Philosophically it indicates that the team is working together seamlessly and there is 
    good communication
  - Practically indicates that the newly coded features will pass all of the required test and will be ready for delivery 
  - Precisely it indicates that the code is written correctly and passed all of the specified tests.
    It also indicates that the code merges well with the pre-existing code.

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?
  -   Additional changes I would make in the configuration is add additional documentation to track the flow of code as new changes are added. Also give clearer definition of the tests that will be run to check to see if the new code will work well in the new environment. Another change would be to implement a structured flow of committing, checking and delivering code that way no faulty or un-neat code will get pushed through.
   

# Step 6: Merging the feature branch
* The output of my git commit log
```
Trevors-MBP:cis411_lab0 trevorbunch$ git log --oneline
dbf826a (HEAD -> labreport, origin/labreport) Answer Step 4
a9c1de6 Complete Step 1, 2 and 3 of LAB_TREVORDBUNCH
1ead543 remove LAB.md
8c38613 Initial commit of labreport with @tangollama
dabceca (upstream/main, origin/main, origin/HEAD, main) Merge pull request #24 from tangollama/circleci
a4096db Create README.md
...
44ce6ae Initial commit
(END)
```

* A screenshot of the _Jobs_ list in CircleCI
![CircleCI Success](../assets/circleci_success.png)

