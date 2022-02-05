# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Garrett Nissley  
**GitHub Handle:** ggn10  
**Repository:** [ggn10/cis411  ](https://github.com/ggn10/cis411_lab1_CI) 
___

# Step 1: Fork this repository
- The URL of my forked repository: [ggn10/cis411](https://github.com/ggn10/cis411_lab1_CI)
- Diagram of Forked Repository Relationship:
![Forked Repo Diagram](/assets/ForkedRepoDiagram.png)

# Step 2: Clone your forked repository from the command line  
- My local file directory is: C:\Users\garre\cis411_lab1_CI 
- The command to navigate to the directory when I open up the command line is: cd C:\Users\garre\cis411_lab1_CI 

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "bd3dcc2f-6bac-452a-88e6-dba6330cb2af",
      "name": "Garrett Nissley",
      "email": "gn1166@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log:
```
    C:\Users\garre\cis411_lab1_CI\labreports>git log --oneline
    9e4fe83 (HEAD -> labreport, origin/labreport) Changes
    ba2a85a Adding forked repo diagram
    048e491 Commiting Lab report
```
- Diagram of Feature Branch and Main Branch Relationship:
![Feature Branch Diagram](/assets/FeatureBranchDiagram.png)

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  
The config.yml file orchestrates the entire CI/CD process of the project. It defines the entire pipeline fo the project and adapts to the different needs of specific projects. A CircleCI pipeline is the full set of processes that run when work is done on the project. The pipeline coordinates jobs and defines workflow.

- What do the various sections on the config file do?  
  - Jobs are the starting points of the config. They are a collection of steps, which run commands/scripts as required. The executor declared is a docker along with the specified image for the primary container.
  - Steps are collection of executable commands required to complete you job. The 'checkout' step checks out the source code for the specific job.
  - Caches store non-vital data the help run jobs faster. They can be saved and restored for ease of use.

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
When a CI build is successful, it means that the build was built in a way to deliver working software into the hands of the user in the quickest fashion. This is done through the process of building, testing, and releasing software efficiently. Practically, this build is bug-free and functional. 

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  
In order to make this project ready for delivery, I would figure out how this project/code is going to be delivered to the users. We have integrated the code correctly using circleCI. Now, we need to deliver the changes to the user.

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