
<h1 align=center>Final Project</h1>

Congratulations! You have made it to the final stretch of your journey here at Kura Labs. Take a second to look back and see how far you've come!

Introducing the Final Project! This project will be a culmination of all of your efforts throughout Kura and combine many of the DevOps techonologies you have learned throughout the last few months.

## High Level Requirements

1. **Application** - Flask app is recommended (Python), can also choose NodeJS
2. **Containerization** - some element of using containers whether Docker or k8s
3. **Infrastructure as Code (IaC)** - with Terraform or CloudFormation
4. **CI/CD Pipeline** - Jenkins, CircleCI, GitHub Actions, GitLab, CodePipeline etc.
5. **Monitoring & Alerting** - Cloudwatch logging for the service, trigger some actionable message to email, Slack channel, SMS etc. → using a Cloudwatch alarm 
6. **Documentation** - Project Overview, choice of technology, how to operate the system
7. **Systems Design** - Clean drawn network architecture diagram using draw.io or Lucidchart

Your project *must* contain all of the 7 components above but the specific technologies you use and how you use them is up to your team to decide. The guidelines above are meant as possible technology choices but not meant to be an exhaustive list. Discuss with your team what you would want to include from each category and start building!

## Who Am I Working With?

Let's take some time to introduce everyone to their respective teams:
  
  * **Team 1:** Alex, Cleon, Franklin, Juan
  * **Team 2:** Andrew, Darren, Denzel, Xavier
  * **Team 3:** Dilobar, Kawang, Ricardo
  * **Team 4:** Ibrahima, Kenneth, Nabeel
  * **Team 5:** Bishajit, Jespson, Levy , Maisha
  * **Team 6:** Hector, Ian, Jodi, Kohiin
  * **Team 7:** Brittney, Mohamed, Sai, Zach

## How Should Our Team Work Together?

Your team is expected to meet daily (on weekdays) and conduct a standup, mimicing what your team would be doing in an agile DevOps role. Tasks will be broken down into discrete, actionable items using GitHub projects and work will be assigned to each team member. We will go over this process as a class in the coming weeks.

## Project Deliverables

The Final Project is divided into 6 deliverables, each building on top of skills learned previously to scaffold students' learning over the entire course.

### Part 1: Agree on a Project & Plan it Out

Pitch us on potential ideas for an end-to-end DevOps project. Think of topics you’re passionate about, knowledge you’re familiar with, or problems relevant to to industries you’d like to work with.

- **Requirements:** Come up with a few project ideas, including a specific app, potential technologies for each category, as well as some sample code. Remember, if you can’t find an app, you can’t start on your project.
- **Deliverable:** Choose a specific app to work on and submit a rough draft of systems design brainstorming (could be drawn out on paper at this stage)

### Part 2: Deploy the App & Start Iterating

Use your newfound skills to kickstart your project by deploying the app in one of the ways we learned in class. At this stage, it could be using a basic deployment method – just focus on getting it out there for the world to see.

Create a shared repo for the team. Ensure all members have access to push changes to the repo. How does a deployment work? What does the flow look like? What tools are involved? Finally, deploy the app. It doesn't have to be fancy yet... that will come later.

- **Requirements:** App is deployed, rough draft of physical design is due
- **Deliverable:** App is demoable, a more detailed overview of how various technologies will work together (physical design) is due


### Part 3: Create a Pipeline

Now that you have your app deployed and have an idea of how the various technologies can work together, let's add a CI/CD pipeline to automate the process of build, test, deploy. Use your favorite CI/CD tool (examples above) to integrate your processes into a single system.

- **Requirements:** CI/CD pipeline is created using a tool of your choice and a draft of the pipeline design is due. The objective is that the previous deployment is now automated based on a certain trigger, for example pushes to a GitHub repo trigger a build, test, deploy
- **Deliverable:** Code for a basic CI/CD pipeline is available and the CI/CD process is demoable


### Part 4: Let's Make it Fancy: Containers & IaC

Now that we have a basic pipeline going, let's take some time to add some bells and whistles. If the app is not Dockerized already, this is the time to build a Dockerfile and add it to the pipeline. Figure out what pieces of infrastructure you can rewrite as IaC. Create a runbook or describe the process for running the IaC.

- **Requirements:** App is containerized and is added into the pipeline, Infrastructure as Code is written to replace some of the existing infrastructure that was deployed manually
- **Deliverable:** Code for containerizing the app is available (Dockerfile), Infrastructure as Code is added (Terraform or CloudFormation)

### Part 5: Define Operational Procedures, Monitoring & Alerting

Let's take a look back on your project and document processes that are crucial to its operation. If you were a new team member that needed to operate the system, what would you need to know? Create a runbook for common commands and how to run the stack as if you knew nothing.

If an error is introduced into the system, how would an engineer know? Is there alerting on errors? How can you identify the bug and address it? Create a monitoring and alerting system and manually inject an error into the stack. Trace back the error and explain how it would an engineer would be alerted and solve the root cause of the issue.

- **Requirements:** Create documentation for operating the system, add meaningful logging messages, create a system for monitoring and alerting
- **Deliverable:** "Runbook" documentation available, demo of monitoring and alerting system

### Part 6: Present Your Project

With your team, create a 30 minute presentation, based on a slide deck, that showcases the most important aspects of your project. Start at a high level and give an overview the system. Discuss why you chose each piece of technology. Then dive in and show a demo of the system in operation. Explain the steps of the CI/CD pipeline and show how the app is deployed. Show what happens if an error occurs. Give an overview of the infrastructure. Explain your thought process and how the project evolved.

- **Requirements:** Convey your goals, limits/assumptions, methods and their justification, findings, and conclusions. Define technical terms. Include graphics and visualizations.
- **Deliverable:** Slide deck containing presentation as well as a demo showcasing the highlights of the stack in operation


## Approximate Due Dates

Assignment | Date 
------- | --------- |
Part 1 | 12/15
Part 2 | 12/21
Part 3 | 12/30
Part 4 | 1/6
Part 5 | 1/13
Part 6 | TBD
