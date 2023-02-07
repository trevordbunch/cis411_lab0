# Lab Report: Continuous Integration
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Emily Baldwin  
**GitHub Handle:** ebaldwin2023  
**Repository:** https://github.com/ebaldwin2023/cis411_lab1_CI  
___

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/ebaldwin2023/cis411_lab1_CI
- The accompanying diagram of what my fork precisely and conceptually represents...https://docs.google.com/drawings/d/1XOT4JFILcNnQMyCizVaZdWpZA9bCif8XZD35shhLuR0/edit?usp=sharing
  

# Step 2: Clone your forked repository from the command line  
- My local file directory is...
- The command to navigate to the directory when I open up the command line is...

# Step 3: Run the application locally
- My GraphQL response from adding myself as an account on the test project
``` json
{
  "data": {
    "mutateAccount": {
      "id": "131f402b-11c1-4b33-86d8-dca678540b34",
      "name": "Emily Anderson Baldwin",
      "email": "anderson.emily1114@gmail.com"
    }
  }
}
```

# Step 4: Creating a feature branch
- The output of my git commit log
```
e9b88e5 (HEAD -> labreport, origin/labreport) your commit and reference @trevordbunch in the message
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
47e83cd Add images to 
```

- The accompanying diagram of what my feature branch precisely and conceptually represents...
  https://docs.google.com/drawings/d/1gs3mtx6IvPbM-MoGxO0uPrA9xrUJKBXmLjhVCWPeRro/edit?usp=sharing


# Step 5: Setup a Continuous Integration configuration
- What is the .circleci/config.yml doing?  

```
From my understanding, the .circleci/config.yml is creating a file inside of the 
.circleci directory. This directory is held within my main lab directory. And the 
file within it, the config.yml file, is the configuration and start up file that needs
to be held within it. This file basically sets up the project with circleCI. This allows
all and any changes to be pushed and shown in the circleCI account that I created at the 
beginning.
```


- What do the various sections on the config file do?  
  
```
The 2 sections that I am seeing on the config file are pretty important to the overall process.
The first section creates a job that can be "called on" later or at any point when you are working.
For instance, this first job in the config file makes a case where you can simply write a command
that causes "Hello" to be written. There are more steps that can be taken to have more jobs, or
you can also write more jobs to this section. Basically, this section creates jobs that can be called
upon at a later time and they will "run" something.

The second section in the config file has to do with workflows. From my understanding, workflows are
higher than jobs. For instance, a workflow can have several jobs within it. In our example in the workflow,
the job that is within the workflow is the hello job that we discovered in the first section of the config
file. In short, this section serves to create workflows, which are used to carry out job(s).
```

- When a CI build is successful, what does that philosophically and practically/precisely indicate about the build? 

```
When a CI build is successful, this indicates that your build is successfully getting adapted to changes that 
are occuring in it. For instance, if I were to add jobs or workflows within a document, and the CI
is successful, then that means that the project is successfully getting updated with whatever
it should be updated with.
``` 
   

- If you were to take the next step and ready this project for Continuous Delivery, what additional changes might you make in this configuration (conceptual, not code)?  

```
The changes that I would want to make in code before CD would be to test everything several times.
I would also want to make sure through the tests that everything looks right from
the code standpoint, but also from the final product look. I would probably create a test
environment and deliver it there before I delivered it publicly. This way I could ensure that
the code looks good on the front end.
```

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

https://docs.google.com/document/d/1MyP1RLZKueGYiRS6wQSOndG6l67dbHXXN_DZaGUqehc/edit?usp=sharing



# Step 7: Submitting a Pull Request
_Remember to reference at least one other student in the PR content via their GitHub handle._


