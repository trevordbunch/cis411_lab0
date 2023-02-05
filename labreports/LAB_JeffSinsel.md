# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Jeff Sinsel 
**GitHub Handle:** JeffSinsel  
**Repository:** https://github.com/JeffSinsel/cis411_lab1_CI/
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/JeffSinsel/cis411_lab1_CI/
- The accompanying diagram of what my fork precisely and conceptually represents...![ForkDiagram](../assets/ForkDiagram.jpg)

# Step 2: Clone your forked repository from the command line  
- My local file directory is ```C:\Users\Jeff\Desktop\Python\GitHub\labreports\cis411_lab1_CI```
- The command to navigate to the directory when I open up the command line is ```cd desktop/python/github/labreports/cis411_lab1_ci```

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "9499155a-4868-4eef-9295-172615af067d",
      "name": "Jeff Sinsel",
      "email": "js2062@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log  
_I accidentally added a third branch when setting up circleci so I ended merging the circleci-project-setup to the labreport branch to fix everything_
```
255fcbd (HEAD -> labreport, origin/labreport) Merge pull request #1 from JeffSinsel/circleci-project-setup
f3662be Add .circleci/config.yml
0d7e5e7 first commit @trevordbunch
2e92bd8 (origin/purelab, origin/HEAD, purelab) Fixed typos and links in markdown files
fa4fc85 (github-desktop-christianreames/purelab) Update Instructions
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
- The accompanying diagram of what my feature branch precisely and conceptually represents...![BranchDiagram](../assets/BranchDiagram.jpg)

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing? 
 
The yml file is telling circleci what to do, for example, if a unit test is written into the yml, then circleci will execute that unit test usually through the form of CLI commands.

- What do the various sections on the config file do?  
  - Orbs: defines which orbs are being used
  - Version: defines version being run
  - Jobs: the step-by-step process for which commands are run
  - Workflow: the order in which the jobs are run

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  

This indicates that practically, if the the CI build was deployed that it would work according to our test and philosophically that we did a good job coding this section.

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  

Another job would have to be added in which the code is deployed to a place where the CD is taking place. Specifications about the branch of the build normally filter what is deployed.

# Step 6: Merging the feature branch
* The output of my git commit log
```
a85bb5b (HEAD -> purelab, origin/purelab, origin/HEAD) Merge pull request #3 from JeffSinsel/labreport
23aca61 (origin/labreport, labreport) add circleci screenshots
9736668 Merge pull request #2 from JeffSinsel/labreport
5e21eb8 update Labreport
255fcbd Merge pull request #1 from JeffSinsel/circleci-project-setup
f3662be Add .circleci/config.yml
0d7e5e7 first commit @trevordbunch
2e92bd8 Fixed typos and links in markdown files
fa4fc85 (github-desktop-christianreames/purelab) Update Instructions
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
![CircleCI Success](../assets/circleci_success_jeff.png)

# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._



# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
- [x] Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
