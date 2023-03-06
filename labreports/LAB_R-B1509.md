# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Rachel Beattie
**GitHub Handle:** [Your GitHub Handle](https://github.com/R-B1509)
**Repository:** [Your Forked Repository](https://github.com/R-B1509/cis411_lab1_CI) 
___

# Step 1: Fork this repository
- The URL of my forked repository: (https://github.com/R-B1509/cis411_lab1_CI)
- The accompanying diagram of what my fork precisely and conceptually represents...
  [Diagram] (https://app.diagrams.net/#G1TCg8AHvt2hiXmjmDDsxAyjj1C1i3SZ1U)
# Step 2: Clone your forked repository from the command line  
- My local file directory is C:\Users\wolf3\GitHubFiles\cis411_lab1_CI
- The command to navigate to the directory when I open up the command line is...<br>
cd GitHubFiles\cis411_lab1_CI

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "5c345bb5-0c54-44ae-8e57-f5f00b0eddbb",
      "name": "TREVOR BUNCH",
      "email": "tbunch@messiah.edu"
    }
  }
}
```

```
{
  "data": {
    "mutateAccount": {
      "id": "aa781253-bc60-4b58-b8f7-3f0b262adf25",
      "name": "Rachel Beattie",
      "email": "rb1509@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log

```
{ 
811fa99 (HEAD -> main, labreport) changed link to image, edited question answers, more Markdown formate edits, added image
ef1d6e0 changed link to image, edited question answers, more Markdown formate edits
e4093d1 (origin/labreport) edited formating, redid step 3's run
45de295 Added Repository and Github Handle, as well as Name belatedly
77cc2e0 (main) Step6
9936e52 Merge pull request #62 from LAHardman/typo
5b9c31a Fixed typos
94babae Merge pull request #59 from JeffSinsel/purelab
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
}

```

- The accompanying diagram of what my feature branch precisely and conceptually represents...<br>

 ![Branch Simplified Diagram](https://app.diagrams.net/#G1JtBDoP-EKBdtOal41TmPBIQ5gjORYVXK)

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  
  <p> It sets up the framework for the code's syntax, where each job is defined than run in the workflow, the orbs set up and run their framework individually from each other so they don't need to be start up and run as separate tasks. Jobs are defined in the framework's set up after the config file is run, then they are executed in the workflow
  </p>

- What do the various sections of the config file do?  
  <p> Orbs runs separate tasks after setting themselves up
  Workflow runs through blocks of codes known as "jobs", of which there is node/test being run. This set up is used after npm start is run.
  </p>
- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
  <p> That philosophically the build doesn't crash against itself. Everything was run in a manner which didn't pull from something that didn't exist. Precisely the tasks that are run do not contradict each other and jobs are not missing aspects that are running dependent on another file/configuration. The build's set up was created before the the code meant to run was executed.
  </p>
- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  
  <p> Set up the jobs then in the workflow exclude the jobs of latter variations until they are complete.
  </p>

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
[Default Setup](../assets/circleci_jobs_success.png)

# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._



# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
