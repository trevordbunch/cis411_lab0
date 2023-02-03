# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Shane Wahlberg
**GitHub Handle:** CuriousOcean  
**Repository:** (https://github.com/CuriousOcean/cis411_lab1_CI/tree/purelab)
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/CuriousOcean/cis411_lab1_CI/tree/purelab
- The accompanying diagram of what my fork precisely and conceptually represents...

# Step 2: Clone your forked repository from the command line  
- My local file directory is...

cowdy@DESKTOP-GAEVL8G MINGW64 ~/Documents/GitHub/cis411_lab1_CI (purelab)
- The command to navigate to the directory when I open up the command line is...

cd Documents/GitHub/cis411_lab1_CI (purelab)

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "4a866621-eb88-4ae6-9776-dc33c1f6e71b",
      "name": "Shane David Wahlberg",
      "email": "shanedwahl@gmail.com"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
c421079 (HEAD -> labreport, origin/labreport) your commit and reference @trevordbunch in the message
94babae (origin/purelab, origin/HEAD, purelab) Merge pull request #59 from JeffSinsel/purelab
2e92bd8 Fixed typos and links in markdown files
fa4fc85 Update Instructions
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
- The accompanying diagram of what my feature branch precisely and conceptually represents...

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  

.circleci/config.yml is making a new branch and merges it into a new folder for you to use. 

- What do the various sections on the config file do?  

The various sections on the config allow allow the user to do Spin Up the Environment, Preparing environment variables, Checkout code, Checking for package.json, Determine locfile, Restoring cache, Installing NPM packages, Saving cache, and Run NPM Tests.
   

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  

When a CI build is successful, this means that the build is meets the requirements to move foward. Philsophically, it was grown and become the new normal and circleci runs it as a baseline.     

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  


   

# Step 6: Merging the feature branch
* The output of my git commit log
```
e92d7a2 (HEAD -> purelab) Merge branch 'labreport' into purelab
eabc145 (origin/purelab, origin/circleci-project-setup, origin/HEAD, circleci-project-setup) Add .circleci/config.yml
c421079 (origin/labreport, labreport) your commit and reference @trevordbunch in the message
94babae (upstream/purelab, upstream/HEAD) Merge pull request #59 from JeffSinsel/purelab
2e92bd8 Fixed typos and links in markdown files
fa4fc85 Update Instructions
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
:...skipping...
e92d7a2 (HEAD -> purelab) Merge branch 'labreport' into purelab
eabc145 (origin/purelab, origin/circleci-project-setup, origin/HEAD, circleci-project-setup) Add .circleci/config.yml
c421079 (origin/labreport, labreport) your commit and reference @trevordbunch in the message
94babae (upstream/purelab, upstream/HEAD) Merge pull request #59 from JeffSinsel/purelab
2e92bd8 Fixed typos and links in markdown files
fa4fc85 Update Instructions
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
:
```

* A screenshot of the _Jobs_ list in CircleCI
![CircleCI Success](../assets/jobsproofForbunch.PNG)

# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._



# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
