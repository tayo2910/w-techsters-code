/*
Factory Method
Define an interface for creating an object, but let subclasses decide which class 
to instantiate. Factory Method lets a class defer instantiation to subclasses.

Consider the case of a hiring manager. 
It is impossible for one person to interview for each of the positions. 
Based on the job opening, 
she has to decide and delegate the interview steps to different people.

 This demonstrates the Factory Method design pattern, 
 where subclasses (DevelopmentManager and MarketingManager) 
 implement the makeInterviewer method to instantiate and 
 return specific interviewer objects (Developer and CommunityExecutive, respectively).

The takeInterview method in the HiringManager class 
utilizes the makeInterviewer method to create the appropriate interviewer object based on the subclass. 
The askQuestions method of the interviewer objects is then called to conduct the interview.
 */

class Developer {
    askQuestions() {
        console.log("Asking about design patterns!")
    }
}

class CommunityExecutive {
    askQuestions(){
        console.log("Asking about community building!!")
    }
}

class HiringManager {
    takeInterview() {
        const interviewer = this.makeInterviewer()
        interviewer.askQuestions()
    }
}

class DevelopmentManager extends HiringManager {
    makeInterviewer() {
        return new Developer()
    }
}

class MarketingManager extends HiringManager {
    makeInterviewer() {
        return new CommunityExecutive()
    }
}

const devManager = new DevelopmentManager()
devManager.takeInterview()

const marketingManager = new MarketingManager()
marketingManager.takeInterview()