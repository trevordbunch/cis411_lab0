# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Gloria Houngbeke 
**GitHub Handle:** GlorKemH
**Repository:**  cis411_lab1_CI
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/GlorKemH/cis411_lab1_CI.git

- The accompanying diagram of what my fork precisely and conceptually represents...
 ![test](../assets/Fork Diagram\) 



# Step 2: Clone your forked repository from the command line  
- /Users/gloriahoungbeke/Desktop/Ghelp
- The command to navigate to the directory when I open up the command line is cd

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json

{
  "data": {
    "mutateAccount": {
      "id": "afcfaf11-9f75-4efa-9471-621443d168f6",
      "name": "Kemi Gloria Houngbeke",
      "email": "gh1241@messiah.edu"
    }
  }
}

# Step 4: Creating a feature branch
- The output of my git commit log
```
Insert the logs here.
```
- The accompanying diagram of what my feature branch precisely and conceptually represents...

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  

It contains all the configuration setting. It defines an entire pipeline for your project


- What do the various sections on the config file do?  
   
   The first part is the shell part. You can setup your build and execute it as a shell command.
   The second part of the configuration section is the information collection then the preparation to start the build.



- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
   
   It means that the build is ready and secured to move on. The build has fufilled all aspected of the steps needed before it is deployed. The succesful process makes the working software effiecient and easier for users

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  
   I think I would make it clear within my process the standards of CI build and the expectation

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

# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._



# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
