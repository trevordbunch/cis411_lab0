# Lab Report: Continuous Integration
__
**Course:** CIS 411, Spring 2023
**Instructor(s):** [Trevor Bunch] (https://github.com/trevordbunch)
**Name:** Mitch DiFante  
**GitHub Handle:** mitchdifante
**Repository:** https://github.com/mitchdifante/cis411_lab1_CI.git
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/mitchdifante/cis411_lab1_CI.git
- The accompanying diagram of what my fork precisely and conceptually represents... https://docs.google.com/drawings/d/17u3AudQgTsSWC9_RnNExWSSZxokIdsp7_WamQm5nrXA/edit?usp=sharing

# Step 2: Clone your forked repository from the command line  
- My local file directory is... cis411_lab1_CI
- The command to navigate to the directory when I open up the command line is... Done through GitHub Desktop.
# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "",
      "name": "MITCH DIFANTE",
      "email": "md1430@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
- dc440ae
- c23c2a5
- 4f5a8ed
```
- The accompanying diagram of what my feature branch precisely and conceptually represents... https://docs.google.com/drawings/d/1DLrVMUR8OTO2an6CSotHWQTj5rNhFErvjyh_mM-6Gtk/edit?usp=sharing

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?

- The .circleci/config.yml is holding all of the various configuation settings within the cluster of code in order to deploy the cluster.


- What do the various sections on the config file do?  

- The various sections of the config file define the parameters, and enforces the options selected by the user.
   

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  

- It means that the project will contain very little to no integration errors before deployed. This allows for the commands to run precisely without error and can lead to a project being created and full confidence in the finished product.
   

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  
  
  - The project would be done more precisely and multiple trials would be run in order to make sure that the project is running with zero integration errors. Additionally, I would send this project to numerous other group members to make sure that all the code runs properly for them as well.
   

# Step 6: Merging the feature branch
* The output of my git commit log

- dc440ae (Addition of diagrams/ creation of outline for lab report)
- c23c2a5 (Completion of steps 1, 2, 5)
- 4f5a8ed (Completion of step 4)
- 



* A screenshot of the _Jobs_ list in CircleCI


# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._

