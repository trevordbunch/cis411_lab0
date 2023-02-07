# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Timothy Comerford 
**GitHub Handle:** TComerford1972  
**Repository:** [Tim's Forked Repository](https://github.com/TComerford1972/cis411_lab1_CI.git)
___

# Step 1: Fork this repository
- The URL of my forked repository: [Forked Repository URL](https://github.com/TComerford1972/cis411_lab1_CI/blob/purelab/assets/Forked%20Repository.jpg)
- The accompanying diagram of what my fork precisely and conceptually represents...
- ![Forked Repository Diagram](https://github.com/TComerford1972/cis411_lab1_CI/blob/purelab/assets/Forked%20Repository.jpg)
Credit: By Tim Comerford

# Step 2: Clone your forked repository from the command line  
- My local file directory is C:\Users\Tim\Documents\GitHub
- git clone https://github.com/TComerford1972/cis411_lab1_CI.git

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "5128c0f4-c0c1-4c20-b0a0-d916f18d01bd",
      "name": "Timothy J.Comerford",
      "email": "tc1280@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch

The output of my git commit log
```python
- Switched to a new branch 'labreport'
- C:\Users\Tim\Documents\GitHub\cis411_lab1_CI>git log  --oneline
- 58b6cf2 (HEAD -> labreport, origin/labreport) your commit and reference @trevordbunch in the message
- 94babae (upstream/purelab, origin/purelab, origin/HEAD, purelab) Merge pull request #59 from JeffSinsel/purelab
- 2e92bd8 Fixed typos and links in markdown files
- fa4fc85 Update Instructions
- f8513e0 Update Node links to Instructions
- d4f22eb Update repo branch names
- 0e3ae4c Reset purelab
- 050b420 Merge pull request #2 from trevordbunch/main
- 1fe415c Merge pull request #1 from trevordbunch/labreport
- 13e571f Update Lab readme, instructions and templates
- eafe253 Adjust submitting instructions
- 47e83cd Add images to LabReport0
- ec18770 Add Images
- dbf826a Answer Step 4
- a9c1de6 Complete Step 1, 2 and 3 of LAB_TREVORDBUNCH
- 1ead543 remove LAB.md
- 8c38613 Initial commit of labreport with @tangollama
- dabceca Merge pull request #24 from tangollama/circleci
- a4096db Create README.md
- 2f01bf4 Update LAB_INSTRUCTIONS.md
- 347bd50 Update LAB_INSTRUCTIONS.md
- 7aaa9f3 Update LAB_INSTRUCTIONS.md
- 37393ae Bug fixed
- 1949d2a Update LAB_INSTRUCTIONS.md
- d36ad90 Update LAB.md
- 59ef18a Update LAB_INSTRUCTIONS.md
- 37be3c8 Update LAB_INSTRUCTIONS.md
- 97da547 Update LAB.md
- 0bd6244 updated Step 0 title
- 4562cd8 added npm and node install repreq
- 255051e adding template
- 13a09b7 Adding the LAB.md and correcting some instructions.
- d2ddea5 Version 0.0.1 of the lab isntructions
- ab312fc more progress
- 62fb0a5 more progress
- fe1937b more in the lab instructions
- 3e807fb first section
- 9ae6b83 remove LAB.md
- e429c1a lab instructions
- ce1fcea circleci default config
- 80bbdbb circleci default config
- 968099e remove test db
- 7362cd1 working
- 44ce6ae Initial commit
```

![Feature Branch Concept](https://github.com/TComerford1972/cis411_lab1_CI/blob/purelab/assets/Feature%20Branch.drawio.png)
```

# Step 5: Setup a Continuous Integration configuration

- What is the .circleci/config.yml doing? It is code for running a "Hello World!" program.  


- What do the various sections on the config file do?  
   
    jobs: Define a job to be invoked later in a workflow.
    
    docker: Specify the execution environment. 
    
    steps:  Add steps to the job.
    
    workflows: Invoke jobs via workflows.
 

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  When the CI build is successful it means that the code being tested should be able to be integrated into a program. As far as i can tell this is showing what evironmental obstacles the code will encounter and whether it will be able to function in those environments.
   

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  I would add in more environments and streamline tests based off of potential user environments and interactions.
   

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
![CircleCI Success](https://github.com/TComerford1972/cis411_lab1_CI/blob/purelab/assets/circleci_success.png)

# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._



# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
