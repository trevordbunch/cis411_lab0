# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Wade Buhr  
**GitHub Handle:** wadebuhr  
**Repository:** [My Repository](https://github.com/wadebuhr/cis411_lab1_CI) 
___

# Step 1: Fork this repository
- The URL of my forked repository: [My Repository](https://github.com/wadebuhr/cis411_lab1_CI)
- The accompanying diagram of what my fork precisely and conceptually represents...
- ![Use Case](https://docs.google.com/drawings/d/e/2PACX-1vT1UQ2wunBIljyJ-u3DXaBvLQG3M-n3UwWUI-3tAJL_e756hUoP87uJDNseFzNoIPLKd_vJb3WvFrc-/pub?w=960&h=720)

# Step 2: Clone your forked repository from the command line  
- My local file directory is... ~/documents/Git/cis411_lab1_CI
- The command to navigate to the directory when I open up the command line is... cd /documents/Git/cis411_lab1_CI

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "5c345bb5-0c54-44ae-8e57-f5f00b0eddbb",
      "name": "Wade Buhr",
      "email": "wb1206@messiah.edu"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
1cad5c6 (HEAD -> labreport, origin/labreport) I updated step 2
87a096a I updated step 1 and my name @trevorbunch

```
- The accompanying diagram of what my feature branch precisely and conceptually represents...
- ![Use Case](https://docs.google.com/drawings/d/e/2PACX-1vQy-mtPkgqkwyefgdCWCPIH7cjR1aQOubEyIlNbVxO5Lh1o9C42HJipZqaEuQNrhMiswT0qhr9tjfaT/pub?w=960&h=720)

# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  
  
  The config file is the main part of connecting CircleCI to my project. It is written in YAML, a subset of JSON. It contains all the settings needed to deploy our cluster, but you can add more configurations for what works best in the project at hand.


- What do the various sections on the config file do?  
  
  From what I can gather, the .circleci/config.yml file first starts off withe the latest version of the CircleCI we are using. Next, the configuration needs a job to run, and an execution environment for that job to run in. Jobs are a collection of steps which are executed as a unit. We then added the docker execution environment to our job. The image conatins necessary tools to operate a build on CircleCI. We then added steps to the job, and asked it so say "Hello, World." Then we had to invoke jobs via workflows, which are a set of rules defining a collection of jobs and their run order.
   

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build?  
   
  A successful CI build means that the new code changes were built, tested, and merged to a shared repository. 


- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  
   
  Some additional changes I would add would be, to compile the new or changed code. Perform some unit tests, analyze the code. We could then add in an automated acceptance test. Have some integration/API tests, smoke test, and regression tests.

# Step 6: Merging the feature branch
* The output of my git commit log
```
wadeb@Wades-Laptop MINGW64 ~/documents/Git/cis411_lab1_CI/.circleci (labreport)
$ git log --oneline
932421a (HEAD -> labreport, origin/labreport) Updated question 3 and 4 of step 5
fa385fb Updated question 2 of step 5
dbcec42 Updated question 1 of step 5. Also the last commit updated both steps 3 and 4.
49a2830 Updated step 3
1cad5c6 I updated step 2
87a096a I updated step 1 and my name @trevorbunch

```

* A screenshot of the _Jobs_ list in CircleCI
![CircleCI Success](https://docs.google.com/drawings/d/e/2PACX-1vTOkHLJKwe3P_Q6MhObuBMVL8xdLktbOIe0R_Z_88YXKBiMvF2d5vk8gpEclurEc5yNONGtpSlqy5Lt/pub?w=960&h=720)

# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._



# Step 8: [EXTRA CREDIT] Augment the core project
PR reference in the report to one of the following:
1. Add one or more unit tests to the core assignment project. 
2. Configure the CircleCI config.yml to automatically build a Docker image of the project.
3. Configure an automatic deployment of the successful CircleCI build to an Amazon EC2 instance.
