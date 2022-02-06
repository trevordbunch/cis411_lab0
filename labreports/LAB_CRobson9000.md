# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Colin Robson  
**GitHub Handle:** @CRobson9000  
**Repository:** [Lab Repo](https://github.com/CRobson9000/cis411_lab1_CI/tree/purelab)  
___

# Step 1: Fork this repository
- The URL of my forked repository: [click here](https://github.com/CRobson9000/cis411_lab1_CI/tree/purelab)
- Diagram:

# Step 2: Clone your forked repository from the command line  
- My local file directory is: C:\Users\cjrtw\Documents\College\Junior Year\Spring\Systems Analysis and Design Concepts\circleCILab\cis411_lab1_CI
- Command to switch to the diretory to the repo: cd cis411_lab1_CI

# Step 3: Run the application locally
- GraphQL response to adding myself as an account on the test project:

``` json
{
  "data": {
    "mutateAccount": {
      "id": "6d43b37b-82a5-4f46-a3d8-48e85eee1101",
      "name": "COLIN ROBSON",
      "email": "cjrtwin0901@gmail.com"
    }
  }
}
```
# Step 4: Creating a feature branch
- Git log after first commit:
```json
f223c9a (HEAD -> labreport, origin/labreport) first commit @trevordbunch
7490dcb (origin/main, origin/HEAD, main) Add Links to Node in Instructions
ecaaa53 Update branch terminology
c552213 Merge pull request #3 from hallienicholas/main
78ede9f Corrected error
1fe415c Merge pull request #1 from trevordbunch/labreport
13e571f Update Lab readme, instructions and templates
eafe253 Adjust submitting instructions
47e83cd Add images to LabReport

```
- Diagram that represents the relationship of the feature branch

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  
  The circleci/config.yml file orchestrates the delievry of the software from build to deployment by analyzing and testing your code so that it can be ready to be delivered to users.  It acts as sort of the gate keeper between development and delivery because it makes sure everything is set up right and is working properly.  

- What do the various sections on the config file do?  
   * The version command specifies which version it should run and it also allows it to see if there are any deprecated commands that don't work for this version of Circle CI.
   * The say-hello line specifies the name of the job
   * The jobs command allows the programmer to program what jobs it wants circle ci to complete in order for it to pass. In the example code, it creates an image for the software docker which specifies what environment you want to run this code in, then it specifies the steps you want to take in this environment.  In this case, the program will checkout the code with github, then the run command prints out "Hello World" to shell.  In circle ci, this step is named "Say hello" as set by the "name" keyword.    
   * The workflows section of this code allows you to create, name, and execute workflows, which are just groups of jobs.  You can specify triggers, and say what jobs you want to run together by using a workflow.  In this case, the workflow is named "say-hello-workflow" and it runs the job "say-hello" which is defined above it.  

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
  * When the CI build is successful, it means that it completed all of the jobs without error.  If the jobs are programmed correctly and precisely, this means that the code has passed all of the tests it needs to in order for it to be delivered to the masses or merged with the main branch of code.  Using the analogy from before, it means that the gatekeeper has agreed to let it pass because it completed all of its tasks/jobs.  

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  
   
  * You could have Circle CI merge your branch automatically after it passed the test so that the whole process is streamlined and there's less work required by an actual human  You could also have it send a request to someone for the merge so that it could be checked over one last time before it's view as fully complete.  
# Step 6: Merging the feature branch
* The output of my git commit log
```
f223c9a (HEAD -> labreport, origin/labreport) first commit @trevordbunch
7490dcb (origin/main, origin/HEAD, main) Add Links to Node in Instructions
ecaaa53 Update branch terminology
c552213 Merge pull request #3 from hallienicholas/main
78ede9f Corrected error
1fe415c Merge pull request #1 from trevordbunch/labreport
13e571f Update Lab readme, instructions and templates
eafe253 Adjust submitting instructions
47e83cd Add images to LabReport

```

* A screenshot of the _Jobs_ list in CircleCI
![CircleCI Success](../assets/circleCIsnapShot.JPG)

# Step 7: Submitting a Pull Request
Referenced Tyler Regitz in my pull request

# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
