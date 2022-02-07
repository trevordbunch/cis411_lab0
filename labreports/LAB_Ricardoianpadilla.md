# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Ricardo Padilla  
**GitHub Handle:** Ricardoianpadilla 
**Repository:** https://github.com/Ricardoianpadilla
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/Ricardoianpadilla/cis411_lab1_CI 
- The accompanying diagram of what my fork precisely and conceptually represents...
![Fork Diagram](https://github.com/Ricardoianpadilla/cis411_lab1_CI/blob/4449b2952dae571541609a1fe808f8cb22435b13/Lab1Step1.png)

# Step 2: Clone your forked repository from the command line  
- My local file directory is ```/Users/ricardopadilla/Documents/git```
- The command to navigate to the directory when I open up the command line is cd ```cis411_lab1_CI```

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "eacff600-b488-44ce-bed5-a01769105444",
      "name": "Ricardo Padilla",
      "email": "rp1288@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
2319ab7 (HEAD -> labreport, origin/labreport) fixing formate
b67624c Completed changes from steps 1-3
d1d531c Adding my Lab to my brand and commiting
591f44f your commit and reference @trevordbunch in the message
7490dcb (origin/main, origin/HEAD, main) Add Links to Node in Instructions
ecaaa53 Update branch terminology
c552213 Merge pull request #3 from hallienicholas/main
78ede9f Corrected error
1fe415c Merge pull request #1 from trevordbunch/labreport
13e571f Update Lab readme, instructions and templates
eafe253 Adjust submitting instructions
47e83cd Add images to LabReport
ec18770 Add Images
dbf826a Answer Step 4
a9c1de6 Complete Step 1, 2 and 3 of LAB_TREVORDBUNCH
1ead543 remove LAB.md
:...skipping...
2319ab7 (HEAD -> labreport, origin/labreport) fixing formate
b67624c Completed changes from steps 1-3
d1d531c Adding my Lab to my brand and commiting
591f44f your commit and reference @trevordbunch in the message
7490dcb (origin/main, origin/HEAD, main) Add Links to Node in Instructions
ecaaa53 Update branch terminology
1949d2a Update LAB_INSTRUCTIONS.md
d36ad90 Update LAB.md
59ef18a Update LAB_INSTRUCTIONS.md
37be3c8 Update LAB_INSTRUCTIONS.md
97da547 Update LAB.md
0bd6244 updated Step 0 title
4562cd8 added npm and node install repreq
255051e adding template
13a09b7 Adding the LAB.md and correcting some instructions.
d2ddea5 Version 0.0.1 of the lab isntructions
ab312fc more progress
62fb0a5 more progress
fe1937b more in the lab instructions
3e807fb first section
9ae6b83 remove LAB.md
e429c1a lab instructions
ce1fcea circleci default config
80bbdbb circleci default config
968099e remove test db
7362cd1 working
44ce6ae Initial commit
```
- The accompanying diagram of what my feature branch precisely and conceptually represents..![Branch Diagram](https://github.com/Ricardoianpadilla/cis411_lab1_CI/blob/4449b2952dae571541609a1fe808f8cb22435b13/Lab1Step4.png)

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  
  It checks if the directory is working.

- What do the various sections on the config file do?  
steps - tells the steps needed to obtain dependencies
jobs - tell which job is to be done
run -run some test(s)   
paths - tells the paths that the cached files will be at  

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
   It just indicated that the build is regular and good.

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  
   I would go through the ci process so all changes are checked and ready for CD.

# Step 6: Merging the feature branch
* The output of my git commit log
```
ricardopadilla@Ricardos-MacBook-Air cis411_lab1_CI % git log --oneline
7490dcb (HEAD -> main, origin/main, origin/HEAD) Add Links to Node in Instructions
ecaaa53 Update branch terminology
c552213 Merge pull request #3 from hallienicholas/main
78ede9f Corrected error
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
255051e adding template
13a09b7 Adding the LAB.md and correcting some instructions.
d2ddea5 Version 0.0.1 of the lab isntructions
ab312fc more progress
62fb0a5 more progress
fe1937b more in the lab instructions
3e807fb first section
9ae6b83 remove LAB.md
e429c1a lab instructions
ce1fcea circleci default config
80bbdbb circleci default config
968099e remove test db
7362cd1 working
44ce6ae Initial commit
(END)
```

* A screenshot of the _Jobs_ list in CircleCI
![CircleCI Success](https://github.com/Ricardoianpadilla/cis411_lab1_CI/blob/4449b2952dae571541609a1fe808f8cb22435b13/Lab1Step6.png) 

# Step 7: Submitting a Pull Request
@al1412



# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
